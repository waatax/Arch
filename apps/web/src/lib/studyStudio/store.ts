'use client';
import { useSyncExternalStore } from 'react';
import { type AnswerRecord, validDay } from './engine';

export interface StudioState {
  answers: Record<string, AnswerRecord>;
  selected: string[];
  reviewed: string[];
  examDate: string;
  planStart: string;
  minutes: number;
  version: string;
  scopeNote: string;
  storageError: boolean;
}
const KEY = 'arch-study-studio-v1';
const initial: StudioState = { answers: {}, selected: [], reviewed: [], examDate: '', planStart: '', minutes: 20, version: '', scopeNote: '', storageError: false };
let state = initial;
let initialized = false;
const listeners = new Set<() => void>();
function decode(raw: string | null): StudioState {
  if (!raw) return initial;
  const p = JSON.parse(raw);
  if (!p || typeof p !== 'object') return initial;
  const answers: Record<string, AnswerRecord> = {};
  if (p.answers && typeof p.answers === 'object') for (const [id, value] of Object.entries(p.answers)) {
    const v = value as AnswerRecord;
    if (/^[a-z0-9-]+:\d+$/.test(id) && v && typeof v.correct === 'boolean' && typeof v.earned === 'boolean' && Number.isInteger(v.attempts) && v.attempts > 0 && Number.isInteger(v.streak) && v.streak >= 0 && validDay(v.lastDay) && validDay(v.due)) answers[id] = v;
  }
  const stringList = (v: unknown) => Array.isArray(v) ? [...new Set(v.filter((s): s is string => typeof s === 'string' && s.length < 160))] : [];
  return { ...initial, answers, selected: stringList(p.selected), reviewed: stringList(p.reviewed), examDate: validDay(p.examDate) ? p.examDate : '', planStart: validDay(p.planStart) ? p.planStart : '', minutes: [10, 20, 40, 60].includes(p.minutes) ? p.minutes : 20, version: typeof p.version === 'string' ? p.version.slice(0, 120) : '', scopeNote: typeof p.scopeNote === 'string' ? p.scopeNote.slice(0, 1000) : '' };
}
function read() {
  try { state = decode(localStorage.getItem(KEY)); } catch { state = { ...state, storageError: true }; }
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!initialized) { initialized = true; read(); }
  const external = (event: StorageEvent) => { if (event.key === KEY || event.key === null) { read(); listeners.forEach((fn) => fn()); } };
  window.addEventListener('storage', external);
  return () => { listeners.delete(listener); window.removeEventListener('storage', external); };
}
export function updateStudio(update: (s: StudioState) => StudioState) {
  state = update(state);
  try { localStorage.setItem(KEY, JSON.stringify({ ...state, storageError: false })); state = { ...state, storageError: false }; }
  catch { state = { ...state, storageError: true }; }
  listeners.forEach((listener) => listener());
}
export function clearStudio() {
  state = initial;
  try { localStorage.removeItem(KEY); } catch { state = { ...state, storageError: true }; }
  listeners.forEach((listener) => listener());
}
export const useStudio = () => useSyncExternalStore(subscribe, () => state, () => initial);

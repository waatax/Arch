import { mechanicsScenes } from './mechanicsScenes';
import { materialsScenes } from './materialsScenes';
import { surveyingScenes } from './surveyingScenes';
import { draftingScenes } from './draftingScenes';
import { mathScenes } from './mathScenes';
import { scienceScenes } from './scienceScenes';
import { languageScenes } from './languageScenes';
import { socialExtensionsScenes } from './socialExtensionsScenes';
import type { SceneRenderer } from './scenePrimitives';

export type { SceneMarkers, SceneRenderer } from './scenePrimitives';

export const TOPIC_INFOGRAPHIC_SCENES: Record<string, SceneRenderer> = {
  ...mechanicsScenes,
  ...materialsScenes,
  ...surveyingScenes,
  ...draftingScenes,
  ...mathScenes,
  ...scienceScenes,
  ...languageScenes,
  ...socialExtensionsScenes,
};

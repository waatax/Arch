const choiceOrder = ['A', 'B', 'C', 'D'] as const;

/** TCTE single-choice errata such as CD accept either option; a bonus item is not evidence of mastery. */
export function isOfficialSingleChoiceCorrect(answer: string, selected?: string | null) {
  return answer !== '送分' && /^[A-D]$/.test(selected ?? '') && normalizedChoices(answer).includes(selected!);
}

export function normalizedChoices(value?: string | null) {
  if (!value) return '';
  return choiceOrder.filter((choice) => value.toUpperCase().includes(choice)).join('');
}

export function isMultipleChoiceAnswer(answer: string) {
  return normalizedChoices(answer).length > 1;
}

export function isAnswerCorrect(answer: string, selected?: string | null) {
  if (answer === '送分') return true;
  return normalizedChoices(selected) === normalizedChoices(answer);
}

export function isAnswerChoiceCorrect(answer: string, choice: string) {
  return answer === '送分' || normalizedChoices(answer).includes(choice);
}

export function toggleSelectedChoice(selected: string | undefined, choice: string) {
  const current = normalizedChoices(selected);
  return normalizedChoices(current.includes(choice) ? current.replace(choice, '') : `${current}${choice}`);
}

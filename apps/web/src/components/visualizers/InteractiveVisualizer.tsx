'use client';

import React from 'react';
import MechanicsVisualizer from './MechanicsVisualizer';
import SurveyingVisualizer from './SurveyingVisualizer';
import MaterialsVisualizer from './MaterialsVisualizer';
import DraftingVisualizer from './DraftingVisualizer';
import MathScienceVisualizer from './MathScienceVisualizer';

interface InteractiveVisualizerProps {
  subjectSlug: string;
  topicSlug: string;
}

export default function InteractiveVisualizer({ subjectSlug, topicSlug }: InteractiveVisualizerProps) {
  if (subjectSlug === 'mechanics') {
    return <MechanicsVisualizer topicSlug={topicSlug} />;
  }

  if (subjectSlug === 'surveying') {
    return <SurveyingVisualizer topicSlug={topicSlug} />;
  }

  if (subjectSlug === 'materials') {
    return <MaterialsVisualizer topicSlug={topicSlug} />;
  }

  if (subjectSlug === 'drafting') {
    return <DraftingVisualizer topicSlug={topicSlug} />;
  }

  if (['math-c', 'physics', 'chemistry', 'extensions'].includes(subjectSlug)) {
    return <MathScienceVisualizer topicSlug={topicSlug} />;
  }

  return null;
}

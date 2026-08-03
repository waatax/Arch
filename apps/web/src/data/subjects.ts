import { SubjectData } from './types';

// Professional
import { mechanicsData } from './subjects/mechanics';
import { materialsData } from './subjects/materials';
import { surveyingData } from './subjects/surveying';
import { draftingData } from './subjects/drafting';

// Common
import { chineseData } from './subjects/chinese';
import { englishData } from './subjects/english';
import { mathCData } from './subjects/math-c';

// Sciences
import { physicsData } from './subjects/physics';
import { chemistryData } from './subjects/chemistry';

// Social
import { historyData } from './subjects/history';
import { geographyData } from './subjects/geography';
import { civicsData } from './subjects/civics';

// Extensions
import { extensionsData } from './subjects/extensions';

export const allSubjects: SubjectData[] = [
  mechanicsData,
  materialsData,
  surveyingData,
  draftingData,
  chineseData,
  englishData,
  mathCData,
  physicsData,
  chemistryData,
  historyData,
  geographyData,
  civicsData,
  extensionsData
];

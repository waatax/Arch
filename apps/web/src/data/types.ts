export interface PracticeQuestion {
  question: string;
  difficulty: string;
  steps: string[];
  answer: string;
}

export interface PracticeItem {
  question: string;
  difficulty: string; 
  steps: string[];
  answer: string;
}

export interface TopicContent {
  slug: string;
  title: string;
  desc: string;
  concepts: {
    heading: string;
    body: string;
    steps?: string[];
    formula?: string;
    table?: { headers: string[]; rows: string[][] }; 
  }[];
  practice?: PracticeItem;
  practices?: PracticeItem[];
  status: 'done' | 'draft' | 'stub';
}

export interface SubjectData {
  slug: string;
  title: string;
  category: string;
  color: string;
  topics: TopicContent[];
}

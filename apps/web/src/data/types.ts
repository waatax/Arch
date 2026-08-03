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
  practice?: {
    question: string;
    difficulty: string; 
    steps: string[];
    answer: string;
  };
  status: 'done' | 'draft' | 'stub';
}

export interface SubjectData {
  slug: string;
  title: string;
  category: string;
  color: string;
  topics: TopicContent[];
}

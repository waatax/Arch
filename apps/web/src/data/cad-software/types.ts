export interface ViewportControl {
  action: string;
  keyOrMouse: string;
  tip: string;
}

export interface TenStepSop {
  step: number;
  title: string;
  action: string;
  keyPoint: string;
}

export interface ShortcutItem {
  key: string;
  command: string;
  explanation: string;
  frequency: '必須秒按' | '高頻常用' | '工程利器';
  mnemonic?: string;
  contextModifier?: string;
}

export interface FatalTrap {
  trap: string;
  reason: string;
  solution: string;
}

export interface ProTip {
  title: string;
  description: string;
}

export interface CodeSnippet {
  language: string;
  title: string;
  code: string;
  explanation: string;
}

export interface AdvancedParameter {
  name: string;
  value: string;
  purpose: string;
}

export interface ArchitecturalApplication {
  area: string;
  title: string;
  description: string;
  technicalDetails: string[];
  deliverables: string[];
  deepDivePrinciples?: string[];
  realWorldCase?: string;
  standardCodeRef?: string;
  codeSnippet?: CodeSnippet;
}

export interface IterationCycle {
  round: number;
  badge: string;
  title: string;
  focus: string;
  contentExpansion: string;
  coreTheory: string;
  practicalWalkthrough: string[];
  industryStandardOrCode: string;
  pitfallsAndVerification: string;
  mathematicalFormula?: string;
  advancedParameters?: AdvancedParameter[];
  diagnosticDecisionTree?: string[];
  masteryChecklist?: string[];
  codeSnippet?: CodeSnippet;
}

export interface LearningResource {
  title: string;
  provider: string;
  category: '國家檢定與法規' | '官方原廠教學' | '實務工作流與開放標準' | '學術研討與開放教材';
  url: string;
  description: string;
  badge?: string;
}

export interface CertificationStandard {
  name: string;
  level: string;
  authority: string;
  description: string;
  keyCompetencies: string[];
  officialExamUrl?: string;
}

export interface CadSoftware {
  slug: string;
  name: string;
  englishName: string;
  vendor: string;
  releaseYear: string;
  tag: '電腦繪圖';
  category: string;
  badge: string;
  rating: {
    learningCurve: string;
    industryAdoption: string;
    bimCapability: string;
    drawingOutput: string;
    renderingQuality: string;
  };
  shortDesc: string;
  fullDesc: string;
  officialUrl: string;
  studentLicenseUrl: string;
  docUrl: string;
  communityUrl: string;
  heroMetrics: { label: string; value: string }[];
  learningResources: LearningResource[];
  certificationStandards?: CertificationStandard[];
  architecturalApplications: ArchitecturalApplication[];
  beginnerGuide: {
    introduction: string;
    viewportControls: ViewportControl[];
    tenStepsSop: TenStepSop[];
    shortcuts: ShortcutItem[];
    fatalTraps: FatalTrap[];
    proTips: ProTip[];
  };
  sevenIterations: IterationCycle[];
  industryPipeline: {
    stage: string;
    softwareRole: string;
    fileFormats: { import: string[]; export: string[] };
    collaborationWith: string[];
  };
}

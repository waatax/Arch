PRAGMA foreign_keys = ON;

CREATE TABLE schema_meta (
  version INTEGER PRIMARY KEY,
  applied_at TEXT NOT NULL
);

CREATE TABLE sources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  publisher TEXT,
  source_tier TEXT NOT NULL CHECK (source_tier IN ('official', 'licensed', 'open', 'link-only')),
  license_status TEXT NOT NULL CHECK (license_status IN ('verified', 'restricted', 'unknown')),
  checked_at TEXT NOT NULL,
  next_check_at TEXT
);

CREATE TABLE skills (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  curriculum_year TEXT,
  status TEXT NOT NULL CHECK (status IN ('draft', 'review', 'published', 'retired'))
);

CREATE TABLE questions (
  id TEXT PRIMARY KEY,
  stem TEXT NOT NULL,
  answer_json TEXT NOT NULL,
  explanation TEXT NOT NULL,
  difficulty_b REAL NOT NULL DEFAULT 0,
  source_id TEXT,
  source_page TEXT,
  license_status TEXT NOT NULL,
  reviewed_at TEXT,
  FOREIGN KEY (source_id) REFERENCES sources(id)
);

CREATE TABLE question_skills (
  question_id TEXT NOT NULL,
  skill_id TEXT NOT NULL,
  weight REAL NOT NULL CHECK (weight > 0 AND weight <= 1),
  PRIMARY KEY (question_id, skill_id),
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

CREATE TABLE architecture_cases (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  summary TEXT NOT NULL,
  lenses_json TEXT NOT NULL,
  credits_json TEXT NOT NULL,
  rights_status TEXT NOT NULL,
  source_id TEXT,
  checked_at TEXT NOT NULL,
  FOREIGN KEY (source_id) REFERENCES sources(id)
);

CREATE TABLE case_skills (
  case_id TEXT NOT NULL,
  skill_id TEXT NOT NULL,
  relation TEXT NOT NULL CHECK (relation IN ('hook', 'practice', 'transfer', 'career')),
  PRIMARY KEY (case_id, skill_id, relation),
  FOREIGN KEY (case_id) REFERENCES architecture_cases(id) ON DELETE CASCADE,
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

CREATE VIRTUAL TABLE question_search USING fts5(
  question_id UNINDEXED,
  stem,
  explanation,
  tokenize = 'unicode61'
);

-- 以下資料屬學習者平面，只能建立於使用者裝置，不得進入公開 bundle。
CREATE TABLE learner_attempts (
  id TEXT PRIMARY KEY,
  question_id TEXT NOT NULL,
  answered_at TEXT NOT NULL,
  correct INTEGER NOT NULL CHECK (correct IN (0, 1)),
  response_ms INTEGER,
  hint_level INTEGER NOT NULL DEFAULT 0,
  error_tag TEXT,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE learner_mastery (
  skill_id TEXT PRIMARY KEY,
  strength REAL NOT NULL DEFAULT 0,
  stability REAL NOT NULL DEFAULT 0,
  halflife_stage INTEGER NOT NULL DEFAULT 0,
  due_at TEXT,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

INSERT INTO schema_meta(version, applied_at) VALUES (4, '2026-08-03');

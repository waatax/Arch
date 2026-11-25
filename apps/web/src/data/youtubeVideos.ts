import { allSubjects } from './subjects';
import { getTopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';
import uploadedData from './youtubeUploadedLinks.json';

export interface UploadedYouTubeRecord {
  videoId: string;
  url: string;
  title?: string;
  uploadedAt?: string;
  duration?: string;
}

interface UploadedLinksFile {
  playlistId: string;
  playlistUrl: string;
  playlistTitle: string;
  visibility: string;
  madeForKids: boolean;
  updatedAt: string;
  videos: Record<string, UploadedYouTubeRecord>;
}

const uploadedLinks = uploadedData as UploadedLinksFile;

export const YOUTUBE_PLAYLIST_ID = uploadedLinks.playlistId;
export const YOUTUBE_PLAYLIST_URL = uploadedLinks.playlistUrl;
export const YOUTUBE_PLAYLIST_TITLE = uploadedLinks.playlistTitle;

export interface HighSchoolVideoEntry {
  episodeCode: string;
  subjectSlug: string;
  subjectTitle: string;
  subjectCategory: string;
  topicSlug: string;
  topicTitle: string;
  topicHref: string;
  gradeLevel: number;
  curriculumCode: string;
  realLifeSummary: string;
  whereUsed: string;
  isExtraTcteChapter: boolean;
  youtubeVideoId: string | null;
  youtubeUrl: string | null;
  youtubeEmbedUrl: string | null;
  durationLabel: string;
  playlistUrl: string;
}

export interface SubjectVideoGroup {
  subjectSlug: string;
  subjectTitle: string;
  category: string;
  prefix: string;
  totalCount: number;
  uploadedCount: number;
  extraCount: number;
  episodes: HighSchoolVideoEntry[];
}

const VOCATIONAL_EPISODE_PREFIX: Record<string, string> = {
  mechanics: 'MECH',
  materials: 'MATL',
  surveying: 'SURV',
  drafting: 'DRFT',
  'math-c': 'MC',
  chinese: 'CHIN',
  english: 'ENGL',
  physics: 'PHYS',
  chemistry: 'CHEM',
  history: 'HIST',
  geography: 'GEOG',
  civics: 'CIVC',
  extensions: 'EXTN',
};

/**
 * 固定各知識點主題對應之已上架 YouTube 集數代號，確保調整課綱章節教學順序時，
 * 每個章節頁永遠精準嵌入對應的 YouTube 教學影片。
 */
const TOPIC_EPISODE_CODE_MAP: Record<string, string> = {
  'chemistry/matter-composition': 'CHEM01',
  'chemistry/chemical-reactions': 'CHEM02',
  'chemistry/acids-bases-salts': 'CHEM03',
  'chemistry/redox': 'CHEM04',
  'chemistry/organic-chemistry': 'CHEM05',
  'chemistry/environmental-chemistry': 'CHEM06',
  'chinese/classical-literature': 'CHIN01',
  'chinese/modern-literature': 'CHIN02',
  'chinese/linguistics': 'CHIN03',
  'chinese/reading-comprehension': 'CHIN04',
  'chinese/writing-expression': 'CHIN05',
  'chinese/cultural-knowledge': 'CHIN06',
  'civics/citizenship-community': 'CIVC01',
  'civics/law-life': 'CIVC02',
  'civics/economy-sustainability': 'CIVC03',
  'civics/society-culture': 'CIVC04',
  'civics/labor-ethics': 'CIVC05',
  'civics/environment-policy': 'CIVC06',
  'drafting/bim-concepts': 'DRFT01',
  'drafting/building-codes-far': 'DRFT02',
  'drafting/drafting-fundamentals': 'DRFT03',
  'drafting/civil-architectural-drawings': 'DRFT04',
  'drafting/lines-and-lettering': 'DRFT05',
  'drafting/scale': 'DRFT06',
  'drafting/orthographic-projection': 'DRFT07',
  'drafting/sectional-views': 'DRFT08',
  'drafting/architectural-plan': 'DRFT09',
  'drafting/architectural-elevation': 'DRFT10',
  'drafting/dimensioning-and-symbols': 'DRFT11',
  'drafting/cad-basics': 'DRFT12',
  'drafting/drafting-instruments': 'DRFT13',
  'drafting/geometric-constructions': 'DRFT14',
  'drafting/auxiliary-views': 'DRFT15',
  'drafting/perspective-projection': 'DRFT16',
  'english/vocabulary-phrases': 'ENGL01',
  'english/grammar-patterns': 'ENGL02',
  'english/conversation-daily-use': 'ENGL03',
  'english/reading-comprehension': 'ENGL04',
  'english/vocabulary-professional': 'ENGL05',
  'english/grammar-clauses': 'ENGL06',
  'english/reading-infographics': 'ENGL07',
  'english/cloze-passage-structure': 'ENGL08',
  'english/grammar-mastery': 'ENGL09',
  'english/workplace-communication': 'ENGL10',
  'english/reading-advanced': 'ENGL11',
  'english/translation-writing': 'ENGL12',
  'extensions/parametric-design-and-ai-assisted-competition': 'EXTN01',
  'extensions/portfolio-and-design-discourse': 'EXTN02',
  'extensions/spatial-design': 'EXTN03',
  'extensions/construction-methods': 'EXTN04',
  'extensions/cad-bim': 'EXTN05',
  'extensions/portfolio-models': 'EXTN06',
  'extensions/certification': 'EXTN07',
  'geography/environment-terrain': 'GEOG01',
  'geography/climate-environment': 'GEOG02',
  'geography/population-urban': 'GEOG03',
  'geography/regional-development': 'GEOG04',
  'geography/environmental-issues': 'GEOG05',
  'geography/gis': 'GEOG06',
  'history/taiwan-history': 'HIST01',
  'history/chinese-history': 'HIST02',
  'history/world-history': 'HIST03',
  'history/architectural-history': 'HIST04',
  'history/cultural-heritage': 'HIST05',
  'history/social-change': 'HIST06',
  'materials/green-building-materials': 'MATL01',
  'materials/basic-properties': 'MATL02',
  'materials/cement-composition': 'MATL03',
  'materials/cement-types': 'MATL04',
  'materials/cement-vicat': 'MATL05',
  'materials/cement-strength': 'MATL06',
  'materials/cement-storage': 'MATL07',
  'materials/concrete': 'MATL08',
  'materials/stone-ceramics-glass': 'MATL09',
  'materials/wood': 'MATL10',
  'materials/polymers-asphalt': 'MATL11',
  'materials/metals': 'MATL12',
  'materials/green-materials': 'MATL13',
  'math-c/functions-graphs': 'MC01',
  'math-c/trigonometry': 'MC02',
  'math-c/vectors': 'MC03',
  'math-c/algebra': 'MC04',
  'math-c/lines-circles': 'MC05',
  'math-c/sequences-series': 'MC06',
  'math-c/permutations-combinations': 'MC07',
  'math-c/trig-applications': 'MC08',
  'math-c/exponents-logarithms': 'MC09',
  'math-c/space-vectors': 'MC10',
  'math-c/matrices': 'MC11',
  'math-c/linear-programming': 'MC12',
  'math-c/geometry': 'MC13',
  'math-c/calculus': 'MC14',
  'math-c/integration': 'MC15',
  'mechanics/structural-failures': 'MECH01',
  'mechanics/parallel-force-systems': 'MECH02',
  'mechanics/nonconcurrent-force-systems': 'MECH03',
  'mechanics/shear-properties': 'MECH04',
  'mechanics/units-vectors': 'MECH05',
  'mechanics/force-equilibrium': 'MECH06',
  'mechanics/centroid': 'MECH07',
  'mechanics/friction': 'MECH08',
  'mechanics/truss': 'MECH09',
  'mechanics/beam': 'MECH10',
  'mechanics/stress-strain': 'MECH11',
  'mechanics/spatial-force-systems': 'MECH12',
  'mechanics/plane-stress': 'MECH13',
  'physics/mechanics-motion': 'PHYS01',
  'physics/work-energy': 'PHYS02',
  'physics/thermodynamics': 'PHYS03',
  'physics/waves-acoustics': 'PHYS04',
  'physics/optics': 'PHYS05',
  'physics/electricity': 'PHYS06',
  'surveying/surveying-fundamentals': 'SURV01',
  'surveying/indirect-distance-elevation': 'SURV02',
  'surveying/distance-and-angle': 'SURV03',
  'surveying/elevation-and-leveling': 'SURV04',
  'surveying/instrument-setup': 'SURV05',
  'surveying/traverse-surveying': 'SURV06',
  'surveying/coordinate-computation': 'SURV07',
  'surveying/area-and-error': 'SURV08',
};

interface ExtraTcteVideoSpec {
  episodeCode: string;
  subjectSlug: string;
  relatedTopicSlug: string;
  title: string;
  curriculumCode: string;
  gradeLevel: number;
  realLifeSummary: string;
  whereUsed: string;
}

const EXTRA_TCTE_VIDEO_SPECS: ExtraTcteVideoSpec[] = [
  {
    episodeCode: 'MECH14',
    subjectSlug: 'mechanics',
    relatedTopicSlug: 'beam',
    title: '10. 梁內應力：中立軸、彎曲應力與橫向剪應力（統測獨立專章）',
    curriculumCode: 'TCTE115-ME12',
    gradeLevel: 11,
    realLifeSummary:
      '大樓主梁彎曲應力超標會在跨中底部開裂，短深梁剪應力超標則在支承端斜裂；ME12 直接決定梁寬、梁高與鋼筋配置。',
    whereUsed: 'RC 結構主梁與鋼骨 H 型梁斷面設計、疊合木梁釘距計算與專技結構基礎。',
  },
  {
    episodeCode: 'MATL14',
    subjectSlug: 'materials',
    relatedTopicSlug: 'concrete',
    title: '9. 混凝土粒料篩分析、氯離子試驗與摻料品管（統測獨立專章）',
    curriculumCode: 'TCTE115-MT3',
    gradeLevel: 11,
    realLifeSummary:
      '海砂屋天花板剝落與鋼筋鏽蝕源於氯離子超標，砂石過細或含水未修正更會讓水灰比飆升、強度失格。',
    whereUsed: '預拌廠細度模數 FM 品管、工地每車氯離子快篩抽驗與 SSD 用水修正。',
  },
  {
    episodeCode: 'SURV09',
    subjectSlug: 'surveying',
    relatedTopicSlug: 'distance-and-angle',
    title: '7. 角度測量專章：直線定向、垂直角與經緯儀誤差校正（統測獨立專章）',
    curriculumCode: 'TCTE115-SV4',
    gradeLevel: 11,
    realLifeSummary:
      '建築地界放樣只要角度偏 1 分，百公尺牆線就會偏移近 3 公分；正倒鏡觀測是工地消去儀器誤差的黃金紀律。',
    whereUsed: '全測站導線測角、高樓垂直度檢核、方位角與象限角換算放樣。',
  },
  {
    episodeCode: 'DRFT17',
    subjectSlug: 'drafting',
    relatedTopicSlug: 'orthographic-projection',
    title: '13. 投影畫法應用：點、線、面投影與第一／第三象限正視圖（統測獨立專章）',
    curriculumCode: 'TCTE115-DR5',
    gradeLevel: 11,
    realLifeSummary:
      'CNS 11567 採第三角法，歐洲與部分日系圖面採第一角法；讀錯投影象限會讓整個立面與開窗左右顛倒。',
    whereUsed: '建築施工圖識圖、點線面真長實形求解與第三角／第一角視圖判讀。',
  },
  {
    episodeCode: 'ENGL13',
    subjectSlug: 'english',
    relatedTopicSlug: 'reading-advanced',
    title: '13. 文化習俗、國際議題與永續建築素養英文（統測獨立專章）',
    curriculumCode: 'TCTE115-EN3',
    gradeLevel: 12,
    realLifeSummary:
      '統測英文長篇閱讀聚焦永續城市、淨零建築與多元文化議題，也是日後閱讀 LEED 與國際建築競賽簡章的核心力。',
    whereUsed: '統測素養題組長文判讀、國際建築期刊閱讀與永續綠建築英文術語。',
  },
  {
    episodeCode: 'MC16',
    subjectSlug: 'math-c',
    relatedTopicSlug: 'integration',
    title: '16. 數學 C 統測高頻跨單元綜合實戰總複習（統測獨立專章）',
    curriculumCode: 'TCTE115-MC1~MC15',
    gradeLevel: 12,
    realLifeSummary:
      '統測數學 C 壓軸題常把三角測量、向量內積、直線與圓及微積分混搭出題，學會題型辨識就能考前精準拉分。',
    whereUsed: '115/116 統測數學 C 全範圍模考總複習與跨單元整合解題 SOP。',
  },
];

function buildYouTubeEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({ rel: '0' });
  if (YOUTUBE_PLAYLIST_ID) {
    params.set('list', YOUTUBE_PLAYLIST_ID);
  }
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function buildAllHighSchoolVideos(): HighSchoolVideoEntry[] {
  const entries: HighSchoolVideoEntry[] = [];

  for (const subject of allSubjects) {
    const prefix = VOCATIONAL_EPISODE_PREFIX[subject.slug] ?? subject.slug.toUpperCase().slice(0, 4);

    subject.topics.forEach((topic, idx) => {
      const episodeCode =
        TOPIC_EPISODE_CODE_MAP[`${subject.slug}/${topic.slug}`] ??
        `${prefix}${String(idx + 1).padStart(2, '0')}`;
      const uploaded = uploadedLinks.videos[episodeCode];
      const videoId = uploaded?.videoId || null;
      const guide = getTopicRealLifeGuide(subject.slug, topic.slug);

      entries.push({
        episodeCode,
        subjectSlug: subject.slug,
        subjectTitle: subject.title,
        subjectCategory: subject.category,
        topicSlug: topic.slug,
        topicTitle: topic.title,
        topicHref: `/subjects/${subject.slug}/${topic.slug}`,
        gradeLevel: topic.gradeLevel ?? 11,
        curriculumCode: topic.curriculumCode ?? `108-${episodeCode}`,
        realLifeSummary: guide.realLifeImportance ?? '',
        whereUsed: guide.whereUsed ?? guide.everydayAnalogy ?? '',
        isExtraTcteChapter: false,
        youtubeVideoId: videoId,
        youtubeUrl: uploaded?.url ?? (videoId ? `https://youtu.be/${videoId}` : null),
        youtubeEmbedUrl: videoId ? buildYouTubeEmbedUrl(videoId) : null,
        durationLabel: uploaded?.duration ?? '約 8–12 分鐘',
        playlistUrl: YOUTUBE_PLAYLIST_URL,
      });
    });

    const subjectExtras = EXTRA_TCTE_VIDEO_SPECS.filter((item) => item.subjectSlug === subject.slug);
    for (const extra of subjectExtras) {
      const uploaded = uploadedLinks.videos[extra.episodeCode];
      const videoId = uploaded?.videoId || null;
      entries.push({
        episodeCode: extra.episodeCode,
        subjectSlug: subject.slug,
        subjectTitle: subject.title,
        subjectCategory: subject.category,
        topicSlug: extra.relatedTopicSlug,
        topicTitle: extra.title,
        topicHref: `/subjects/${subject.slug}/${extra.relatedTopicSlug}`,
        gradeLevel: extra.gradeLevel,
        curriculumCode: extra.curriculumCode,
        realLifeSummary: extra.realLifeSummary,
        whereUsed: extra.whereUsed,
        isExtraTcteChapter: true,
        youtubeVideoId: videoId,
        youtubeUrl: uploaded?.url ?? (videoId ? `https://youtu.be/${videoId}` : null),
        youtubeEmbedUrl: videoId ? buildYouTubeEmbedUrl(videoId) : null,
        durationLabel: uploaded?.duration ?? '約 9–13 分鐘',
        playlistUrl: YOUTUBE_PLAYLIST_URL,
      });
    }
  }

  return entries;
}

export const ALL_HIGH_SCHOOL_VIDEOS: HighSchoolVideoEntry[] = buildAllHighSchoolVideos();

export function getSubjectVideoGroups(): SubjectVideoGroup[] {
  return allSubjects.map((subject) => {
    const prefix = VOCATIONAL_EPISODE_PREFIX[subject.slug] ?? subject.slug.toUpperCase().slice(0, 4);
    const episodes = ALL_HIGH_SCHOOL_VIDEOS.filter((ep) => ep.subjectSlug === subject.slug);
    return {
      subjectSlug: subject.slug,
      subjectTitle: subject.title,
      category: subject.category,
      prefix,
      totalCount: episodes.length,
      uploadedCount: episodes.filter((ep) => Boolean(ep.youtubeUrl)).length,
      extraCount: episodes.filter((ep) => ep.isExtraTcteChapter).length,
      episodes,
    };
  });
}

export function getVideosForTopic(subjectSlug: string, topicSlug: string): HighSchoolVideoEntry[] {
  return ALL_HIGH_SCHOOL_VIDEOS.filter(
    (ep) => ep.subjectSlug === subjectSlug && ep.topicSlug === topicSlug
  );
}

export function getVideosForSubject(subjectSlug: string): HighSchoolVideoEntry[] {
  return ALL_HIGH_SCHOOL_VIDEOS.filter((ep) => ep.subjectSlug === subjectSlug);
}

export function getYouTubeCatalogStats() {
  const uploadedCount = ALL_HIGH_SCHOOL_VIDEOS.filter((ep) => Boolean(ep.youtubeUrl)).length;
  return {
    totalSubjects: allSubjects.length,
    totalEpisodes: ALL_HIGH_SCHOOL_VIDEOS.length,
    standardEpisodes: ALL_HIGH_SCHOOL_VIDEOS.filter((ep) => !ep.isExtraTcteChapter).length,
    extraTcteEpisodes: ALL_HIGH_SCHOOL_VIDEOS.filter((ep) => ep.isExtraTcteChapter).length,
    uploadedCount,
    playlistId: YOUTUBE_PLAYLIST_ID,
    playlistUrl: YOUTUBE_PLAYLIST_URL,
    playlistTitle: YOUTUBE_PLAYLIST_TITLE,
    updatedAt: uploadedLinks.updatedAt,
  };
}

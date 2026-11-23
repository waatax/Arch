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
      const episodeCode = `${prefix}${String(idx + 1).padStart(2, '0')}`;
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

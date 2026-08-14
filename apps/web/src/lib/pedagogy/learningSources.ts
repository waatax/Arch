export interface LearningSource {
  label: string;
  url: string;
  kind: '官方命題依據' | '官方歷屆題' | '教學設計依據' | '補充解題研究';
}

const officialArchive: LearningSource = {
  label: '技專校院入學測驗中心｜四技二專考科、大綱與歷屆試題',
  url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/info4y',
  kind: '官方歷屆題',
};

const curriculumManual: LearningSource = {
  label: '教育部技術型高中土木與建築群課程手冊',
  url: 'https://stv.naer.edu.tw/data/course_manual/B/%E5%9C%9F%E6%9C%A8%E8%88%87%E5%BB%BA%E7%AF%89%E7%BE%A4%E8%AA%B2%E7%A8%8B%E6%89%8B%E5%86%8A%EF%BC%88111%E5%B9%B47%E6%9C%88%E6%9B%B4%E6%96%B0%EF%BC%89.pdf',
  kind: '官方命題依據',
};

const officialCurriculum: LearningSource = {
  label: '國家教育研究院｜108 課綱：技術型高中土木與建築群課程綱要發布版',
  url: 'https://stv.naer.edu.tw/data/course_outline/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E6%8A%80%E8%A1%93%E5%9E%8B%E9%AB%98%E4%B8%AD-%E5%9C%9F%E6%9C%A8%E8%88%87%E5%BB%BA%E7%AF%89%E7%BE%A4%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81-%E7%99%BC%E5%B8%83%E7%89%88.pdf',
  kind: '官方命題依據',
};

const workedExampleEvidence: LearningSource = {
  label: 'Education Endowment Foundation｜Worked examples 與逐步撤除鷹架',
  url: 'https://educationendowmentfoundation.org.uk/news/supporting-pupils-with-worked-examples',
  kind: '教學設計依據',
};

const representationEvidence: LearningSource = {
  label: 'CAST UDL Guidelines｜用多重表徵協助解讀文字、數學符號與圖像',
  url: 'https://udlguidelines.cast.org/representation/language-symbols/text-notation-symbols/',
  kind: '教學設計依據',
};

const cramReview: LearningSource = {
  label: '建功補習班｜115 統測試題解答與分析索引（補充交叉檢查）',
  url: 'https://www.tck.com.tw/sites/exam/115_4g/115_4g_index.html',
  kind: '補充解題研究',
};

export function getLearningSources(subjectSlug: string): LearningSource[] {
  const sources: LearningSource[] = [officialCurriculum, curriculumManual, officialArchive, workedExampleEvidence, representationEvidence];
  if (['mechanics', 'materials'].includes(subjectSlug)) {
    sources.splice(1, 0, {
      label: '115 學年度 06 土木與建築群專業科目（一）官方考試大綱',
      url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-1-range.pdf',
      kind: '官方命題依據',
    });
  }
  if (['surveying', 'drafting'].includes(subjectSlug)) {
    sources.splice(1, 0, {
      label: '115 學年度 06 土木與建築群專業科目（二）官方考試大綱',
      url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-2-range.pdf',
      kind: '官方命題依據',
    });
    sources.push({
      label: '1111 統測落點｜114 土建群專二題型與解題重點分析',
      url: 'https://exam-match.1111.com.tw/blog/c6ddf83a-f53b-49d4-9904-a5bbb9b0b9bb',
      kind: '補充解題研究',
    });
  }
  if (subjectSlug === 'math-c') {
    sources.push({
      label: '新興高中數學科教學研究會｜數學 C 歷屆題與詳解',
      url: 'https://learn.hshs.tyc.edu.tw/ischool/publish_page/31/?cid=15208',
      kind: '補充解題研究',
    });
  }
  if (['chinese', 'english', 'math-c', 'mechanics', 'materials', 'surveying', 'drafting'].includes(subjectSlug)) {
    sources.push(cramReview);
  }
  return sources;
}

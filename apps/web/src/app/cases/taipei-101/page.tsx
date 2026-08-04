import CaseStudyPage from '@/components/CaseStudyPage';

export default function Taipei101Page() {
  return <CaseStudyPage
    hero={{ title: '台北 101', location: '台北市信義區', architect: '李祖原聯合建築師事務所', year: '2004 年完工', category: '風與結構 · 超高層建築', question: '508 公尺高樓如何同時抵抗颱風與地震？', description: '台北 101 以巨型柱、核心筒、外伸桁架與調諧質量阻尼器共同工作，是理解超高層建築側向力控制的代表案例。', imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/cases/taipei-101/hero-v2.webp`, imageAlt: '台北 101 完整塔身、八段式立面與尖塔的城市建築主視覺' }}
    visual={{ title: '從立面模矩讀懂抗風系統', photo: '/cases/taipei-101/photo.jpg', sketch: '/cases/taipei-101/sketch.png', photoAlt: '由近地面仰望台北 101 的分節塔樓實景', sketchAlt: '由台北 101 實景衍生的結構草圖與阻尼器示意', observation: '先以照片辨識八層一節的立面模矩，再用草圖追蹤核心筒、巨柱、外伸桁架與風阻尼器如何共同降低擺動。', readingGuide: ['看分節：重複模矩把超高層尺度轉成可辨識單元。', '看骨架：核心筒與外圍巨柱藉外伸桁架共同抵抗側力。', '看阻尼：懸吊球體以反向慣性降低強風造成的舒適度問題。'], credit: { label: 'eugene_o／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:2017-10-23_Exterior_of_Taipei_101.jpg', license: 'CC BY 2.0' } }}
    lenses={[{ id: 'wind', name: '1. 風與側向力', question: '樓越高，風力為什麼越重要？', content: '風壓會隨高度與曝露條件增加，並造成整棟建築的傾覆力矩。塔樓收分、結構剛度與氣動外形必須整體考量。', skillLink: { label: '工程力學 · 力矩與平衡', href: '/subjects/mechanics' } }, { id: 'damper', name: '2. 調諧質量阻尼器', question: '巨大金色球體如何讓大樓更穩？', content: '阻尼器以巨大質量和建築主體反向運動，吸收部分振動能量，主要改善強風下的加速度與人體舒適度。', skillLink: { label: '物理 · 振動與能量', href: '/subjects/physics' } }]}
    takeaway="讀超高層建築時，不只看高度；要依序找出側向力來源、主要抗側力構件、力的傳遞路徑，以及控制使用舒適度的附加設備。"
  />;
}

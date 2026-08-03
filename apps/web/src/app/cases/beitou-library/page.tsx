import CaseStudyPage from '@/components/CaseStudyPage';

export default function BeitouLibraryPage() {
  return <CaseStudyPage
    hero={{ title: '臺北市立圖書館北投分館', location: '台北市北投區', architect: '九典聯合建築師事務所', year: '2006 年開館', category: '木構造與綠建築', question: '木格柵、深陽台與綠屋頂如何一起降低環境負荷？', description: '北投分館以木構表情、層層退縮的陽台、深遮陽與雨水回收回應公園微氣候，將綠建築策略直接變成可閱讀的立面。' }}
    visual={{ title: '由木立面讀取被動式環境策略', photo: '/cases/beitou-library/photo.jpg', sketch: '/cases/beitou-library/sketch.png', photoAlt: '北投圖書館面向公園水景的木構立面與深陽台', sketchAlt: '由北投圖書館照片衍生的木構、遮陽、通風與雨水工程草圖', observation: '照片呈現遮陽深度與植栽環境；草圖把日照、風與雨水路徑畫出來，讓綠建築從標章變成可觀察的構造。', readingGuide: ['看遮陽：水平格柵先阻擋高角度日照，再讓漫射光進入。', '看通風：長向開口與半戶外陽台協助空氣穿越室內。', '看水路：斜屋頂收集雨水，供基地植栽與景觀使用。'], credit: { label: 'Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Beitou_Library_front.jpg', license: 'Attribution license' } }}
    lenses={[{ id: 'shade', name: '1. 遮陽與採光', question: '陽台為什麼要做得這麼深？', content: '深陽台與水平格柵能削弱直射日光、降低玻璃得熱，同時保留閱讀需要的柔和自然光。', skillLink: { label: '物理 · 光與熱', href: '/subjects/physics' } }, { id: 'timber', name: '2. 木材與耐候', question: '戶外木材如何面對潮濕與日曬？', content: '設計需控制排水、通風、端部吸水與可更換性；木構件的耐久性來自細部，而不只來自塗料。', skillLink: { label: '材料與試驗 · 木材', href: '/subjects/materials' } }]}
    takeaway="閱讀綠建築時，將每個策略對回環境問題：哪一層擋太陽、哪個開口導風、雨水流到哪裡、材料又如何被保護。"
  />;
}

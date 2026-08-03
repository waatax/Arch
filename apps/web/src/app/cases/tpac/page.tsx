import CaseStudyPage from '@/components/CaseStudyPage';

export default function TpacPage() {
  return <CaseStudyPage
    hero={{ title: '臺北表演藝術中心', location: '台北市士林區', architect: 'OMA／Rem Koolhaas + David Gianotten', year: '2022 年開幕', category: '空間組合與動線', question: '三座劇場如何獨立運作，又能合併成超級大劇場？', description: '北藝中心把三個形狀各異的劇場插入中央舞台立方體，共享後台製作核心；外部公共迴路則讓沒有買票的人也能看見劇場如何運作。' }}
    visual={{ title: '把劇場當成可組裝的空間機器', photo: '/cases/tpac/photo.jpg', sketch: '/cases/tpac/sketch.png', photoAlt: '俯視臺北表演藝術中心的球形劇場、方盒量體與屋頂', sketchAlt: '由北藝中心實景衍生的劇場量體與共享舞台工程草圖', observation: '照片讓三種劇場量體一眼可辨；草圖再將它們拆開，說明觀眾席、舞台、後台與公共動線如何在中央核心交會。', readingGuide: ['看量體：球體與方盒直接透露不同劇場的空間需求。', '看核心：三座劇場共享中央舞台與後台，提高製作彈性。', '看動線：公共迴路穿越建築，將後台生產過程展示給城市。'], credit: { label: 'Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Taipei_Performing_Arts_Center_20221215_(cropped).jpg', license: 'See source license' } }}
    lenses={[{ id: 'program', name: '1. 劇場組合', question: '不同形狀的表演空間為什麼向外凸出？', content: '將觀眾廳推到中央核心外圍，可以讓舞台端相互靠近並共享後台，形成可獨立也可合併的表演系統。', skillLink: { label: '建築製圖 · 剖面判讀', href: '/subjects/drafting' } }, { id: 'circulation', name: '2. 公共迴路', question: '沒有票也能進入劇場建築嗎？', content: '公共迴路以連續步行路徑穿越量體，串接觀景與後台窗口，重新界定文化建築的公共性。', skillLink: { label: '空間設計 · 動線', href: '/subjects/extensions' } }]}
    takeaway="讀複雜公共建築時，可先把空間分成觀眾、表演者、技術後勤與一般訪客四套動線，再檢查它們在哪裡交會、分離與共享。"
  />;
}

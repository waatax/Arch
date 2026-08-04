import CaseStudyPage from '@/components/CaseStudyPage';

export default function NlpiPage() {
  return <CaseStudyPage
    hero={{ title: '國立公共資訊圖書館', location: '台中市南區', architect: '九典聯合建築師事務所', year: '2012 年開館', category: '資訊流與曲面立面', question: '一棟圖書館如何用流動立面表達知識與資訊的流動？', description: '國資圖以連續水平窗帶與起伏的白色外殼包覆層層閱讀空間，曲線不只塑造意象，也回應採光、視線、動線與城市轉角。', imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/cases/national-library-public-information/hero-v2.webp`, imageAlt: '國立公共資訊圖書館白色流動外殼與起伏水平窗帶的建築主視覺' }}
    visual={{ title: '從流動外殼辨認樓層與光線', photo: '/cases/national-library-public-information/photo.jpg', sketch: '/cases/national-library-public-information/sketch.png', photoAlt: '國立公共資訊圖書館白色流線外牆與水平窗帶', sketchAlt: '由國資圖實景衍生的樓板、採光窗帶與流動動線草圖', observation: '照片中的水平窗帶提供尺度基準；草圖將外殼、樓板與內部動線分層，避免只把曲面當成造型。', readingGuide: ['看窗帶：連續開口把自然光送入深進深的閱讀樓層。', '看外殼：曲線調整立面深度，形成入口、陰影與城市轉角。', '看動線：內部坡道與樓層視線使資訊探索成為連續經驗。'], credit: { label: 'Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:%E5%9C%8B%E7%AB%8B%E5%85%AC%E5%85%B1%E8%B3%87%E8%A8%8A%E5%9C%96%E6%9B%B8%E9%A4%A8%E7%B8%BD%E9%A4%A8.jpg', license: 'See source license' } }}
    lenses={[{ id: 'facade', name: '1. 曲面外殼', question: '自由曲線如何被轉成可施工的表皮？', content: '設計會將連續曲面分割為可定位、製造與安裝的面板單元，並以次結構調整誤差與固定外牆。', skillLink: { label: '建築製圖 · 立面與剖面', href: '/subjects/drafting' } }, { id: 'daylight', name: '2. 閱讀採光', question: '水平長窗如何兼顧光線與書籍保存？', content: '窗帶引入均勻日光，並透過玻璃性能、遮陽與室內配置控制眩光、熱與紫外線。', skillLink: { label: '物理 · 光學', href: '/subjects/physics' } }]}
    takeaway="面對曲面建築，先用樓板與窗帶找回水平基準，再分析外殼如何被分割、支撐、排水與開孔，才能從形式進入工程判讀。"
  />;
}

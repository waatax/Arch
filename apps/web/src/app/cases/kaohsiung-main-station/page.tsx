import CaseStudyPage from '@/components/CaseStudyPage';

export default function KaohsiungStationPage() {
  return <CaseStudyPage
    hero={{ title: '高雄車站新站', location: '高雄市三民區', architect: 'Mecanoo', year: '2025 年新風貌亮相', category: '交通建築與城市縫合', question: '一座地下車站如何把曾被鐵路切開的城市重新縫合？', description: '高雄車站以大型無柱雲朵天棚、下沉式廣場與屋頂綠之丘整合臺鐵、捷運與地面城市空間，將交通設施轉化為可停留的城市地景。', imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/cases/kaohsiung-main-station/hero-v2.webp`, imageAlt: '高雄車站雲朵天棚、綠之丘、下沉廣場與舊站房的建築主視覺' }}
    visual={{ title: '由交通節點讀懂城市地景', photo: '/cases/kaohsiung-main-station/photo.jpg', sketch: '/cases/kaohsiung-main-station/sketch.png', photoAlt: '高雄車站地面入口、圓形構築物與周邊道路實景', sketchAlt: '由高雄車站實景衍生的雲朵天棚、綠之丘與下沉廣場工程草圖', observation: '照片提供站區地面尺度；草圖將 2025 年完成的雲朵天棚、綠之丘與下沉廣場整合到同一剖面邏輯，呈現交通與公共空間的立體關係。', readingGuide: ['看天棚：大型桁架與樹狀支柱創造高挑、少柱的城市客廳。', '看剖面：地面、下沉廣場、臺鐵與捷運形成垂直轉乘系統。', '看縫合：綠之丘跨越原鐵路廊帶，連接車站南北兩側步行網絡。'], credit: { label: 'Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:TRA_Kaohsiung_Station.jpg', license: 'See source license' } }}
    lenses={[{ id: 'canopy', name: '1. 雲朵天棚', question: '大跨距天棚如何保持下方通透？', content: '大型空間桁架將屋面荷重集中傳到樹狀支柱，減少廣場中的柱數並保留視線、風與人流。', skillLink: { label: '工程力學 · 桁架', href: '/subjects/mechanics/truss' } }, { id: 'section', name: '2. 立體轉乘', question: '火車移到地下後，地面多出了什麼？', content: '鐵路地下化釋放地面連續空間，下沉廣場再以採光、電扶梯與清楚視線串聯不同交通層。', skillLink: { label: '測量 · 高程與剖面', href: '/subjects/surveying' } }]}
    takeaway="分析車站不能只看建築物；要把鐵道、捷運、道路、步行、採光與開放空間畫在同一張剖面上，才能理解真正的城市縫合。"
  />;
}

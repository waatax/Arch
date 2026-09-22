import { notFound } from 'next/navigation';
import { cadSoftwareList } from '@/data/cad-software/cadSoftwareData';
import CadSoftwareDetailView from '@/components/cad/CadSoftwareDetailView';

export function generateStaticParams() {
  return cadSoftwareList.map((software) => ({ slug: software.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const software = cadSoftwareList.find((item) => item.slug === slug);
  if (!software) return { title: '軟體未找到' };

  return {
    title: `${software.name} (${software.englishName}) - 建築製圖實務與新手 7 輪深度進化教學 | TAG 電腦繪圖 | Arch`,
    description: `${software.shortDesc} 包含建築製圖應用、新手 10 步驟入門 SOP、高頻快捷鍵對照表、致命避坑指南、7 輪 100%+ 深度進化內容與官方教育版連結。`,
  };
}

export default async function CadSoftwareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = cadSoftwareList.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const software = cadSoftwareList[index];
  const prevSoftware = cadSoftwareList[(index - 1 + cadSoftwareList.length) % cadSoftwareList.length];
  const nextSoftware = cadSoftwareList[(index + 1) % cadSoftwareList.length];

  return (
    <CadSoftwareDetailView
      software={software}
      prevSoftware={{ slug: prevSoftware.slug, name: prevSoftware.name }}
      nextSoftware={{ slug: nextSoftware.slug, name: nextSoftware.name }}
    />
  );
}

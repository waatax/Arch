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
    title: `${software.name} (${software.englishName}) - 建築工程實務、運算幾何與 7 輪深度進化 | 電腦繪圖 | Arch`,
    description: `${software.name} 於建築工程設計之實務應用、幾何原理、CNS 11567/ISO 19650 規範、新手實作 SOP、高階參數矩陣與自動化二次開發。`,
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

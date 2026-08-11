import { notFound } from 'next/navigation';
import CaseStudyPage from '@/components/CaseStudyPage';
import { globalArchitectureCases } from '@/data/globalArchitectureCases';

export const dynamicParams = false;

export function generateStaticParams() {
  return globalArchitectureCases.map(({ slug }) => ({ slug }));
}

export default async function GlobalCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = globalArchitectureCases.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const question = item.question.replace('為何麼', '為何');
  const category = item.category.replace('空間現構', '空間網格');
  const photoCredit = item.slug === 'centre-pompidou'
    ? { label: 'Infinitescreen／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Pompidou_Centre.jpg', license: 'CC BY-SA 4.0' }
    : item.photoCredit;
  return <CaseStudyPage
    hero={{ title: item.title, location: item.region, architect: item.architect, year: item.year, category, question, description: item.description, imageSrc: `${basePath}/cases/${item.slug}/photo.jpg`, imageAlt: `${item.title}建築實景`, imageCaption: `${photoCredit.label} · ${photoCredit.license}` }}
    visual={{ title: `從實景讀懂${category}`, photo: `/cases/${item.slug}/photo.jpg`, sketch: `/cases/${item.slug}/sketch.svg`, photoAlt: `${item.title}的實景與構造特徵`, sketchAlt: `${item.title}的結構與空間閱讀示意圖`, observation: item.observation, readingGuide: item.readingGuide, credit: photoCredit }}
    lenses={item.lenses}
    takeaway={item.takeaway}
  />;
}

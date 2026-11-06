import handoutCourseLinks from '../../data/handoutCourseLinks.json';

export interface HandoutLink { href: string; title: string }
const index: Record<string, HandoutLink[]> = handoutCourseLinks;

export function getHandoutLinks(routes: string[]): HandoutLink[] {
  const links = routes.flatMap(route => index[route] ?? []);
  return [...new Map(links.map(link => [link.href, link])).values()];
}

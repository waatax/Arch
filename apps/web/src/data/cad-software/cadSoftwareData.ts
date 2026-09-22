export * from './types';

import { CadSoftware } from './types';
import { sketchupData } from './modules/sketchup';
import { blenderData } from './modules/blender';
import { autocadData } from './modules/autocad';
import { revitData } from './modules/revit';
import { threeDsMaxData } from './modules/3dsmax';
import { archicadData } from './modules/archicad';
import { rhinoData } from './modules/rhino';
import { renderingEnginesData } from './modules/renderingEngines';

export const cadSoftwareList: CadSoftware[] = [
  sketchupData,
  blenderData,
  autocadData,
  revitData,
  threeDsMaxData,
  archicadData,
  rhinoData,
  renderingEnginesData,
];

export function getCadSoftwareBySlug(slug: string): CadSoftware | undefined {
  return cadSoftwareList.find((software) => software.slug === slug);
}

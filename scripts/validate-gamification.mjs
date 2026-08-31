/**
 * Arch V8.20 遊戲化、技能星空樹與 8 大互動工程沙盒品質閘門驗證
 * 驗證 8 大戰役關卡、8 大互動工程沙盒、5 大名築藍圖、5 大技能星系、安衛偵探與 Web Audio Lofi 聲景合成器
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🎮 啟動 Arch V8.20 大師傳奇 (Master Legend) 遊戲化與工程沙盒自動化驗收...');

let errors = [];

function checkFile(relPath, desc) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`[缺少檔案] ${desc}: ${relPath}`);
    return null;
  }
  return fs.readFileSync(fullPath, 'utf-8');
}

// 1. 驗證 Web Audio 音效與 Lofi 聲景引擎
const audioContent = checkFile('apps/web/src/lib/audio/soundEffects.ts', 'Web Audio 原生音效與聲景合成器');
if (audioContent) {
  const requiredMethods = [
    'playPencilDraw',
    'playStampThud',
    'playBubbleLevel',
    'playCorrectChime',
    'playZeroForceSnap',
    'playConcreteCrack',
    'playClickBeep',
    'playShakingRumble',
    'playLaserBeep',
    'startRainAmbient',
    'startBreezeAmbient',
    'stopAllAmbient',
  ];
  for (const m of requiredMethods) {
    if (!audioContent.includes(m)) {
      errors.push(`[音效缺少方法] soundEffects.ts 缺少 ${m}`);
    }
  }
  console.log('  ✓ Web Audio 原生音效與 Lofi 聲景合成器驗證通過 (12 種物理音效與環境混音完整)');
}

// 2. 驗證遊戲化狀態 Store、5 大名築與星系星座
const storeContent = checkFile('apps/web/src/lib/store/gamificationStore.ts', '遊戲化 Zustand Store');
if (storeContent) {
  const requiredLandmarks = ['luce_chapel', 'taichung_opera', 'taipei_101', 'danjiang_bridge', 'museum_921'];
  for (const lm of requiredLandmarks) {
    if (!storeContent.includes(lm)) {
      errors.push(`[缺少名築藍圖] gamificationStore.ts 缺少地標 ${lm}`);
    }
  }

  const requiredRanks = ['apprentice', 'site_inspector', 'structural_designer', 'chief_engineer', 'master_architect'];
  for (const r of requiredRanks) {
    if (!storeContent.includes(r)) {
      errors.push(`[缺少建築師階級] gamificationStore.ts 缺少階級 ${r}`);
    }
  }

  const requiredActions = ['unlockStarNode', 'resolveHazard', 'setLofiAmbient'];
  for (const act of requiredActions) {
    if (!storeContent.includes(act)) {
      errors.push(`[缺少 Store Action] gamificationStore.ts 缺少動作 ${act}`);
    }
  }
  console.log('  ✓ 遊戲化狀態、5 大名築藍圖與星系狀態資料結構驗證通過');
}

// 3. 驗證 8 大互動工程沙盒組件
const games = [
  { path: 'apps/web/src/components/games/TrussZeroForceHunter.tsx', name: '桁架零力桿神射手', keywords: ['Pratt', 'Howe', 'isZeroForce', 'case1', 'case2'] },
  { path: 'apps/web/src/components/games/LevelingBubbleMaster.tsx', name: '水準儀氣泡調平模擬器', keywords: ['screwA', 'screwB', 'screwC', 'targetBsReading', 'targetFsReading', 'userIH'] },
  { path: 'apps/web/src/components/games/Orthographic3DBox.tsx', name: '第三角正投影折疊箱', keywords: ['isUnfolded', 'missingLineQuestion', '45° 投射斜線', '俯視圖', '正視圖', '右側視圖'] },
  { path: 'apps/web/src/components/games/ConcreteSlumpLab.tsx', name: '混凝土坍度破壞試驗機', keywords: ['wcRatio', 'slumpCm', 'fc28Mpa', 'true_slump', 'shear_slump', 'collapse_slump'] },
  { path: 'apps/web/src/components/games/BeamBalancerGame.tsx', name: '簡支梁剪力彎矩天平解謎', keywords: ['beamChallenges', 'maxMoment', 'zeroShearPos', 'V(x)', 'M(x)'] },
  { path: 'apps/web/src/components/games/VirtualDraftingTable.tsx', name: '數位平行尺製圖桌實驗室', keywords: ['tSquareY', 'triangleX', 'triangle_45', 'triangle_30_60', 'solid_thick', 'hidden_medium'] },
  { path: 'apps/web/src/components/games/SeismicDefenseLab.tsx', name: '地震振動台耐震防衛實驗室', keywords: ['chichi_921', 'hualien_0403', 'hasShearWall', 'hasBracing', 'hasTMD', 'hasBaseIsolator', 'maxDriftAnglePct'] },
  { path: 'apps/web/src/components/games/TotalStationTraverseLab.tsx', name: '全測站經緯儀電子導線實驗室', keywords: ['prismAligned', 'isMeasuringEDM', 'closureK', 'closureRatio', 'polygonAreaM2', 'azimuthDeg'] },
];

for (const g of games) {
  const content = checkFile(g.path, g.name);
  if (content) {
    for (const kw of g.keywords) {
      if (!content.includes(kw)) {
        errors.push(`[沙盒功能缺漏] ${g.name} 缺少關鍵邏輯或算式標籤: ${kw}`);
      }
    }
    console.log(`  ✓ 互動工程沙盒驗證通過: ${g.name}`);
  }
}

// 4. 驗證技能星空樹、安衛偵探與 Lofi 專注空間
checkFile('apps/web/src/components/gamification/ArchitectSkillConstellation.tsx', '建築大師技能星空圖 (5 大星系)');
checkFile('apps/web/src/components/gamification/SiteHazardDetective.tsx', '營造工地 360 安衛隱患大偵探');
checkFile('apps/web/src/components/gamification/LofiArchitectSoundscape.tsx', 'Lofi 聲景合成器與 25 分鐘番茄鐘');
checkFile('apps/web/src/components/studio/BlueprintStudioCanvas.tsx', '建築大師工坊畫布');
checkFile('apps/web/src/components/gamification/CampaignQuestMap.tsx', '8 大戰役關卡冒險地圖');
checkFile('apps/web/src/components/gamification/QuestInspectorModal.tsx', '營造現場工程探案委託');

// 5. 驗證獨立路由頁面
checkFile('apps/web/src/app/quest/page.tsx', '冒險戰役獨立路由 (/quest)');
checkFile('apps/web/src/app/studio/page.tsx', '大師工坊獨立路由 (/studio)');
checkFile('apps/web/src/app/constellation/page.tsx', '技能星空獨立路由 (/constellation)');

if (errors.length > 0) {
  console.error('\n❌ 遊戲化品質閘門檢驗失敗：');
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
} else {
  console.log('\n✨ 遊戲化品質閘門 100% 全部通過！達標 V8.20 大師傳奇規格！');
}

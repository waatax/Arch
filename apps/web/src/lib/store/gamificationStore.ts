import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { soundEngine } from '../audio/soundEffects';

export type ArchitectRank = 'apprentice' | 'site_inspector' | 'structural_designer' | 'chief_engineer' | 'master_architect';

export interface LandmarkProgress {
  id: 'luce_chapel' | 'taichung_opera' | 'taipei_101' | 'danjiang_bridge' | 'museum_921';
  name: string;
  location: string;
  totalParts: number;
  unlockedParts: number;
  description: string;
  featureSnippet: string;
}

export interface CampaignStage {
  stageId: number;
  title: string;
  subtitle: string;
  subject: string;
  topicRoute: string;
  unlocked: boolean;
  completed: boolean;
  rewardPart: string;
  inspectorCaseId?: string;
}

export interface DailyBounty {
  id: string;
  title: string;
  desc: string;
  expReward: number;
  completed: boolean;
  targetType: 'solve_puzzle' | 'practice_exam' | 'explore_sandbox';
}

export interface ConstellationGalaxy {
  id: 'mechanics' | 'materials' | 'surveying' | 'drafting' | 'math_c';
  name: string;
  starsCount: number;
  unlockedStars: string[];
  color: string;
  description: string;
}

export interface GamificationState {
  soundEnabled: boolean;
  lofiAmbient: 'none' | 'rain' | 'breeze' | 'office';
  lofiVolume: number;
  exp: number;
  rank: ArchitectRank;
  rankTitle: string;
  stampsCollected: string[];
  landmarks: Record<string, LandmarkProgress>;
  campaignStages: CampaignStage[];
  dailyBounties: DailyBounty[];
  unlockedStars: string[];
  resolvedHazards: string[];
  stats: {
    puzzlesSolved: number;
    sandboxExperiments: number;
    inspectorsSolved: number;
    totalStrokes: number;
    shakingTestsRun: number;
  };
  
  // Actions
  toggleSound: () => void;
  setLofiAmbient: (type: 'none' | 'rain' | 'breeze' | 'office', volume?: number) => void;
  addExp: (amount: number) => void;
  unlockLandmarkPart: (landmarkId: 'luce_chapel' | 'taichung_opera' | 'taipei_101' | 'danjiang_bridge' | 'museum_921') => void;
  completeCampaignStage: (stageId: number) => void;
  recordPuzzleSolved: (puzzleName?: string) => void;
  recordSandboxExperiment: () => void;
  recordInspectorSolved: (caseId?: string) => void;
  unlockStarNode: (starId: string) => void;
  resolveHazard: (hazardId: string) => void;
  addStamp: (stampId: string) => void;
}

const initialLandmarks: Record<string, LandmarkProgress> = {
  luce_chapel: {
    id: 'luce_chapel',
    name: '東海大學路思義教堂',
    location: '台中市西屯區 · 貝聿銘 & 陳其寬',
    totalParts: 4,
    unlockedParts: 1,
    description: '雙曲拋物面（Conoid Hypar）鋼筋混凝土無柱薄殼構造，屋面兼作牆體與屋頂。',
    featureSnippet: '膜應力傳導 + 菱形雙曲磚瓦面',
  },
  taichung_opera: {
    id: 'taichung_opera',
    name: '臺中國家歌劇院',
    location: '台中市西屯區 · 伊東豊雄',
    totalParts: 4,
    unlockedParts: 0,
    description: '全球首創曲牆（Sound Cave）連續雙曲面構造，58 個曲面單元無樑無柱連通。',
    featureSnippet: '空間桁架鋼筋網 + 3D 噴凝土工法',
  },
  taipei_101: {
    id: 'taipei_101',
    name: '台北 101 摩天大樓',
    location: '台北市信義區 · 李祖原建築師',
    totalParts: 4,
    unlockedParts: 0,
    description: '巨型結構系統（Mega-Structure）搭配 660 噸風阻尼球（TMD）抵禦強風地震。',
    featureSnippet: '八組外伸桁架 (Outrigger) + 巨型鋼骨箱型柱',
  },
  danjiang_bridge: {
    id: 'danjiang_bridge',
    name: '淡江大橋主橋',
    location: '新北市淡水/八里 · 扎哈·哈蒂事務所',
    totalParts: 4,
    unlockedParts: 0,
    description: '全球最大跨距單塔不對稱斜張橋，單一主塔放射狀斜拉索保留淡水平原落日天際線。',
    featureSnippet: '單塔不對稱平衡力學 + 高強鋼絞線拉索',
  },
  museum_921: {
    id: 'museum_921',
    name: '九二一地震教育園區',
    location: '台中市霧峰區 · 原光復國中基地',
    totalParts: 4,
    unlockedParts: 0,
    description: '車籠埔斷層錯動即時保存，輕量化懸索張拉薄膜覆蓋操場斷層與傾斜破壞柱。',
    featureSnippet: '地盤錯動保存 + 懸吊斜撐預力膜結構',
  },
};

const initialStages: CampaignStage[] = [
  {
    stageId: 1,
    title: '第一關：向量與力系地基',
    subtitle: '掌握力的三要素、向量分解合成與空間坐標轉換',
    subject: 'mechanics',
    topicRoute: '/subjects/mechanics/units-and-vectors',
    unlocked: true,
    completed: false,
    rewardPart: '路思義教堂薄殼底座',
    inspectorCaseId: 'case_vector_grounding',
  },
  {
    stageId: 2,
    title: '第二關：三力平衡與桁架探索',
    subtitle: '解開三力共點、拉密定理與桁架零力桿判斷三原則',
    subject: 'mechanics',
    topicRoute: '/subjects/mechanics/equilibrium',
    unlocked: true,
    completed: false,
    rewardPart: '台北 101 外伸桁架構件',
    inspectorCaseId: 'case_truss_zero_force',
  },
  {
    stageId: 3,
    title: '第三關：水泥水化與混凝土試驗',
    subtitle: 'CNS 61 波特蘭水泥五型與坍度 30cm 搗實試驗',
    subject: 'materials',
    topicRoute: '/subjects/materials/cement-types',
    unlocked: true,
    completed: false,
    rewardPart: '台中歌劇院曲牆噴凝土配比',
    inspectorCaseId: 'case_slump_quality',
  },
  {
    stageId: 4,
    title: '第四關：正投影展開與空間解構',
    subtitle: '第三角法三視圖展開對正與 CNS 建築材料剖面圖例',
    subject: 'drafting',
    topicRoute: '/subjects/drafting/orthographic-projection',
    unlocked: true,
    completed: false,
    rewardPart: '路思義教堂菱形天窗幾何',
    inspectorCaseId: 'case_ortho_projection',
  },
  {
    stageId: 5,
    title: '第五關：剪力彎矩微分解密',
    subtitle: '簡支梁 dV/dx = -w 與 dM/dx = V 極值連通',
    subject: 'mechanics',
    topicRoute: '/subjects/mechanics/statically-determinate-beams',
    unlocked: false,
    completed: false,
    rewardPart: '淡江大橋主塔受彎基礎',
    inspectorCaseId: 'case_beam_moment',
  },
  {
    stageId: 6,
    title: '第六關：虎克定律與應力轉換',
    subtitle: '正應力應變 PL/AE 與莫爾圓平面應力旋轉可視化',
    subject: 'mechanics',
    topicRoute: '/subjects/mechanics/stress-strain',
    unlocked: false,
    completed: false,
    rewardPart: '淡江大橋預力斜拉索單元',
    inspectorCaseId: 'case_mohr_stress',
  },
  {
    stageId: 7,
    title: '第七關：水準平差與營造現場',
    subtitle: '視線高法 IH 計算、經緯儀角差與現場監造標準',
    subject: 'surveying',
    topicRoute: '/subjects/surveying/leveling',
    unlocked: false,
    completed: false,
    rewardPart: '921 地震園區斷層張拉薄膜',
    inspectorCaseId: 'case_leveling_closure',
  },
  {
    stageId: 8,
    title: '第八關：建築大師綜合終極考核',
    subtitle: '融合四科專業，完成國家級建築工程跨域大挑戰',
    subject: 'mechanics',
    topicRoute: '/practice',
    unlocked: false,
    completed: false,
    rewardPart: '國家建築師黃金簽證印章',
    inspectorCaseId: 'case_master_architect',
  },
];

const initialBounties: DailyBounty[] = [
  {
    id: 'bounty_1',
    title: '桁架零力桿神射手',
    desc: '在桁架沙盒中正確找出 3 組零力桿',
    expReward: 80,
    completed: false,
    targetType: 'solve_puzzle',
  },
  {
    id: 'bounty_2',
    title: '水準氣泡一次到位',
    desc: '完成一次水準儀微調整平與高程計算',
    expReward: 80,
    completed: false,
    targetType: 'explore_sandbox',
  },
  {
    id: 'bounty_3',
    title: '高二今日 5 題微練習',
    desc: '在歷屆試題或章節練習中完成 5 題無提示作答',
    expReward: 120,
    completed: false,
    targetType: 'practice_exam',
  },
];

const getRankFromExp = (exp: number): { rank: ArchitectRank; title: string } => {
  if (exp >= 3000) return { rank: 'master_architect', title: '國家建築大師 (Master Architect)' };
  if (exp >= 1800) return { rank: 'chief_engineer', title: '工程主任技師 (Chief Engineer)' };
  if (exp >= 900) return { rank: 'structural_designer', title: '結構設計師 (Structural Designer)' };
  if (exp >= 350) return { rank: 'site_inspector', title: '駐地監造員 (Site Inspector)' };
  return { rank: 'apprentice', title: '建築見習生 (Architecture Apprentice)' };
};

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set, get) => ({
      soundEnabled: true,
      lofiAmbient: 'none',
      lofiVolume: 0.15,
      exp: 200,
      rank: 'apprentice',
      rankTitle: '建築見習生 (Architecture Apprentice)',
      stampsCollected: ['stamp_first_step'],
      landmarks: initialLandmarks,
      campaignStages: initialStages,
      dailyBounties: initialBounties,
      unlockedStars: ['star_mech_vector', 'star_draft_ortho'],
      resolvedHazards: [],
      stats: {
        puzzlesSolved: 0,
        sandboxExperiments: 0,
        inspectorsSolved: 0,
        totalStrokes: 0,
        shakingTestsRun: 0,
      },

      toggleSound: () => {
        const next = !get().soundEnabled;
        soundEngine.setMuted(!next);
        if (next) soundEngine.playClickBeep();
        set({ soundEnabled: next });
      },

      setLofiAmbient: (type, volume = 0.15) => {
        soundEngine.stopAllAmbient();
        if (type === 'rain') {
          soundEngine.startRainAmbient(volume);
        } else if (type === 'breeze') {
          soundEngine.startBreezeAmbient(volume);
        } else if (type === 'office') {
          soundEngine.startRainAmbient(volume * 0.5);
          soundEngine.startBreezeAmbient(volume * 0.7);
        }
        set({ lofiAmbient: type, lofiVolume: volume });
      },

      addExp: (amount) => {
        const newExp = get().exp + amount;
        const { rank, title } = getRankFromExp(newExp);
        const oldRank = get().rank;
        if (rank !== oldRank && get().soundEnabled) {
          soundEngine.playStampThud();
        }
        set({
          exp: newExp,
          rank,
          rankTitle: title,
        });
      },

      unlockLandmarkPart: (landmarkId) => {
        const landmark = get().landmarks[landmarkId];
        if (!landmark) return;
        if (landmark.unlockedParts < landmark.totalParts) {
          const nextParts = landmark.unlockedParts + 1;
          if (get().soundEnabled) soundEngine.playPencilDraw();
          set((state) => ({
            landmarks: {
              ...state.landmarks,
              [landmarkId]: {
                ...landmark,
                unlockedParts: nextParts,
              },
            },
          }));
        }
      },

      completeCampaignStage: (stageId) => {
        if (get().soundEnabled) soundEngine.playCorrectChime();
        set((state) => {
          const stages = state.campaignStages.map((s) => {
            if (s.stageId === stageId) {
              return { ...s, completed: true };
            }
            if (s.stageId === stageId + 1) {
              return { ...s, unlocked: true };
            }
            return s;
          });
          return { campaignStages: stages };
        });
        get().addExp(150);
      },

      recordPuzzleSolved: () => {
        if (get().soundEnabled) soundEngine.playCorrectChime();
        set((state) => ({
          stats: {
            ...state.stats,
            puzzlesSolved: state.stats.puzzlesSolved + 1,
          },
        }));
        get().addExp(50);
      },

      recordSandboxExperiment: () => {
        if (get().soundEnabled) soundEngine.playBubbleLevel();
        set((state) => ({
          stats: {
            ...state.stats,
            sandboxExperiments: state.stats.sandboxExperiments + 1,
          },
        }));
        get().addExp(20);
      },

      recordInspectorSolved: () => {
        if (get().soundEnabled) soundEngine.playStampThud();
        set((state) => ({
          stats: {
            ...state.stats,
            inspectorsSolved: state.stats.inspectorsSolved + 1,
          },
        }));
        get().addExp(100);
      },

      unlockStarNode: (starId) => {
        if (get().unlockedStars.includes(starId)) return;
        if (get().soundEnabled) soundEngine.playCorrectChime();
        set((state) => ({
          unlockedStars: [...state.unlockedStars, starId],
        }));
        get().addExp(40);
      },

      resolveHazard: (hazardId) => {
        if (get().resolvedHazards.includes(hazardId)) return;
        if (get().soundEnabled) soundEngine.playStampThud();
        set((state) => ({
          resolvedHazards: [...state.resolvedHazards, hazardId],
        }));
        get().addExp(80);
      },

      addStamp: (stampId) => {
        if (get().stampsCollected.includes(stampId)) return;
        if (get().soundEnabled) soundEngine.playStampThud();
        set((state) => ({
          stampsCollected: [...state.stampsCollected, stampId],
        }));
      },
    }),
    {
      name: 'arch-gamification-storage',
      version: 3,
    },
  ),
);

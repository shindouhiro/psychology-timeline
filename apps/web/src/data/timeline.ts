export interface TimelineNode {
  id: string
  title: string
  year: string
  category: string
  description: string
  details: {
    coreFigures: string[]
    keyConcepts: string[]
    recommendedReading: string[]
    summary: string
  }
}

export const timelineData: TimelineNode[] = [
  {
    id: "structuralism",
    title: "构造主义心理学",
    year: "1879",
    category: "早期流派",
    description: "冯特在莱比锡大学建立第一个心理学实验室，标志着科学心理学的诞生。主张心理学应该研究人的意识经验。",
    details: {
      coreFigures: ["威廉·冯特 (Wilhelm Wundt)", "爱德华·铁钦纳 (Edward Titchener)"],
      keyConcepts: ["内省法 (Introspection)", "意识元素", "感觉、意象、情感"],
      recommendedReading: ["《生理心理学原理》", "《心理学大纲》"],
      summary: "构造主义将意识分解为最基本的元素，强调使用严格控制的实验内省法来研究这些元素如何组合成复杂的心理过程。"
    }
  },
  {
    id: "functionalism",
    title: "机能主义心理学",
    year: "1890s",
    category: "早期流派",
    description: "受达尔文进化论影响，强调意识的适应性功能，而非其结构。关注心理活动在人类适应环境中的作用。",
    details: {
      coreFigures: ["威廉·詹姆斯 (William James)", "约翰·杜威 (John Dewey)"],
      keyConcepts: ["意识流 (Stream of consciousness)", "适应", "实用主义"],
      recommendedReading: ["《心理学原理》", "《学校与社会》"],
      summary: "机能主义不仅研究意识的内容，更关注意识的运作方式以及它如何帮助个体适应不断变化的环境。"
    }
  },
  {
    id: "psychoanalysis",
    title: "精神分析学派",
    year: "1900s",
    category: "深层心理学",
    description: "弗洛伊德创立，强调潜意识对人类行为的决定性作用，以及童年早期经验对人格发展的影响。",
    details: {
      coreFigures: ["西格蒙德·弗洛伊德 (Sigmund Freud)", "卡尔·荣格 (Carl Jung)", "阿尔弗雷德·阿德勒 (Alfred Adler)"],
      keyConcepts: ["潜意识 (Unconscious)", "本我、自我、超我", "防御机制", "心理性欲发展阶段"],
      recommendedReading: ["《梦的解析》", "《精神分析引论》"],
      summary: "精神分析通过自由联想、释梦等方法探索潜意识冲突，认为被压抑的冲动和欲望是心理问题的根源。"
    }
  },
  {
    id: "behaviorism",
    title: "行为主义",
    year: "1913",
    category: "客观心理学",
    description: "华生发表《行为主义者心目中的心理学》，主张心理学应研究可观察、可测量的行为，而非不可见的意识。",
    details: {
      coreFigures: ["约翰·华生 (John B. Watson)", "伯尔赫斯·斯金纳 (B. F. Skinner)", "伊万·巴甫洛夫 (Ivan Pavlov)"],
      keyConcepts: ["经典条件反射", "操作性条件反射", "强化与惩罚", "S-R (刺激-反应) 模型"],
      recommendedReading: ["《行为主义》", "《超越自由与尊严》"],
      summary: "行为主义认为一切行为都是学习的结果，强调环境对行为的塑造作用，拒绝内省法。"
    }
  },
  {
    id: "humanism",
    title: "人本主义心理学",
    year: "1950s",
    category: "第三势力",
    description: "作为对精神分析和行为主义的反动而兴起，强调人的主观体验、自由意志、潜能和自我实现。",
    details: {
      coreFigures: ["亚伯拉罕·马斯洛 (Abraham Maslow)", "卡尔·罗杰斯 (Carl Rogers)"],
      keyConcepts: ["需求层次理论", "自我实现 (Self-actualization)", "无条件积极关注", "以来访者为中心"],
      recommendedReading: ["《动机与人格》", "《成为一个人》"],
      summary: "人本主义心理学被称为心理学中的“第三势力”，它关注人的积极品质和成长潜能，认为人性本善。"
    }
  },
  {
    id: "cognitive",
    title: "认知心理学",
    year: "1960s",
    category: "信息加工",
    description: "将人脑比作电脑，研究内部心理过程（如感知、记忆、思维、语言、解决问题）的信息加工模型。",
    details: {
      coreFigures: ["乌尔里克·奈瑟 (Ulric Neisser)", "让·皮亚杰 (Jean Piaget)", "乔治·米勒 (George A. Miller)"],
      keyConcepts: ["信息加工模型", "图式 (Schema)", "短时记忆 (7±2)", "认知发展阶段"],
      recommendedReading: ["《认知心理学》", "《发生认识论原理》"],
      summary: "认知革命使心理学重新关注内部心理过程，并使用科学的实验方法来研究信息是如何被接收、存储和提取的。"
    }
  }
]

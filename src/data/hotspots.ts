export const hotspotData = {
  hotspots: [
    {
      id: "laptop",
      title: "AI-Powered Code Assistant",
      description: "Built an intelligent code completion tool using transformers and fine-tuned language models. Achieved 40% faster development time for repetitive tasks.",
      link: "https://github.com/mahipalimkar",
      position: { top: "35%", left: "40%" },
      size: { width: "180px", height: "120px" }
    },
    {
      id: "coffee",
      title: "Coffee Shop Finder ML",
      description: "Machine learning app that recommends coffee shops based on taste preferences, location, and ambiance using collaborative filtering.",
      link: "https://github.com/mahipalimkar",
      position: { top: "45%", left: "15%" },
      size: { width: "80px", height: "100px" }
    },
    {
      id: "plant",
      title: "Plant Health Monitor",
      description: "IoT + Computer Vision system that analyzes plant health through image recognition and provides care recommendations.",
      link: "https://github.com/mahipalimkar",
      position: { top: "30%", left: "75%" },
      size: { width: "90px", height: "110px" }
    },
    {
      id: "notebook",
      title: "Daily Learning Journal",
      description: "A minimalist note-taking app with AI-powered summarization and knowledge graph visualization for personal learning.",
      link: "https://github.com/mahipalimkar",
      position: { top: "50%", left: "55%" },
      size: { width: "120px", height: "90px" }
    },
    {
      id: "lamp",
      title: "Smart Home Automation",
      description: "Voice-controlled home automation system using NLP and edge computing for privacy-focused smart home management.",
      link: "https://github.com/mahipalimkar",
      position: { top: "20%", left: "70%" },
      size: { width: "70px", height: "130px" }
    }
  ],
  animationConfig: {
    idleAnimations: {
      duration: "3s-5s",
      easing: "ease-in-out",
      patterns: {
        coffee: "steam rising slowly",
        lamp: "gentle glow pulse",
        plant: "subtle sway",
        laptop: "screen glow variation",
        notebook: "soft shadow shift"
      }
    },
    hoverEffects: {
      glowColor: "#8B5E3C",
      glowOpacity: 0.6,
      scale: 1.02,
      duration: "0.3s"
    },
    clickAnimation: {
      scale: [1, 0.95, 1.05, 1],
      duration: "0.4s",
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    },
    parallax: {
      foregroundRatio: 0.03,
      midgroundRatio: 0.02,
      backgroundRatio: 0.01,
      enabled: true
    },
    scrollTriggers: {
      fadeInDuration: "0.6s",
      fadeInDelay: "0.1s",
      threshold: 0.1
    }
  }
};

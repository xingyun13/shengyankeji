export type Language = 'zh' | 'en';

export interface TranslationDict {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleHighlight: string;
    titleLast: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsUsers: string;
    statsSpeed: string;
    statsSecurity: string;
    statsUsersLabel: string;
    statsSpeedLabel: string;
    statsSecurityLabel: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    achievementTitle: string;
    achievementDesc: string;
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    p1Name: string;
    p1Title: string;
    p1Desc: string;
    p1Specs: string[];
    p2Name: string;
    p2Title: string;
    p2Desc: string;
    p2Specs: string[];
    p3Name: string;
    p3Title: string;
    p3Desc: string;
    p3Specs: string[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitBtn: string;
    sendingBtn: string;
    successMsg: string;
    infoTitle: string;
    infoAddr: string;
    infoPhone: string;
    infoEmail: string;
    formCardTitle: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  zh: {
    nav: {
      home: '首页',
      about: '关于圣焰',
      products: '核心研发 & 产品',
      contact: '业务合作',
    },
    hero: {
      badge: '⚡ 圣焰科技',
      titleFirst: '专注于集成电路设计制造与',
      titleHighlight: '便携式精密焊接工具研发创新',
      titleLast: '',
      subtitle: '',
      ctaPrimary: '探索核心产品与设备',
      ctaSecondary: '与技术顾问在线建联',
      statsUsers: '100K+',
      statsSpeed: '0.01ms',
      statsSecurity: '1500A',
      statsUsersLabel: 'FLAMME 智能焊接设备累计交付与服务量',
      statsSpeedLabel: '毫秒级双脉冲精密微电脑控制响应',
      statsSecurityLabel: '瞬间大倍率储能安全脉冲峰值放电电流',
    },
    about: {
      badge: '🔬 关于圣焰 / ABOUT FLAMME',
      title: '圣焰科技（深圳）有限公司',
      subtitle: '圣焰科技（深圳）有限公司是一家专注于集成电路设计制造与便携式精密焊接工具研发创新的科技企业。公司聚焦锂电池应用场景，围绕电池组装、电芯维护及储能设备维修等领域持续投入研发，致力于打造兼具专业性能与便携体验的智能焊接产品。\n\n旗下 FLAMME 品牌以技术创新为核心驱动力，推出的SPOTER和 SPOTER PRO 星点便携式点焊机 采用高性能储能焊接技术，为用户提供稳定、高效、精准的焊接体验。\n\n面向未来，圣焰科技将持续深耕新能源工具领域，坚持自主创新与品质制造，为全球用户提供更加专业、安全、高效的焊接设备与技术服务，推动新能源维修工具行业持续发展。',
      card1Title: '智能储能点焊技术',
      card1Desc: '研发自适应瞬间电容超高倍率脉冲放电机制，攻克铜极耳与高倍率电芯连接处的接触电阻及发热受损难题，提供毫欧级阻抗控制。',
      card2Title: 'FLAMME 双脉冲系统',
      card2Desc: '针对SPOTER系列设备，开发双段式清氧化及熔接焊接驱动算法，支持0.1-0.35mm纯镍极耳与各种材质电芯无损伤牢固熔合。',
      card3Title: '锂电组装及服务生态',
      card3Desc: '整合储能测试、单体压差平衡及高电流检测技术。支持针对电摩越野、大容量家庭储能及工具电池组装提供交钥匙软硬件配套方案。',
      achievementTitle: '精诚研发的创新足迹',
      achievementDesc: '从首台自适应瞬间大电流储能控制器方案飞线验证，到SPOTER系列点焊机风靡全球，圣焰人本着专业高能、安全至上，全生命周期深耕便携新能源焊接装备之美。',
    },
    products: {
      badge: '💼 核心成果 / POWERFUL PRODUCTS',
      title: '高精智能便携点焊机与组包装备',
      subtitle: '圣焰全系产品历经电芯充放电稳定性与多温区安全防过热硬核测试，具备完全独立自主研发产权，提供正规保障与终身技术支持。',
      exploreBtn: '获取产品使用手册及精密焊接白皮书',
      p1Name: '星点便携式点焊机 (SPOTER版本)',
      p1Title: '超高放电倍率双电容储能与数码指示的多功能便携点焊机',
      p1Desc: '精选A品高倍率电芯，2500mAh容量，最大1000A大电流，超高放电倍率，焊接质量更好，温控保护，温度超过60°C，自动断电。双脉冲焊接，真材实料，镀金笔端，抗氧化，寿命长；紫铜笔端，99.9%纯紫铜细节之处显真章，电阻小/导电好/熔点高，抗氧化，寿命长，焊接效果稳定。自带焊接夹具，可夹持焊接，可利用侧面，铜柱焊接，防虚焊，防误触，高效便捷体验感更佳。',
      p1Specs: ['高品质快插式超纯铜焊接笔', '清亮直观数码双管微电脑延时脉冲微调显示', '智能化防反冲自感应熔接无火花阻性断弧保护'],
      p2Name: '星点便携式点焊机 (SPOTER PRO版本)',
      p2Title: '专业电池组段装配大功率双脉冲智能微电脑点焊机一体机',
      p2Desc: '全高清彩屏面板，功能齐全信息丰富。行业领先，多脉冲+主脉冲，焊接质量牢固、可靠。自带焊接夹具及耐磨耐高温防滑垫，可夹持焊接，可利用侧面，铜住焊接，防虚焊，防误触，高效便捷体验感更佳。精选A品高倍率电芯，4000mAh 65C容量，最大1000A大电流，超高放电倍率，焊接质量更好，温控保护，温度超过60°C，自动断电。双脉冲焊接，其有真材实料镀金笔端与99.9%纯紫铜，电阻小、导电好、熔点高，抗氧化、焊接效果稳定。防火外壳，外壳采用V3级防火ABS材料，阻燃抗氧化。',
      p2Specs: ['高端清氧化智能双脉冲焊接算法', '精钻合金极细电极快插红铜笔，内阻逼近零极限', '主动式强冷温控抗高温风冷，支持长时高载连续作业'],
      p3Name: '交钥匙锂电组装及大电流仿真研制咨询服务',
      p3Title: '提供高倍率电芯分容选型、大阻性放电仿真及维修车间搭建整体解决服务',
      p3Desc: '圣焰工程研究院致力于协助中小型新能源电池Pack装配点、锂电组装极客发烧友。提供包括电芯老化测试、多物理热循环仿真方案、安全防过载方案、气动点焊机自动流水规划定制。',
      p3Specs: ['原厂智能焊接专家团队深度技术工艺支持', '全套锂电过载安全分析与极耳热传导仿真报告', '面向海内外组装商的特种BMS与多路焊接解决方案'],
    },
    contact: {
      badge: '✉️ 业务合作 / PARTNERSHIP',
      title: '联系我们',
      subtitle: '我们诚邀全球新能源维护代理商、电芯电池组装商、焊接设备分销商共图合作。圣焰工具的原厂技术支持与供应链，为您提供坚实保障。',
      nameLabel: '您的姓名或贵司全称',
      emailLabel: '主要联系电子邮件',
      subjectLabel: '合作项目内容',
      messageLabel: '合作需求详情 (请填下您的留言或订购意向)',
      submitBtn: '添加微信联络',
      sendingBtn: '正在接通圣焰专属技术服务网络...',
      successMsg: '🎉 感谢联络！您的商务与技术反馈已直达圣焰，您也可以直接扫描屏幕二维码即刻添加微信建联。',
      infoTitle: '圣焰科技（深圳）有限公司',
      infoAddr: '深圳市宝安区新安街道扬田路德至高科创园8A2栋305室',
      infoPhone: '张礼玲 18127090590',
      infoEmail: 'sales@flamme-spot.com (业务联络邮箱)',
      formCardTitle: '微信扫码 · 即刻获得定制化合作方案',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About FLAMME',
      products: 'Tech & Products',
      contact: 'Cooperation',
    },
    hero: {
      badge: '⚡ SHENGYAN TECH',
      titleFirst: 'Focusing on Integrated Circuit Design &',
      titleHighlight: 'Portable Precision Welding Tools Innovation',
      titleLast: '',
      subtitle: '',
      ctaPrimary: 'Explore Core Products',
      ctaSecondary: 'Contact Our Project Advisers',
      statsUsers: '100K+',
      statsSpeed: '0.01ms',
      statsSecurity: '1500A',
      statsUsersLabel: 'FLAMME smart welding platforms deployed and supported worldwide',
      statsSpeedLabel: 'Millisecond twin-pulse precise microcontroller reaction speed',
      statsSecurityLabel: 'Immediate high-multiplier safe shock peak discharge current',
    },
    about: {
      badge: '🔬 ABOUT FLAMME',
      title: 'Shengyan Technology (Shenzhen) Co., Ltd.',
      subtitle: 'Shengyan Technology (Shenzhen) Co., Ltd. is a tech-driven enterprise specializing in the R&D and manufacturing of integrated circuit design and portable precision welding tools.\n\nUnder our core FLAMME brand, we launch SPOTER and SPOTER PRO portable spot welders built on cutting-edge capacitor energy storage technology, bringing a highly stable, secure, and precise welder set to global workshops.',
      card1Title: 'High-Current Pulse Tech',
      card1Desc: 'Patented high-discharge mechanics effectively overcome massive electrical resistance at contact nodes, keeping tabs pristine and temperature low.',
      card2Title: 'FLAMME Dual-Pulse Grid',
      card2Desc: 'SPOTER series targets extreme nickel-strip bonding with clean pre-heat and main pulse firing, holding zero structural damage.',
      card3Title: 'Pack Assembly Systems',
      card3Desc: 'Delivering total custom tooling pipelines, including cell balancing trackers, thermal test beds, and custom battery repair units.',
      achievementTitle: 'Commitment to Quality Tools',
      achievementDesc: 'From high-rate discharging benchmarks to our internationally acclaimed SPOTER series, we design tools with security, agility, and elite welding ergonomics at heart.',
    },
    products: {
      badge: '💼 CORE TECH PORTFOLIOS',
      title: 'Supreme Portable Spot Welders & Assembly Tools',
      subtitle: 'Thoroughly stress-tested against thermal overloads and continuous operational high currents, ensuring complete safe handling and lifetime technical support.',
      exploreBtn: 'Obtain Equipment Manual & High-Precision Specs',
      p1Name: 'FLAMME PORTABLE SPOT WELDING MACHINE (SPOTER Version)',
      p1Title: 'High-Discharge Double Pulse Portable Precision Spot Welder',
      p1Desc: 'Grade-A high-rate battery cell with 2500mAh capacity and max 1000A peak discharge current. Supports clean double-pulse welding, featuring 99.9% pure orange copper gold-plated pen ends. Comes with built-in clamping fixtures for seamless side/top copper alignment. Automatically triggers thermal protection & shuts down if temperatures exceed 60°C.',
      p1Specs: ['Quick-install ultra-pure alloy copper welding pens', 'Double-screen panel for exact delay control adjustments', 'Automated trigger mechanism with complete anti-spark insulation'],
      p2Name: 'FLAMME PORTABLE SPOT WELDING MACHINE (SPOTER PRO Version)',
      p2Title: 'Heavy-Duty Intelligent Double-Pulse Precision Spot Welder with HD Screen',
      p2Desc: 'Integrates complete HD color control dashboard for multi-pulse + main pulse welding. Premium 4000mAh 65C cell supports extremely firm, reliable welds on 0.1mm to 0.12mm nickel strips (or up to 0.35mm tabs). Comes with heat-resistant non-slip working pads, active thermostatic cooling, and premium flame-retardant outer shell (V3 level ABS).',
      p2Specs: ['Dual-pulse algorithm clears surface oxidation for firm bonds', 'Solid heavy-amp copper welding pens with near-zero inner resistance', 'Thermostatic cooling tunnel handling 24/7 continuous cycles'],
      p3Name: 'Turnkey Pack Assembly Sourcing & Thermal Emulation Consultancy',
      p3Title: 'Comprehensive Battery Assembly Setup, Aging Scans, and Production Layouts',
      p3Desc: 'Our engineering institute assists micro battery builders and e-bike workshops. Supplying high-rate diagnostics, heat-conduction layouts, security bypass guides, and custom smart tool sets.',
      p3Specs: ['Direct consultancy by veteran battery specialists', 'Thermal stress modeling and cell matching criteria lists', 'Agile ODM designs and multipoint control systems for bulk builders'],
    },
    contact: {
      badge: '✉️ COOPERATE WITH US',
      title: 'Connecting for a Clean Energy Era',
      subtitle: 'We invite EV workshops, pack assemblers, and tool distributors to partner with us. Enjoy original factory support and robust supply networks.',
      nameLabel: 'Your Organization & Representative Name',
      emailLabel: 'Contact Email Address',
      subjectLabel: 'Enquiry Subject',
      messageLabel: 'Detailed Project Needs',
      submitBtn: 'Add WeChat Contact',
      sendingBtn: 'Accessing secure technical service network...',
      successMsg: '🎉 Submitted! Your business and technical inquiry has reached our team. You can also scan the WeChat QR Code to contact us directly.',
      infoTitle: 'Shengyan Technology (Shenzhen) Co., Ltd.',
      infoAddr: 'Room 305, Block 8A2, Dezhigao Science & Technology Park, Yangtian Road, Xinan Street, Baoan District, Shenzhen, China',
      infoPhone: 'Zhang Liling (+86) 18127090590',
      infoEmail: 'sales@flamme-spot.com (Official Mailbox)',
      formCardTitle: 'Scan WeChat • Custom Sourcing & Support',
    },
  },
};

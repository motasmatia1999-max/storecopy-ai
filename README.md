const templates = {
  ar: {
    professional: {
      headline: "{productName} مصمم لتقديم أداء موثوق في كل يوم",
      description:
        "{productName} تم تصميمه لتوفير تجربة استخدام سلسة وموثوقة في حياتك اليومية. يجمع بين الأداء القوي، سهولة الاستخدام، والهوية الاحترافية المناسبة للمتاجر والعلامات التجارية الحديثة.",
      bullets: [
        "أداء موثوق وفعال",
        "تصميم عملي ومريح",
        "مناسب للاستخدام اليومي",
        "حل احترافي وقابل للتطوير"
      ],
      ad: "حل عملي ومريح يساعدك على توفير الوقت وتحسين تجربة العملاء في كل استخدام."
    },
    premium: {
      headline: "{productName} بتصميم أنيق وجودة فائقة",
      description:
        "يمنحك {productName} تجربة مميزة تجمع بين الأداء العالي والهوية الأنيقة. تم تصميمه ليضيف لمسة احترافية وفخامة إلى كل استخدام يومي، مع سهولة استيعاب المنتج في الحياة اليومية.",
      bullets: [
        "تصميم فاخر ومريح",
        "جودة عالية ومتانة",
        "مناسب للمتاجر العصرية",
        "تجربة مستخدم ممتازة"
      ],
      ad: "اكتشف تجربة فاخرة تجمع بين الأداء المتميز والتصميم الأنيق."
    },
    bold: {
      headline: "{productName} بقوة وأداء لا يلين",
      description:
        "تم تصميم {productName} ليمنحك أداءً قويًا وموثوقًا في كل لحظة. مناسب للمتطلبات اليومية، بيئة العمل السريعة، وأصحاب المشاريع الذين يحتاجون إلى حل عملي مستقر ومريح.",
      bullets: [
        "أداء قوي وثابت",
        "موثوق في الاستخدام اليومي",
        "مناسب للبيئات السريعة",
        "حل عملي ومجرب"
      ],
      ad: "قوة، موثوقية، وسهولة استخدام في كل يوم."
    },
    friendly: {
      headline: "{productName} سهل جدًا في الاستخدام",
      description:
        "{productName} مصمم ليجعل تجربة المستخدم أسهل وأبسط. مع تصميمه العملي وخصائصه المفيدة، يساعدك على الحصول على نتائج ممتازة دون تعقيد أو عناء، في كل مرة تستخدمه.",
      bullets: [
        "سهل الاستخدام",
        "عملي ومريح",
        "مناسب للمنزل والمكتب",
        "يوفر الوقت والجهد"
      ],
      ad: "حل عملي ومريح يجعلك تستمتع بتجربة استخدام أسهل في كل يوم."
    },
    luxury: {
      headline: "{productName} بتفاصيل فاخرة وتجربة استثنائية",
      description:
        "يجمع {productName} بين الفخامة والأداء العملي، ليمنحك تجربة خاصة تليق بالأسلوب الراقي. مع تفاصيل دقيقة وتصميم أنيق، يصبح اختياري المفضل للمتاجر والذوق المتطور.",
      bullets: [
        "ذوق راقٍ ومميز",
        "تفاصيل فاخرة",
        "مرونة في الاستخدام",
        "تصميم أنيق واحترافي"
      ],
      ad: "استمتع بتجربة راقية وتفاصيل فاخرة في كل استخدام."
    }
  },
  en: {
    professional: {
      headline: "{productName} built for reliable everyday performance",
      description:
        "{productName} is designed to deliver smooth and dependable performance for daily use. It combines practical design, efficient features, and strong customer value for modern stores and product-driven brands.",
      bullets: [
        "Reliable day-to-day performance",
        "Simple and practical design",
        "Built for everyday use",
        "Strong value for modern shoppers"
      ],
      ad: "A practical solution that helps customers buy with confidence and comfort."
    },
    premium: {
      headline: "{productName} with a refined, premium finish",
      description:
        "{productName} brings together strong performance and a premium visual identity. Built for users who want both style and function, it adds value to everyday routines and product pages alike.",
      bullets: [
        "Premium design and finish",
        "High-quality build",
        "Modern and functional",
        "Made for elevated daily use"
      ],
      ad: "Upgrade your catalog with a premium product experience customers will notice instantly."
    },
    bold: {
      headline: "{productName} delivers power and reliability",
      description:
        "{productName} is built to perform when it matters most. It is designed for busy routines, active lifestyles, and modern buyers who expect quality, consistency, and confidence at every use.",
      bullets: [
        "Strong and dependable",
        "Works for fast-paced routines",
        "Efficient and practical",
        "Made for daily use"
      ],
      ad: "Power, reliability, and confidence in every use."
    },
    friendly: {
      headline: "{productName} made to be easy and convenient",
      description:
        "{productName} is designed to make everyday life easier. With a practical layout and thoughtful features, it helps customers enjoy a smoother and more convenient experience every time they use it.",
      bullets: [
        "Easy to use",
        "Comfortable and practical",
        "Perfect for everyday life",
        "Designed for real-world use"
      ],
      ad: "A simple upgrade that brings comfort and convenience to your daily routine."
    },
    luxury: {
      headline: "{productName} crafted for a refined lifestyle",
      description:
        "{productName} blends elegance, precision, and usability into one refined design. It is created for customers who want premium details, strong value, and a memorable experience in every interaction.",
      bullets: [
        "Luxury-inspired finish",
        "Premium quality",
        "Elegant and functional",
        "Made for elevated living"
      ],
      ad: "Deliver a premium product experience that feels as refined as it looks."
    }
  },
  es: {
    professional: {
      headline: "{productName} pensado para un rendimiento fiable",
      description:
        "{productName} está diseñado para ofrecer un rendimiento fiable y práctico en el uso diario. Combina un diseño funcional, calidad y valor para marcas modernas y comercios digitales.",
      bullets: [
        "Rendimiento fiable",
        "Diseño práctico",
        "Ideal para uso diario",
        "Valor claro para clientes"
      ],
      ad: "Una solución práctica que ayuda a los clientes a comprar con confianza."
    },
    premium: {
      headline: "{productName} con un acabado premium y elegante",
      description:
        "{productName} combina rendimiento y estilo para ofrecer una experiencia moderna y premium. Está pensado para quienes valora tanto la belleza como la utilidad en su vida diaria.",
      bullets: [
        "Acabado premium",
        "Calidad superior",
        "Diseño moderno",
        "Experiencia refinada"
      ],
      ad: "Aporta una experiencia premium que los clientes notarán desde el primer vistazo."
    },
    bold: {
      headline: "{productName} con fuerza y confiabilidad",
      description:
        "{productName} está desarrollado para ofrecer fuerza, consistencia y valor real en cada uso. Es una opción ideal para marcas que necesitan soluciones funcionales y confiables.",
      bullets: [
        "Fuerte y confiable",
        "Diseño práctico",
        "Desempeño constante",
        "Apto para uso diario"
      ],
      ad: "Fuerza, fiabilidad y rendimiento constante en cada uso."
    },
    friendly: {
      headline: "{productName} fácil de usar y muy práctico",
      description:
        "{productName} está pensado para hacer la vida diaria más sencilla. Su diseño práctico y sus funciones útiles permiten una experiencia clara, fácil y agradable para clientes de todos los niveles.",
      bullets: [
        "Fácil de usar",
        "Muy práctico",
        "Ideal para el día a día",
        "Diseñado para la vida real"
      ],
      ad: "Un pequeño cambio que hace tu rutina mucho más cómoda."
    },
    luxury: {
      headline: "{productName} con un estilo refinado y exclusivo",
      description:
        "{productName} combina lujo, precisión y utilidad en un diseño sofisticado. Está pensado para clientes que valoran cada detalle y buscan una experiencia premium en cada uso.",
      bullets: [
        "Estilo refinado",
        "Detalles premium",
        "Calidad superior",
        "Experiencia exclusiva"
      ],
      ad: "Lleva un toque de lujo a cada detalle de tu experiencia con el producto."
    }
  },
  fr: {
    professional: {
      headline: "{productName} pensé pour une utilisation fiable et pratique",
      description:
        "{productName} est conçu pour offrir une expérience fiable et fluide au quotidien. Il combine un design fonctionnel, des performances solides et une vraie valeur pour les marques modernes.",
      bullets: [
        "Performance fiable",
        "Design pratique",
        "Idéal pour un usage quotidien",
        "Valeur claire pour les clients"
      ],
      ad: "Une solution pratique qui aide les clients à acheter avec plus de confiance."
    },
    premium: {
      headline: "{productName} au design premium et élégant",
      description:
        "{productName} associe performance et style dans une expérience premium. Il est conçu pour les clients qui recherchent à la fois qualité, élégance et confort au quotidien.",
      bullets: [
        "Design premium",
        "Qualité supérieure",
        "Style moderne",
        "Expérience raffinée"
      ],
      ad: "Améliorez votre catalogue avec une expérience premium que les clients remarqueront immédiatement."
    },
    bold: {
      headline: "{productName} avec puissance et fiabilité",
      description:
        "{productName} est conçu pour offrir une puissance constante et une fiabilité durable. Il convient aux clients qui recherchent une solution solide, pratique et sans compromis.",
      bullets: [
        "Puissance et fiabilité",
        "Très pratique",
        "Idéal pour un usage quotidien",
        "Solution robuste"
      ],
      ad: "Puissance, fiabilité et confort à chaque utilisation."
    },
    friendly: {
      headline: "{productName} simple, agréable et facile à utiliser",
      description:
        "{productName} a été conçu pour rendre la vie quotidienne plus simple. Avec ses fonctionnalités utiles et son design pratique, il offre une expérience fluide, agréable et sans complications.",
      bullets: [
        "Simple à utiliser",
        "Très pratique",
        "Confort au quotidien",
        "Pensé pour la vie réelle"
      ],
      ad: "Une solution simple qui rend votre routine plus facile et plus agréable."
    },
    luxury: {
      headline: "{productName} avec un style raffiné et luxueux",
      description:
        "{productName} combine élégance, précision et utilité dans un design haut de gamme. Il est fait pour les clients qui recherchent un produit premium et une expérience mémorable.",
      bullets: [
        "Style raffiné",
        "Détails premium",
        "Qualité supérieure",
        "Expérience élégante"
      ],
      ad: "Offrez une touche de luxe à chaque étape de l’expérience client."
    }
  },
  de: {
    professional: {
      headline: "{productName} für zuverlässige Alltagstauglichkeit",
      description:
        "{productName} wurde entwickelt, um im Alltag eine starke und zuverlässige Leistung zu bieten. Mit praktischem Design, klarer Funktionalität und gutem Mehrwert eignet es sich ideal für moderne Shops und Marken.",
      bullets: [
        "Zuverlässige Leistung",
        "Praxisnahes Design",
        "Für den Alltag geeignet",
        "Starker Mehrwert"
      ],
      ad: "Eine praktische Lösung, die Kunden mit mehr Vertrauen und Komfort überzeugt."
    },
    premium: {
      headline: "{productName} mit hochwertigem Premium-Look",
      description:
        "{productName} verbindet starke Leistung mit einem modernen Premium-Design. Es ist ideal für Käufer, die Style und Funktionalität zugleich schätzen.",
      bullets: [
        "Premium-Design",
        "Hohe Qualität",
        "Modern und funktional",
        "Perfekt für den Alltag"
      ],
      ad: "Verbessern Sie Ihr Angebot mit einem Premium-Produkt, das sofort auffällt."
    },
    bold: {
      headline: "{productName} mit starker Leistung und Stabilität",
      description:
        "{productName} wurde für starke Leistung, Stabilität und Alltagstauglichkeit entwickelt. Es ist die richtige Wahl für Kunden, die Qualität und Vertrauen in jedem Einsatz erwarten.",
      bullets: [
        "Starke Leistung",
        "Zuverlässig im Einsatz",
        "Praktisch und robust",
        "Für den modernen Alltag"
      ],
      ad: "Leistung, Stabilität und Zuverlässigkeit in einem Produkt."
    },
    friendly: {
      headline: "{productName} einfach zu bedienen und angenehm im Einsatz",
      description:
        "{productName} ist so gebaut, dass der Alltag einfacher und angenehmer wird. Mit intuitiver Nutzung und nützlichen Funktionen schafft es eine klare, angenehme Erfahrung für jeden Kunden.",
      bullets: [
        "Einfach zu bedienen",
        "Praktisch und komfortabel",
        "Für den Alltag geeignet",
        "Entwickelt für den echten Gebrauch"
      ],
      ad: "Eine kleine Verbesserung, die Ihren Alltag einfacher und angenehmer macht."
    },
    luxury: {
      headline: "{productName} mit elegantem Luxusgefühl",
      description:
        "{productName} verbindet Luxus, Präzision und Funktionalität in einem stilvollen Design. Es ist perfekt für Kunden, die jeden Detail wertschätzen und ein hochwertiges Erlebnis erwarten.",
      bullets: [
        "Elegantes Design",
        "Premium-Details",
        "Hohe Qualität",
        "Luxuriöses Erlebnis"
      ],
      ad: "Heben Sie Ihr Angebot mit einem Produkt hervor, das Luxus und Funktion verbindet."
    }
  },
  pt: {
    professional: {
      headline: "{productName} pensado para desempenho confiável no dia a dia",
      description:
        "{productName} foi projetado para oferecer um desempenho confiável e funcional no uso diário. Combina design prático, qualidade e valor real para lojas e marcas modernas.",
      bullets: [
        "Desempenho confiável",
        "Design prático",
        "Ideal para uso diário",
        "Valor real para clientes"
      ],
      ad: "Uma solução prática que ajuda os clientes a comprar com mais confiança."
    },
    premium: {
      headline: "{productName} com acabamento premium e refinado",
      description:
        "{productName} combina desempenho, design moderno e qualidade premium. Foi pensado para clientes que valorizam funcionalidade e estilo em um mesmo produto.",
      bullets: [
        "Acabamento premium",
        "Qualidade superior",
        "Design moderno",
        "Experiência refinada"
      ],
      ad: "Eleve sua coleção com um produto premium que chama atenção na hora."
    },
    bold: {
      headline: "{productName} com força e confiabilidade",
      description:
        "{productName} foi criado para oferecer potência, consistência e valor real em cada uso. É uma escolha ideal para marcas que precisam de soluções robustas e eficientes.",
      bullets: [
        "Potência e confiabilidade",
        "Uso diário eficiente",
        "Design prático",
        "Robustez e valor"
      ],
      ad: "Potência, confiabilidade e confiança em cada uso."
    },
    friendly: {
      headline: "{productName} simples, prático e fácil de usar",
      description:
        "{productName} foi pensado para tornar a rotina mais simples e agradável. Com design prático e recursos úteis, ele oferece uma experiência mais confortável e eficiente para qualquer cliente.",
      bullets: [
        "Fácil de usar",
        "Muito prático",
        "Conforto no dia a dia",
        "Pensado para uso real"
      ],
      ad: "Uma solução simples que deixa o dia a dia mais fácil e agradável."
    },
    luxury: {
      headline: "{productName} com um toque luxuoso e sofisticado",
      description:
        "{productName} combina luxo, precisão e utilidade em um design sofisticado. Foi pensado para clientes que valorizam detalhes premium e uma experiência memorável em cada uso.",
      bullets: [
        "Detalhes premium",
        "Qualidade superior",
        "Design sofisticado",
        "Experiência premium"
      ],
      ad: "Traga um ar premium à sua linha com um produto que surpreende por design e valor."
    }
  }
};

function buildCopy(productName, features, tone, language) {
  const finalName = productName.trim() || "Premium Product";
  const featureList = features
    .split(/\n|,/) 
    .map((item) => item.trim())
    .filter(Boolean);

  const safeFeatures = featureList.length ? featureList.slice(0, 4) : [
    "High quality materials",
    "Modern design",
    "Easy to use",
    "Reliable performance"
  ];

  const validLanguage = templates[language] ? language : "en";
  const finalTone = tone || "professional";
  const template = templates[validLanguage][finalTone] || templates.en.professional;

  const headline = template.headline.replace(/{productName}/g, finalName);
  const description = template.description.replace(/{productName}/g, finalName);
  const ad = template.ad.replace(/{productName}/g, finalName);

  return {
    headline,
    description,
    bullets: safeFeatures,
    ad
  };
}

const form = document.getElementById("copyForm");
const productNameInput = document.getElementById("productName");
const featuresInput = document.getElementById("productFeatures");
const toneSelect = document.getElementById("tone");
const languageSelect = document.getElementById("language");

const headlineOutput = document.getElementById("headlineOutput");
const descriptionOutput = document.getElementById("descriptionOutput");
const bulletsOutput = document.getElementById("bulletsOutput");
const adOutput = document.getElementById("adOutput");
const copyTextBtn = document.getElementById("copyTextBtn");

function renderOutput() {
  const output = buildCopy(
    productNameInput.value,
    featuresInput.value,
    toneSelect.value,
    languageSelect.value
  );

  headlineOutput.textContent = output.headline;
  descriptionOutput.textContent = output.description;
  bulletsOutput.innerHTML = output.bullets.map((item) => `<li>${item}</li>`).join("");
  adOutput.textContent = output.ad;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderOutput();
});

productNameInput.addEventListener("input", renderOutput);
featuresInput.addEventListener("input", renderOutput);
toneSelect.addEventListener("change", renderOutput);
languageSelect.addEventListener("change", renderOutput);

copyTextBtn.addEventListener("click", async () => {
  const resultText = [
    headlineOutput.textContent,
    descriptionOutput.textContent,
    "\nFeatures:\n" + Array.from(bulletsOutput.querySelectorAll("li")).map((li) => li.textContent).join("\n"),
    "\nAd copy:\n" + adOutput.textContent
  ].join("\n\n");

  try {
    await navigator.clipboard.writeText(resultText);
    copyTextBtn.textContent = "Copied";
    setTimeout(() => {
      copyTextBtn.textContent = "Copy text";
    }, 1200);
  } catch (error) {
    copyTextBtn.textContent = "Copy failed";
    setTimeout(() => {
      copyTextBtn.textContent = "Copy text";
    }, 1200);
  }
});

renderOutput();

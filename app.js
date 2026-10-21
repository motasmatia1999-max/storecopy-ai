const templates = {
  ar: {
    professional: {
      headline: "{productName} مصمم لتقديم أداء ممتاز يوميًا",
      description:
        "تم تصميم {productName} ليمنحك تجربة استخدام سلسة وموثوقة في كل يوم. يجمع بين الأداء العالي، التصميم المريح، والسهولة في الاستخدام، ليصبح خيارًا عمليًا واحترافيًا للمنازل والمكاتب والأنشطة اليومية.",
      bullets: [
        "أداء موثوق ومميز",
        "تصميم عملي ومريح",
        "مناسب للاستخدام اليومي",
        "حل فعّال وسهل في التطبيق"
      ],
      ad: "حل عملي ومريح يضيف راحة أكبر إلى روتينك اليومي."
    },
    premium: {
      headline: "{productName} بتصميم أنيق وجودة فاخرة",
      description:
        "يقدم {productName} تجربة فاخرة تجمع بين الأداء المتميز والتصميم الأنيق. مصمم ليمنح المستخدم راحة وثقة، مع تفاصيل دقيقة تجعل كل استخدام يشعر بالتميز والاحترافية.",
      bullets: [
        "تصميم فاخر ومتطور",
        "جودة عالية ومتانة",
        "مناسب للمساحات العصرية",
        "تجربة استخدام متميزة"
      ],
      ad: "استمتع بتجربة فاخرة تجمع بين الأداء المميز والهيكلية الأنيقة."
    },
    bold: {
      headline: "{productName} بقوة وأداء لا يتوقف",
      description:
        "{productName} تم تصميمه ليمنحك قوة وأداء مستقر في كل لحظة. مناسب لمن يبحث عن حل عملي، موثوق، ومناسب للاستخدام اليومي في بيئة سريعة ومتطلبة.",
      bullets: [
        "أداء قوي وثابت",
        "مناسب للاستخدام المستمر",
        "تصميم عملي وقوي",
        "حل موثوق لكل يوم"
      ],
      ad: "قوة، موثوقية، وأداء مستقر في كل استخدام."
    },
    friendly: {
      headline: "{productName} سهل الاستخدام ومريح في كل يوم",
      description:
        "{productName} يقدم تجربة بسيطة ومريحة تناسبك في كل استخدام. من خلال تصميمه العملي ووظائفه المفيدة، يساعدك على إنجاز المهام بسهولة وراحة في حياتك اليومية.",
      bullets: [
        "سهل الاستخدام",
        "مريح وعملي",
        "مناسب للعائلة والمكتب",
        "يوفر وقتك وجهدك"
      ],
      ad: "حل عملي ومريح يجعل يومك أسهل وأكثر سلاسة."
    },
    luxury: {
      headline: "{productName} بتفاصيل فاخرة وتجربة استثنائية",
      description:
        "{productName} يجمع بين الفخامة والوظائف العملية، ليمنحك تجربة خاصة تليق بالأسلوب الراقي. تم تصميمه بعناية لتضيف لمسة احترافية إلى كل روتين يومي أو مساحة منزلية.",
      bullets: [
        "تجربة فاخرة ومميزة",
        "تفاصيل دقيقة وجودة عالية",
        "مناسب للذوق الراقي",
        "تصميم أنيق ومميز"
      ],
      ad: "اكتشف مستوى جديد من الفخامة والراحة مع {productName}."
    }
  },
  en: {
    professional: {
      headline: "{productName} built for reliable everyday performance",
      description:
        "{productName} is designed to deliver smooth, dependable performance for daily use. It combines practical design, efficient functionality, and strong value to support modern lifestyles and professional routines.",
      bullets: [
        "Reliable day-to-day performance",
        "Simple and practical design",
        "Built for everyday use",
        "Strong value and usability"
      ],
      ad: "A practical solution that makes everyday tasks easier and more efficient."
    },
    premium: {
      headline: "{productName} with a refined, premium finish",
      description:
        "{productName} offers a premium experience with a modern look, durable build, and thoughtful design. It is crafted for people who value both style and functionality in their everyday essentials.",
      bullets: [
        "Premium design and finish",
        "High-quality materials",
        "Stylish and functional",
        "Built for elevated everyday use"
      ],
      ad: "Upgrade your routine with a premium upgrade that feels as good as it looks."
    },
    bold: {
      headline: "{productName} delivers power and reliability",
      description:
        "{productName} is built to perform when it matters most. Whether at home, work, or on the move, it combines strength, efficiency, and reliability to help you stay productive and prepared.",
      bullets: [
        "Strong and dependable",
        "Built for active lifestyles",
        "Efficient and practical",
        "Ready for everyday demands"
      ],
      ad: "Built for performance. Ready for every challenge."
    },
    friendly: {
      headline: "{productName} made to feel easy and convenient",
      description:
        "{productName} is designed to make everyday life easier. With a simple layout, thoughtful features, and dependable performance, it helps you enjoy a smoother and more convenient experience every day.",
      bullets: [
        "Easy to use",
        "Practical and convenient",
        "Comfortable for daily routines",
        "Designed for real life"
      ],
      ad: "A simple upgrade that brings more comfort and convenience to your day."
    },
    luxury: {
      headline: "{productName} crafted for a refined lifestyle",
      description:
        "{productName} blends luxury, precision, and usability into one elegant design. With premium details and a modern finish, it brings sophistication to your daily routine while delivering reliable performance.",
      bullets: [
        "Luxury design details",
        "Premium build quality",
        "Elegant and functional",
        "Made for elevated living"
      ],
      ad: "Design your space with a product that feels luxurious in every detail."
    }
  },
  es: {
    professional: {
      headline: "{productName} pensado para un uso diario fiable",
      description:
        "{productName} está diseñado para ofrecer un rendimiento fluido y confiable en el día a día. Combina materiales de calidad, diseño práctico y facilidad de uso para adaptarse a un estilo de vida moderno.",
      bullets: [
        "Rendimiento confiable",
        "Diseño sencillo y práctico",
        "Ideal para uso diario",
        "Gran relación calidad-precio"
      ],
      ad: "Una solución práctica que simplifica tu rutina diaria."
    },
    premium: {
      headline: "{productName} con estilo premium y acabado refinado",
      description:
        "{productName} ofrece una experiencia premium con un diseño moderno y una calidad superior. Está pensado para quienes buscan combinar estilo, comodidad y desempeño en su día a día.",
      bullets: [
        "Estilo premium",
        "Calidad superior",
        "Diseño moderno",
        "Experiencia mejorada"
      ],
      ad: "Eleva tu rutina con un producto que combina diseño y desempeño."
    },
    bold: {
      headline: "{productName} con fuerza y rendimiento constante",
      description:
        "{productName} está construido para ofrecer potencia y fiabilidad en cada uso. Perfecto para quienes necesitan una solución sólida y eficiente en su día a día.",
      bullets: [
        "Rendimiento sólido",
        "Diseño práctico",
        "Fiabilidad constante",
        "Ideal para uso activo"
      ],
      ad: "Potencia y fiabilidad para cada momento del día."
    },
    friendly: {
      headline: "{productName} fácil de usar y cómodo",
      description:
        "{productName} está pensado para que cada experiencia sea simple, cómoda y eficiente. Su diseño práctico y sus funciones útiles lo convierten en una elección ideal para el uso diario.",
      bullets: [
        "Fácil de usar",
        "Muy práctico",
        "Comodidad diaria",
        "Diseñado para la vida real"
      ],
      ad: "Una solución simple que hace tu día a día más cómodo."
    },
    luxury: {
      headline: "{productName} con un estilo refinado y elegante",
      description:
        "{productName} combina lujo, precisión y utilidad en un diseño elegante. Creado para aportar un toque sofisticado a cada espacio y momento del día.",
      bullets: [
        "Diseño elegante",
        "Detalles premium",
        "Materiales de calidad",
        "Estética sofisticada"
      ],
      ad: "Sumérgete en una experiencia de lujo con cada uso."
    }
  },
  fr: {
    professional: {
      headline: "{productName} conçu pour un usage quotidien fiable",
      description:
        "{productName} a été pensé pour offrir une performance fluide et fiable au quotidien. Il associe design pratique, efficacité et qualité pour s’adapter au rythme de vie moderne.",
      bullets: [
        "Performance fiable",
        "Design pratique",
        "Idéal pour un usage quotidien",
        "Grande valeur et simplicité"
      ],
      ad: "Une solution pratique qui simplifie chaque journée."
    },
    premium: {
      headline: "{productName} au design premium et raffiné",
      description:
        "{productName} offre une expérience premium grâce à son design moderne, sa finition élégante et sa qualité supérieure. Il convient à ceux qui recherchent à la fois style et fonctionnalité.",
      bullets: [
        "Design premium",
        "Qualité supérieure",
        "Style moderne",
        "Expérience améliorée"
      ],
      ad: "Améliorez votre quotidien avec un produit premium et élégant."
    },
    bold: {
      headline: "{productName} pour des performances solides",
      description:
        "{productName} a été conçu pour garder une performance constante et fiable dans chaque situation. Il combine résistance, efficacité et praticité pour répondre aux besoins du quotidien.",
      bullets: [
        "Performance solide",
        "Fiabilité constante",
        "Pratique et efficace",
        "Idéal pour un usage actif"
      ],
      ad: "Puissance, fiabilité et efficacité à chaque utilisation."
    },
    friendly: {
      headline: "{productName} simple, pratique et agréable à utiliser",
      description:
        "{productName} facilite la vie quotidienne grâce à son design simple, son utilisation intuitive et ses fonctionnalités utiles. Il offre une expérience agréable et sans complications.",
      bullets: [
        "Simple à utiliser",
        "Très pratique",
        "Confort au quotidien",
        "Conçu pour la vie réelle"
      ],
      ad: "Un petit ajout qui rend votre journée plus facile."
    },
    luxury: {
      headline: "{productName} avec un esprit luxe et raffinement",
      description:
        "{productName} associe luxe, précision et élégance dans un design pensé pour les utilisateurs qui recherchent une expérience exclusive et raffinée au quotidien.",
      bullets: [
        "Détails luxueux",
        "Qualité premium",
        "Élégance moderne",
        "Expérience raffinée"
      ],
      ad: "Apportez une touche de luxe à votre quotidien."
    }
  },
  de: {
    professional: {
      headline: "{productName} für zuverlässige Alltagstauglichkeit",
      description:
        "{productName} wurde entwickelt, um im Alltag eine zuverlässige und reibungslose Leistung zu bieten. Es kombiniert praktisches Design, effiziente Funktionalität und guten Mehrwert für den modernen Alltag.",
      bullets: [
        "Zuverlässige Leistung",
        "Praxisnahes Design",
        "Ideal für den Alltag",
        "Guter Mehrwert"
      ],
      ad: "Eine praktische Lösung, die Ihren Alltag einfacher macht."
    },
    premium: {
      headline: "{productName} mit hochwertigem Premium-Design",
      description:
        "{productName} verbindet Premium-Qualität mit modernem Design und durchdachter Funktionalität. Es ist ideal für Menschen, die Stil und Alltagstauglichkeit gleichermaßen schätzen.",
      bullets: [
        "Premium-Design",
        "Hohe Qualität",
        "Modern und funktional",
        "Für den Alltag mit Stil"
      ],
      ad: "Verbessern Sie Ihren Alltag mit einem Produkt, das aussieht und funktioniert wie Premium."
    },
    bold: {
      headline: "{productName} mit starker Leistung und Zuverlässigkeit",
      description:
        "{productName} wurde für solide Leistung und zuverlässige Nutzung entwickelt. Ob zu Hause, im Büro oder unterwegs – es bietet starke Funktionalität und eine moderne, praktische Lösung.",
      bullets: [
        "Starke Leistung",
        "Zuverlässig und robust",
        "Einfache Nutzung",
        "Für den Alltag geeignet"
      ],
      ad: "Leistung, Zuverlässigkeit und Alltagstauglichkeit in einem."
    },
    friendly: {
      headline: "{productName} einfach zu bedienen und angenehm im Einsatz",
      description:
        "{productName} macht den Alltag einfacher. Mit einem praktischen Design und nützlichen Funktionen bietet es eine angenehme und unkomplizierte Nutzung für den täglichen Einsatz.",
      bullets: [
        "Einfach zu bedienen",
        "Praxisnah und komfortabel",
        "Für den täglichen Gebrauch",
        "Für das echte Leben gedacht"
      ],
      ad: "Eine einfache Lösung, die Ihren Alltag angenehmer macht."
    },
    luxury: {
      headline: "{productName} mit einem eleganten Luxus-Feeling",
      description:
        "{productName} verbindet Luxus, Präzision und Funktionalität in einem stilvollen Design. Es verleiht Ihren Alltag eine hochwertige und elegante Note ohne Kompromisse bei der Nutzung.",
      bullets: [
        "Elegantes Design",
        "Premium-Details",
        "Hochwertige Verarbeitung",
        "Luxuriöse Alltagserfahrung"
      ],
      ad: "Bringen Sie mehr Luxus und Stil in Ihren Alltag."
    }
  },
  pt: {
    professional: {
      headline: "{productName} projetado para desempenho confiável no dia a dia",
      description:
        "{productName} foi criado para oferecer desempenho suave e confiável no uso diário. Combina design prático, funcionalidade eficiente e valor real para quem busca qualidade no dia a dia.",
      bullets: [
        "Desempenho confiável",
        "Design prático",
        "Uso diário ideal",
        "Excelente relação custo-benefício"
      ],
      ad: "Uma solução prática que torna o seu dia a dia mais eficiente."
    },
    premium: {
      headline: "{productName} com acabamento premium e design refinado",
      description:
        "{productName} oferece uma experiência premium com aparência moderna, acabamento refinado e materiais de qualidade. Foi desenvolvido para quem valoriza conforto, estilo e performance.",
      bullets: [
        "Design premium",
        "Qualidade superior",
        "Estilo moderno",
        "Experiência aprimorada"
      ],
      ad: "Eleve sua rotina com um produto que combina estilo e desempenho."
    },
    bold: {
      headline: "{productName} com potência e confiabilidade",
      description:
        "{productName} foi criado para manter alto desempenho em qualquer situação. É uma solução forte, eficiente e prática para quem precisa de confiabilidade no uso diário.",
      bullets: [
        "Potência e confiabilidade",
        "Uso diário eficiente",
        "Design prático",
        "Alta performance"
      ],
      ad: "Potência, confiabilidade e eficiência em um só produto."
    },
    friendly: {
      headline: "{productName} fácil de usar e muito confortável",
      description:
        "{productName} foi pensado para facilitar a rotina do dia a dia com uma experiência simples, confortável e útil. Seu design prático torna o uso mais agradável e eficiente.",
      bullets: [
        "Fácil de usar",
        "Muito prático",
        "Conforto no dia a dia",
        "Pensado para a vida real"
      ],
      ad: "Uma solução simples que torna sua rotina mais fácil e mais agradável."
    },
    luxury: {
      headline: "{productName} com um toque premium e sofisticado",
      description:
        "{productName} combina sofisticação, precisão e funcionalidade em um design elegante. É a escolha perfeita para quem quer trazer luxo e praticidade para o dia a dia.",
      bullets: [
        "Detalhes premium",
        "Qualidade superior",
        "Design elegante",
        "Experiência sofisticada"
      ],
      ad: "Adicione um toque de luxo à sua rotina com {productName}."
    }
  }
};

const toneLabels = {
  ar: {
    professional: "احترافي",
    premium: "فاخر",
    bold: "قوي",
    friendly: "ودود",
    luxury: "فاخر جدًا"
  },
  en: {
    professional: "Professional",
    premium: "Premium",
    bold: "Bold",
    friendly: "Friendly",
    luxury: "Luxury"
  },
  es: {
    professional: "Profesional",
    premium: "Premium",
    bold: "Fuerte",
    friendly: "Amigable",
    luxury: "Lujo"
  },
  fr: {
    professional: "Professionnel",
    premium: "Premium",
    bold: "Audacieux",
    friendly: "Amical",
    luxury: "Luxe"
  },
  de: {
    professional: "Professionell",
    premium: "Premium",
    bold: "Stark",
    friendly: "Freundlich",
    luxury: "Luxus"
  },
  pt: {
    professional: "Profissional",
    premium: "Premium",
    bold: "Forte",
    friendly: "Amigável",
    luxury: "Luxo"
  }
};

function buildOutput(productName, features, tone, language) {
  const name = productName.trim() || "Premium Product";
  const featList = features
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  const finalFeatures = featList.length ? featList.slice(0, 4) : [
    "High quality materials",
    "Modern design",
    "Easy to use",
    "Reliable performance"
  ];

  const toneKey = tone || "professional";
  const lang = templates[language] ? language : "en";
  const template = templates[lang][toneKey] || templates.en.professional;

  const headline = template.headline.replace(/{productName}/g, name);
  const description = template.description.replace(/{productName}/g, name);
  const ad = template.ad.replace(/{productName}/g, name);

  const bullets = finalFeatures.map((item, idx) => {
    const label = `${idx + 1}. ${item}`;
    return label;
  });

  return {
    headline,
    description,
    bullets,
    ad,
    toneLabel: toneLabels[lang][toneKey] || tone
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const productName = productNameInput.value;
  const features = featuresInput.value;
  const tone = toneSelect.value;
  const language = languageSelect.value;

  const output = buildOutput(productName, features, tone, language);

  headlineOutput.textContent = output.headline;
  descriptionOutput.textContent = output.description;
  bulletsOutput.innerHTML = output.bullets
    .map((bullet) => `<li>${bullet}</li>`)
    .join("");
  adOutput.textContent = output.ad;
});

copyTextBtn.addEventListener("click", async () => {
  const content = [
    headlineOutput.textContent,
    descriptionOutput.textContent,
    Array.from(bulletsOutput.querySelectorAll("li"))
      .map((li) => li.textContent)
      .join("\n"),
    adOutput.textContent
  ].join("\n\n");

  try {
    await navigator.clipboard.writeText(content);
    copyTextBtn.textContent = "Copied";
    setTimeout(() => {
      copyTextBtn.textContent = "Copy text";
    }, 1300);
  } catch (error) {
    copyTextBtn.textContent = "Copy failed";
    setTimeout(() => {
      copyTextBtn.textContent = "Copy text";
    }, 1300);
  }
});

const initialOutput = buildOutput(
  productNameInput.value,
  featuresInput.value,
  toneSelect.value,
  languageSelect.value
);
headlineOutput.textContent = initialOutput.headline;
descriptionOutput.textContent = initialOutput.description;
bulletsOutput.innerHTML = initialOutput.bullets
  .map((bullet) => `<li>${bullet}</li>`)
  .join("");
adOutput.textContent = initialOutput.ad;

productNameInput.addEventListener("input", () => {
  const output = buildOutput(
    productNameInput.value,
    featuresInput.value,
    toneSelect.value,
    languageSelect.value
  );
  headlineOutput.textContent = output.headline;
  descriptionOutput.textContent = output.description;
  bulletsOutput.innerHTML = output.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  adOutput.textContent = output.ad;
});

featuresInput.addEventListener("input", () => {
  const output = buildOutput(
    productNameInput.value,
    featuresInput.value,
    toneSelect.value,
    languageSelect.value
  );
  headlineOutput.textContent = output.headline;
  descriptionOutput.textContent = output.description;
  bulletsOutput.innerHTML = output.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  adOutput.textContent = output.ad;
});

toneSelect.addEventListener("change", () => {
  const output = buildOutput(
    productNameInput.value,
    featuresInput.value,
    toneSelect.value,
    languageSelect.value
  );
  headlineOutput.textContent = output.headline;
  descriptionOutput.textContent = output.description;
  bulletsOutput.innerHTML = output.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  adOutput.textContent = output.ad;
});

languageSelect.addEventListener("change", () => {
  const output = buildOutput(
    productNameInput.value,
    featuresInput.value,
    toneSelect.value,
    languageSelect.value
  );
  headlineOutput.textContent = output.headline;
  descriptionOutput.textContent = output.description;
  bulletsOutput.innerHTML = output.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  adOutput.textContent = output.ad;
});


export type LowProfileLine = {
  slug: "base" | "comercial" | "industrial" | "pro" | "inoxidable";
  name: string;
  shortName: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  summary: string;
  bestFor: string[];
  capacities: string;
  platform: string;
  material: string;
  environment: string;
  strength: string;
  investment: string;
  response: string;
  includes: string[];
  applications: string[];
  proofPoints: string[];
  notIdeal: string[];
  seoTitle: string;
  seoDescription: string;
  whatsappIntent: string;
};

export const lowProfileLines: LowProfileLine[] = [
  {
    slug: "base",
    name: "Báscula de Bajo Perfil Base",
    shortName: "Base",
    eyebrow: "Entrada confiable",
    headline: "Báscula de bajo perfil para operación ligera y control de recibo",
    subheadline:
      "Una opción práctica para empresas que necesitan pesar tarimas, producto terminado o materia prima sin complicar la operación diaria.",
    summary:
      "Recomendada cuando el flujo de pesaje es moderado, el ambiente está controlado y se busca una solución funcional con inversión cuidada.",
    bestFor: ["Almacén", "Recibo", "Embarques ligeros", "Control interno"],
    capacities: "Hasta 1 t o 2 t según configuración",
    platform: "Plataforma de bajo perfil con rampa opcional",
    material: "Acero al carbón con acabado industrial",
    environment: "Interior o zona techada",
    strength: "Instalación sencilla y operación clara",
    investment: "Inversión inicial controlada",
    response: "Cotización ágil",
    includes: [
      "Indicador de peso para operación básica",
      "Estructura para carga con patín o diablito",
      "Asesoría para definir capacidad y dimensiones",
      "Opción de mantenimiento y calibración"
    ],
    applications: [
      "Pesaje de cajas y tarimas",
      "Control de inventario",
      "Validación de recibo",
      "Embarques de bajo volumen"
    ],
    proofPoints: [
      "Buena relación costo-utilidad",
      "Diseño reparable",
      "Acompañamiento técnico local"
    ],
    notIdeal: [
      "Lavado frecuente o humedad agresiva",
      "Operación con golpes intensos",
      "Turnos continuos de alta exigencia"
    ],
    seoTitle: "Báscula de Bajo Perfil Base | Astil Básculas",
    seoDescription:
      "Báscula de bajo perfil base para almacén, recibo y control interno. Solución práctica para pesaje de tarimas y producto en operación ligera.",
    whatsappIntent:
      "Hola, quiero cotizar una báscula de bajo perfil Base para operación ligera. Necesito asesoría sobre capacidad, medidas y entrega."
  },
  {
    slug: "comercial",
    name: "Báscula de Bajo Perfil Comercial",
    shortName: "Comercial",
    eyebrow: "Operación diaria",
    headline: "Báscula de bajo perfil para comercio, almacén y embarques",
    subheadline:
      "Diseñada para negocios y operaciones que pesan todos los días y necesitan lectura estable, acceso cómodo y soporte técnico confiable.",
    summary:
      "Equilibra costo, robustez y facilidad de uso para centros de distribución, comercio mayorista, almacenes y áreas de embarque.",
    bestFor: ["Comercio mayorista", "CEDIS", "Almacén", "Embarques"],
    capacities: "1 t, 2 t o 3 t según aplicación",
    platform: "Bajo perfil con rampa y superficie antiderrapante",
    material: "Acero al carbón reforzado",
    environment: "Interior, patio techado o zona de carga controlada",
    strength: "Mayor estabilidad para uso diario",
    investment: "Inversión media",
    response: "Entrega y puesta en marcha programable",
    includes: [
      "Indicador con funciones para operación comercial",
      "Configuración para patín hidráulico",
      "Revisión de ubicación antes de instalar",
      "Soporte para mantenimiento preventivo"
    ],
    applications: [
      "Peso de tarimas completas",
      "Recepción de mercancía",
      "Control de salidas",
      "Validación contra órdenes de compra"
    ],
    proofPoints: [
      "Ideal para uso cotidiano",
      "Estructura preparada para flujo constante",
      "Fácil capacitación al operador"
    ],
    notIdeal: [
      "Ambientes corrosivos",
      "Lavado sanitario frecuente",
      "Uso rudo extremo con montacargas"
    ],
    seoTitle: "Báscula de Bajo Perfil Comercial | Astil Básculas",
    seoDescription:
      "Báscula de bajo perfil comercial para almacén, comercio mayorista, recibo y embarques. Configuración para pesaje diario con tarimas.",
    whatsappIntent:
      "Hola, quiero cotizar una báscula de bajo perfil Comercial para almacén o embarques. Me interesa revisar capacidad, rampa e instalación."
  },
  {
    slug: "industrial",
    name: "Báscula de Bajo Perfil Industrial",
    shortName: "Industrial",
    eyebrow: "Trabajo pesado",
    headline: "Báscula de bajo perfil industrial para operación exigente",
    subheadline:
      "Una plataforma robusta para producción, logística y almacenes con flujo constante, cargas pesadas y necesidad de continuidad operativa.",
    summary:
      "Recomendada cuando el equipo estará expuesto a uso intenso, turnos largos, golpes ocasionales y movimientos frecuentes con patín o montacargas.",
    bestFor: ["Producción", "Logística", "Industria", "Carga pesada"],
    capacities: "2 t, 3 t o capacidades especiales",
    platform: "Estructura reforzada con rampa de trabajo",
    material: "Acero al carbón de uso industrial",
    environment: "Planta, almacén o patio operativo",
    strength: "Resistencia para uso continuo",
    investment: "Inversión industrial",
    response: "Proyecto revisado técnicamente",
    includes: [
      "Estructura reforzada para flujo pesado",
      "Celdas de carga e indicador según aplicación",
      "Recomendación de mantenimiento preventivo",
      "Instalación y pruebas de operación"
    ],
    applications: [
      "Pesaje en producción",
      "Control de materia prima",
      "Carga y descarga de tarimas",
      "Operaciones con turnos extendidos"
    ],
    proofPoints: [
      "Diseño para continuidad",
      "Mejor tolerancia a uso intensivo",
      "Servicio técnico en sitio"
    ],
    notIdeal: [
      "Presupuesto mínimo sin exigencia operativa",
      "Proceso sanitario con lavado frecuente",
      "Espacios donde se requiere acero inoxidable"
    ],
    seoTitle: "Báscula de Bajo Perfil Industrial | Astil Básculas",
    seoDescription:
      "Báscula de bajo perfil industrial para producción, almacén y logística. Plataforma robusta para pesaje con tarimas y operación exigente.",
    whatsappIntent:
      "Hola, quiero cotizar una báscula de bajo perfil Industrial para operación pesada. Necesito revisar capacidad, medidas y condiciones de trabajo."
  },
  {
    slug: "pro",
    name: "Báscula de Bajo Perfil Pro",
    shortName: "Pro",
    eyebrow: "Mayor configuración",
    headline: "Báscula de bajo perfil Pro para procesos con más control",
    subheadline:
      "Pensada para operaciones que requieren una configuración más completa, mejor trazabilidad y posibilidad de integrar indicadores, periféricos o software.",
    summary:
      "Ideal cuando el peso se conecta con reportes, tickets, control de entradas y salidas, usuarios o necesidades especiales de documentación.",
    bestFor: ["Control operativo", "Trazabilidad", "Tickets", "Procesos especiales"],
    capacities: "Configuración según capacidad y proceso",
    platform: "Bajo perfil reforzada con opciones de integración",
    material: "Acero al carbón con configuración industrial",
    environment: "Planta, almacén, recibo o proceso controlado",
    strength: "Flexibilidad técnica y control de información",
    investment: "Inversión superior",
    response: "Asesoría técnica antes de cotizar",
    includes: [
      "Selección de indicador según flujo operativo",
      "Opciones para impresión, comunicación o software",
      "Configuración por proceso y usuario",
      "Soporte técnico para puesta en marcha"
    ],
    applications: [
      "Pesaje con tickets",
      "Registros de entradas y salidas",
      "Control de producción",
      "Procesos auditables"
    ],
    proofPoints: [
      "Preparada para crecer",
      "Mejor control documental",
      "Integración con soluciones de Astil"
    ],
    notIdeal: [
      "Operación muy básica sin registro",
      "Compra guiada solo por precio",
      "Ambientes donde el acero inoxidable sea obligatorio"
    ],
    seoTitle: "Báscula de Bajo Perfil Pro | Astil Básculas",
    seoDescription:
      "Báscula de bajo perfil Pro para procesos con trazabilidad, tickets, periféricos y control operativo. Asesoría técnica para configurar tu equipo.",
    whatsappIntent:
      "Hola, quiero cotizar una báscula de bajo perfil Pro. Me interesa una configuración con control, tickets o integración para mi operación."
  },
  {
    slug: "inoxidable",
    name: "Báscula de Bajo Perfil Inoxidable",
    shortName: "Inoxidable",
    eyebrow: "Ambientes sanitarios",
    headline: "Báscula de bajo perfil inoxidable para humedad, lavado y procesos limpios",
    subheadline:
      "Solución para operaciones alimentarias, farmacéuticas o de proceso donde la higiene, la resistencia a humedad y la limpieza son parte del trabajo.",
    summary:
      "Recomendada cuando el ambiente exige materiales resistentes a corrosión, limpieza frecuente o mayor cuidado sanitario.",
    bestFor: ["Alimentos", "Humedad", "Lavado", "Proceso sanitario"],
    capacities: "Según capacidad, medidas y grado de exposición",
    platform: "Bajo perfil en acero inoxidable con rampa opcional",
    material: "Acero inoxidable según requerimiento",
    environment: "Zonas húmedas, lavado o proceso limpio",
    strength: "Resistencia a humedad y limpieza",
    investment: "Inversión especializada",
    response: "Revisión de ambiente antes de recomendar",
    includes: [
      "Asesoría sobre exposición a humedad",
      "Configuración de indicador y componentes compatibles",
      "Revisión de limpieza, drenaje y ubicación",
      "Mantenimiento preventivo para ambiente exigente"
    ],
    applications: [
      "Industria alimentaria",
      "Procesos con lavado",
      "Áreas húmedas",
      "Producto sensible a contaminación"
    ],
    proofPoints: [
      "Material adecuado al ambiente",
      "Menor riesgo de corrosión",
      "Configuración sanitaria y reparable"
    ],
    notIdeal: [
      "Uso seco donde no se requiere inoxidable",
      "Compra con presupuesto mínimo",
      "Operación donde basta una plataforma estándar"
    ],
    seoTitle: "Báscula de Bajo Perfil Inoxidable | Astil Básculas",
    seoDescription:
      "Báscula de bajo perfil inoxidable para alimentos, zonas húmedas, lavado y procesos sanitarios. Asesoría para elegir capacidad y materiales.",
    whatsappIntent:
      "Hola, quiero cotizar una báscula de bajo perfil Inoxidable para ambiente húmedo o sanitario. Necesito revisar materiales y configuración."
  }
];

export const lowProfileGeneralSeo = {
  title: "Básculas de Bajo Perfil y Básculas de Piso | Astil Básculas",
  description:
    "Básculas de bajo perfil y básculas de piso para almacén, comercio, industria, alimentos y operación con tarimas. Cotiza con asesoría técnica.",
  keywords:
    "básculas de bajo perfil, básculas de piso, báscula para tarimas, báscula industrial de piso, báscula de plataforma bajo perfil, báscula inoxidable de piso, báscula para almacén"
};

export const lowProfileFaqs = [
  {
    question: "¿Qué diferencia hay entre una báscula de bajo perfil y una báscula de piso?",
    answer:
      "La báscula de bajo perfil es una plataforma de piso diseñada para facilitar el acceso con tarimas, patines o carros. Su altura reducida permite cargar sin obra civil y con rampa cuando la operación lo requiere."
  },
  {
    question: "¿Pueden ayudarme a elegir capacidad y medidas?",
    answer:
      "Sí. Revisamos peso máximo, tipo de carga, dimensiones de tarima, frecuencia de uso, ambiente y forma de carga antes de recomendar una línea."
  },
  {
    question: "¿Instalan y dan mantenimiento?",
    answer:
      "Sí. Podemos apoyar con instalación, puesta en marcha, mantenimiento preventivo, reparación, calibración y soporte técnico en sitio."
  },
  {
    question: "¿Tienen opciones para ambientes húmedos o alimentos?",
    answer:
      "Sí. Para humedad, lavado o procesos sanitarios recomendamos revisar la línea inoxidable y la compatibilidad de indicador, celdas y cableado."
  },
  {
    question: "¿Puedo cotizar por WhatsApp?",
    answer:
      "Sí. Lo ideal es compartir ubicación, capacidad deseada, medidas aproximadas, tipo de producto, frecuencia de uso y si la carga entra con patín o montacargas."
  },
  {
    question: "¿Puedo elegir mi propia configuración?",
    answer:
      "Sí. Aunque nuestros equipos están configurados para ofrecer un rendimiento óptimo según su línea y aplicación, también podemos realizar configuraciones distintas de acuerdo con los requerimientos del cliente y el área de operación. Por ejemplo, puedes solicitar una plataforma de acero inoxidable con indicador de plástico ABS, una plataforma Industrial Pro con indicador comercial, o una combinación específica de plataforma e indicador digital de peso según el uso que tendrá el equipo. Si tienes una necesidad especial, podemos orientarte para elegir la configuración más adecuada."
  }
];

export const lowProfileApplications = [
  "Almacenes",
  "Centros de distribución",
  "Recibo de mercancía",
  "Embarques",
  "Producción",
  "Industria alimentaria",
  "Comercio mayorista",
  "Procesos con tarimas"
];

export const lowProfileDecisionPaths = [
  {
    title: "Quiero una opción funcional para almacén",
    text: "Empieza por la línea Base si el uso será moderado, en interior y con cargas controladas.",
    href: "/basculas/bajo-perfil/base/",
    label: "Ver Base"
  },
  {
    title: "Peso todos los días en recibo o embarques",
    text: "La línea Comercial suele ser el punto medio para flujo diario, patín hidráulico y tarimas.",
    href: "/basculas/bajo-perfil/comercial/",
    label: "Ver Comercial"
  },
  {
    title: "Tengo uso pesado o turnos largos",
    text: "La línea Industrial es mejor cuando hay tráfico constante, carga pesada y necesidad de continuidad.",
    href: "/basculas/bajo-perfil/industrial/",
    label: "Ver Industrial"
  },
  {
    title: "Necesito tickets, registros o integración",
    text: "La línea Pro permite configurar indicadores, periféricos y opciones de control documental.",
    href: "/basculas/bajo-perfil/pro/",
    label: "Ver Pro"
  },
  {
    title: "Hay humedad, lavado o proceso sanitario",
    text: "La línea Inoxidable es la ruta correcta cuando el ambiente exige resistencia y limpieza frecuente.",
    href: "/basculas/bajo-perfil/inoxidable/",
    label: "Ver Inoxidable"
  }
];

export const lowProfileComparisonRows = [
  { label: "Uso recomendado", key: "bestFor" },
  { label: "Capacidades", key: "capacities" },
  { label: "Ambiente", key: "environment" },
  { label: "Material", key: "material" },
  { label: "Fortaleza principal", key: "strength" },
  { label: "Nivel de inversión", key: "investment" }
] as const;

export const getLowProfileLine = (slug: LowProfileLine["slug"]) =>
  lowProfileLines.find((line) => line.slug === slug);

// Single source of truth for every real, verifiable fact on the site.
// No invented clients, metrics, testimonials or results live here.

export const site = {
  name: 'R3 Tech',
  legalName: 'R3 Tech',
  tagline: 'Software a Medida · Desarrollo Web · Soluciones IT',
  url: 'https://r3tech.site',
  email: 'r3tech24@gmail.com',
  mailto: 'mailto:r3tech24@gmail.com',
  instagram: 'https://www.instagram.com/r3tech.ar/?hl=es',
  instagramHandle: '@r3tech.ar',
  whatsappNumber: '+54 9 341 251-6172',
  locale: 'es-AR',
  region: 'Rosario, Santa Fe, Argentina',
} as const

const WHATSAPP_NUMBER = '5493412516172'

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = getWhatsAppUrl('Hola R3 Tech, quiero solicitar un presupuesto.')

/**
 * Next.js shallow-merges metadata per segment: a page that sets its own
 * `openGraph` object replaces the parent's entirely, dropping `images`
 * unless it's spread back in. Every page-level `openGraph` export should
 * include `...OG_IMAGE` (or its own more specific image) for this reason.
 */
export const OG_IMAGE = {
  images: [
    {
      url: `${site.url}/brand/og-image.png`,
      width: 1731,
      height: 909,
      alt: `${site.name} — ${site.tagline}`,
    },
  ],
}

export const nav = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
] as const

export type ServiceCategory = 'desarrollo' | 'soporte'

export type Service = {
  slug: string
  category: ServiceCategory
  index: string
  title: string
  short: string
  summary: string
  description: string[]
  includes: string[]
  forWho: string
  relatedProjectSlugs: string[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: 'software-a-medida',
    category: 'desarrollo',
    index: '01',
    title: 'Software a medida',
    short: 'Aplicaciones adaptadas a tus procesos.',
    summary:
      'Sistemas y aplicaciones diseñados alrededor de cómo trabaja realmente tu empresa, no al revés.',
    description: [
      'La mayoría del software genérico obliga a una empresa a adaptar su operación a las limitaciones de una herramienta. Hacemos el camino inverso: relevamos tu proceso real y construimos el sistema alrededor de él.',
      'Trabajamos con paneles de administración, sistemas de gestión, portales internos y herramientas a medida que digitalizan tareas que hoy se resuelven a mano, en planillas o entre varios programas que no se hablan entre sí.',
    ],
    includes: [
      'Relevamiento del proceso y arquitectura de la solución',
      'Paneles de administración y sistemas de gestión internos',
      'Integraciones con las herramientas que ya usás',
      'Bases de datos y modelos de permisos por rol',
      'Acompañamiento posterior al lanzamiento',
    ],
    forWho:
      'Empresas con procesos que ya superaron lo que una planilla o una app genérica puede resolver.',
    relatedProjectSlugs: ['courtos'],
    keywords: ['software a medida', 'desarrollo web', 'sistema de gestión', 'Rosario'],
  },
  {
    slug: 'desarrollo-web',
    category: 'desarrollo',
    index: '02',
    title: 'Desarrollo web',
    short: 'Sitios rápidos, modernos y optimizados para Google.',
    summary:
      'Sitios y plataformas web con arquitectura moderna, pensados para cargar rápido, verse bien en cualquier dispositivo y posicionar en buscadores.',
    description: [
      'Un sitio lento o desactualizado cuesta clientes antes de que lleguen a leer una sola línea. Construimos sobre tecnología moderna (Next.js y React) para lograr tiempos de carga bajos, buen posicionamiento en Google y una experiencia sólida en celular.',
      'Cada proyecto incluye una identidad visual propia: tipografía, color y composición pensados para la marca, no una plantilla genérica reutilizada.',
    ],
    includes: [
      'Diseño de identidad visual y arquitectura de información',
      'Desarrollo en Next.js / React con foco en performance',
      'SEO técnico: metadata, datos estructurados, sitemap',
      'Integración con WhatsApp, formularios y mapas',
      'Panel de contenidos cuando el proyecto lo requiere',
    ],
    forWho: 'Empresas, estudios y comercios que necesitan un sitio que transmita profesionalismo real.',
    relatedProjectSlugs: ['lavalle-padel-club', 'ls-negocios-inmobiliarios', 'la-espanola-muebles'],
    keywords: ['desarrollo web', 'diseño web', 'sitios web Rosario', 'Next.js'],
  },
  {
    slug: 'ecommerce',
    category: 'desarrollo',
    index: '03',
    title: 'Ecommerce',
    short: 'Tiendas online listas para vender desde el primer día.',
    summary:
      'Tiendas online con catálogo, carrito y cobro integrado, listas para operar sin fricción desde el día uno.',
    description: [
      'Diseñamos y desarrollamos tiendas online enfocadas en la conversión: catálogo claro, checkout simple y medios de pago locales integrados.',
      'La plataforma queda preparada para que el equipo del cliente pueda cargar productos, gestionar stock y seguir pedidos sin depender de nosotros para el día a día.',
    ],
    includes: [
      'Catálogo de productos con variantes y stock',
      'Checkout optimizado e integración de pagos',
      'Panel de gestión de pedidos y productos',
      'Envíos, cupones y notificaciones automáticas',
      'Optimización de velocidad para catálogos grandes',
    ],
    forWho: 'Marcas y comercios que venden productos y necesitan un canal de venta propio, sin comisiones de marketplace.',
    relatedProjectSlugs: [],
    keywords: ['ecommerce', 'tienda online', 'Mercado Pago', 'tienda virtual Rosario'],
  },
  {
    slug: 'saas',
    category: 'desarrollo',
    index: '04',
    title: 'SaaS',
    short: 'Plataformas escalables para operar, vender y crecer.',
    summary:
      'Productos de software como servicio: multi-usuario, con planes, paneles y una arquitectura pensada para crecer.',
    description: [
      'Cuando la solución que necesitás no es un sitio ni un sistema interno, sino un producto propio que otros van a usar día a día, construimos plataformas SaaS: multi-cliente, con autenticación, roles, paneles y una base técnica pensada para escalar.',
      'CourtOS, nuestra propia plataforma para clubes deportivos, nace de este mismo enfoque y hoy está en desarrollo activo.',
    ],
    includes: [
      'Arquitectura multi-usuario y multi-cliente',
      'Autenticación, roles y control de acceso',
      'Paneles de administración y de cliente',
      'Base de datos y backend preparados para escalar',
      'Roadmap de producto e iteración continua',
    ],
    forWho: 'Emprendedores y empresas que quieren construir un producto propio, no solo un sitio.',
    relatedProjectSlugs: ['courtos'],
    keywords: ['SaaS', 'plataforma web', 'producto digital', 'desarrollo de producto'],
  },
  {
    slug: 'automatizacion',
    category: 'desarrollo',
    index: '05',
    title: 'Automatización',
    short: 'Integración con WhatsApp, Mercado Pago, APIs e IA.',
    summary:
      'Conectamos las herramientas que ya usás para eliminar tareas manuales y repetitivas de la operación diaria.',
    description: [
      'Buena parte del tiempo operativo de una empresa se pierde en tareas repetitivas: cargar datos a mano, responder siempre lo mismo, mover información de un sistema a otro. Automatizamos ese trabajo conectando las herramientas que ya usás.',
      'Trabajamos con integraciones de WhatsApp, Mercado Pago, APIs de terceros y automatizaciones apoyadas en inteligencia artificial cuando el caso lo justifica.',
    ],
    includes: [
      'Integración de WhatsApp para atención y notificaciones',
      'Cobros e integraciones con Mercado Pago',
      'Conexión entre sistemas vía API',
      'Automatización de tareas repetitivas',
      'Casos de uso puntuales con inteligencia artificial',
    ],
    forWho: 'Equipos que repiten la misma tarea manual todos los días y quieren recuperar ese tiempo.',
    relatedProjectSlugs: [],
    keywords: ['automatización', 'integración API', 'WhatsApp Business', 'Mercado Pago'],
  },
  {
    slug: 'soporte-it',
    category: 'soporte',
    index: '06',
    title: 'Soporte IT',
    short: 'Soporte remoto, optimización, reparación y redes.',
    summary:
      'Soporte técnico remoto y presencial: resolución de problemas, optimización de equipos y redes estables.',
    description: [
      'Además de desarrollo, damos soporte técnico integral: resolución remota de problemas, optimización y actualización de hardware, reparación de PC y notebooks, y configuración de redes ordenadas y seguras.',
      'El objetivo es simple: que la tecnología que ya tenés funcione bien, sin cortes ni cuellos de botella.',
    ],
    includes: [
      'Soporte remoto con resolución rápida',
      'Optimización de rendimiento y limpieza de equipos',
      'Diagnóstico y reparación de PC y notebooks',
      'Configuración de redes estables y seguras',
      'Mantenimiento preventivo y actualización de hardware',
    ],
    forWho: 'Empresas y particulares que necesitan que su infraestructura funcione, sin complicaciones.',
    relatedProjectSlugs: [],
    keywords: ['soporte IT', 'soporte técnico Rosario', 'reparación de PC', 'redes'],
  },
]

export const serviceCategories: { id: ServiceCategory; label: string; description: string }[] = [
  {
    id: 'desarrollo',
    label: 'Desarrollo',
    description: 'Software, desarrollo web, ecommerce, SaaS y automatización.',
  },
  {
    id: 'soporte',
    label: 'IT Solutions',
    description: 'Soporte técnico remoto y presencial.',
  },
]

export type ProjectStatus = 'live' | 'in-development' | 'concept'

export type Project = {
  slug: string
  name: string
  kind: string
  status: ProjectStatus
  statusLabel: string
  summary: string
  description: string[]
  features: string[]
  stack: string[]
  image: string | null
  imageAlt: string
  href: string | null
}

// Order is deliberate: CourtOS (in-development) must always render last.
export const projects: Project[] = [
  {
    slug: 'lavalle-padel-club',
    name: 'Lavalle Padel Club',
    kind: 'Sistema de gestión + sitio web',
    status: 'live',
    statusLabel: 'Publicado',
    summary:
      'Gestión de club de pádel con reservas online, administración de sedes y control de disponibilidad.',
    description: [
      'Sitio y sistema de gestión para un club de pádel en Rosario, con reserva de canchas online, administración de sedes y ranking de jugadores.',
      'El objetivo del proyecto fue reemplazar la coordinación manual de turnos por un flujo de reserva claro tanto para el club como para los jugadores.',
    ],
    features: ['Reservas online', 'Gestión de canchas', 'Ranking de jugadores', 'Panel administrativo'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/lavalle-padel-club.webp',
    imageAlt: 'Interfaz del sitio de Lavalle Padel Club con reservas online de canchas de pádel',
    href: 'https://lavallepadelclub.netlify.app/',
  },
  {
    slug: 'ls-negocios-inmobiliarios',
    name: 'LS Negocios Inmobiliarios',
    kind: 'Desarrollo web',
    status: 'live',
    statusLabel: 'Publicado',
    summary:
      'Sitio con catálogo de propiedades, buscador inteligente y experiencia moderna enfocada en convertir visitas en consultas.',
    description: [
      'Sitio web para una inmobiliaria de Rosario, con catálogo de propiedades filtrable, buscador por tipo de operación y zona, y contacto directo por WhatsApp.',
      'El diseño prioriza que una visita se convierta en una consulta concreta, con la menor fricción posible entre encontrar una propiedad y escribir por ella.',
    ],
    features: ['Catálogo de propiedades', 'Buscador inteligente', 'Diseño responsive', 'WhatsApp integrado', 'Panel administrativo'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/ls-negocios-inmobiliarios.webp',
    imageAlt: 'Interfaz del sitio de LS Negocios Inmobiliarios con buscador de propiedades',
    href: 'https://lsnegociosinmobiliarios.netlify.app/',
  },
  {
    slug: 'la-espanola-muebles',
    name: 'La Española Muebles',
    kind: 'Diseño y desarrollo web',
    status: 'concept',
    statusLabel: 'Propuesta',
    summary:
      'Propuesta de rediseño digital para La Española Muebles, enfocada en modernizar su presencia online, facilitar la exploración del catálogo y generar un contacto más directo con potenciales clientes.',
    description: [
      'La Española Muebles es una propuesta conceptual de R3 Tech para mostrar cómo podría modernizarse la presencia digital de una mueblería: catálogo organizado por categorías, productos destacados y un camino directo hacia la consulta por WhatsApp.',
      'No es un proyecto contratado ni un cliente real — es una demo pensada para mostrar nuestro criterio de diseño y desarrollo aplicado a un negocio con catálogo de producto, priorizando una navegación clara y el contacto directo con el potencial comprador.',
    ],
    features: ['Catálogo de productos por categoría', 'Consulta directa por WhatsApp', 'Diseño responsive', 'Identidad visual renovada'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/projects/la-espanola-muebles.webp',
    imageAlt: 'Interfaz de la propuesta de La Española Muebles con catálogo de productos por categoría',
    href: 'https://laespanolamuebles.netlify.app/',
  },
  {
    slug: 'courtos',
    name: 'CourtOS',
    kind: 'Plataforma SaaS',
    status: 'in-development',
    statusLabel: 'En desarrollo',
    summary: 'Plataforma en desarrollo para la gestión integral de clubes deportivos.',
    description: [
      'CourtOS es un producto propio de R3 Tech: una plataforma para que clubes deportivos gestionen reservas, canchas, jugadores y estadísticas desde un mismo lugar.',
      'Está actualmente en desarrollo activo. Todavía no está publicada ni tiene clientes en producción — esta página describe el alcance planeado del producto, no resultados ya obtenidos.',
    ],
    features: ['Reservas online', 'Gestión de canchas', 'Ranking de jugadores', 'Estadísticas del club'],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    image: null,
    imageAlt: '',
    href: null,
  },
]

export const benefits = [
  'Atención personalizada',
  'Presupuestos rápidos',
  'Soluciones a medida',
  'Tecnología actual',
  'Soporte postventa',
  'Trabajo remoto y presencial',
] as const

export type ProcessStep = {
  index: string
  title: string
  description: string
}

export const process: ProcessStep[] = [
  {
    index: '01',
    title: 'Analizamos',
    description: 'Entendemos tu operación, objetivos y puntos de mejora.',
  },
  {
    index: '02',
    title: 'Diseñamos',
    description: 'Definimos una solución clara, viable y pensada para crecer.',
  },
  {
    index: '03',
    title: 'Desarrollamos',
    description: 'Construimos con seguimiento cercano y criterio técnico.',
  },
  {
    index: '04',
    title: 'Implementamos',
    description: 'Ponemos la solución en marcha y validamos su funcionamiento.',
  },
  {
    index: '05',
    title: 'Evolucionamos',
    description: 'Mejoramos, damos soporte y acompañamos la evolución.',
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

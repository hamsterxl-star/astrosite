// Языки сайта и все надписи интерфейса.
// Чтобы поменять надпись, найдите её ключ и исправьте текст на нужном языке.

export const languages = { es: 'ES', ru: 'RU', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

// Язык текущей страницы. Astro сам определяет его по адресу (/, /ru/, /en/).
export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

// Адрес страницы на нужном языке: localizePath('ru', '/services') → '/ru/services'.
export function localizePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

// Убирает языковой префикс: '/ru/services' → '/services'.
export function stripLang(pathname: string): string {
  const path = pathname.replace(/^\/(ru|en)(?=\/|$)/, '').replace(/\/$/, '');
  return path || '/';
}

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.contacts': 'Contacto',
    'home.consult': 'Consulta gratuita',
    'home.cases': 'Ver casos',
    'home.plans': 'Tarifas',
    'home.moreServices': 'Más sobre los servicios →',
    'home.howIWork': 'Cómo trabajo',
    'home.projects': 'Proyectos',
    'home.ctaTitle': '¿Quiere más clientes desde los buscadores?',
    'home.ctaText': 'Escríbame y revisaré su sitio gratis para indicarle por dónde empezar.',
    'home.ctaButton': 'Escribirme',
    'plan.order': 'Contratar',
    'plan.top': 'TOP',
    'services.title': 'Servicios y precios',
    'services.lead': 'Posicionamiento SEO con tarifas fijas. Elija la que le convenga o escríbame y le ayudo a decidir.',
    'services.alsoCheck': 'Qué más reviso',
    'portfolio.title': 'Portafolio',
    'portfolio.lead': 'Proyectos en los que he trabajado y los resultados que conseguimos.',
    'contacts.title': 'Contacto',
    'contacts.lead': 'Cuénteme sobre su sitio y su objetivo. La primera consulta es gratuita.',
    'contacts.email': 'Correo',
    'form.title': 'Solicitar una auditoría del sitio',
    'form.site': 'Dirección del sitio',
    'form.phone': 'Teléfono',
    'form.messenger': '¿Cómo prefiere que le contacte?',
    'form.submit': 'Enviar a auditoría',
    'form.sending': 'Enviando…',
    'form.success': '¡Gracias! Su solicitud se ha enviado, me pondré en contacto pronto.',
    'form.error': 'No se pudo enviar. Por favor, escriba a',
    'form.subject': 'Solicitud de auditoría del sitio',
    'form.mailSite': 'Sitio',
    'form.mailPhone': 'Teléfono',
    'form.mailMessenger': 'Contactar por',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.contacts': 'Контакты',
    'home.consult': 'Бесплатная консультация',
    'home.cases': 'Смотреть кейсы',
    'home.plans': 'Тарифы',
    'home.moreServices': 'Подробнее об услугах →',
    'home.howIWork': 'Как я работаю',
    'home.projects': 'Проекты',
    'home.ctaTitle': 'Хотите больше клиентов из поиска?',
    'home.ctaText': 'Напишите, и я бесплатно посмотрю ваш сайт и подскажу, с чего начать.',
    'home.ctaButton': 'Написать мне',
    'plan.order': 'Заказать',
    'plan.top': 'ТОП',
    'services.title': 'Услуги и цены',
    'services.lead': 'SEO-продвижение по фиксированным тарифам. Выберите подходящий или напишите, и я помогу определиться.',
    'services.alsoCheck': 'Что ещё проверяю',
    'portfolio.title': 'Портфолио',
    'portfolio.lead': 'Проекты, над которыми я работал, и результаты, которых удалось добиться.',
    'contacts.title': 'Контакты',
    'contacts.lead': 'Расскажите о своём сайте и задаче. Первая консультация бесплатная.',
    'contacts.email': 'Почта',
    'form.title': 'Заказать аудит сайта',
    'form.site': 'Адрес сайта',
    'form.phone': 'Телефон',
    'form.messenger': 'Как с вами связаться?',
    'form.submit': 'Отправить на аудит',
    'form.sending': 'Отправляю…',
    'form.success': 'Спасибо! Заявка отправлена, скоро свяжусь с вами.',
    'form.error': 'Не получилось отправить. Напишите, пожалуйста, на',
    'form.subject': 'Заявка на аудит сайта',
    'form.mailSite': 'Сайт',
    'form.mailPhone': 'Телефон',
    'form.mailMessenger': 'Связаться через',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contacts': 'Contact',
    'home.consult': 'Free consultation',
    'home.cases': 'See case studies',
    'home.plans': 'Plans',
    'home.moreServices': 'More about the services →',
    'home.howIWork': 'How I work',
    'home.projects': 'Projects',
    'home.ctaTitle': 'Want more customers from search?',
    'home.ctaText': 'Get in touch and I will review your website for free and tell you where to start.',
    'home.ctaButton': 'Contact me',
    'plan.order': 'Order',
    'plan.top': 'TOP',
    'services.title': 'Services and prices',
    'services.lead': 'SEO promotion on fixed monthly plans. Pick the one that suits you, or message me and I will help you choose.',
    'services.alsoCheck': 'What else I check',
    'portfolio.title': 'Portfolio',
    'portfolio.lead': 'Projects I have worked on and the results we achieved.',
    'contacts.title': 'Contact',
    'contacts.lead': 'Tell me about your website and your goal. The first consultation is free.',
    'contacts.email': 'Email',
    'form.title': 'Order a website audit',
    'form.site': 'Website address',
    'form.phone': 'Phone',
    'form.messenger': 'How should I contact you?',
    'form.submit': 'Send for audit',
    'form.sending': 'Sending…',
    'form.success': 'Thank you! Your request has been sent, I will be in touch soon.',
    'form.error': 'Could not send. Please email',
    'form.subject': 'Website audit request',
    'form.mailSite': 'Website',
    'form.mailPhone': 'Phone',
    'form.mailMessenger': 'Contact via',
  },
} as const;

export type UiKey = keyof (typeof ui)['ru'];

// Возвращает функцию перевода для языка: const t = useTranslations('ru'); t('nav.home').
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

// Этапы работы на главной странице.
export const steps = {
  es: [
    { title: 'Primer contacto', text: 'Hablamos de su negocio, sus objetivos y su presupuesto.' },
    { title: 'Auditoría', text: 'Analizo su sitio y la competencia y encuentro oportunidades de crecimiento.' },
    { title: 'Trabajo', text: 'Aplico los cambios siguiendo un plan claro.' },
    { title: 'Informe', text: 'Cada mes le muestro los resultados en cifras.' },
  ],
  ru: [
    { title: 'Знакомство', text: 'Обсуждаем ваш бизнес, цели и бюджет.' },
    { title: 'Аудит', text: 'Изучаю сайт и конкурентов, нахожу точки роста.' },
    { title: 'Работа', text: 'Внедряю изменения по понятному плану.' },
    { title: 'Отчёт', text: 'Каждый месяц показываю результаты в цифрах.' },
  ],
  en: [
    { title: 'Introduction', text: 'We discuss your business, goals and budget.' },
    { title: 'Audit', text: 'I study your website and competitors and find growth opportunities.' },
    { title: 'Work', text: 'I implement changes following a clear plan.' },
    { title: 'Report', text: 'Every month I show you the results in numbers.' },
  ],
};

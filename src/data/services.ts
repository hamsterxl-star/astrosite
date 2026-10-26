// Тарифы SEO-продвижения на трёх языках.
// Чтобы добавить тариф, скопируйте один блок { ... } в КАЖДОМ языке и измените текст.
// top: true — тариф выделяется меткой «ТОП».
export const plans = {
  es: [
    {
      title: 'Básica',
      price: '55 000 ₽ / mes',
      description: 'Una buena opción para conseguir las primeras solicitudes con SEO.',
      features: [
        '150 parámetros SEO y 20 factores comerciales',
        'Revisión de 40 errores técnicos',
        'Trabajo con la confianza en el sitio, el tráfico y la conversión',
        'Hasta 3 enlaces al mes',
        'Hasta 2 000 palabras clave',
      ],
    },
    {
      title: 'Óptima',
      price: '85 000 ₽ / mes',
      description: 'Una tarifa ideal para sitios de servicios: crecimiento rápido de leads.',
      top: true,
      features: [
        '300 parámetros SEO y 30 factores comerciales',
        'Revisión de 50 errores técnicos',
        'Trabajo con la confianza en el sitio, el tráfico y la conversión',
        'Hasta 6 enlaces al mes',
        'Hasta 4 000 palabras clave',
        'Mejora de los factores de comportamiento',
      ],
    },
    {
      title: 'Ampliada',
      price: '119 000 ₽ / mes',
      description: 'Su equipo de ventas no dará abasto: un gran núcleo semántico y muchísimas solicitudes.',
      features: [
        '500 parámetros SEO y 45 factores comerciales',
        'Revisión de 60 errores técnicos',
        'Trabajo con la confianza en el sitio, el tráfico y la conversión',
        'Hasta 15 enlaces al mes',
        'Hasta 10 000 palabras clave',
        'Mejora de los factores de comportamiento',
      ],
    },
  ],
  ru: [
    {
      title: 'Базовый',
      price: '55 000 ₽ / мес',
      description: 'Хороший вариант для получения первых заявок с SEO.',
      features: [
        '150 SEO-параметров и 20 коммерческих факторов',
        'Проверка по 40 техническим ошибкам',
        'Работа с доверием к сайту, посещаемостью и конверсией',
        'До 3 ссылок в месяц',
        'До 2 000 ключевых слов',
      ],
    },
    {
      title: 'Оптимальный',
      price: '85 000 ₽ / мес',
      description: 'Отличный тариф для сайта услуг, стремительный прирост лидов.',
      top: true,
      features: [
        '300 SEO-параметров и 30 коммерческих факторов',
        'Проверка по 50 техническим ошибкам',
        'Работа с доверием к сайту, посещаемостью и конверсией',
        'До 6 ссылок в месяц',
        'До 4 000 ключевых слов',
        'Улучшение поведенческих факторов',
      ],
    },
    {
      title: 'Расширенный',
      price: '119 000 ₽ / мес',
      description: 'Ваш отдел продаж будет в огне: большое ядро и очень много заявок.',
      features: [
        '500 SEO-параметров и 45 коммерческих факторов',
        'Проверка по 60 техническим ошибкам',
        'Работа с доверием к сайту, посещаемостью и конверсией',
        'До 15 ссылок в месяц',
        'До 10 000 ключевых слов',
        'Улучшение поведенческих факторов',
      ],
    },
  ],
  en: [
    {
      title: 'Basic',
      price: '55,000 ₽ / month',
      description: 'A good option for getting your first leads from SEO.',
      features: [
        '150 SEO parameters and 20 commercial factors',
        'Check for 40 technical errors',
        'Work on site trust, traffic and conversion',
        'Up to 3 links per month',
        'Up to 2,000 keywords',
      ],
    },
    {
      title: 'Optimal',
      price: '85,000 ₽ / month',
      description: 'A great plan for service websites: rapid growth in leads.',
      top: true,
      features: [
        '300 SEO parameters and 30 commercial factors',
        'Check for 50 technical errors',
        'Work on site trust, traffic and conversion',
        'Up to 6 links per month',
        'Up to 4,000 keywords',
        'Improving behavioral factors',
      ],
    },
    {
      title: 'Extended',
      price: '119,000 ₽ / month',
      description: 'Your sales team will be on fire: a large keyword core and lots of leads.',
      features: [
        '500 SEO parameters and 45 commercial factors',
        'Check for 60 technical errors',
        'Work on site trust, traffic and conversion',
        'Up to 15 links per month',
        'Up to 10,000 keywords',
        'Improving behavioral factors',
      ],
    },
  ],
};

// Дополнительные проверки, которые входят в работу.
export const audits = {
  es: [
    {
      icon: '🛠️',
      title: 'Auditoría técnica de 60 parámetros',
      description: 'Los errores técnicos bajan las posiciones en los buscadores, y un sitio con fallos tiene poca conversión y una alta tasa de rebote.',
    },
    {
      icon: '🤝',
      title: 'Revisión de 45 factores comerciales',
      description: 'Los factores comerciales influyen en las posiciones del sitio y en la confianza de los visitantes.',
    },
  ],
  ru: [
    {
      icon: '🛠️',
      title: 'Технический аудит по 60 параметрам',
      description: 'Технические ошибки снижают позиции в поиске, а неисправный сайт даёт низкую конверсию и высокий процент отказов.',
    },
    {
      icon: '🤝',
      title: 'Проверка по 45 коммерческим факторам',
      description: 'Коммерческие факторы влияют на позиции сайта и на доверие посетителей.',
    },
  ],
  en: [
    {
      icon: '🛠️',
      title: 'Technical audit of 60 parameters',
      description: 'Technical errors lower your search rankings, and a broken website means low conversion and a high bounce rate.',
    },
    {
      icon: '🤝',
      title: 'Review of 45 commercial factors',
      description: 'Commercial factors affect both your rankings and how much visitors trust you.',
    },
  ],
};

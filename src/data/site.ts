// Общие данные сайта. Поменяйте здесь — изменится на всех страницах.

// Контакты одинаковые для всех языков.
export const site = {
  email: 'info@on-projects.ru',
  telegram: 'https://t.me/FunkyXL',
  telegramName: '@FunkyXL',
  phone: '+7 906 129-49-99',
  whatsapp: 'https://api.whatsapp.com/send?phone=79061294999',
};

// Название, слоган и подзаголовок на каждом языке.
export const siteText = {
  es: {
    name: 'Alexey Pazhitnov · Posicionamiento SEO',
    tagline: 'Posicionamiento SEO de sitios web',
    lead: 'Resultados del posicionamiento a partir de 1 mes. Aumentamos el número de leads un 15% al mes.',
  },
  ru: {
    name: 'Алексей Пажитнов · SEO-продвижение',
    tagline: 'SEO-продвижение сайтов',
    lead: 'Эффект от продвижения от 1 месяца. Увеличим количество лидов на 15% в месяц.',
  },
  en: {
    name: 'Alexey Pazhitnov · SEO Promotion',
    tagline: 'SEO website promotion',
    lead: 'Results from SEO in as little as 1 month. We grow your leads by 15% a month.',
  },
};

// Ключ сервиса Web3Forms для формы заявки на аудит.
// Получить бесплатно: https://web3forms.com → ввести свою почту → ключ придёт на неё.
// Пока ключ пустой, форма открывает почтовую программу с готовым письмом.
export const formAccessKey = '';

// Ключ Google PageSpeed для блока «Проверьте скорость сайта» на главной.
// Получить бесплатно: https://developers.google.com/speed/docs/insights/v5/get-started → кнопка «Get a Key».
// Пока ключ пустой, блок проверки скорости на сайте не показывается.
// Этот ключ виден всем посетителям сайта, это нормально. Когда сайт будет на своём домене,
// в Google Cloud стоит ограничить ключ этим доменом (Credentials → ключ → Website restrictions).
export const pageSpeedKey = 'AIzaSyBEtTBNTu-PaYFgL4_HZMrgGipra0GRJtE';

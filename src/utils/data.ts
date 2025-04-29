export interface AdvantageItem {
  image: string;
  text: string;
}

export interface FunctionalityItem {
    image: string;
    text: string;
  }
  
  export interface ReviewItem {
    name: string;
    occupation: string;
    review: string;
    stars: string;
    avatar: string;
  }

  export const advantage: AdvantageItem[] = [
    {
      image: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745919663/1_1_lehc90.png', 
      text: 'Простой и понятный интерфейс',
    },
    {
      image: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745919663/2_1_scecr6.png',
      text: 'Персонализированный анализ',
    },
    {
      image: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745919663/3_3_tap1av.png',
      text: 'Комплексный контроль',
    },
    {
      image: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745919663/4_mqaw2y.png',
      text: 'Гибкость в использовании',
    },
  ];
  
  
  export const functionality: FunctionalityItem[] = [
    {
      image: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745852338/1_k2v4oi.png', 
      text: 'Ведение дневника тренировок',
    },
    {
      image: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745852338/2_rfm0rl.png',
      text: 'Аналитика и прогресс',
    },
    {
      image: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745852338/3_1_dxcq2m.png',
      text: 'Контроль вашего питания',
    },
  ];
  
  export const reviews: ReviewItem[] = [
    {
      name: 'Игорь Соловьёв',
      occupation: 'Офисный сотрудник',
      review: 'С FitLog я наконец-то смог упорядочить свои тренировки и следить за питанием. Очень удобное приложение.',
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png',
      avatar: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745902041/IMG_4_efrkqf.png'
    },
    {
      name: 'Анна Крылова',
      occupation: 'Любитель бега',
      review: 'Полностью изменил мой подход к тренировкам. Теперь я вижу свой прогресс и могу корректировать питание для лучших результатов.',
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png',
      avatar: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745902040/IMG_1_gtikwp.png'
    },
    {
      name: 'Дмитрий Васильев',
      occupation: 'Фитнес-тренер',
      review: 'FitLog помогает моим клиентам не только следить за тренировками, но и анализировать питание. Это значительно ускоряет процесс достижения их целей.',
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png',
      avatar: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745902041/IMG_2_tvqhmc.png'
    },
    {
      name: 'Елена Петрова',
      occupation: 'Маркетолог',
      review: 'Теперь мои тренировки и питание всегда под контролем. FitLog стал важной частью моей повседневной рутины!',
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png',
      avatar: 'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745902041/IMG_3_gsmggr.png'
    },
  ];
  
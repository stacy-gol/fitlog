export interface FunctionalityItem {
    image: string;
    text: string;
  }
  
  export interface ReviewItem {
    name: string;
    occupation: string;
    review: string;
    stars: string;
  }
  
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
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png'
    },
    {
      name: 'Анна Крылова',
      occupation: 'Любитель бега',
      review: 'Полностью изменил мой подход к тренировкам. Теперь я вижу свой прогресс и могу корректировать питание для лучших результатов.',
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png'
    },
    {
      name: 'Дмитрий Васильев',
      occupation: 'Фитнес-тренер',
      review: 'FitLog помогает моим клиентам не только следить за тренировками, но и анализировать питание. Это значительно ускоряет процесс достижения их целей.',
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png'
    },
    {
      name: 'Елена Петрова',
      occupation: 'Маркетолог',
      review: 'Теперь мои тренировки и питание всегда под контролем. FitLog стал важной частью моей повседневной рутины!',
      stars:'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745860387/Stars_wbuwvi.png'
    },
  ];
  
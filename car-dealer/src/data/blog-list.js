import blogImg1 from '../assets/images/article/101.avif';
import blogImg2 from '../assets/images/article/11.avif';
import blogImg3 from '../assets/images/article/031.avif';
import blogImg4 from '../assets/images/article/04.avif';
import blogImg5 from '../assets/images/article/05.avif';
import blogImg6 from '../assets/images/blog/blog-img6.webp';
import blogImg7 from '../assets/images/blog/blog-img7.webp';
import blogImg8 from '../assets/images/blog/blog-img8.webp';
import blogImg9 from '../assets/images/blog/blog-img9.webp';

import authorImg1 from '../assets/images/avatar/01.webp';
import authorImg2 from '../assets/images/avatar/02.webp';
import authorImg3 from '../assets/images/avatar/03.webp';
import authorImg4 from '../assets/images/avatar/04.webp';
import authorImg5 from '../assets/images/avatar/05.webp';
import authorImg6 from '../assets/images/avatar/06.webp';
import authorImg7 from '../assets/images/avatar/07.webp';
import authorImg8 from '../assets/images/avatar/08.webp';
import authorImg9 from '../assets/images/avatar/09.webp';

const BlogList = [
  {
    id: 1,
    imgSrc: blogImg1,
    authorImg: authorImg1,
    authorName: 'Emily Carter',
    bydealer: 'By AutoBuzz',
    category: 'Technology',
    title: 'AI Integration in Next-Gen Vehicles',
    comments: 8,
    like: 25,
    news: 'News 2025',
    metaDate: [{ date: '12', month: 'May', year: '2025' }],
    shortDescription:
      'Discover how artificial intelligence is transforming safety, navigation, and personalization in the latest car models.',
    mainDescription:
      'Artificial intelligence in vehicles is no longer futuristic. From adaptive cruise control to fully autonomous driving, AI is shaping how we interact with our cars. Explore key innovations and what the next five years may look like for smart vehicles.',
  },
  {
    id: 2,
    imgSrc: blogImg2,
    authorImg: authorImg2,
    authorName: 'Liam Nguyen',
    bydealer: 'By CarTalk',
    category: 'Electric Vehicles',
    title: 'Top 5 EVs in 2025 Worth the Hype',
    comments: 14,
    like: 32,
    news: 'News 2025',
    metaDate: [{ date: '06', month: 'Apr', year: '2025' }],
    shortDescription:
      'We review the most impressive electric cars of 2025 in terms of range, design, and innovation.',
    mainDescription:
      'Electric Vehicles (EVs) are dominating the 2025 car market. We break down the top five models you should keep your eye on this year — including battery life, tech features, and driving performance.',
  },
  {
    id: 3,
    imgSrc: blogImg3,
    authorImg: authorImg3,
    authorName: 'Sophia Martínez',
    bydealer: 'By GreenDrive',
    category: 'Sustainability',
    title: 'How Car Dealerships Are Going Green',
    comments: 6,
    like: 18,
    news: 'News 2025',
    metaDate: [{ date: '22', month: 'Mar', year: '2025' }],
    shortDescription:
      'Dealerships are shifting to more sustainable practices. Learn how they’re reducing their carbon footprint.',
    mainDescription:
      'From solar-powered showrooms to offering EV-exclusive inventories, auto dealerships are embracing sustainability. This article dives into the biggest green transformations in the auto retail world.',
  },
  {
    id: 4,
    imgSrc: blogImg4,
    authorImg: authorImg4,
    authorName: 'Marcus Lee',
    bydealer: 'By AutoMarket News',
    category: 'Marketing',
    title: 'Effective Digital Marketing for Car Dealers',
    comments: 11,
    like: 20,
    news: 'News 2025',
    metaDate: [{ date: '03', month: 'Mar', year: '2025' }],
    shortDescription:
      'Boost your dealership’s visibility and sales with cutting-edge digital marketing strategies.',
    mainDescription:
      'From TikTok ads to Google My Business optimization, car dealerships are leveraging new marketing tools to drive more traffic and convert leads. Explore the most successful strategies dealerships are using in 2025.',
  },
  {
    id: 5,
    imgSrc: blogImg5,
    authorImg: authorImg5,
    authorName: 'Isabella Rossi',
    bydealer: 'By AutoFinance Weekly',
    category: 'Finance',
    title: 'EV Financing Tips for First-Time Buyers',
    comments: 7,
    like: 15,
    news: 'News 2025',
    metaDate: [{ date: '28', month: 'Feb', year: '2025' }],
    shortDescription:
      'Thinking of switching to electric? Here’s a financial guide to make your transition smart and affordable.',
    mainDescription:
      'Electric vehicles can come with unique financing challenges. Learn about tax credits, leasing options, and long-term savings for EV owners — all tailored to new buyers.',
  },
];


export default BlogList;

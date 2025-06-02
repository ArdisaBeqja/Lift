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
    news: '',
    metaDate: [{ date: '12', month: 'May', year: '2025' }],
    shortDescription:
      'Discover how artificial intelligence is transforming safety, navigation, and personalization in the latest car models.',
    mainDescription:
      'Artificial intelligence in vehicles is no longer futuristic. From adaptive cruise control to fully autonomous driving, AI is shaping how we interact with our cars. Explore key innovations and what the next five years may look like for smart vehicles.',
    quote: 'AI is not just changing how we drive, it’s changing how we live.',
    quoteAuthor: '– Emily Carter',
    extraParagraphs: [
      'AI-driven sensors provide a 360-degree safety net that not only reduces the likelihood of accidents but also enhances real-time decision-making on the road. These systems process massive datasets from cameras, radar, and lidar to identify pedestrians, obstacles, and road conditions faster than any human driver could. As AI evolves, we’re moving toward predictive driving systems that anticipate hazards before they appear — a leap that can save countless lives and revolutionize traffic dynamics.',
      'Soon, your vehicle will not only drive itself but also become an active participant in your daily routine. It will sync with your calendar, recommend optimal departure times based on real-time traffic conditions, and even reserve charging slots along your route. Additionally, AI-powered systems will enable cars to perform self-diagnostics, automatically schedule repairs, and notify drivers of minor issues before they become costly breakdowns — all without lifting a finger.'
    ]
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
    quote: 'The future is electric – and the future is now.',
    quoteAuthor: '– Liam Nguyen',
    extraParagraphs: [
      'Each vehicle we reviewed represents a significant leap in performance, with many offering over 500 miles of range on a single charge and ultra-fast charging capabilities that minimize downtime. Today’s EVs are equipped with state-of-the-art thermal management systems to extend battery life, while some offer wireless charging and bidirectional energy flow — allowing your car to power your home during outages or sell energy back to the grid. These innovations are pushing EVs beyond mere transportation into essential components of our smart energy ecosystems.',
      'In addition to high-tech features, manufacturers have made notable improvements in sustainability and materials. Interiors now use recycled fabrics, organic compounds, and vegan leather sourced from sustainable processes. Lightweight aluminum and carbon fiber materials improve efficiency without compromising safety. Meanwhile, sleek minimalist dashboards powered by AI assistants make driving not just efficient but luxurious, proving that eco-conscious choices no longer require sacrificing comfort or style.'
    ]
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
    quote: 'Sustainability isn’t just a trend — it’s the future of the auto industry.',
    quoteAuthor: '– Sophia Martínez',
    extraParagraphs: [
      'Dealerships are investing in eco-friendly infrastructure such as rooftop solar panels, rainwater harvesting systems, and electric vehicle charging stations. These changes not only reduce their operating costs but also demonstrate a commitment to environmental responsibility to consumers. Some are even installing energy storage systems to store solar energy for overnight use, pushing them closer to energy self-sufficiency and reducing reliance on traditional power grids.',
      'Training staff on sustainable practices and offering incentives for eco-conscious vehicle purchases are also becoming industry norms. Dealerships are forming partnerships with recycling companies to properly dispose of batteries and electronics, further closing the loop in the product lifecycle. With the auto industry facing increasing scrutiny from both regulators and consumers, green business models are proving to be both an ethical and profitable path forward.'
    ]
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
    quote: 'The dealership with the best digital presence is the one that sells the most cars.',
    quoteAuthor: '– Marcus Lee',
    extraParagraphs: [
      'Modern dealerships are focusing heavily on data-driven advertising, where campaigns are tailored based on user behavior, location, and purchase intent. AI analytics can track customer interactions across social media and websites to predict buying behavior, allowing marketers to serve ads at the perfect time. Additionally, CRM integrations allow seamless follow-ups, ensuring that no lead falls through the cracks, and conversion rates are consistently optimized.',
      'Live virtual showrooms, influencer collaborations, and short-form video content have become key pillars in engaging younger audiences. Instagram Reels, YouTube Shorts, and TikTok car tours showcase vehicles in action and build trust through authentic engagement. In 2025, car dealerships are investing in content creation teams, marketing automation tools, and AR/VR experiences to create immersive and interactive digital journeys that extend far beyond the dealership lot.'
    ]
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
    quote: 'Smart financing is the first step toward smart driving.',
    quoteAuthor: '– Isabella Rossi',
    extraParagraphs: [
      'With federal and state incentives, first-time EV buyers can save thousands through tax rebates, grants, and manufacturer discounts. Understanding eligibility criteria for these incentives is crucial when planning your purchase. Additionally, some regions offer HOV lane access, free parking, and toll exemptions for EVs, which can translate into hundreds of dollars in annual savings and a more convenient daily commute.',
      'Additionally, EV-specific leasing programs now offer more flexible terms, lower interest rates, and bundled maintenance packages. These leases often include benefits like home charger installation, free software updates, and roadside assistance tailored to EV needs. Over a vehicle’s lifetime, EV owners benefit from lower fuel costs, minimal mechanical repairs due to fewer moving parts, and longer warranty periods — making electric vehicles not only eco-friendly but also financially sound investments.'
    ]
  }
];



export default BlogList;

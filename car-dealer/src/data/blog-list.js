import blogImg1 from './bloglift.avif';
import blogImg2 from './bloglift2.avif';
import blogImg3 from './bloglift3.avif';
import blogImg4 from './bloglift4.avif';
import blogImg5 from './bloglift5.avif';
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
    bydealer: 'By LiftTech',
    category: 'Technology',
    title: 'Smart Elevators',
    comments: 8,
    like: 25,
    news: '',
    metaDate: [{ date: '12', month: 'May', year: '2025' }],
    shortDescription:
      'Explore how smart elevator systems are improving safety, efficiency, and user experience in modern buildings.',
    mainDescription:
      'Smart elevators integrate AI and IoT to optimize travel routes, reduce wait times, and enhance passenger safety. From predictive maintenance to voice control, learn how technology is transforming vertical transportation.',
    quote: 'Smart elevators are not just moving people — they’re moving cities upward.',
    quoteAuthor: '– Emily Carter',
    extraParagraphs: [
      'With real-time data and AI algorithms, smart elevators can predict traffic flows in buildings and adjust their operation accordingly, reducing congestion during peak hours. This innovation improves energy efficiency by limiting unnecessary stops and conserving power during low usage periods.',
      'Future elevators will offer personalized experiences, recognizing passengers and adjusting settings like lighting and music preferences. Integration with building security systems ensures authorized access and enhanced safety, making elevators a critical part of smart building ecosystems.'
    ]
  },
  {
    id: 2,
    imgSrc: blogImg2,
    authorImg: authorImg2,
    authorName: 'Liam Nguyen',
    bydealer: 'By Elevator Insights',
    category: 'Innovation',
    title: 'Top 5 Elevator Innovations',
    comments: 14,
    like: 32,
    news: 'News 2025',
    metaDate: [{ date: '06', month: 'Apr', year: '2025' }],
    shortDescription:
      'From ultra-fast lifts to eco-friendly designs, discover the top elevator innovations revolutionizing the industry.',
    mainDescription:
      'Elevator technology is evolving rapidly. This article highlights breakthroughs such as magnetic levitation, regenerative braking, and AI-powered predictive maintenance that are setting new standards for performance and sustainability.',
    quote: 'Elevators of tomorrow are faster, greener, and smarter.',
    quoteAuthor: '– Liam Nguyen',
    extraParagraphs: [
      'Magnetic levitation (maglev) technology eliminates the need for cables, allowing elevators to move both vertically and horizontally, opening new architectural possibilities. Regenerative braking systems capture energy during descent, feeding it back into the building’s power grid, reducing overall energy consumption.',
      'AI-powered maintenance platforms detect potential issues before they cause downtime, increasing safety and reliability. These innovations not only improve ride quality but also contribute significantly to reducing the carbon footprint of high-rise buildings.'
    ]
  },
  {
    id: 3,
    imgSrc: blogImg3,
    authorImg: authorImg3,
    authorName: 'Sophia Martínez',
    bydealer: 'By GreenLift',
    category: 'Sustainability',
    title: 'Eco-Friendly Elevatorst',
    comments: 6,
    like: 18,
    news: 'News 2025',
    metaDate: [{ date: '22', month: 'Mar', year: '2025' }],
    shortDescription:
      'Learn how elevator manufacturers and building managers are adopting greener technologies.',
    mainDescription:
      'Sustainability is key in elevator design and operation. From energy-efficient motors to smart lighting and recycled materials, the elevator industry is stepping up its commitment to the environment.',
    quote: 'Green elevators are lifting us toward a more sustainable future.',
    quoteAuthor: '– Sophia Martínez',
    extraParagraphs: [
      'Modern elevators use regenerative drives that convert kinetic energy into electricity, which is then reused in the building, dramatically cutting energy usage. LED lighting and standby modes reduce power consumption when elevators are idle.',
      'Using recycled and sustainable materials for cab interiors and parts helps reduce environmental impact. Additionally, manufacturers are exploring biodegradable lubricants and eco-friendly hydraulic fluids, further decreasing harmful emissions.'
    ]
  },
  {
    id: 4,
    imgSrc: blogImg4,
    authorImg: authorImg4,
    authorName: 'Marcus Lee',
    bydealer: 'By Elevate Marketing',
    category: 'Marketing',
    title: 'Marketing Strategies',
    comments: 11,
    like: 20,
    news: 'News 2025',
    metaDate: [{ date: '03', month: 'Mar', year: '2025' }],
    shortDescription:
      'Discover effective ways elevator companies can grow their brand and reach customers online.',
    mainDescription:
      'From targeted ads to social media campaigns, elevator companies are using digital marketing to boost sales and build trust in a competitive market.',
    quote: 'The elevator company with the best online presence rises above the rest.',
    quoteAuthor: '– Marcus Lee',
    extraParagraphs: [
      'Data-driven marketing helps companies identify potential clients based on building projects, geographic location, and industry demand. Combining SEO with content marketing positions companies as thought leaders, attracting architects, engineers, and developers.',
      'Interactive 3D models, video tours, and virtual demos on websites and social platforms engage prospects effectively. Partnering with influencers in the construction and architecture sectors amplifies reach and creates authentic endorsements.'
    ]
  },
  {
    id: 5,
    imgSrc: blogImg2,
    authorImg: authorImg5,
    authorName: 'Isabella Rossi',
    bydealer: 'By Lift Finance Journal',
    category: 'Finance',
    title: 'Financing Needs',
    comments: 7,
    like: 15,
    news: 'News 2025',
    metaDate: [{ date: '28', month: 'Feb', year: '2025' }],
    shortDescription:
      'A practical guide to financing elevator installations for commercial and residential buildings.',
    mainDescription:
      'Elevator installation can be costly, but with the right financial planning, incentives, and leasing options, upgrading your building is more affordable than ever.',
    quote: 'Smart financing lifts your building to new heights.',
    quoteAuthor: '– Isabella Rossi',
    extraParagraphs: [
      'Many regions offer grants and tax incentives for installing energy-efficient elevators, helping offset upfront costs. Leasing options provide flexible payment plans that reduce financial strain and include maintenance packages.',
      'Understanding the total cost of ownership—including installation, maintenance, and energy savings—helps building owners make informed decisions. Collaborating with financial advisors ensures you select the best funding strategy tailored to your project’s scale and timeline.'
    ]
  }
];

export default BlogList;

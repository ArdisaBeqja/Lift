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
    bydealer: 'Nga LiftTech',
    category: 'Teknologji',
    title: 'Ashensorët Smart',
    comments: 8,
    like: 25,
    news: '',
    metaDate: [{ date: '12', month: 'Maj', year: '2025' }],
    shortDescription:
      'Zbuloni si sistemet inteligjente të ashensorëve po përmirësojnë sigurinë, efikasitetin dhe përvojën e përdoruesit në ndërtesat moderne.',
    mainDescription:
      'Ashensorët inteligjentë integrojnë AI dhe IoT për të optimizuar rrugët e udhëtimit, për të reduktuar kohën e pritjes dhe për të rritur sigurinë e pasagjerëve. Nga mirëmbajtja parashikuese tek kontrolli zanor, mësoni si teknologjia po transformon transportin vertikal.',
    quote: 'Ashensorët inteligjentë nuk po lëvizin vetëm njerëzit — ata po lëvizin qytetet përpjetë.',
    quoteAuthor: '– Emily Carter',
    extraParagraphs: [
      'Me të dhënat në kohë reale dhe algoritmet e AI-së, ashensorët inteligjentë mund të parashikojnë fluksin e trafikut në ndërtesa dhe të rregullojnë funksionimin në përputhje me rrethanat, duke ulur ngarkesën në oraret e pikut. Kjo risi përmirëson efikasitetin energjetik duke shmangur ndalesat e panevojshme dhe duke kursyer energji në periudha të ulëta përdorimi.',
      'Ashensorët e së ardhmes do të ofrojnë përvoja të personalizuara, duke njohur pasagjerët dhe duke përshtatur ndriçimin apo muzikën sipas preferencave. Integrimi me sistemet e sigurisë së ndërtesës siguron akses të autorizuar dhe siguri të lartë.'
    ]
  },
  {
    id: 2,
    imgSrc: blogImg2,
    authorImg: authorImg2,
    authorName: 'Liam Nguyen',
    bydealer: 'Nga Elevator Insights',
    category: 'Inovacion',
    title: 'Inovacionet Kryesore',
    comments: 14,
    like: 32,
    news: 'Lajme 2025',
    metaDate: [{ date: '06', month: 'Prill', year: '2025' }],
    shortDescription:
      'Nga ashensorët ultra të shpejtë te dizajnet miqësore me mjedisin, zbuloni risitë që po revolucionarizojnë industrinë.',
    mainDescription:
      'Teknologjia e ashensorëve po evoluon me shpejtësi. Ky artikull thekson arritje si levitimi magnetik, frenimi rigjenerues dhe mirëmbajtja e parashikuar e mbështetur në AI që po vendosin standarde të reja për performancën dhe qëndrueshmërinë.',
    quote: 'Ashensorët e së nesërmes janë më të shpejtë, më ekologjikë dhe më të zgjuar.',
    quoteAuthor: '– Liam Nguyen',
    extraParagraphs: [
      'Teknologjia e levitimit magnetik eliminon nevojën për kabllo, duke lejuar ashensorët të lëvizin vertikalisht dhe horizontalisht, duke hapur mundësi të reja arkitektonike. Sistemet e frenimit rigjenerues kapin energjinë gjatë zbritjes dhe e rikthejnë atë në rrjetin elektrik të ndërtesës.',
      'Platforma e mirëmbajtjes së bazuar në AI identifikon probleme potenciale përpara se të ndodhin, duke rritur sigurinë dhe besueshmërinë. Këto risi përmirësojnë cilësinë e udhëtimit dhe reduktojnë ndjeshëm ndikimin mjedisor të ndërtesave të larta.'
    ]
  },
  {
    id: 3,
    imgSrc: blogImg3,
    authorImg: authorImg3,
    authorName: 'Sophia Martínez',
    bydealer: 'Nga GreenLift',
    category: 'Qëndrueshmëri',
    title: 'Ashensorë Eko',
    comments: 6,
    like: 18,
    news: 'Lajme 2025',
    metaDate: [{ date: '22', month: 'Mars', year: '2025' }],
    shortDescription:
      'Mësoni si prodhuesit e ashensorëve dhe menaxherët e ndërtesave po zbatojnë teknologji më të gjelbra.',
    mainDescription:
      'Qëndrueshmëria është thelbësore në dizajnin dhe funksionimin e ashensorëve. Nga motorët efikasë energjetikisht te ndriçimi inteligjent dhe materialet e ricikluara, industria e ashensorëve po rrit angazhimin ndaj mjedisit.',
    quote: 'Ashensorët e gjelbër po na ngrejnë drejt një të ardhmeje më të qëndrueshme.',
    quoteAuthor: '– Sophia Martínez',
    extraParagraphs: [
      'Ashensorët modernë përdorin sisteme rigjenerimi që kthejnë energjinë kinetike në elektricitet për përdorim të brendshëm në ndërtesë. Ndriçimi LED dhe modalitetet e fjetjes reduktojnë konsumin e energjisë kur ashensori është jashtë funksionit.',
      'Përdorimi i materialeve të qëndrueshme dhe të ricikluara për pjesët dhe kabinën redukton ndikimin mjedisor. Prodhuesit po eksplorojnë gjithashtu lubrifikantë biodegradues dhe lëngje hidraulike miqësore me natyrën.'
    ]
  },
  {
    id: 4,
    imgSrc: blogImg4,
    authorImg: authorImg4,
    authorName: 'Marcus Lee',
    bydealer: 'Nga Elevate Marketing',
    category: 'Marketing',
    title: 'Marketing Efektiv',
    comments: 11,
    like: 20,
    news: 'Lajme 2025',
    metaDate: [{ date: '03', month: 'Mars', year: '2025' }],
    shortDescription:
      'Zbuloni mënyra efektive se si kompanitë e ashensorëve mund të rrisin markën e tyre dhe të arrijnë më shumë klientë online.',
    mainDescription:
      'Nga reklamat e synuara deri tek fushatat në rrjetet sociale, kompanitë e ashensorëve po përdorin marketingun digjital për të rritur shitjet dhe për të ndërtuar besimin.',
    quote: 'Kompania me praninë më të mirë online ngrihet mbi të tjerat.',
    quoteAuthor: '– Marcus Lee',
    extraParagraphs: [
      'Marketingu i bazuar në të dhëna ndihmon kompanitë të identifikojnë klientët potencialë sipas projekteve ndërtimore dhe vendndodhjes. Kombinimi i SEO me përmbajtje cilësore krijon autoritet dhe besueshmëri.',
      'Modelet 3D interaktive, videot demonstrative dhe prezantimet virtuale janë mjete që tërheqin klientët. Bashkëpunimi me influencues të fushës rrit besueshmërinë dhe shtrirjen e markës.'
    ]
  },
  {
    id: 5,
    imgSrc: blogImg2,
    authorImg: authorImg5,
    authorName: 'Isabella Rossi',
    bydealer: 'Nga Lift Finance Journal',
    category: 'Financa',
    title: 'Financim Ashensorësh',
    comments: 7,
    like: 15,
    news: 'Lajme 2025',
    metaDate: [{ date: '28', month: 'Shkurt', year: '2025' }],
    shortDescription:
      'Një udhëzues praktik për financimin e ashensorëve për ndërtesa banimi dhe komerciale.',
    mainDescription:
      'Instalimi i ashensorëve mund të jetë i kushtueshëm, por me planifikim të duhur financiar dhe opsione të financimit, përmirësimi i ndërtesës bëhet më i përballueshëm.',
    quote: 'Financimi i zgjuar ngre vlerën e ndërtesës suaj.',
    quoteAuthor: '– Isabella Rossi',
    extraParagraphs: [
      'Shumë zona ofrojnë subvencione dhe lehtësime tatimore për instalimin e ashensorëve me efikasitet të lartë energjetik. Opsionet e leasing-ut ofrojnë plane fleksibile pagese me mirëmbajtje të përfshirë.',
      'Kuptimi i kostos totale — përfshirë instalimin, mirëmbajtjen dhe kursimet e energjisë — ndihmon pronarët të marrin vendime të informuara. Konsultimi me këshilltarë financiarë ndihmon për të gjetur strategjinë më të përshtatshme.'
    ]
  }
];

export default BlogList;

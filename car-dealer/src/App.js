import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './component/loader';
import LogoDark from './assets/images/logo-dark.png';
import LogoLight from './assets/images/logo-light.png';
import LogoWhite from './assets/images/logo-white.png';
import PrivateRoute from './layouts/header/PrivateRoute';

// All Headers
const Header1 = React.lazy(() => import('./layouts/header/Header1'));
const Header3 = React.lazy(() => import('./layouts/header/header3'));

// All Footers
const FooterNew01 = React.lazy(() => import('./layouts/footer/footer-new-01'));
const FooterStyle01 = React.lazy(() => import('./layouts/footer/footer-style-01'));
const FooterStyle02 = React.lazy(() => import('./layouts/footer/footer-style-02'));

// Back to Top
const BackTop = React.lazy(() => import('./component/back-top'));

// Home
const HomeIndex = React.lazy(() => import('./pages/modern-home1/index'));
const ModernHome2 = React.lazy(() => import('./pages/modern-home2/index'));
const ModernHome3 = React.lazy(() => import('./pages/modern-home3/index'));

const Blog = React.lazy(() => import('./pages/blog/blog'));
const BlogLeftSideBar = React.lazy(() => import('./pages/blog/blog-left-sidebar'));
const BlogRightSideBar = React.lazy(() => import('./pages/blog/blog-right-sidebar'));
const BlogGrid = React.lazy(() => import('./pages/blog/blog-grid'));
const BlogSingle = React.lazy(() => import('./pages/blog/blog-details'));
const CarGrid = React.lazy(() => import('./pages/car/car-grid'));
const CarListing = React.lazy(() => import('./pages/car/car-list'));
const CarDetails = React.lazy(() => import('./pages/car/car-details'));
const CarDetailsTwo = React.lazy(() => import('./pages/car/car-details-02'));

const ModernContact = React.lazy(() => import('./pages/modern-contact'));
const ContactUs = React.lazy(() => import('./pages/contact/contact'));
const ContactUsTwo = React.lazy(() => import('./pages/contact/contact-02'));
const Faq = React.lazy(() => import('./pages/faq/faq'));
const ComingSoon = React.lazy(() => import('./pages/coming-soon'));
const Error404 = React.lazy(() => import('./pages/error404/error404'));
const PrivacyPolicy = React.lazy(() => import('./pages/privacy-policy'));
const TermsConditions = React.lazy(() => import('./pages/terms-conditions'));
const TypoGraphy = React.lazy(() => import('./pages/typography'));

// Pages
const ModernAbout = React.lazy(() => import('./pages/modern-about'));
const AboutUs = React.lazy(() => import('./pages/about-us'));
const AboutUsTwo = React.lazy(() => import('./pages/about-us/about-02'));
const Careers = React.lazy(() => import('./pages/careers'));
const Team = React.lazy(() => import('./pages/team/team'));
const TeamTwo = React.lazy(() => import('./pages/team/team-02'));
const TeamSingle = React.lazy(() => import('./pages/team/team-single'));
const ModernService = React.lazy(() => import('./pages/modern-services'));
const Service = React.lazy(() => import('./pages/services/services'));
const PageLeftSideBar = React.lazy(() => import('./pages/page-sidebar/page-left-sidebar'));
const PageRightSideBar = React.lazy(() => import('./pages/page-sidebar/page-right-sidebar'));
const PageBothSideBar = React.lazy(() => import('./pages/page-sidebar/page-both-sidebar'));
const AddCar = React.lazy(() => import('./pages/add-car'));

// All Elements
const ElementsActionBox = React.lazy(() => import('./elements/action-box'));
const ElementsAccordion = React.lazy(() => import('./elements/accordion'));
const ElementsButton = React.lazy(() => import('./elements/button'));
const ElementsBlog = React.lazy(() => import('./elements/blog'));
const ElementsClientLogo = React.lazy(() => import('./elements/client-logo'));
const ElementsContentBox = React.lazy(() => import('./elements/content-box'));
const ElementsCountdown = React.lazy(() => import('./elements/countdown'));
const ElementsCounter = React.lazy(() => import('./elements/counter'));
const ElementsRangeSlider = React.lazy(() => import('./elements/rangeslider'));
const ElementsTestimonial = React.lazy(() => import('./elements/testimonial'));
const ElementsTimeline = React.lazy(() => import('./elements/timeline'));
const ElementsVehicleShowcase = React.lazy(() => import('./elements/vehicle-showcase'));
const ElementsTeam = React.lazy(() => import('./elements/team'));
const ElementsTabs = React.lazy(() => import('./elements/tabs'));
const ElementsNewsletter = React.lazy(() => import('./elements/newsletter'));
const ElementsForm = React.lazy(() => import('./elements/form'));
const ElementsSocialIcon = React.lazy(() => import('./elements/social-icon'));
const ElementsImageGallery = React.lazy(() => import('./elements/image-gallery'));
const ResponsiveMenu = React.lazy(() => import('./elements/menu'));
const ElementsFeatureInfo = React.lazy(() => import('./elements/feature-info'));
const ElementsInfoBox = React.lazy(() => import('./elements/infobox'));
const ElementsList = React.lazy(() => import('./elements/list'));
const ElementsVehiclesType = React.lazy(() => import('./elements/vehicles-type'));
const ElementsVehiclesSearch = React.lazy(() => import('./elements/vehicles-search'));
const ElementsVideo = React.lazy(() => import('./elements/video'));

function App() {
  const location = useLocation();
  const hideFooter = location.pathname !== '';

  return (
    <Suspense fallback>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Header1 className="header-transprent" siteLogo={LogoWhite} />}>

            {/* Home */}
            <Route index path="/" element={<HomeIndex />} />
            <Route path="/modern-home2" element={<ModernHome2 />} />
            <Route path="/modern-home3" element={<ModernHome3 />} />
            <Route
          path="/add-car"
          element={
            <PrivateRoute>
              <AddCar />
            </PrivateRoute>
          }
        />
            {/* Pages */}
            <Route path="/contact-modern" element={<ModernContact />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact-02" element={<ContactUsTwo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-left-sidebar" element={<BlogLeftSideBar />} />
            <Route path="/blog-right-sidebar" element={<BlogRightSideBar />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-details/:id" element={<BlogSingle />} />
            <Route path="/car-grid" element={<CarGrid />} />
            <Route path="/car-list" element={<CarListing />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
            <Route path="/car-details-02/:id" element={<CarDetailsTwo />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/page-left-sidebar" element={<PageLeftSideBar />} />
            <Route path="/page-right-sidebar" element={<PageRightSideBar />} />
            <Route path="/page-both-sidebar" element={<PageBothSideBar />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/typography" element={<TypoGraphy />} />
            <Route path="/about-modern" element={<ModernAbout />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-02" element={<AboutUsTwo />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-02" element={<TeamTwo />} />
            <Route path="/team-details/:id" element={<TeamSingle />} />
            <Route path="/service-modern" element={<ModernService />} />
            <Route path="/service" element={<Service />} />
            <Route path="/add-car" element={<AddCar />} />

            {/* Elements */}
            <Route path="/elements-action-box" element={<ElementsActionBox />} />
            <Route path="/elements-accordion" element={<ElementsAccordion />} />
            <Route path="/elements-button" element={<ElementsButton />} />
            <Route path="/elements-blog" element={<ElementsBlog />} />
            <Route path="/elements-client-logo" element={<ElementsClientLogo />} />
            <Route path="/elements-content-box" element={<ElementsContentBox />} />
            <Route path="/elements-counter" element={<ElementsCounter />} />
            <Route path="/elements-countdown" element={<ElementsCountdown />} />
            <Route path="/elements-range-slider" element={<ElementsRangeSlider />} />
            <Route path="/elements-testimonial" element={<ElementsTestimonial />} />
            <Route path="/elements-timeline" element={<ElementsTimeline />} />
            <Route path="/elements-vehicle-showcase" element={<ElementsVehicleShowcase />} />
            <Route path="/elements-team" element={<ElementsTeam />} />
            <Route path="/elements-tab" element={<ElementsTabs />} />
            <Route path="/elements-socialicon" element={<ElementsSocialIcon />} />
            <Route path="/elements-newsletter" element={<ElementsNewsletter />} />
            <Route path="/elements-form" element={<ElementsForm />} />
            <Route path="/elements-image-gallery" element={<ElementsImageGallery />} />
            <Route path="/elements-list" element={<ElementsList />} />
            <Route path="/elements-menu" element={<ResponsiveMenu />} />
            <Route path="/elements-feature-info" element={<ElementsFeatureInfo />} />
            <Route path="/elements-infobox" element={<ElementsInfoBox />} />
            <Route path="/elements-vehicles-type" element={<ElementsVehiclesType />} />
            <Route path="/elements-vehicles-search" element={<ElementsVehiclesSearch />} />
            <Route path="/elements-video" element={<ElementsVideo />} />
          </Route>

          {/* Modern Home 2 */}
          <Route path="/modern-home2" element={<Header1 className="no-shadow" containerSize="container" mobileLogo={LogoDark} />}>
            <Route path="/modern-home2" element={<ModernHome2 />} />
          </Route>

          {/* Modern Home 3 */}
          <Route path="/modern-home3" element={<Header3 className="header-transprent" siteLogo={LogoLight} />}>
            <Route path="/modern-home3" element={<ModernHome3 />} />
          </Route>

        </Routes>

        {/* All Footer */}
        {hideFooter && (
          <Routes>
            {/* Footer Default */}
            <Route path="/*" element={<FooterNew01 />} />{' '}

            {/* Footer Style 03 */}
            <Route path="/modern-home2" element={<FooterStyle01 />} />{' '}
            
            {/* Footer Style 03 */}
            <Route path="/modern-home3" element={<FooterStyle02 />} />{' '}
          </Routes>
        )}

        {/* Back to Top */}
        <BackTop />
      </div>
    </Suspense>
  );
}

export default App;

import React from 'react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components

// Page Section
import AppSection from './app-section';
import DownloadApp from './download-app';
import ClientLogoSection from './client-logo';

// SCSS
import './style.scss';
import appBG from '../../assets/images/modern-demo/section-bg-map.webp';
import InfoboxSection from './infobox-section';

function ModernService() {
  
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Service"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Service', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <div className="site-content homepage">
            <div className="content-wrapper">

              {/* App Services Section */}
              <section className="section-ptb">
                <div className=""><AppSection /></div>
              </section>

              {/* All Services Section */}
              <section className="section-ptb bg-light">
                <div className=""><InfoboxSection /></div>
              </section>

              {/* Download App section*/}
              <section className="section-mtb download-application">
                <div className="section-overlay" data-overlay-opacity="0.2" style={{backgroundImage: `url(${appBG})`, backgroundSize: 'inherit'}}></div>
                <DownloadApp />
                <div className="section-pt"><ClientLogoSection /></div>
              </section>
                                      
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModernService;

import React from 'react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Page Section
import CareersSection from './careers-section';

function Careers() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Careers"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Careers', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <CareersSection />
        </div>
      </div>
    </>
  );
}

export default Careers;

import React from 'react';

// Libraries
import { Container } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import List from '../component/list';

function ElementsList() {
  const listItems = [
    { id: 1, item: 'Success is something of which we all want more', url: '/' },
    {
      id: 2,
      item: 'Most people believe that success is difficult',
      url: '/blog',
    },
    {
      id: 3,
      item: 'There are basically six key areas to higher achievement',
      url: '/about-us',
    },
    { id: 4, item: 'Believing in yourself and those around you', url: '/team' },
    { id: 5, item: 'Making a decision to do something', url: '/404' },
  ];

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="List"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'List', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <div className="row">
                <div className="col-sm-6">
                  <SectionTitle title="List : Normal" />
                  <List icon="fas fa-check" data={listItems} />
                </div>
                <div className="col-sm-6">
                  <SectionTitle title="List : Link" />
                  <List icon="fas fa-check" link={true} data={listItems} />
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsList;

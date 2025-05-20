import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import List from '../../component/list';

// Widget
import SideBar from '../../widget/sidebar';

function PageRightSideBar() {
  const listItems = [
    { id: 1, item: 'Lorem ipsum dolor sit amet, consectetur' },
    {
      id: 2,
      item: 'Quidem error quae illo excepturi nostrum blanditiis laboriosam',
    },
    {
      id: 3,
      item: 'Molestias, eum nihil expedita dolorum odio dolorem',
    },
    { id: 4, item: 'Eum nihil expedita dolorum odio dolorem' },
    { id: 5, item: ' Explicabo rem illum magni perferendis' },
  ];
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Page Right Sidebar"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Page Right Sidebar', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="blog section-ptb">
            <Container>
              <Row>
                <Col lg={8} className="mb-5 mb-lg-0">
                  <h5>Page Right sidebar</h5>
                  <p className="mb-4 mb-md-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste qui impedit, ut dolorem aspernatur mollitia veritatis
                    quod! Deserunt molestiae distinctio doloremque sequi,
                    perferendis, temporibus ad autem ab, quos et eos.Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Iste qui
                    impedit, ut dolorem aspernatur mollitia veritatis quod!
                    Deserunt molestiae
                    <br /> <br />
                    Distinctio doloremque sequi, perferendis, temporibus ad
                    autem ab, quos et eos.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Iste qui impedit, ut dolorem
                    aspernatur mollitia veritatis quod! Deserunt molestiae
                    distinctio doloremque sequi, perferendis, temporibus ad
                    autem ab, quos et eos.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Iste qui impedit, ut dolorem
                    aspernatur mollitia veritatis
                  </p>

                  <List
                    className="mb-4 mb-md-5 page-sidebar-list"
                    icon="fa fa-angle-right"
                    data={listItems}
                  />

                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste qui impedit, ut dolorem aspernatur mollitia veritatis
                    quod! Deserunt molestiae distinctio doloremque sequi,
                    perferendis, temporibus ad autem ab, quos et eos.Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Iste qui
                    impedit, ut dolorem aspernatur mollitia veritatis quod!
                    Deserunt molestiae
                    <br /> <br />
                    Distinctio doloremque sequi, perferendis, temporibus ad
                    autem ab, quos et eos.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Iste qui impedit, ut dolorem
                    aspernatur mollitia veritatis quod! Deserunt molestiae
                    distinctio doloremque sequi, perferendis, temporibus ad
                    autem ab, quos et eos.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Iste qui impedit, ut dolorem
                    aspernatur mollitia veritatis
                  </p>
                </Col>
                <Col lg={4}>
                  <SideBar />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default PageRightSideBar;

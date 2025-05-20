import React from 'react';

// Libraries
import { Container } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import Button from '../component/button/button';

function ElementsButton() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Button"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Button', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <SectionTitle extraClass="mb-0" title="Button" />
                </div>
                <div className="col">
                  <div className="row gx-2">
                    <div className="col">
                      <Button />
                    </div>
                    <div className="col">
                      <Button btnText="Get A Quote" />
                    </div>
                    <div className="col">
                      <Button btnText="Get A Quote" btnURL="/about-us" />
                    </div>
                  </div>
                  <div className="row mt-5 gx-2">
                    <div className="col">
                      <Button btnClass="btn-sm" btnText="btn sm" />
                    </div>
                    <div className="col">
                      <Button btnClass="btn-md " btnText="btn md" />
                    </div>
                    <div className="col">
                      <Button btnClass="btn-lg" btnText="btn lg" btnURL="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 gx-2 mb-5">
                <div className="col-sm-4">
                  <SectionTitle extraClass="mb-0" title="Border Button" />
                </div>
                <div className="col">
                  <Button btnClass="border" />
                </div>
                <div className="col">
                  <Button btnClass="border" btnText="Get A Quote" />
                </div>
                <div className="col">
                  <Button
                    btnClass="border"
                    btnText="Get A Quote"
                    btnURL="/about-us"
                  />
                </div>
              </div>

              <div className="row py-4 px-2 mb-5 bg-primary ">
                <div className="col-sm-4">
                  <SectionTitle
                    extraClass="mb-0 "
                    titleClass="text-white"
                    title="Secondary Button"
                  />
                </div>
                <div className="col">
                  <div className="row gx-2 text-center">
                    <div className="col">
                      <Button btnClass="secondary" />
                    </div>
                    <div className="col">
                      <Button btnClass="secondary" btnText="Get A Quote" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="secondary"
                        btnText="Get A Quote"
                        btnURL=""
                      />
                    </div>
                  </div>
                  <div className="row mt-5 gx-2 text-center">
                    <div className="col">
                      <Button btnClass="secondary btn-sm" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="secondary btn-md "
                        btnText="Get A Quote"
                      />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="secondary btn-lg"
                        btnText="Get A Quote"
                        btnURL=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row py-5 mb-5 bg-secondary px-2">
                <div className="col-sm-4">
                  <SectionTitle
                    extraClass="mb-0 section-title-light"
                    title="Light Button"
                  />
                </div>
                <div className="col">
                  <div className="row gx-2">
                    <div className="col">
                      <Button btnClass="button-white" />
                    </div>
                    <div className="col">
                      <Button btnClass="button-white" btnText="Get A Quote" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="button-white"
                        btnText="Get A Quote"
                        btnURL="/about-us"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5 gx-2">
                <div className="col-sm-4">
                  <SectionTitle extraClass="mb-0" title="Link" />
                </div>
                <div className="col">
                  <Button btnClass="btn-link" />
                </div>
                <div className="col">
                  <Button
                    btnClass="btn-link  link-secondary"
                    btnText="link-secondary"
                  />
                </div>
                <div className="col">
                  <Button btnClass="btn-link" btnText="Get A Quote" btnURL="" />
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsButton;

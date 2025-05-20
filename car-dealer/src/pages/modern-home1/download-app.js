// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import List from '../../component/list';

// Site Data
import appIMG from '../../assets/images/modern-demo/app-image-demo.webp';
import AppButton from '../../component/app-button/app-button';

function DownloadApp(props) {

  const listItems = [
    { id: 1, item: 'What maintenance does an electric car need?', url: '/'},
    { id: 2, item: 'Analyse each tyre for any excess tread wear.', url: '/',},
    { id: 3, item: 'Access control put an electric vehicle charge.', url: '/',},
  ];

  return (
    <>
      <Container>
        <Row className="align-items-center">
            <Col lg={7} className="mt-5 mt-lg-0">
                <div className="download-application-left">
                    <SectionTitle
                        extraClass="section-title-new"
                        title="Download Our Car Dealer Application."
                        content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme."
                    />
                    <List className="list-new mb-4 pb-2" icon="fas fa-check" data={listItems} />
                    <AppButton
                        buttonLabel="Download Now On :"
                        appleBtnColor="theme"
                        appleBtn={true}
                        androidBtn={true}
                        appleURL="/"
                        androidURL="/home-2"
                    />
                </div>
            </Col>
            <Col lg={5}>
                <div className="download-application-right">
                <div className="download-application-img text-center">
                    <img className="img-fluid" src={appIMG} alt="" />
                </div>
                </div>
            </Col>
        </Row>
      </Container>
    </>
  );
}
export default DownloadApp;

import React, { useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import VehiclesSearch from '../../component/vehicles-search';

// template
import VehiclesSearchBlock from '../../form/vehicles-search';

function VehiclesSearchSection() {

  const [data1] = useState(VehiclesSearchBlock);

  return (
    <>
        <Container>
            <Row>
                <Col sm={12} className="">
                    <VehiclesSearch
                    className="vehicles-search-style-2"
                    colorScheme="light2"
                    title="I Want To Buy"
                    tabActive="0"
                    tabsTitle={[
                        { id: 1, title: 'All vehicles' },
                        { id: 2, title: 'Certified' },
                        { id: 3, title: 'New' },
                        { id: 4, title: 'Used' },
                    ]}
                    tabsContent={[
                        { id: 11, content: data1 },
                        { id: 12, content: data1 },
                        { id: 13, content: data1 },
                        { id: 14, content: data1 },
                    ]}
                    />
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default VehiclesSearchSection;

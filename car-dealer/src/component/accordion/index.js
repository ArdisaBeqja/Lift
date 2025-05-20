import Accordion from 'react-bootstrap/Accordion';
import './accordion.scss';

function AccordionPGS(props) {
  return (
    <>
      <div className="accordion-main">
        <Accordion
          className="accordion-pgs"
          defaultActiveKey={props.defaultActive || '1'}
        >
          {props?.accordionData &&
            props.accordionData.map((item) => (
              <Accordion.Item eventKey={`${item.id}`} key={item.id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  <h6>{item.heading}</h6>
                  {item.content}
                  <ul className="list list-unstyled ckeck-list">
                    {item.listItem.map((address, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-check"></i> {address.list}
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}

          {props?.accordionItems &&
            props.accordionItems.map((item) => (
              <Accordion.Item eventKey={`${item.id}`} key={item.id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      </div>
    </>
  );
}

export default AccordionPGS;

// Components
import AccordionPGS from '../component/accordion';

// Site Data
import GeneralInformationfaqData from '../data/accordion-list';

function GeneralInformation() {
  return (
    <>
      <AccordionPGS
        defaultActive="1"
        accordionData={GeneralInformationfaqData}
      />
    </>
  );
}
export default GeneralInformation;

// Components
import AccordionPGS from '../component/accordion';

// Site Data
import { FeaturesOptionsfaqData } from '../data/accordion-list';

function FeaturesOptions() {
  return (
    <>
      <AccordionPGS defaultActive="1" accordionData={FeaturesOptionsfaqData} />
    </>
  );
}
export default FeaturesOptions;

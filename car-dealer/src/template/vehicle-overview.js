// Components
import AccordionPGS from '../component/accordion';

// Site Data
import { VehicleOverviewfaqData } from '../data/accordion-list';

function VehicleOverview() {
  return (
    <>
      <AccordionPGS defaultActive="1" accordionData={VehicleOverviewfaqData} />
    </>
  );
}
export default VehicleOverview;

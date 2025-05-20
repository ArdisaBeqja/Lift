// Libraries
import { Table } from 'react-bootstrap';

const data = [
  { title: 'Air conditioning', owner: 'Mark' },
  { title: 'Alloy Wheels', owner: 'Jacob' },
  { title: 'Anti-Lock Brakes (ABS)', owner: 'Larry' },
  { title: 'Anti-Theft', owner: 'Larry' },
  { title: 'Anti-Starter', owner: 'Larry' },
  { title: 'Alloy Wheels', owner: 'Larry' },
];
function CarDetailsFeaturesOptions() {
  return (
    <>
      <div className="car-generalinfo">
        <h6>consectetur adipisicing elit</h6>

        <Table responsive>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td className="info-title">{val.title}</td>
                  <td className="info-owner">{val.owner}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default CarDetailsFeaturesOptions;

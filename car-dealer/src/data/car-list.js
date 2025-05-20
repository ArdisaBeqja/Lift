import carImg1 from '../assets/images/car/car01/01.webp';
import carImg2 from '../assets/images/car/car02/01.webp';
import carImg3 from '../assets/images/car/car03/01.webp';
import carImg4 from '../assets/images/car/car04/01.webp';
import carImg5 from '../assets/images/car/car05/01.webp';
import carImg6 from '../assets/images/car/car06/01.webp';

import CarGalleryImg1 from '../assets/images/car/car01/01.webp';
import CarGalleryImg2 from '../assets/images/car/car01/02.webp';
import CarGalleryImg3 from '../assets/images/car/car01/03.webp';
import CarGalleryImg4 from '../assets/images/car/car01/04.webp';
import CarGalleryImg5 from '../assets/images/car/car01/05.webp';

import Car2GalleryImg1 from '../assets/images/car/car02/01.webp';
import Car2GalleryImg2 from '../assets/images/car/car02/02.webp';
import Car2GalleryImg3 from '../assets/images/car/car02/03.webp';
import Car2GalleryImg4 from '../assets/images/car/car02/04.webp';
import Car2GalleryImg5 from '../assets/images/car/car02/05.webp';

import Car3GalleryImg1 from '../assets/images/car/car03/01.webp';
import Car3GalleryImg2 from '../assets/images/car/car03/02.webp';
import Car3GalleryImg3 from '../assets/images/car/car03/03.webp';
import Car3GalleryImg4 from '../assets/images/car/car03/04.webp';
import Car3GalleryImg5 from '../assets/images/car/car03/05.webp';

import Car4GalleryImg1 from '../assets/images/car/car04/01.webp';
import Car4GalleryImg2 from '../assets/images/car/car04/02.webp';
import Car4GalleryImg3 from '../assets/images/car/car04/03.webp';
import Car4GalleryImg4 from '../assets/images/car/car04/04.webp';
import Car4GalleryImg5 from '../assets/images/car/car04/05.webp';

import Car5GalleryImg1 from '../assets/images/car/car05/01.webp';
import Car5GalleryImg2 from '../assets/images/car/car05/02.webp';
import Car5GalleryImg3 from '../assets/images/car/car05/03.webp';
import Car5GalleryImg4 from '../assets/images/car/car05/04.webp';
import Car5GalleryImg5 from '../assets/images/car/car05/05.webp';

import Car6GalleryImg1 from '../assets/images/car/car06/01.webp';
import Car6GalleryImg2 from '../assets/images/car/car06/02.webp';
import Car6GalleryImg3 from '../assets/images/car/car06/03.webp';
import Car6GalleryImg4 from '../assets/images/car/car06/04.webp';
import Car6GalleryImg5 from '../assets/images/car/car06/05.webp';

import carslidImg1 from '../assets/images/car/car-08.webp';
import carslidImg2 from '../assets/images/car/car-09.webp';
import carslidImg3 from '../assets/images/car/car-10.webp';
import carslidImg4 from '../assets/images/bg/01.webp';
import carslidImg5 from '../assets/images/bg/02.webp';
import carslidImg6 from '../assets/images/bg/06.webp';

// Lead Form
import RequestMoreInfoForm from '../form/request-more-info-form';
import ScheduleTestDriveForm from '../form/schedule-test-drive-form';
import TradeInAppraisalForm from '../form/trade-in-appraisal';
import EmailToAFriendForm from '../form/email-to-a-friend';
import MakeAnOfferForm from '../form/make-an-offer-form';

// Attributes Icons
const makeIcon = "fa-solid fa-tag";
const modelIcon = "fa-solid fa-car";
const registrationDateIcon = "fa-regular fa-registered";
const mileageIcon = "fa-solid fa-gauge";
const horsepowerIcon = "fa-solid fa-bolt";
const conditionIcon = "fa-solid fa-file-pen";
const exteriorColorIcon = "fa-solid fa-fill-drip";
const interiorColorIcon = "fa-solid fa-fill-drip";
const transmissionIcon = "fa-solid fa-gear";
const engineIcon = "fa-solid fa-car";
const drivetrainIcon = "fa-solid fa-right-left";

// const CarList = [
//   {
//     id: 1,
//     imgSrc: carImg1,
//     carName: 'x---------Acura Rsx',
//     description:
//       'Temporibus possimus quasi beatae, You will begin to realize why, consectetur adipisicing elit. aspernatur nemo maiores.',
//     carPrice: '69,995',
//     carNewPrice: '35,568',
//     attributes: [
//       {
//         id: 1,
//         title: 'Make',
//         specification: 'Acura',
//         icon: makeIcon,
//       },
//       {
//         id: 2,
//         title: 'Model',
//         specification: '7-series',
//         icon: modelIcon,
//       },
//       {
//         id: 3,
//         title: 'Registration Date',
//         specification: '2021',
//         icon: registrationDateIcon,
//       },
//       {
//         id: 4,
//         title: 'Mileage',
//         specification: '25,000 mi',
//         icon: mileageIcon,
//       },
//       {
//         id: 5,
//         title: 'Horsepower',
//         specification: '210 hp',
//         icon: horsepowerIcon,
//       },
//       {
//         id: 6,
//         title: 'Condition',
//         specification: 'New',
//         icon: conditionIcon,
//       },
//       {
//         id: 7,
//         title: 'Exterior Color',
//         specification: 'Silver',
//         icon: exteriorColorIcon,
//       },
//       {
//         id: 8,
//         title: 'Interior Color',
//         specification: 'Brown (Leather)',
//         icon: interiorColorIcon,
//       },
//       {
//         id: 9,
//         title: 'Transmission',
//         specification: 'Manual',
//         icon: transmissionIcon,
//       },
//       {
//         id: 10,
//         title: 'Engine',
//         specification: '5.1 L',
//         icon: engineIcon,
//       },
//       {
//         id: 11,
//         title: 'Drivetrain',
//         specification: 'FWD',
//         icon: drivetrainIcon,
//       },
//     ],
//     review: [
//       { id: 1, icon: 'fa-solid fa-star'},
//       { id: 2, icon: 'fa-solid fa-star'},
//       { id: 3, icon: 'fa-solid fa-star'},
//       { id: 4, icon: 'fa-solid fa-star'},
//       { id: 5, icon: 'fa-regular fa-star'},
//     ],
//     leadForm: [
//       {
//         id: 1,
//         title: 'Request More Info',
//         icon: 'fa-solid fa-circle-question',
//         form: <RequestMoreInfoForm />,
//       },
//       {
//         id: 2,
//         title: 'Schedule Test Drive',
//         icon: 'fa-solid fa-gauge',
//         form: <ScheduleTestDriveForm />,
//       },
//       {
//         id: 3,
//         title: 'Make an Offer',
//         icon: 'fa-solid fa-tag',
//         form: <MakeAnOfferForm />,
//       },
//       {
//         id: 4,
//         title: 'Email to a Friend',
//         icon: 'fa-solid fa-envelope',
//         form: <EmailToAFriendForm />,
//       },
//       {
//         id: 5,
//         title: 'Trade-In Appraisal',
//         icon: 'fa-regular fa-circle-down',
//         form: <TradeInAppraisalForm />,
//         size: 'lg',
//       },
//     ],
//     gallery: [
//       { id: 1, image: CarGalleryImg1 },
//       { id: 2, image: CarGalleryImg2 },
//       { id: 3, image: CarGalleryImg3 },
//       { id: 4, image: CarGalleryImg4 },
//       { id: 5, image: CarGalleryImg5 },
//     ],
//   },

//   {
//     id: 2,
//     imgSrc: carImg2,
//     carName: '2017 Audi R8',
//     description:
//       'The Audi R8 came about as a production version of the Le Mans Quattro concept car.',
//     carPrice: '69,995',
//     carNewPrice: '35,568',
//     attributes: [
//       {
//         id: 1,
//         title: 'Make',
//         specification: 'Audi R8',
//         icon: makeIcon,
//       },
//       {
//         id: 2,
//         title: 'Model',
//         specification: '7-series',
//         icon: modelIcon,
//       },
//       {
//         id: 3,
//         title: 'Registration Date',
//         specification: '2021',
//         icon: registrationDateIcon,
//       },
//       {
//         id: 4,
//         title: 'Mileage',
//         specification: '25,000 mi',
//         icon: mileageIcon,
//       },
//       {
//         id: 5,
//         title: 'horsepower',
//         specification: '210 hp',
//         icon: horsepowerIcon,
//       },
//       {
//         id: 6,
//         title: 'Condition',
//         specification: 'New',
//         icon: conditionIcon,
//       },
//       {
//         id: 7,
//         title: 'Exterior Color',
//         specification: 'Silver',
//         icon: exteriorColorIcon,
//       },
//       {
//         id: 8,
//         title: 'Interior Color',
//         specification: 'Brown (Leather)',
//         icon: interiorColorIcon,
//       },
//       {
//         id: 9,
//         title: 'Transmission',
//         specification: 'Automatic',
//         icon: transmissionIcon,
//       },
//       {
//         id: 10,
//         title: 'Engine',
//         specification: '5.1 L',
//         icon: engineIcon,
//       },
//       {
//         id: 11,
//         title: 'Drivetrain',
//         specification: 'FWD',
//         icon: drivetrainIcon,
//       },
//     ],

//     review: [
//       { id: 1, icon: 'fa-solid fa-star'},
//       { id: 2, icon: 'fa-solid fa-star'},
//       { id: 3, icon: 'fa-solid fa-star'},
//       { id: 4, icon: 'fa-solid fa-star'},
//       { id: 5, icon: 'fa-regular fa-star'},
//     ],
//     leadForm: [
//       {
//         id: 1,
//         title: 'Request More Info',
//         icon: 'fa-solid fa-circle-question',
//         form: <RequestMoreInfoForm />,
//       },
//       {
//         id: 2,
//         title: 'Schedule Test Drive',
//         icon: 'fa-solid fa-gauge',
//         form: <ScheduleTestDriveForm />,
//       },
//       {
//         id: 3,
//         title: 'Make an Offer',
//         icon: 'fa-solid fa-tag',
//         form: <MakeAnOfferForm />,
//       },
//       {
//         id: 4,
//         title: 'Email to a Friend',
//         icon: 'fa-solid fa-envelope',
//         form: <EmailToAFriendForm />,
//       },
//       {
//         id: 5,
//         title: 'Trade-In Appraisal',
//         icon: 'fa-regular fa-circle-down',
//         form: <TradeInAppraisalForm />,
//         size: 'lg',
//       },
//     ],
//     gallery: [
//       { id: 1, image: Car2GalleryImg1 },
//       { id: 2, image: Car2GalleryImg2 },
//       { id: 3, image: Car2GalleryImg3 },
//       { id: 4, image: Car2GalleryImg4 },
//       { id: 5, image: Car2GalleryImg5 },
//     ],
//   },

//   {
//     id: 3,
//     imgSrc: carImg3,
//     carName: '2017 Bentley Bentayga',
//     description:
//       'Bentley revealed the specifics of its first SUV, called the Bentayga.',
//     carPrice: '69,995',
//     carNewPrice: '35,568',
//     attributes: [
//       {
//         id: 1,
//         title: 'Make',
//         specification: 'Bentley',
//         icon: makeIcon,
//       },
//       {
//         id: 2,
//         title: 'Model',
//         specification: '7-series',
//         icon: modelIcon,
//       },
//       {
//         id: 3,
//         title: 'Registration Date',
//         specification: '2021',
//         icon: registrationDateIcon,
//       },
//       {
//         id: 4,
//         title: 'Mileage',
//         specification: '25,000 mi',
//         icon: mileageIcon,
//       },
//       {
//         id: 5,
//         title: 'horsepower',
//         specification: '210 hp',
//         icon: horsepowerIcon,
//       },
//       {
//         id: 6,
//         title: 'Condition',
//         specification: 'New',
//         icon: conditionIcon,
//       },
//       {
//         id: 7,
//         title: 'Exterior Color',
//         specification: 'Silver',
//         icon: exteriorColorIcon,
//       },
//       {
//         id: 8,
//         title: 'Interior Color',
//         specification: 'Brown (Leather)',
//         icon: interiorColorIcon,
//       },
//       {
//         id: 9,
//         title: 'Transmission',
//         specification: 'Manual',
//         icon: transmissionIcon,
//       },
//       {
//         id: 10,
//         title: 'Engine',
//         specification: '5.1 L',
//         icon: engineIcon,
//       },
//       {
//         id: 11,
//         title: 'Drivetrain',
//         specification: 'FWD',
//         icon: drivetrainIcon,
//       },
//     ],
//     review: [
//       { id: 1, icon: 'fa-solid fa-star'},
//       { id: 2, icon: 'fa-solid fa-star'},
//       { id: 3, icon: 'fa-solid fa-star'},
//       { id: 4, icon: 'fa-solid fa-star'},
//       { id: 5, icon: 'fa-regular fa-star'},
//     ],
//     leadForm: [
//       {
//         id: 1,
//         title: 'Request More Info',
//         icon: 'fa-solid fa-circle-question',
//         form: <RequestMoreInfoForm />,
//       },
//       {
//         id: 2,
//         title: 'Schedule Test Drive',
//         icon: 'fa-solid fa-gauge',
//         form: <ScheduleTestDriveForm />,
//       },
//       {
//         id: 3,
//         title: 'Make an Offer',
//         icon: 'fa-solid fa-tag',
//         form: <MakeAnOfferForm />,
//       },
//       {
//         id: 4,
//         title: 'Email to a Friend',
//         icon: 'fa-solid fa-envelope',
//         form: <EmailToAFriendForm />,
//       },
//       {
//         id: 5,
//         title: 'Trade-In Appraisal',
//         icon: 'fa-regular fa-circle-down',
//         form: <TradeInAppraisalForm />,
//         size: 'lg',
//       },
//     ],
//     gallery: [
//       { id: 1, image: Car3GalleryImg1 },
//       { id: 2, image: Car3GalleryImg2 },
//       { id: 3, image: Car3GalleryImg3 },
//       { id: 4, image: Car3GalleryImg4 },
//       { id: 5, image: Car3GalleryImg5 },
//     ],
//   },

//   {
//     id: 4,
//     imgSrc: carImg4,
//     carName: '2017 Audi Q3 2.0T Prestige',
//     description:
//       'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.',
//     carPrice: '69,995',
//     carNewPrice: '35,568',
//     attributes: [
//       {
//         id: 1,
//         title: 'Make',
//         specification: 'AudiQ3',
//         icon: makeIcon,
//       },
//       {
//         id: 2,
//         title: 'Model',
//         specification: '7-series',
//         icon: modelIcon,
//       },
//       {
//         id: 3,
//         title: 'Registration Date',
//         specification: '2021',
//         icon: registrationDateIcon,
//       },
//       {
//         id: 4,
//         title: 'Mileage',
//         specification: '25,000 mi',
//         icon: mileageIcon,
//       },
//       {
//         id: 5,
//         title: 'horsepower',
//         specification: '210 hp',
//         icon: horsepowerIcon,
//       },
//       {
//         id: 6,
//         title: 'Condition',
//         specification: 'New',
//         icon: conditionIcon,
//       },
//       {
//         id: 7,
//         title: 'Exterior Color',
//         specification: 'Silver',
//         icon: exteriorColorIcon,
//       },
//       {
//         id: 8,
//         title: 'Interior Color',
//         specification: 'Brown (Leather)',
//         icon: interiorColorIcon,
//       },
//       {
//         id: 9,
//         title: 'Transmission',
//         specification: 'Automatic',
//         icon: transmissionIcon,
//       },
//       {
//         id: 10,
//         title: 'Engine',
//         specification: '5.1 L',
//         icon: engineIcon,
//       },
//       {
//         id: 11,
//         title: 'Drivetrain',
//         specification: 'FWD',
//         icon: drivetrainIcon,
//       },
//     ],
//     review: [
//       { id: 1, icon: 'fa-solid fa-star'},
//       { id: 2, icon: 'fa-solid fa-star'},
//       { id: 3, icon: 'fa-solid fa-star'},
//       { id: 4, icon: 'fa-solid fa-star'},
//       { id: 5, icon: 'fa-regular fa-star'},
//     ],
//     leadForm: [
//       {
//         id: 1,
//         title: 'Request More Info',
//         icon: 'fa-solid fa-circle-question',
//         form: <RequestMoreInfoForm />,
//       },
//       {
//         id: 2,
//         title: 'Schedule Test Drive',
//         icon: 'fa-solid fa-gauge',
//         form: <ScheduleTestDriveForm />,
//       },
//       {
//         id: 3,
//         title: 'Make an Offer',
//         icon: 'fa-solid fa-tag',
//         form: <MakeAnOfferForm />,
//       },
//       {
//         id: 4,
//         title: 'Email to a Friend',
//         icon: 'fa-solid fa-envelope',
//         form: <EmailToAFriendForm />,
//       },
//       {
//         id: 5,
//         title: 'Trade-In Appraisal',
//         icon: 'fa-regular fa-circle-down',
//         form: <TradeInAppraisalForm />,
//         size: 'lg',
//       },
//     ],
//     gallery: [
//       { id: 1, image: Car4GalleryImg1 },
//       { id: 2, image: Car4GalleryImg2 },
//       { id: 3, image: Car4GalleryImg3 },
//       { id: 4, image: Car4GalleryImg4 },
//       { id: 5, image: Car4GalleryImg5 },
//     ],
//   },

//   {
//     id: 5,
//     imgSrc: carImg5,
//     carName: '2014 Ford F-150 Lariat',
//     description:
//       'The twelfth-generation Ford F-Series is a light-duty pickup truck produced by Ford from the 2009 to 2014 model years.',
//     carPrice: '69,995',
//     carNewPrice: '35,568',
//     attributes: [
//       {
//         id: 1,
//         title: 'Make',
//         specification: 'Ford',
//         icon: makeIcon,
//       },
//       {
//         id: 2,
//         title: 'Model',
//         specification: '7-series',
//         icon: modelIcon,
//       },
//       {
//         id: 3,
//         title: 'Registration Date',
//         specification: '2021',
//         icon: registrationDateIcon,
//       },
//       {
//         id: 4,
//         title: 'Mileage',
//         specification: '25,000 mi',
//         icon: mileageIcon,
//       },
//       {
//         id: 5,
//         title: 'horsepower',
//         specification: '210 hp',
//         icon: horsepowerIcon,
//       },
//       {
//         id: 6,
//         title: 'Condition',
//         specification: 'New',
//         icon: conditionIcon,
//       },
//       {
//         id: 7,
//         title: 'Exterior Color',
//         specification: 'Silver',
//         icon: exteriorColorIcon,
//       },
//       {
//         id: 8,
//         title: 'Interior Color',
//         specification: 'Brown (Leather)',
//         icon: interiorColorIcon,
//       },
//       {
//         id: 9,
//         title: 'Transmission',
//         specification: 'Manual',
//         icon: transmissionIcon,
//       },
//       {
//         id: 10,
//         title: 'Engine',
//         specification: '5.1 L',
//         icon: engineIcon,
//       },
//       {
//         id: 11,
//         title: 'Drivetrain',
//         specification: 'FWD',
//         icon: drivetrainIcon,
//       },
//     ],
//     review: [
//       { id: 1, icon: 'fa-solid fa-star'},
//       { id: 2, icon: 'fa-solid fa-star'},
//       { id: 3, icon: 'fa-solid fa-star'},
//       { id: 4, icon: 'fa-solid fa-star'},
//       { id: 5, icon: 'fa-regular fa-star'},
//     ],
//     leadForm: [
//       {
//         id: 1,
//         title: 'Request More Info',
//         icon: 'fa-solid fa-circle-question',
//         form: <RequestMoreInfoForm />,
//       },
//       {
//         id: 2,
//         title: 'Schedule Test Drive',
//         icon: 'fa-solid fa-gauge',
//         form: <ScheduleTestDriveForm />,
//       },
//       {
//         id: 3,
//         title: 'Make an Offer',
//         icon: 'fa-solid fa-tag',
//         form: <MakeAnOfferForm />,
//       },
//       {
//         id: 4,
//         title: 'Email to a Friend',
//         icon: 'fa-solid fa-envelope',
//         form: <EmailToAFriendForm />,
//       },
//       {
//         id: 5,
//         title: 'Trade-In Appraisal',
//         icon: 'fa-regular fa-circle-down',
//         form: <TradeInAppraisalForm />,
//         size: 'lg',
//       },
//     ],
//     gallery: [
//       { id: 1, image: Car5GalleryImg1 },
//       { id: 2, image: Car5GalleryImg2 },
//       { id: 3, image: Car5GalleryImg3 },
//       { id: 4, image: Car5GalleryImg4 },
//       { id: 5, image: Car5GalleryImg5 },
//     ],
//   },

//   {
//     id: 6,
//     imgSrc: carImg6,
//     carName: '2010 BMW M6',
//     description:
//       'The BMW M6 is a high-performance version of the 6 Series coupe/convertible, designed by the motorsport division of BMW.',
//     carPrice: '69,995',
//     carNewPrice: '35,568',
//     attributes: [
//       {
//         id: 1,
//         title: 'Make',
//         specification: 'BMW M6',
//         icon: makeIcon,
//       },
//       {
//         id: 2,
//         title: 'Model',
//         specification: '7-series',
//         icon: modelIcon,
//       },
//       {
//         id: 3,
//         title: 'Registration Date',
//         specification: '2021',
//         icon: registrationDateIcon,
//       },
//       {
//         id: 4,
//         title: 'Mileage',
//         specification: '25,000 mi',
//         icon: mileageIcon,
//       },
//       {
//         id: 5,
//         title: 'horsepower',
//         specification: '210 hp',
//         icon: horsepowerIcon,
//       },
//       {
//         id: 6,
//         title: 'Condition',
//         specification: 'New',
//         icon: conditionIcon,
//       },
//       {
//         id: 7,
//         title: 'Exterior Color',
//         specification: 'Silver',
//         icon: exteriorColorIcon,
//       },
//       {
//         id: 8,
//         title: 'Interior Color',
//         specification: 'Brown (Leather)',
//         icon: interiorColorIcon,
//       },
//       {
//         id: 9,
//         title: 'Transmission',
//         specification: 'Automatic',
//         icon: transmissionIcon,
//       },
//       {
//         id: 10,
//         title: 'Engine',
//         specification: '5.1 L',
//         icon: engineIcon,
//       },
//       {
//         id: 11,
//         title: 'Drivetrain',
//         specification: 'FWD',
//         icon: drivetrainIcon,
//       },
//     ],
//     review: [
//       { id: 1, icon: 'fa-solid fa-star'},
//       { id: 2, icon: 'fa-solid fa-star'},
//       { id: 3, icon: 'fa-solid fa-star'},
//       { id: 4, icon: 'fa-solid fa-star'},
//       { id: 5, icon: 'fa-regular fa-star'},
//     ],
//     leadForm: [
//       {
//         id: 1,
//         title: 'Request More Info',
//         icon: 'fa-solid fa-circle-question',
//         form: <RequestMoreInfoForm />,
//       },
//       {
//         id: 2,
//         title: 'Schedule Test Drive',
//         icon: 'fa-solid fa-gauge',
//         form: <ScheduleTestDriveForm />,
//       },
//       {
//         id: 3,
//         title: 'Make an Offer',
//         icon: 'fa-solid fa-tag',
//         form: <MakeAnOfferForm />,
//       },
//       {
//         id: 4,
//         title: 'Email to a Friend',
//         icon: 'fa-solid fa-envelope',
//         form: <EmailToAFriendForm />,
//       },
//       {
//         id: 5,
//         title: 'Trade-In Appraisal',
//         icon: 'fa-regular fa-circle-down',
//         form: <TradeInAppraisalForm />,
//         size: 'lg',
//       },
//     ],
//     gallery: [
//       { id: 1, image: Car6GalleryImg1 },
//       { id: 2, image: Car6GalleryImg2 },
//       { id: 3, image: Car6GalleryImg3 },
//       { id: 4, image: Car6GalleryImg4 },
//       { id: 5, image: Car6GalleryImg5 },
//     ],
//   },
// ];

const CarSliderList = [
  {
    id: 1,
    imgSrc: carslidImg1,
  },
  {
    id: 2,
    imgSrc: carslidImg2,
  },
  {
    id: 3,
    imgSrc: carslidImg3,
  },
  {
    id: 4,
    imgSrc: carslidImg4,
  },
  {
    id: 5,
    imgSrc: carslidImg5,
  },
  {
    id: 6,
    imgSrc: carslidImg6,
  },
];

// Content List Items
const ExtraFeatureItems = [
  {
    id: 1,
    item: 'xSecurity System',
  },
  { id: 2, item: 'Lane departure' },
  { id: 3, item: 'Cold Weather Package' },
  { id: 4, item: '4-Wheel Disc Brakes' },
  {
    id: 5,
    item: 'Air conditioning',
  },
  {
    id: 6,
    item: 'Anti-theft alarm system',
  },

  {
    id: 7,
    item: 'Automatic equalizer',
  },
  {
    id: 8,
    item: 'Alloy Wheels',
  },
  {
    id: 9,
    item: 'Cold Weather Package',
  },
  {
    id: 10,
    item: 'Anti-Lock Brakes (ABS)',
  },
  {
    id: 11,
    item: 'Electronic stability',
  },
  {
    id: 12,
    item: 'Lane departure',
  },
  {
    id: 13,
    item: 'Anti-Theft',
  },
  {
    id: 14,
    item: 'Smart device integration',
  },
  {
    id: 15,
    item: 'Spoiler',
  },
  {
    id: 16,
    item: 'Heated Rear Seats',
  },
  {
    id: 17,
    item: '16 premium speakers',
  },
  {
    id: 18,
    item: 'Anti-Starter',
  },
];
// export default CarList;
export { CarSliderList, ExtraFeatureItems };

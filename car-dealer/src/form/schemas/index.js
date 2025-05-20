import * as Yup from 'yup';

export const NewsletterWidgetSchema = Yup.object({
  Email: Yup.string().email().required('Email is required'),
});

export const ServiceFormSchema = Yup.object({
  Username: Yup.string().min(2).max(45).required('Name is required'),
  Email: Yup.string().email().required('Email is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  Message: Yup.string().min(2).required('Description is required'),
});

export const CareerFormSchema = Yup.object({
  Email: Yup.string().email().required('Email is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  Password: Yup.string().min(6).required('please enter your password'),
  Message: Yup.string().min(2).required('Description is required'),
});

export const ContactFormSchema = Yup.object({
  Username: Yup.string().min(2).max(45).required('Name is required'),
  Email: Yup.string().email().required('Email is required'),
  Subject: Yup.string().min(2).required('Subject is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  Message: Yup.string().min(2).required('Description is required'),
});

export const BlogFormSchema = Yup.object({
  Email: Yup.string().email().required('Email is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  Password: Yup.string().min(6).required('please enter your password'),
  Message: Yup.string().min(2).required('Description is required'),
});

export const EnquiryFormSchema = Yup.object({
  Username: Yup.string().min(2).max(45).required('Name is required'),
  Email: Yup.string().email().required('Email is required'),
  Message: Yup.string().min(2).required('Description is required'),
});

export const RequestMoreInfoFormSchema = Yup.object({
  Username: Yup.string().min(2).max(45).required('Name is required'),
  Email: Yup.string().email().required('Email is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  Message: Yup.string().min(2).required('Description is required'),
  group1: Yup.bool().oneOf(
    [true],
    'You need to accept the terms and conditions'
  ),
});

export const ScheduleTestDriveFormSchema = Yup.object({
  Username: Yup.string().min(2).max(45).required('Name is required'),
  Email: Yup.string().email().required('Email is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  PreferredDay: Yup.string().required('Preferred Day is required'),
  PreferredTime: Yup.string().required('Preferred Time is required'),
  group1: Yup.bool().oneOf(
    [true],
    'You need to accept the terms and conditions'
  ),
});

export const MakeAnOfferFormSchema = Yup.object({
  Username: Yup.string().min(2).max(45).required('Name is required'),
  Email: Yup.string().email().required('Email is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  OfferedPrice: Yup.string().required('Preferred Day is required'),
  Required: Yup.string().required('Please select a Required'),
  Comments: Yup.string().min(2).required('Description is required'),
  group1: Yup.bool().oneOf(
    [true],
    'You need to accept the terms and conditions'
  ),
});

export const EmailToAFriendFormSchema = Yup.object({
  Username: Yup.string().min(2).max(45).required('Name is required'),
  Email: Yup.string().email().required('Email is required'),
  FriendsEmail: Yup.string().email().required('Friends Email is required'),
  Message: Yup.string().min(2).required('Description is required'),
});

export const TradeInAppraisalSchema = Yup.object({
  FirstName: Yup.string().min(2).max(45).required('First Name is required'),
  LastName: Yup.string().min(2).max(45).required('Last Name is required'),
  Email: Yup.string().email().required('Email is required'),
  PhoneNumber: Yup.string().required('Phone number is required'),
  WorkPhoneNumber: Yup.string().required('Work Phone Number is required'),
  Comments: Yup.string().min(2).required('Description is required'),
  CarOptions: Yup.bool().oneOf([true], 'You need to checked the Car Options'),
});

export const AddCarSchema = Yup.object({
  VehicleTitle: Yup.string().min(2).max(45).required('Vehicle Title is required'),
  Year: Yup.string().required('Year is required'),
  Make: Yup.string().required('Make is required'),
  Model: Yup.string().required('Model is required'),
  StockNumber: Yup.string().required('Stock Number is required'),
  VINNumber: Yup.string().required('VIN Number is required'),
  RegularPrice: Yup.string().required('Regular Price is required'),
  SalePrice: Yup.string().required('Sale Price is required'),
  RequestPrice: Yup.string().required('Request Price Label is required'),
  VehicleLocation: Yup.string().min(2).max(45).required('Vehicle Location is required'),
});

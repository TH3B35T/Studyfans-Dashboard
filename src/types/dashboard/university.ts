// ==============================|| TYPES - CUSTOMER  ||============================== //

export interface UniversityProps {
  modal: boolean;
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female'
}

export interface UniversityList {
  firstName: string;
  lastName: string;
  id?: number;
  avatar: number;
  name: string;
  fatherName: string;
  email: string;
  age: number;
  gender: Gender;
  role: string;
  orders: number;
  progress: number;
  status: number;
  orderStatus: string;
  contact: string;
  country: string;
  location: string;
  about: string;
  skills: string[];
  time: string[];
  date: Date | string | number;
}

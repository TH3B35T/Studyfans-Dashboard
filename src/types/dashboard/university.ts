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

export type Media = {
  id: number;
  order: number;
  size: number;
  name: string;
  collectionName: string;
  path: string;
  type: string;
};
export type Country = {
  id: number;
  name: string;
  lang: string;
  code: string;
  flag: string;
  isAvailable: boolean;
  cities: City[];
};
export type City = {
  id: number;
  name: string;
  lang: string;
  isAvailable: boolean;
};
export type Currency = {
  id: number;
  name: string;
  code: string;
  symbol: string;
};

export type University = {
  id: number;
  slug: string;
  name: string;
  website: string;
  content: string;
  campus: string;
  confessions: string;
  lang: string;
  price: number;
  specialPrice: number;
  rank: number;
  localRank: number;
  students: number;
  order: number;
  isAvailable: boolean;
  isScrollableForm: boolean;
  isPrivate: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
  applicationDeadLine: Date;
  images: Media[];
  country: Country[];
  currency: Currency[];
  city: City[];
  //registrationPage: Page;
};
export type OptionalUniversity = Partial<University>;

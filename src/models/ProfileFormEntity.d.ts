import { GenderTypes, TermsTypes } from '../enums';

export interface ProfileFormEntity {
  name: string;
  age: number;
  gender: GenderTypes;
  terms: TermsTypes;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  file: File;
}

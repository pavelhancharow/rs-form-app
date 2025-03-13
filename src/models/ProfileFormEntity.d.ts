import { GenderTypes, TermsTypes } from '../enums';

export interface ProfileFormEntity {
  name: string;
  age: number | null;
  gender: GenderTypes;
  terms: TermsTypes;
  email: string;
  password: string;
  country: string;
  file: string | null;
}

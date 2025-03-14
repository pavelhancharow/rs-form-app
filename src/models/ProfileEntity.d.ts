import { ProfileFormEntity } from './ProfileFormEntity';

export interface ProfileEntity extends ProfileFormEntity {
  id: number;
  createdAt: number;
}

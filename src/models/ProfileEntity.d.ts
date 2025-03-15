import { ProfileFormEntity } from './ProfileFormEntity';

export interface ProfileEntity
  extends Omit<ProfileFormEntity, 'confirmPassword' | 'file'> {
  id: number;
  createdAt: number;
  file: string | null;
}

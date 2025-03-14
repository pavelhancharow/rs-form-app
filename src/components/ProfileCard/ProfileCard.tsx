import defaultUrl from '../../assets/user-icon.svg';
import { ProfileEntity } from '../../models';
import Avatar from '../Avatar/Avatar.tsx';
import ProfileCardUI from './ProfileCard.styles.ts';

type ProfileCardProps = ProfileEntity;

function ProfileCard(props: ProfileCardProps) {
  return (
    <ProfileCardUI>
      <Avatar
        src={props.file || defaultUrl}
        alt="user avatar"
        width={80}
        height={80}
      />

      <div className="profile-card__bio">
        <span>{props.name}</span>
        <span>{props.email}</span>
      </div>

      <div className="profile-card__info">
        {props.age || '-'} | {props.gender || '-'} | {props.country || '-'}
      </div>
    </ProfileCardUI>
  );
}

export default ProfileCard;

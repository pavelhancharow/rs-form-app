import styled from 'styled-components';

const ProfileCardUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 30px;
  background-color: var(--primary);
  border-radius: 8px;

  & .profile-card {
    &__bio {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      & > *:last-child {
        width: 100%;
        font-size: 14px;
        color: var(--tertiary);
        text-align: center;
      }
    }

    &__info {
      color: var(--accent-primary);
      font-size: 14px;
    }
  }
`;

export default ProfileCardUI;

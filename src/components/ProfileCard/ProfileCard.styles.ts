import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { background-color: rgb(from var(--accent-primary) r g b / 60%); }
  90% { background-color: var(--primary); }
`;

const ProfileCardUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 30px;
  background-color: var(--primary);
  border-radius: 8px;

  &[data-new='true'] {
    animation: ${fadeIn} 3s ease-in-out forwards;
  }

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

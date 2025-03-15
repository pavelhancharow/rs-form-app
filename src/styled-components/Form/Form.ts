import styled from 'styled-components';

export const FormUI = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
`;

export const FormBodyUI = styled.div`
  display: flex;
  gap: 10%;
`;

const FormBodySide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBodyLeftUI = styled(FormBodySide)`
  flex: 1 0 auto;

  & > *:first-of-type {
    margin-bottom: 20px;
  }
`;

export const FormBodyRightUI = styled(FormBodySide)`
  width: 100%;
`;

export const FormControlsUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

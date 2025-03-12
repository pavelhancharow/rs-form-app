import styled from 'styled-components';

const FormUI = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  gap: 16px;
  justify-content: center;
`;

const FormBodyUI = styled.div`
  display: flex;
  gap: 10%;
`;

const FormBodySide = styled(FormBodyUI)`
  flex-direction: column;
  gap: 16px;
`;

const FormBodyLeftUI = styled(FormBodySide)`
  flex: 1 0 auto;
`;

const FormBodyRightUI = styled(FormBodySide)`
  width: 100%;
`;

const FormControlsUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default {
  FormUI,
  FormBodyUI,
  FormControlsUI,
  FormBodyLeftUI,
  FormBodyRightUI,
};

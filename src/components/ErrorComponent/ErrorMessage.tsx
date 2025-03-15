import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import ErrorMessageUI from './ErrorMessage.styles.ts';

interface ErrorMessageProps {
  info?: FetchBaseQueryError | SerializedError;
}

function ErrorMessage(props: ErrorMessageProps) {
  const info = props.info ?? { message: 'Something went wrong!' };

  let message = 'Unknown error';

  if ('data' in info && info.data) {
    message = info.data.toString();
  } else if ('error' in info && info.error) {
    message = info.error;
  } else if ('message' in info && info.message) {
    message = info.message;
  }

  return (
    <ErrorMessageUI>
      <h2>Oops!</h2>
      <b>There&#39;s an error</b>
      <span>Error: {message}</span>
    </ErrorMessageUI>
  );
}

export default ErrorMessage;

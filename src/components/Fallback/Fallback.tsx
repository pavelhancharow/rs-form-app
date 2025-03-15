import { FallbackEntity } from '../../models';
import FallbackUI from './Fallback.styles.ts';

type FallbackProps = FallbackEntity;

function Fallback(props: FallbackProps) {
  return (
    <main>
      <FallbackUI>
        <header>
          <h3>Oops! An error occurred!</h3>
        </header>
        <p>
          <strong>Error:</strong>{' '}
          {props.error?.message?.toString() || 'Unknown error'}
        </p>
        <p>
          <strong>Stacktrace:</strong>{' '}
          {props.componentStack || 'No stacktrace available'}
        </p>
      </FallbackUI>
    </main>
  );
}

export default Fallback;

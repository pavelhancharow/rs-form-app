import { ReactNode } from 'react';
import NotFoundUI from './NotFound.styles.ts';

interface NotFoundProps {
  children: ReactNode;
}

function NotFound(props: NotFoundProps) {
  return (
    <NotFoundUI>
      <h2>Oops!</h2>
      <h3>Sorry, the page you are looking for does not exist.</h3>
      {props.children}
    </NotFoundUI>
  );
}

export default NotFound;

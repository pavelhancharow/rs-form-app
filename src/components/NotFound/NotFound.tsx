import { ReactNode } from 'react';

interface NotFoundProps {
  children: ReactNode;
}

function NotFound(props: NotFoundProps) {
  return (
    <main>
      <h2>Oops!</h2>
      <h3>Sorry, the page you are looking for does not exist.</h3>
      {props.children}
    </main>
  );
}

export default NotFound;

import { useNavigate } from 'react-router';
import Button from '../components/Button/Button.tsx';
import NotFound from '../components/NotFound/NotFound.tsx';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <NotFound>
      <Button onClick={handleClick}>Go Home</Button>
    </NotFound>
  );
}

export default NotFoundPage;

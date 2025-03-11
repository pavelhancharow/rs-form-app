import { useNavigate } from 'react-router';
import NotFound from '../components/NotFound/NotFound.tsx';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <NotFound>
      <button onClick={handleClick}>Go Home</button>
    </NotFound>
  );
}

export default NotFoundPage;

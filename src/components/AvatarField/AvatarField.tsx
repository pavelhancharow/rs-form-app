import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useState,
} from 'react';
import { convertFileToBase64 } from '../../utils';
import FileField from '../FileField/FileField.tsx';
import AvatarFieldUI from './AvatarField.styles.ts';
import defaultUrl from '../../assets/user-icon.svg';

interface AvatarFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

function AvatarField({ error, ...props }: AvatarFieldProps) {
  const [avatar, setAvatar] = useState<string>(defaultUrl);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileUrl = await convertFileToBase64(file);
      setAvatar(fileUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (avatar && avatar !== defaultUrl) {
        URL.revokeObjectURL(avatar);
      }
    };
  }, [avatar]);

  return (
    <AvatarFieldUI data-error={!!error}>
      <div>
        <span>
          <img src={avatar} alt="user avatar" />
        </span>
        {error && <p>{error}</p>}
      </div>

      <FileField {...props} onChange={handleFileChange} />
    </AvatarFieldUI>
  );
}

export default memo(AvatarField);

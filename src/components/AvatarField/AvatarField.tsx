import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  memo,
  useEffect,
  useState,
} from 'react';
import { ErrorFieldText } from '../../styled-components';
import { convertFileToBase64 } from '../../utils';
import Avatar from '../Avatar/Avatar.tsx';
import FileField from '../FileField/FileField.tsx';
import AvatarFieldUI from './AvatarField.styles.ts';
import defaultUrl from '../../assets/user-icon.svg';

interface AvatarFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  callback?: (file: File) => Promise<void>;
}

const AvatarField = forwardRef<HTMLInputElement, AvatarFieldProps>(
  ({ error, callback, ...props }, ref) => {
    const [avatar, setAvatar] = useState<string>(defaultUrl);

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const fileUrl = await convertFileToBase64(file);
        setAvatar(fileUrl);

        if (callback) {
          await callback(file);
        }
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
          <Avatar src={avatar} alt="user avatar" width={110} height={110} />

          {error && (
            <ErrorFieldText bottom={-32} left={0}>
              {error}
            </ErrorFieldText>
          )}
        </div>

        <FileField ref={ref} {...props} onChange={handleFileChange} />
      </AvatarFieldUI>
    );
  }
);

AvatarField.displayName = 'AvatarField';

export default memo(AvatarField);

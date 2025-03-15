import { forwardRef, InputHTMLAttributes, memo } from 'react';
import FileFieldUI from './FileField.styles.ts';

type FileFieldProps = InputHTMLAttributes<HTMLInputElement>;

const FileField = forwardRef<HTMLInputElement, FileFieldProps>(
  ({ ...props }, ref) => {
    return (
      <FileFieldUI>
        <label htmlFor={props.id}>Upload Picture</label>
        <input ref={ref} {...props} type="file" />
      </FileFieldUI>
    );
  }
);

FileField.displayName = 'FileField';

export default memo(FileField);

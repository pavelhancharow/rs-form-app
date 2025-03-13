import { InputHTMLAttributes, memo } from 'react';
import FileFieldUI from './FileField.styles.ts';

type FileFieldProps = InputHTMLAttributes<HTMLInputElement>;

function FileField({ ...props }: FileFieldProps) {
  return (
    <FileFieldUI>
      <label htmlFor={props.id}>Upload Picture</label>
      <input {...props} type="file" />
    </FileFieldUI>
  );
}

export default memo(FileField);

import { InputHTMLAttributes, ReactNode } from 'react';
import FileFieldUI from './FileField.styles.ts';

interface FileFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

function FileField({ children, ...props }: FileFieldProps) {
  return (
    <FileFieldUI>
      {children}
      <label htmlFor={props.id}>Upload Picture</label>
      <input {...props} type="file" />
    </FileFieldUI>
  );
}

export default FileField;

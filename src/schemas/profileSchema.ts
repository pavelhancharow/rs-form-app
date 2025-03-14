import * as yup from 'yup';
import { GenderTypes, TermsTypes } from '../enums';
import { countries } from '../mock/countries.ts';
import { ProfileFormEntity } from '../models';

export const profileSchema = yup.object<ProfileFormEntity>().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'First letter must be uppercase')
    .matches(/^[A-Za-z\s]*$/, 'Name should only contain letters'),
  age: yup
    .number()
    .required('Age is required')
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .positive('Age must be a positive number')
    .typeError('Age must be a number'),
  email: yup
    .string()
    .required('Email is required')
    .lowercase()
    .matches(
      /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.)*\w{1,63})\.[a-zA-Z]{2,6})$/i,
      'Invalid email format'
    ),
  password: yup
    .string()
    .required('Password is required')
    .matches(/(?=.*[A-Z])/, 'Must contain at least one uppercase letter')
    .matches(/(?=.*[a-z])/, 'Must contain at least one lowercase letter')
    .matches(/(?=.*\d)/, 'Must contain at least one number')
    .matches(
      /^(?=.*[!@#$%^&*()-=_+[\]{};:'",.<>/?\\|`~]).+$/,
      'Must contain at least one special character'
    ),
  confirmPassword: yup
    .string()
    .required('Please, confirm password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  terms: yup
    .string()
    .oneOf([TermsTypes.Agreed], 'T&C must be accepted')
    .required('T&C must be accepted'),
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf([GenderTypes.Female, GenderTypes.Male, GenderTypes.Other]),
  country: yup
    .string()
    .required('Country is required')
    .test('is-valid-country', 'Please select a valid country', (value) =>
      countries.includes(value)
    ),
  file: yup
    .mixed<File>()
    .required('File is required')
    .test('required', 'File is required', (value) =>
      Boolean(value instanceof FileList ? value[0] : value)
    )
    .test('fileSize', 'File too large, max size is 2MB', (value) => {
      const file = value instanceof FileList ? value[0] : value;

      return file && file.size <= Math.pow(1024, 2) * 2;
    })
    .test(
      'fileFormat',
      'Unsupported Format, only PNG or JPEG allowed',
      (value) => {
        const file = value instanceof FileList ? value[0] : value;

        return file && ['image/jpeg', 'image/png'].includes(file.type);
      }
    ),
});

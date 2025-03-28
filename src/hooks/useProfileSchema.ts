import { useMemo } from 'react';
import * as yup from 'yup';
import { useGetCountriesQuery } from '../api';
import { GenderTypes, TermsTypes } from '../enums';
import { ProfileFormEntity } from '../models';

export const useProfileSchema = () => {
  const { data: countries = [] } = useGetCountriesQuery(null);

  return useMemo(
    () =>
      yup.object<ProfileFormEntity>().shape({
        name: yup
          .string()
          .transform((value, originalValue) =>
            originalValue === '' ? null : value
          )
          .matches(/^[A-Z]/, 'First letter must be uppercase')
          .required('Name is required'),
        age: yup
          .number()
          .transform((value, originalValue) =>
            originalValue === '' ? null : value
          )
          .positive('Age must be a positive number')
          .typeError('Age must be a number')
          .required('Age is required'),
        email: yup
          .string()
          .transform((value, originalValue) =>
            originalValue === '' ? null : value
          )
          .matches(
            /^(([^<>()\][,;:\s@"]+(\.[^<>()\][,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid email format'
          )
          .required('Email is required'),
        password: yup
          .string()
          .transform((value, originalValue) =>
            originalValue === '' ? null : value
          )
          .matches(/(?=.*[A-Z])/, 'Must contain at least one uppercase letter')
          .matches(/(?=.*[a-z])/, 'Must contain at least one lowercase letter')
          .matches(/(?=.*\d)/, 'Must contain at least one number')
          .matches(
            /^(?=.*[/!@#$%^&*(\\)=_+\][{};\-:'",.<>?|`~]).+$/,
            'Must contain at least one special character'
          )
          .required('Password is required'),
        confirmPassword: yup
          .string()
          .transform((value, originalValue) =>
            originalValue === '' ? null : value
          )
          .oneOf([yup.ref('password')], 'Passwords must match')
          .required('Please, confirm password'),
        terms: yup
          .string()
          .oneOf([TermsTypes.Agreed], 'T&C must be accepted')
          .required('T&C must be accepted'),
        gender: yup
          .string()
          .oneOf(
            [GenderTypes.Female, GenderTypes.Male, GenderTypes.Other],
            'Select from: female, male or other'
          )
          .required('Gender is required'),
        country: yup
          .string()
          .transform((value, originalValue) =>
            originalValue === '' ? null : value
          )
          .oneOf(countries, 'Please, select a valid country')
          .required('Country is required'),
        file: yup
          .mixed<File>()
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
          )
          .required('File is required'),
      }),
    [countries]
  );
};

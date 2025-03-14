import { FormEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { ValidationError } from 'yup';
import { useGetCountriesQuery } from '../api';
import AvatarField from '../components/AvatarField/AvatarField.tsx';
import Button from '../components/Button/Button.tsx';
import Checkbox from '../components/Checkbox/Checkbox.tsx';
import ErrorMessage from '../components/ErrorComponent/ErrorMessage.tsx';
import Loader from '../components/Loader/Loader.tsx';
import RadioField from '../components/RadioField/RadioField.tsx';
import RadioGroup from '../components/RadioGroup/RadioGroup.tsx';
import SelectGroup from '../components/SelectGroup/SelectGroup.tsx';
import TextField from '../components/TextField/TextField.tsx';
import { GenderTypes, TermsTypes } from '../enums';
import { ProfileEntity } from '../models';
import { useProfileSchema } from '../hooks';
import { profilesActions } from '../store/profiles/slice.ts';
import { useAppDispatch } from '../store/store.ts';
import {
  FormBodyLeftUI,
  FormBodyRightUI,
  FormBodyUI,
  FormControlsUI,
  FormUI,
} from '../styled-components';
import { convertFileToBase64, transformYupErrorsIntoObject } from '../utils';

function UncontrolledFormPage() {
  const { data: countries, error, isLoading } = useGetCountriesQuery(null);
  const profileSchema = useProfileSchema();
  const ref = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (ref.current) {
        const formData = new FormData(ref.current);

        const formEntries = {
          ...Object.fromEntries(formData.entries()),
          terms: formData.get('terms'),
          gender: formData.get('gender'),
          file:
            (formData.get('file') as File)?.size > 0
              ? (formData.get('file') as File)
              : null,
        };

        try {
          const { confirmPassword, ...data } = await profileSchema.validate(
            formEntries,
            { abortEarly: false }
          );

          const updatedData: ProfileEntity = {
            ...data,
            file: data.file && (await convertFileToBase64(data.file)),
            id: Date.now(),
            createdAt: Date.now(),
          };

          dispatch(profilesActions.addProfile(updatedData));

          navigate('/');
        } catch (error) {
          if (error instanceof ValidationError) {
            setErrors(transformYupErrorsIntoObject(error));
          } else {
            console.error('Unexpected error:', error);
          }
        }
      }
    },
    [dispatch, navigate, profileSchema]
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage info={error} />;

  return (
    <FormUI ref={ref} noValidate onSubmit={handleSubmit}>
      <FormBodyUI>
        <FormBodyLeftUI>
          <AvatarField
            id="file"
            name="file"
            accept="image/png, image/jpeg"
            {...(errors?.file && { error: errors.file })}
          />

          <TextField
            type="number"
            id="age"
            name="age"
            label="Age"
            min="1"
            placeholder=""
            {...(errors?.age && { error: errors.age })}
          />

          <RadioGroup
            label="Select Gender:"
            {...(errors?.gender && { error: errors.gender })}
          >
            <RadioField
              id={GenderTypes.Female}
              value={GenderTypes.Female}
              name="gender"
              label="Female"
            />
            <RadioField
              id={GenderTypes.Male}
              value={GenderTypes.Male}
              name="gender"
              label="Male"
            />
            <RadioField
              id={GenderTypes.Other}
              value={GenderTypes.Other}
              name="gender"
              label="Other"
              defaultChecked
            />
          </RadioGroup>
        </FormBodyLeftUI>

        <FormBodyRightUI>
          <TextField
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder=""
            {...(errors?.name && { error: errors.name })}
          />

          <TextField
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder=""
            {...(errors?.email && { error: errors.email })}
          />

          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder=""
            {...(errors?.password && { error: errors.password })}
          />

          <TextField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            placeholder=""
            {...(errors?.confirmPassword && { error: errors.confirmPassword })}
          />

          <SelectGroup
            type="select"
            id="country"
            name="country"
            list="countries"
            label="Select Country"
            placeholder=""
            {...(errors?.country && { error: errors.country })}
          >
            {countries?.map((country) => (
              <option key={country} value={country} />
            ))}
          </SelectGroup>
        </FormBodyRightUI>
      </FormBodyUI>

      <FormControlsUI>
        <Checkbox
          id="terms"
          name="terms"
          label="Accept Terms and Conditions"
          value={TermsTypes.Agreed}
          {...(errors?.terms && { error: errors.terms })}
        />

        <Button type="submit">Submit</Button>
      </FormControlsUI>
    </FormUI>
  );
}

export default UncontrolledFormPage;

import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useGetCountriesQuery } from '../api';
import AvatarField from '../components/AvatarField/AvatarField.tsx';
import Button from '../components/Button/Button.tsx';
import Checkbox from '../components/Checkbox/Checkbox.tsx';
import Loader from '../components/Loader/Loader.tsx';
import RadioField from '../components/RadioField/RadioField.tsx';
import RadioGroup from '../components/RadioGroup/RadioGroup.tsx';
import SelectGroup from '../components/SelectGroup/SelectGroup.tsx';
import TextField from '../components/TextField/TextField.tsx';
import { GenderTypes, TermsTypes } from '../enums';
import { ProfileEntity, ProfileFormEntity } from '../models';
import { useProfileSchema } from '../schemas';
import { profilesActions } from '../store/profiles/slice.ts';
import {
  FormBodyLeftUI,
  FormBodyRightUI,
  FormBodyUI,
  FormControlsUI,
  FormUI,
} from '../styled-components';
import { convertFileToBase64 } from '../utils';

function HookFormPage() {
  const { data: countries, error, isLoading } = useGetCountriesQuery(null);
  const profileSchema = useProfileSchema();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ProfileFormEntity>({
    resolver: yupResolver(profileSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ProfileFormEntity> = useCallback(
    async ({ confirmPassword, ...data }) => {
      const updatedData: ProfileEntity = {
        ...data,
        file: data.file && (await convertFileToBase64(data.file)),
        id: Date.now(),
        createdAt: Date.now(),
      };

      dispatch(profilesActions.addProfile(updatedData));

      navigate('/');
    },
    [dispatch, navigate]
  );

  const validateFile = useCallback(
    async (file: File) => {
      setValue('file', file);
      await trigger('file');
    },
    [setValue, trigger]
  );

  if (isLoading) return <Loader />;
  if (error) return <p style={{ color: 'red' }}>Error loading countries</p>;

  return (
    <FormUI noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormBodyUI>
        <FormBodyLeftUI>
          <AvatarField
            {...(register && { ...register('file') })}
            id="file"
            name="file"
            accept="image/png, image/jpeg"
            callback={validateFile}
            {...(errors?.file && {
              error: errors.file.message,
            })}
          />

          <TextField
            {...register('age')}
            type="number"
            id="age"
            name="age"
            label="Age"
            min="1"
            placeholder=""
            {...(errors?.age && {
              error: errors.age.message,
            })}
          />

          <RadioGroup
            label="Select Gender:"
            {...(errors?.gender && {
              error: errors.gender.message,
            })}
          >
            <RadioField
              {...register('gender')}
              id={GenderTypes.Female}
              value={GenderTypes.Female}
              name="gender"
              label="Female"
            />
            <RadioField
              {...register('gender')}
              id={GenderTypes.Male}
              value={GenderTypes.Male}
              name="gender"
              label="Male"
            />
            <RadioField
              {...register('gender')}
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
            {...register('name')}
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder=""
            {...(errors?.name && {
              error: errors.name.message,
            })}
          />

          <TextField
            {...register('email')}
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder=""
            {...(errors?.email && {
              error: errors.email.message,
            })}
          />

          <TextField
            {...register('password')}
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder=""
            {...(errors?.password && {
              error: errors.password.message,
            })}
          />

          <TextField
            {...register('confirmPassword')}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            placeholder=""
            {...(errors?.confirmPassword && {
              error: errors.confirmPassword.message,
            })}
          />

          <SelectGroup
            {...register('country')}
            type="select"
            id="country"
            name="country"
            list="countries"
            label="Select Country"
            placeholder=""
            {...(errors?.country && {
              error: errors.country.message,
            })}
          >
            {countries?.map((country) => (
              <option key={country} value={country} />
            ))}
          </SelectGroup>
        </FormBodyRightUI>
      </FormBodyUI>

      <FormControlsUI>
        <Checkbox
          {...register('terms')}
          id="terms"
          name="terms"
          label="Accept Terms and Conditions"
          value={TermsTypes.Agreed}
          {...(errors?.terms && {
            error: errors.terms.message,
          })}
        />

        <Button type="submit">Submit</Button>
      </FormControlsUI>
    </FormUI>
  );
}

export default HookFormPage;

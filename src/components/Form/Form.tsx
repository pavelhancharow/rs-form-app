import AvatarField from '../AvatarField/AvatarField.tsx';
import Button from '../Button/Button.tsx';
import Checkbox from '../Checkbox/Checkbox.tsx';
import FileField from '../FileField/FileField.tsx';
import RadioField from '../RadioField/RadioField.tsx';
import RadioGroup from '../RadioGroup/RadioGroup.tsx';
import SelectGroup from '../SelectGroup/SelectGroup.tsx';
import { TextField } from '../TextField/TextField.tsx';
import FormStyles from './Form.styles.ts';

const { FormUI, FormControlsUI, FormBodyUI, FormBodyRightUI, FormBodyLeftUI } =
  FormStyles;

function Form() {
  return (
    <FormUI>
      <FormBodyUI>
        <FormBodyLeftUI>
          <FileField id="file" name="file" accept=".jpg, .jpeg, .png">
            <AvatarField />
          </FileField>

          <TextField
            type="number"
            id="age"
            name="age"
            label="Age"
            min="0"
            placeholder=""
          />

          <RadioGroup label="Gender:">
            <RadioField
              id="female"
              value="female"
              name="gender"
              label="Female"
            />
            <RadioField id="male" value="male" name="gender" label="Male" />
            <RadioField
              id="other"
              value="other"
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
          />

          <TextField
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder=""
          />

          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder=""
          />

          <TextField
            type="password"
            id="cpassword"
            name="cpassword"
            label="Confirm Password"
            placeholder=""
          />

          <SelectGroup
            type="select"
            id="country"
            name="country"
            list="countries"
            label="Select Country"
            placeholder=""
          >
            <option value="Germany"></option>
            <option value="Belarus"></option>
            <option value="Georgia"></option>
          </SelectGroup>
        </FormBodyRightUI>
      </FormBodyUI>

      <FormControlsUI>
        <Checkbox id="checkbox" name="TC" label="Accept Terms and Conditions" />

        <Button type="submit">Submit</Button>
      </FormControlsUI>
    </FormUI>
  );
}

export default Form;

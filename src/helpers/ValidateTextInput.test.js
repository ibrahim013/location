import {validateTextInput} from './ValidateTextInput';

test('validate text input', () => {
  expect(validateTextInput("%^FGHHH")).toEqual(false);
  expect(validateTextInput(" FGHHH ")).toEqual(true);
  expect(validateTextInput("112 street ")).toEqual(true);
  expect(validateTextInput(" ")).toEqual(false);
})
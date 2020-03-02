//validate address string input.
export const validateTextInput = value => {
  if (value.trim().length > 1) {
    const regex = RegExp(/^[a-zA-Z0-9 ]*$/gm);
    return regex.test(value.trim());
  }
    return false
};

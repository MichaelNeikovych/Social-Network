export const required = (value) => {
  if (!value) return 'Required field';
  return undefined;
}

export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength) return `Max length is ${maxLength}`;
  return undefined;
}
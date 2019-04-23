const required = value => (value ? undefined : 'Required');
const minLength = value => (value.length >= 4 ? undefined : 'Must be 4 letters or more');
const maxLength = value => (value.length < 12 ? undefined : 'Must be 12 letters or less');
const minNumber = value => (value < 18 ? 'Sorry, you must be at least 18 years old' : undefined);
const specialSymbols = value => (value && /[!@#$%^&*]/i.test(value)? 'Dont use special symbols!' : undefined);
const matchesPassword = (value, allValues) => (value === allValues.password ? undefined : 'Passwords must match');
const email = value =>(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address': undefined);

export {
  required,
  minLength,
  maxLength,
  minNumber,
  specialSymbols,
  matchesPassword,
  email
};



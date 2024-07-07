import { StateLandinPage } from '@/types';

export const validateLandingPageState = (state: StateLandinPage) => {
  const isValid = Object.values(state).every(value => value !== '');
  return isValid;
};

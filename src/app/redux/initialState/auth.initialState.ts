import { EMPTY_STRING } from '@/app/utils/globalConstants';
import { IAuth } from '../interfaces';

export const authInitialState: IAuth = {
  user: {
    name: EMPTY_STRING,
    age: 0,
  },
};

import { Sync } from 'factory.ts';
import { PersonalInfo } from './personal-info.interface';

export const personalInfoFactory = Sync.makeFactory<PersonalInfo>({
  firstname: 'The',
  lastname: 'Rock',
  mobile: '00485555555',
  email: 'test@telenet.be',
});

import { Address } from './address';

export class User {
  id: string;
  name: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  email: string;
  address: Address;
  username: string;
  password: string;
  passwordConfirmation: string;
}

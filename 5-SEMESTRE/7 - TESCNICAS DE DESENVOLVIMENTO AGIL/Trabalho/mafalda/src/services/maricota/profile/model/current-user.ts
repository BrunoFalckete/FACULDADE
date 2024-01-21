export type CurrentUser = {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  address?: Address;
}

type Address = {
  id: number;
  cep: string;
  city: string;
  state: string;
  uf: string;
}
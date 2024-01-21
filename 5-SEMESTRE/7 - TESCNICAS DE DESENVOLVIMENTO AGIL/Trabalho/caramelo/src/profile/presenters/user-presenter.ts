import { UserDto } from '../dto/user-dto';

export class UserPresenter {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  address?: object;
}

export const generateUserPresenter = (
  type: string,
  object: any,
): UserPresenter | UserPresenter[] => {
  switch (type) {
    case 'simple':
      return transform(object);
    case 'all':
      return transformMany(object);
    case 'with-address':
      return userWithAddress(object);
  }
};

const transform = (user: UserDto) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    cpf: user.cpf,
    phoneNumber: user.phoneNumber,
    birthDate: user.birthDate,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
};

const transformMany = (users: UserDto[]) => {
  return users.map((user) => transform(user));
};

const userWithAddress = (user: UserDto) => {
  return {
    ...transform(user),
    address: user.Address,
  };
};

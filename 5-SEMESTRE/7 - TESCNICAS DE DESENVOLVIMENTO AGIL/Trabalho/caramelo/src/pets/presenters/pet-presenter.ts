import { type } from 'os';
import { ResponsePetDto } from '../dto/response-pet-dto';

export const generatePetPresenter = <T extends ResponsePetDto>(
  type: string,
  pets: T | T[],
): unknown => {
  switch (type) {
    case 'simple':
      return Array.isArray(pets) ? transformMany(pets) : transform(pets);
    case 'all':
      return Array.isArray(pets) ? transformMany(pets) : transform(pets);
    case 'show':
      return Array.isArray(pets) ? transformMany(pets) : showPet(pets);
  }
};

const transform = (pet: ResponsePetDto) => {
  return {
    id: pet.id,
    name: pet.name,
    gender: pet.gender,
    year: pet.year,
    month: pet.month,
    kind: pet.kind,
    image_url: pet.files[0] ? pet.files[0].url : '',
  };
};

const transformMany = (pets: ResponsePetDto[]) =>
  pets.map((pet) => transform(pet));

const showPet = (pet: ResponsePetDto) => {
  return {
    ...transform(pet),
    ...files(pet),
    ...user(pet),
  };
};

const files = (pet: ResponsePetDto) => {
  return {
    images: pet.files,
  }
}

const user = (pet: ResponsePetDto) => {
  return {
    name: pet.user.name,
  };
};

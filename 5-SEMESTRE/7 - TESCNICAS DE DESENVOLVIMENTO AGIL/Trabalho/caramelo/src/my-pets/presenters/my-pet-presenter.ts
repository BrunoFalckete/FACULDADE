import { ApiProperty } from '@nestjs/swagger';
import { MyPetsResponseDto } from '../dto/my-pets-response-dto';

export const generateMyPetPresenter = <T extends MyPetsResponseDto>(
  type: string,
  pets: T | T[],
): unknown => {
  switch (type) {
    case 'simple':
      return Array.isArray(pets) ? transformMany(pets) : transform(pets);
    case 'with-order-adoption':
      return petFull(pets);
    case 'all':
      return Array.isArray(pets) ? transformMany(pets) : transform(pets);
  }
};

export const transform = (pet: MyPetsResponseDto) => {
  return {
    id: pet.id,
    name: pet.name,
    gender: pet.gender,
    year: pet.year,
    month: pet.month,
    kind: pet.kind,
    description: pet.description,
    image_url: pet.files[0].url,
  };
};

const transformMany = (pets: MyPetsResponseDto[]) =>
  pets.map((pet) => transform(pet));

const petFull = (pet: any) => {
  return {
    ...transform(pet),
    ...PetWithOrderAdoption(pet),
  };
};

const PetWithOrderAdoption = (pet: MyPetsResponseDto) => {
  const orderAdoptionArray = pet.OrderAdoption || [];

  const orderAdoption = orderAdoptionArray.map((orderItem: any) => {
    return {
      id: orderItem.id,
      status: orderItem.status,
      text: orderItem.text,
      chosen: orderItem.chosen,
      created_at: orderItem.created_at,
      updated_at: orderItem.updated_at,
      user: {
        id: orderItem.user.id,
        name: orderItem.user.name,
        email: orderItem.user.email,
        phoneNumber: orderItem.user.phoneNumber,
      },
    };
  });

  return {
    orderAdoption,
  };
};

import { OrderAdoptionResponse } from '../dto/order-adoption-response-dto';

export const generateOrderAdoptionPresenter = <T extends OrderAdoptionResponse>(
  type: string,
  orderAdoption: T,
): unknown => {
  switch (type) {
    case 'simple':
      return transform(orderAdoption);
  }
};

const transform = (orderAdoption: OrderAdoptionResponse) => {
  return {
    id: orderAdoption.id,
    petId: orderAdoption.petId,
    userId: orderAdoption.userId,
    type: orderAdoption.typeHouse,
    text: orderAdoption.text,
    other: orderAdoption.other,
  };
};

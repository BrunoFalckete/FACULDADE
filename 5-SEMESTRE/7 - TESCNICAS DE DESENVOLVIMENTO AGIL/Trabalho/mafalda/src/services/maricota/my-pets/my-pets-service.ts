import { BaseService, Response } from "@/services/base-service";
import Cookies from "js-cookie";
import { MyPetResponse } from "./model/my-pet-response";

export class MyPetsService extends BaseService {

  public async getAllMyPets(): Promise<Response<any>> {
    try{
      const response = await this.get<any>(
        'my_pets',
        {
          headers: { 'Content-Type': 'application/json' },
          authorization: `Bearer ${Cookies.get('currentUser')}`
        }
      )
      return {
        data: response.data,
        status: response.status,
        meta: response.meta
      }
    } catch(error) {
      throw error
    }
  }

  public async getMyPet(id: number): Promise<Response<MyPetResponse>> {
    try{
      const response = await this.get<MyPetResponse>(
        `my_pets/${id}`,
        {
          headers: { 'Content-Type': 'application/json' },
          authorization: `Bearer ${Cookies.get('currentUser')}`       
        }
      )
      return {
        data: response.data,
        status: response.status,
        meta: response.meta
      }
    } catch(error) {
      throw error;
    }
  }

  public async createOrderAdoption(orderAdoptionId: number, petId: number, userId: number): Promise<any> {
    try {
      const response = await this.patch<any>(
        `my_pets/order_adoption/${orderAdoptionId}/pet/${petId}/choose/user/${userId}`,
        {},
        {
          headers: { 'Content-Type': 'application/json' },
          authorization: `Bearer ${Cookies.get('currentUser')}`
        }
      )
      console.log(response)
    } catch (error) {
      throw error;
    }
  }
}


export const myPetsService = new MyPetsService()
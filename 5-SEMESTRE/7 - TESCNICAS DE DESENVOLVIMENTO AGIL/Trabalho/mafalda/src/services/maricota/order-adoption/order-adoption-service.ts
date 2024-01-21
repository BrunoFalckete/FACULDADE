import { BaseService, Response } from "@/services/base-service";
import Cookies from "js-cookie";

export class OrderAdoptionService extends BaseService {
  async createOrderAdoption(body: any): Promise<Response<any>> {
    try{
      const response = await this.post(
        'order_adoption', 
        body,
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
}

export const orderAdoptionService = new OrderAdoptionService();
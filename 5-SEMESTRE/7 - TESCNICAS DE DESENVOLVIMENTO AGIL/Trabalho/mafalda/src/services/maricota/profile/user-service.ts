import { BaseService, Response } from "@/services/base-service"
import Cookies from "js-cookie";
import { CurrentUser } from "./model/current-user";
import { transformDate } from "@/utils/transform-date";

export class UserService extends BaseService{
  static moduleUrl = 'profile'

  public async getUser(): Promise<Response<CurrentUser>>{
    try {
      const response = await this.get<CurrentUser>(
        `${UserService.moduleUrl}/user`,
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
    } catch (error) {
      throw error
    }
  }

  public async updateUser(body: CurrentUser): Promise<any> {
    
    try{
      const data = {
        ...body,
        ...(body.birthDate ? { birthDate: transformDate(body.birthDate) } : {})
      }

      const response = await this.put<CurrentUser>(
        `${UserService.moduleUrl}/edit`,
        data,
        {
          headers: { 'Content-Type': 'application/json' }, 
          authorization: `Bearer ${Cookies.get('currentUser')}`
        }
      )
      return {
        data: response.data,
        status: 200,
        meta: {}
      }
    } catch(error) {
      throw error;
    }
  }
}

export const userService = new UserService()
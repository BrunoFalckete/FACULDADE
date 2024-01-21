import { IQueryString } from "@/services/@types/share/IqueryString";
import { BaseService, Response } from "@/services/base-service";
import { PetResponse } from "./model/pet-response";
import {PetShowResponse} from "@/services/maricota/pets/model/pet-show-response";
import Cookies from "js-cookie";
import { PetSaveRequest } from "./model/pet-save-request";

export class PetsServiceImp extends BaseService {
  async getAll({ q = '', page = 1  }: IQueryString): Promise<Response<PetResponse[]>> {
    try {
      const response = await this.get<PetResponse[]>('pets', 
        { headers: { 'Content-Type': 'application/json' }, queryParams: { q, page } }
      )
      return {
        data: response.data,
        status: response.status,
        meta: response.meta
      }
    } catch (error) {
      throw error;
    }
  }

  async getPet(id: number): Promise<Response<PetShowResponse>> {
    try {
      const response = await this.get<PetShowResponse>(`pets/${id}`, { headers: { 'Content-Type': 'application/json' }, cache: 'no-cache' })

      return {
        data: response.data,
        status: response.status,
        meta: response.meta
      }
    } catch(error) {
      throw error;
    }
  }

  async save(data: PetSaveRequest): Promise<Response<any>> {
    try {
      const response = await this.post<any>(`pets`, data, {
        headers: { 'Content-Type': 'application/json' },
        authorization: `Bearer ${Cookies.get('currentUser')}`,
        cache: 'no-cache'
      })

      return {
        data: response.data,
        status: response.status,
        meta: response.meta
      }
    } catch(error) {
      throw error;
    }
  }

  async upload(files: FileList): Promise<Response<any>> {
    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      const response = await this.post<any>(`upload`, formData, {
        authorization: `Bearer ${Cookies.get('currentUser')}`,
        cache: 'no-cache'
      })

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

export const PetsService = new PetsServiceImp();
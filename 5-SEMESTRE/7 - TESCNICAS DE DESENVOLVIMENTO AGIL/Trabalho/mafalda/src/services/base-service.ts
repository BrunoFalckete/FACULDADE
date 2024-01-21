import { development } from "@/config/enviroment";
import { BaseApiConfig } from "./@types/base-api";
import { Options } from "./@types/options";

export interface Response<T> {
  data: T;
  status: number;
  meta?: any;
}

export class BaseService implements BaseApiConfig {
  static BASE_URL = process.env.CARAMELO_API

  async get<T>(path: string, options?: Options): Promise<Response<T>> {
    return BaseService.request<T>(path, 'GET', null, options);
  }

  async post<T>(path: string, body: any, options?: Options): Promise<Response<T>>{
    return BaseService.request<T>(path, 'POST', body, options);
  }

  async put<T>(path: string, body: any, options?: Options): Promise<Response<T>> {
    return BaseService.request<T>(path, 'PUT', body, options);
  }

  async patch<T>(path: string, body: any, options?: Options): Promise<Response<T>> {
    return BaseService.request<T>(path, 'PATCH', body, options);
  }

  async delete<T>(path: string, options?: Options): Promise<Response<T>> {
    return BaseService.request<T>(path, 'DELETE', null, options);
  }

  private static async request<T>(
    path: string,
    method: string,
    body: Options | null,
    options?: Options
  ): Promise<Response<T>> {
    const headers = options?.headers || {};
    const contentType = headers['Content-Type'] || '';
    const queryParams = options?.queryParams || {}

    const queryString = Object.keys(queryParams)
                              .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
                              .join('&')
    
    const fullPath = queryString ? `${path}?${queryString}` : path

    if (options?.authorization) headers['Authorization'] = options.authorization;
    const requestOptions: RequestInit = { method: method, headers: headers };

    if (body) {
      if (contentType == 'application/json') {
        requestOptions.body = JSON.stringify(body);
      } else {
        requestOptions.body = body;
      }
    }

    const response = await fetch(`${development.API_URL}/${fullPath}`, requestOptions);
    const responseData = await response.json();
    
    return { data: responseData as T, status: response.status, meta: responseData.length };
  }
}

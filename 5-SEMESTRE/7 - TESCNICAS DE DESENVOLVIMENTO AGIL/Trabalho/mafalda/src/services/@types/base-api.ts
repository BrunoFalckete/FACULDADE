import { Response } from "../base-service";
import { Options } from "./options";

export interface BaseApiConfig {
  get<T>(url: string, options?: Options): Promise<Response<T>>;

  post<T>(url: string, body: any, options?: Options): Promise<Response<T>>;

  put<T>(url: string, body: any, options?: Options): Promise<Response<T>>;

  delete<T>(url: string, options?: Options): Promise<Response<T>>;
}

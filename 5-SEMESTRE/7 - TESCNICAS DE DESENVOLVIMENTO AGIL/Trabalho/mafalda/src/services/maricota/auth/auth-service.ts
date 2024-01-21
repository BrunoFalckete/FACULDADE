import { BaseService, Response } from "@/services/base-service";
import { UserSignUp } from "./model/user-signup";
import { UserResponse } from "./model/user-response";
import { UserSignIn } from "./model/user-signin";
import { Token } from "@/services/@types/share/token";
import Cookies from 'js-cookie';

export class AuthService extends BaseService{
  async signUp(body: UserSignUp): Promise<UserResponse> {
    try {
      const response = await this.post<UserResponse>('auth/register', body, { headers: { 'Content-Type': 'application/json' } });
      console.log(response);      
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async signIn(body: UserSignIn): Promise<Response<Token>> {
    try {
      const response = await this.post<Token>('auth/login', body, { headers: { 'Content-Type': 'application/json' } });
      if (response.status === 201) Cookies.set('currentUser', response.data.token);
      return {
        data: response.data,
        status: response.status,
        meta: response.meta
      }
    } catch (error) {
      throw error;
    }
  }
}

export const AuthServiceImp = new AuthService();
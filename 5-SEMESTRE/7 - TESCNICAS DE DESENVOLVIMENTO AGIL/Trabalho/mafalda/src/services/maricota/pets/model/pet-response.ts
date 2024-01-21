import { ImetaData } from "@/services/@types/share/ImetaData";

export type PetResponse = {
  id: number;
  name: string;
  gender: string;
  year: number;
  month: number;
  description: string;
  image_url: string;
}
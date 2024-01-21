export type PetShowResponse = {
  id: number;
  name: string;
  gender: string;
  year: number;
  month: number;
  kind: string;
  image_url: string;
  images: Images[];
};

type Images = {
  id: number;
  url: string;
};
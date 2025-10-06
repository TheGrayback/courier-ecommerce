export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  previewImage: string[];
  color: [string, string][];
  shortDescription: string;
  fullDescription: string;
  sizes: string[];
};

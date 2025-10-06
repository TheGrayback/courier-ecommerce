export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  previewImage: string[];
  color: [string, string][];
  shortDescription: string;
  fullDescription: string;
  size: [string, string][];
};

import { ISize, IType } from "./product";

export interface ICartProduct {
   _id: string;
   images: string;
   inStock: number;
   price: number;
   sizes?: ISize;
   slug: string;
   title: string;
   type: IType;
   gender: 'men'|'women'|'kid'|'unisex',
   quantity: number
}


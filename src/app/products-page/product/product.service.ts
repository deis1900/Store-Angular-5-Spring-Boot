import {Injectable} from "@angular/core";
import {Product} from "./product";

@Injectable()
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      type: "Dress",
      material: "Viscose",
      color: "Red",
      sizes: ["42", "44", "46", "48"],
      dateOfPurchase: 565651652589,
      image: "https://images.ua.prom.st/705057263_w800_h640_cid2327845_pid495526672-988a9c74.jpg"
    },
    {
      id: 2,
      type: "Dress",
      material: "Viscose",
      color: "Blue",
      sizes: ["S", "M", "L"],
      dateOfPurchase: 6878954954565,
      image: "https://images.ua.prom.st/705057135_w800_h640_cid2327845_pid495526667-ee8b7bfe.jpg"
    },
    {
      id: 3,
      type: "Dress",
      material: "Cotton",
      color: "Black",
      sizes: ["52", "54", "56", "58"],
      dateOfPurchase: 78454841589,
      image: "https://images.ua.prom.st/705093901_w800_h640_cid2327845_pid495533958-ff414cee.jpg"
    },
    {
      id: 4,
      type: "Dress",
      material: "Jeans",
      color: "White-Blue",
      sizes: ["42", "44", "46", "48"],
      dateOfPurchase: 2151681152589,
      image: "https://images.ua.prom.st/705095226_w800_h640_cid2327845_pid495533994-eb679f9b.jpg"
    },
    {
      id: 5,
      type: "Dress",
      material: "Viscose",
      color: "Red",
      sizes: ["S", "M", "L", "XL"],
      dateOfPurchase: 6546512168589,
      image: "https://images.ua.prom.st/705094977_w800_h640_cid2327845_pid495533989-e49fe064.jpg"
    },
    {
      id: 6,
      type: "Pants",
      material: "Jeans",
      color: "Blue",
      sizes: ["S", "M", "L", "XL"],
      dateOfPurchase: 6546512168589,
      image: "https://images.ua.prom.st/705093676_w800_h640_cid2327845_pid495533956-21765ebf.jpg"
    },
    {
      id: 7,
      type: "Skirt",
      material: "leather",
      color: "Black",
      sizes: ["S", "M", "L", "XL"],
      dateOfPurchase: 6546512168589,
      image: "https://images.ua.prom.st/340163413_w800_h640_zspighkdits1.jpg"
    },
    {
      id: 8,
      type: "Suit",
      material: "Velvet",
      color: "Red",
      sizes: ["S", "M", "L", "XL"],
      dateOfPurchase: 6546512168589,
      image: "https://avenue-boutique.com.ua/media/catalog/product/cache/4/image/560x800/ea8fadf1dc16eb15153bb4d92cdfabcf/_/c/_carica_km-2063_1.jpg"
    },


  ]

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(id: number,
             type: String,
             material: String,
             color: String,
             sizes: [String],
             dateofpurchase: number,
             image: String) {
    this.products.push(
      new Product(id, type, material, color, sizes, dateofpurchase, image));
  }
}




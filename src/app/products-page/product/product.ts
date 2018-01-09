export class Product {

  constructor(public id: number,
              public type: String,
              public material: String,
              public color: String,
              public sizes: [String],
              public dateOfPurchase: number,
              public image: String) {
  }

}

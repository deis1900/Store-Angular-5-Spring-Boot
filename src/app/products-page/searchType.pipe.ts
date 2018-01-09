import {Pipe, PipeTransform} from "@angular/core";

@Pipe ({
  name: 'searchType'
})
export class SearchTypePipe implements PipeTransform{

  transform(products, value) {
    return products.filter(product => {
      return product.type.includes(value);
    })
  }
}

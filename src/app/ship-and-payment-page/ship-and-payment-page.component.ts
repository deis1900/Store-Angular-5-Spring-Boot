import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-ship-and-payment-page',
  templateUrl: './ship-and-payment-page.component.html',
  styleUrls: ['./ship-and-payment-page.component.css'],

})
export class ShipAndPaymentPageComponent implements OnInit {

  images = [
    {name: 'https://cs1.livemaster.ru/storage/a3/14/848bc2ab40565f1e870b008592--dlya-doma-i-interera-korzina-ovalnaya-s-prodolnoj-ruchkoj.jpg'},
    {name: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Knitted_basket1.jpg/1280px-Knitted_basket1.jpg'},
    {name: 'http://lozamurom.ru/img/mebel/1488.jpg'},
  ]
  constructor () { }

  ngOnInit() {
  }

}

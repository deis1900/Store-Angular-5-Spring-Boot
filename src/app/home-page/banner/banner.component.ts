import {Component} from '@angular/core';
import {trigger} from "@angular/animations";

export interface Image {
  title: string;
  url: string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: []
})
export class BannerComponent {
  public images: Image[] = [
    {
      title: "We are covered",
      url: 'https://images.ua.prom.st/923441161_w800_h640_cid2327845_pid590857241-4ddcda8a.jpg'
    },
    {
      title: "Generation Gap",
      url: 'https://images.ua.prom.st/923442633_w800_h640_cid2327845_pid590857254-d4c0c255.jpg'
    },
    {title: "Potter me", url: 'https://images.ua.prom.st/824605537_w800_h640_cid2327845_pid549972965-841d59b9.jpg'},
    {
      title: "Pre-School Kids",
      url: 'https://images.ua.prom.st/824606693_w800_h640_cid2327845_pid549972979-2dc26acc.jpg'
    },
  ];

  constructor() {
  }
  onClick() {

  }


}

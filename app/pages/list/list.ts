import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {OnInit} from 'angular2/core';
import {MissionService} from '../../planet.service';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage implements OnInit {
  ngOnInit() {
    console.log('on initing')
    this.getMissions();
  }
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  errorMessage: string;
  imagePaths: string[];
  constructor(private nav: NavController, navParams: NavParams, private missionService: MissionService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.imagePaths = ['/img/Alderaan.jpg',
    '/img/Eaw_Yavin4.jpg',
    '/img/hoth.jpeg',
    '/img/Dagobah_ep3.jpg',
    '/img/250px-Bespin.jpg',
    '/img/Endor-DB.png',
    '/img/Naboo.png']
  }

  getMissions(){
    this.missionService.getMissions()
      .subscribe(
        planets => {
          this.items = planets;
          for (let i = 0; i< this.items.length; i++){
            if (this.imagePaths[i]){
              this.items[i].imagePath = this.imagePaths[i];
            }else{
              this.items[i].imagePath = '/img/saturn.png'
            }

          }
        },
        error => {this.errorMessage = <any>error;
          console.log(error)
        }
        )
  }
  planetClicked(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
};

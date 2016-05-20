import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {OnInit} from 'angular2/core';
import {PlanetService} from '../../planet.service'

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage implements OnInit {
  ngOnInit() {
    console.log('on initing')
    this.getPlanets();
  }
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  errorMessage: string;
  constructor(private nav: NavController, navParams: NavParams, private missionService: MissionService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

  }
  getPlanets(){
    this.planetService.getPlanets()
    .then(
      observable => {
      
      observable.subscribe(
        response => console.log('response:', response._body))
       // this.items = missions;
    },
    error => this.errorMessage = error);
  }
  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}

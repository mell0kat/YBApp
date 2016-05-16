import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {OnInit} from 'angular2/core';
import {MissionService} from '../../mission.service';


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
  constructor(private nav: NavController, navParams: NavParams, private missionService: MissionService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];


    // REPLACE THIS WITH SERVICE
   
    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  getMissions(){
    this.missionService.getMissions()
      .subscribe(
        species => {
          console.log('SPECIES', typeof species, species)
          this.items = species.results;
          

        },
        error => {this.errorMessage = <any>error;
          console.log('error')
        }
        )
    // .then(
    //   observable => {
    //   observable.subscribe(
    //     response => {
    //       this.items =  response._body['results'];
    //       console.log("THESE ITEMS", this.items)
    //     },
    //     error => {this.errorMessage = error});
    // })
  }
  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
};

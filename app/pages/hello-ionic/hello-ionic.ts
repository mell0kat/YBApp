import {Page} from 'ionic-angular';
import {Directive} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})

@Directive({
	selector: '[uppercased]'
})

export class HelloIonicPage {
  constructor() {

  }
}

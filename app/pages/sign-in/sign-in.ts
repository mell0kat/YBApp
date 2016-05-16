import {Page} from 'ionic-angular';
import { NgModel } from 'angular2/common';



@Page({
  templateUrl: 'build/pages/sign-in/sign-in.html',
  directives: [NgModel]
})

export class SignInPage {

  constructor() {

  }
  uppercase(event='') {
  	console.log(event)
  	this.email = event.toUpperCase();
  }
}




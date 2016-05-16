import {Page, NavController} from 'ionic-angular';
import { NgModel } from 'angular2/common';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/sign-in/sign-in.html',
  directives: [NgModel]
})

export class SignInPage {
  user:any;
  constructor(private nav: NavController) {
  	this.user = {
  		email:'',
  		password:''
  	}
  }
  uppercase(event='') {
  	this.user.email = event.toUpperCase();
  }
  setUserPassword(password){
    this.user.password = password;
  }
  signin(user) {
  	// this is very secure
  	console.log(user);
  	if  (user){
  		this.nav.setRoot(HomePage)
  	}

  }
}




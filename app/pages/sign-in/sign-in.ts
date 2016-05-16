import {Page, NavController} from 'ionic-angular';
import { NgModel } from 'angular2/common';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/sign-in/sign-in.html',
  directives: [NgModel]
})

interface User {
	email:string; 
	password:string;
}

export class SignInPage {

  constructor(private nav: NavController, user: User = {email:'', password:''}) {
   
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




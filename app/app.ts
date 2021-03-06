import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {SignInPage } from './pages/sign-in/sign-in';
import {ListPage} from './pages/list/list';
import { PlanetService } from './planet.service';
import {HTTP_BINDINGS} from 'angular2/http';
import 'rxjs/Rx'; 

// This @App specifies the root component
@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [PlanetService, HTTP_BINDINGS]
})
class MyApp {
  // make SignInPage the root (or first) page
  rootPage: any = SignInPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    PlanetService: PlanetService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Sign In', component: SignInPage },
      { title: 'Planets', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}

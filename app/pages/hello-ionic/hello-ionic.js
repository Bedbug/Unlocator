import {Page, NavController} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(nav: NavController) {
      this.nav = nav;

  }
}

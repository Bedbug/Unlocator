import {Page, NavController, NavParams} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';
import 'rxjs/Rx';
import {DataService} from '../../services/channels';
import {Http, Headers} from 'angular2/http';


@Page({
    templateUrl: 'build/pages/list/list.html',
    providers: [DataService]
})
export class ListPage {

    constructor(nav: NavController, navParams: NavParams, http: Http, dataService: DataService) {

        var self = this;

        self.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        self.selectedItem = navParams.get('item');

       

        self.items = dataService.getChannels();
       
    }

    itemTapped(event, item) {
        this.nav.push(ItemDetailsPage, {
            item: item
        });
    }
}

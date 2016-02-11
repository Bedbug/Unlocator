import {Page, NavController, NavParams} from 'ionic/ionic';
import {Http} from 'angular2/http';


@Page({
    templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {

    this_http: Http;
    
    constructor(nav: NavController, navParams: NavParams, http: Http) {
        this.this_http = http;
        this.nav = nav;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // console.log(this.selectedItem);
    }
    updateSelectedValue(event: string): void {
        console.log(event);
        this.selectedObject = JSON.parse(event);
    }
    stringify(o: any): string {
        return JSON.stringify(o);
    }
    changeTapped(event: string, region: string): void {
        var url = "/api/79f7a5b712bac07?country=" + this.region + "&channel=" + this.selectedItem.title;
        console.log(url);
        
        this.this_http.get(url)
            .subscribe((res) => {
               console.log(res);
            });
    }
    parse(code: string): string {
        switch (code) {
            case "ar":
                return "Argentina";
                break;
            case "au":
                return "Australia";
                break;
            case "at":
                return "Austria";
                break;
            case "be":
                return "Belgium";
                break;
            case "br":
                return "Brazil";
                break;

            case "cn":
                return "Canada";
                break;
            case "co":
                return "Colombia";
                break;
            case "de":
                return "Germany";
                break;
            case "dn":
                return "Denmark";
                break;
            case "fn":
                return "Finland";

            case "fr":
                return "France";
                break;
            case "in":
                return "India";
                break;
            case "ir":
                return "Ireland";
                break;
            case "dn":
                return "Denmark";
                break;
            case "it":
                return "Italy";
                break;

            case "jp":
                return "Japan";
                break;
            case "kr":
                return "Korea";
                break;
            case "lu":
                return "Luxembourg";
                break;
            case "mx":
                return "Mexico";
                break;
            case "nl":
                return "Netherlands";
                break;
                
                 case "nz":
                return "New Zealand";
                break;
            case "nw":
                return "Norway";
                break;
            case "pt":
                return "Portugal";
                break;
            case "es":
                return "Spain";
                break;
            case "sa":
                return "Saudi Arabia";
                break;
                
                      case "za":
                return "South Africa";
                break;
            case "sw":
                return "Sweden";
                break;
            case "ch":
                return "Switzerland";
                break;
            case "uk":
                return "UK";
                break;
            case "us":
                return "USA";
                break;
                 case "nyc-la":
                return "USA 1";
                break;
            default:
                return code;
                break;

        }
    }
}

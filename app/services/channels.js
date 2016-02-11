import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class DataService {
  
  self = this;
  
  items:Array<any> = [];
  
  constructor(http:Http) {
    var self = this;
     self.icons = ['netflix', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
            
    http.get('/tool/regions.xml')
            .map(res => res.text())
            .subscribe((res) => {
                var x2js = new X2JS();
               var  jsonObj = x2js.xml_str2json(res);
                for (let i = 0; i < Object.keys(jsonObj.channels).length; i++) {
                   self.items.push({
                        title: Object.keys(jsonObj.channels)[i],
                        regions: jsonObj.channels[Object.keys(jsonObj.channels)[i]].country,
                        // note: 'Click to set location',
                        icon: self.icons[Math.floor(Math.random() * self.icons.length)]
                    });
                }
                // console.log(self.items);
                // console.log(Object.keys(jsonObj.channels).length);
            });
  }
  
  getChannels() {
    return this.items;
  }
  
}
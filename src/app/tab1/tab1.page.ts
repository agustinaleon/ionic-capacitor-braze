import { Component } from '@angular/core';


declare var BrazePlugin: any;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit() {
    BrazePlugin.logCustomEvent("viewed_tab_1");
  }

}

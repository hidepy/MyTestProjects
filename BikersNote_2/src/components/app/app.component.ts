//import {Component} from '@angular/core';
import {
  Component,
  ViewChild,
  Params,
  OnsNavigator,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from "ngx-onsenui";

import { InitPage } from "../initPage/initPage.component";

@Component({
    selector: 'my-app',
    template: `
    <init-page></init-page>
    `
})
export class AppComponent {

}

import {
  Component,
  ViewChild,
  Params,
  OnsNavigator,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from "ngx-onsenui";

@Component({
    selector: 'init-page',
    template: `
    <ons-navigator var="nav"></ons-navigator>
    <ons-page>
      <h1>This is My Title</h1>

      <ons-button (click)="onsbuttonclick()">ONSBUTTON</ons-button>
    </ons-page>
    `
})
export class InitPage {

  onsbuttonclick(){
    console.log("pressed!!");
  }

  constructor(private _navigator: OnsNavigator, private _params: Params) {
    console.log('parameters:', _params.data);
  }

  push() {
    this._navigator.element.pushPage(InitPage, {animation: 'slide', data: {aaa: 'bbb'}});
  }

  pop() {
    this._navigator.element.popPage();
  }

}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ngx_onsenui_1 = require("ngx-onsenui");
var InitPage = InitPage_1 = (function () {
    function InitPage(_navigator, _params) {
        this._navigator = _navigator;
        this._params = _params;
        console.log('parameters:', _params.data);
    }
    InitPage.prototype.onsbuttonclick = function () {
        console.log("pressed!!");
    };
    InitPage.prototype.push = function () {
        this._navigator.element.pushPage(InitPage_1, { animation: 'slide', data: { aaa: 'bbb' } });
    };
    InitPage.prototype.pop = function () {
        this._navigator.element.popPage();
    };
    return InitPage;
}());
InitPage = InitPage_1 = __decorate([
    ngx_onsenui_1.Component({
        selector: 'init-page',
        template: "\n    <ons-navigator var=\"nav\"></ons-navigator>\n    <ons-page>\n      <h1>This is My Title</h1>\n\n      <ons-button (click)=\"onsbuttonclick()\">ONSBUTTON</ons-button>\n    </ons-page>\n    "
    }),
    __metadata("design:paramtypes", [ngx_onsenui_1.OnsNavigator, ngx_onsenui_1.Params])
], InitPage);
exports.InitPage = InitPage;
var InitPage_1;

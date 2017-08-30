import { OnsenModule } from 'ngx-onsenui';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent}         from './components/app/app.component';
import {InitPage} from "./components/initPage/initPage.component";

@NgModule({
  imports:         [OnsenModule],
  declarations:    [AppComponent, InitPage],
  bootstrap:       [AppComponent],
  schemas:         [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}

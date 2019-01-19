import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import {AppStoreModule} from './store/app-store.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainBarComponent,
    HeaderComponent,
    PresentationComponent
  ],
  imports: [
    AppStoreModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

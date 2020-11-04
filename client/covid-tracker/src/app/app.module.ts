import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { TotalComponent } from './total/total.component';
import { CaseLineComponent } from './case-line/case-line.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TotalComponent,
    CaseLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

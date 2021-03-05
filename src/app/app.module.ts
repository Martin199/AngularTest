import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeDetailsComponent } from './pages/home-details/home-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReusableTableComponent } from './shared/reusable/table/reusable-table.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule
  ],
  exports: [
    ReusableTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
@NgModule({
  declarations: [
    AppComponent,
    AssetsListComponent,
    AssetDetailsComponent,
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

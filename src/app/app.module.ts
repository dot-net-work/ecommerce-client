import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import {HttpClientModule} from '@angular/common/http';
import { HighlightDirective } from './Directives/highlight.directive';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CustomerEntryComponent } from './customer-entry/customer-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    HighlightDirective,
    ProductInfoComponent,
    CustomerEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

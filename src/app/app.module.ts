import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutUsPageComponent} from './about-us-page/about-us-page.component';
import {CustomerPageComponent} from './customer-page/customer-page.component';
import {ProductsPageComponent} from './products-page/products-page.component';
import {ShipAndPaymentPageComponent} from './ship-and-payment-page/ship-and-payment-page.component';
import {ContactUsPageComponent} from './contact-us-page/contact-us-page.component';
import {HoverDirective} from "./products-page/product/hover.directive";
import {ProductComponent} from './products-page/product/product.component';
import {SearchTypePipe} from "./products-page/searchType.pipe";
import {HeroListBasicComponent} from "./products-page/heroListBasic.component";
import {RegistrationComponent} from './customer-page/registration/registration.component';
import {UserComponent} from "./customer-page/user/user.component";
import {BannerComponent} from './home-page/banner/banner.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'customer', component: CustomerPageComponent},
  {path: 'aboutUs', component: AboutUsPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'contactUs', component: ContactUsPageComponent},
  {path: 'shipAndPayment', component: ShipAndPaymentPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    CustomerPageComponent,
    ProductsPageComponent,
    ShipAndPaymentPageComponent,
    ContactUsPageComponent,
    HoverDirective,
    ProductComponent,
    SearchTypePipe,
    HeroListBasicComponent,
    RegistrationComponent,
    UserComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

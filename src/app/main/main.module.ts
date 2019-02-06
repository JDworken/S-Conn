import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductsModule } from '../products/products.module';
import { LoginModule } from '../login/login.module';
import { SupportModule } from '../support/support.module';
import { PromosModule } from '../promos/promos.module';
import { ForumModule } from '../forum/forum.module';
import { BlogModule } from '../blog/blog.module';
import { MainComponent } from './main.component';
import { CheckoutModule } from '../checkout/checkout.module';

import { MainService } from './main.service';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ProductsModule,
    LoginModule,
    SupportModule,
    PromosModule,
    ForumModule,
    BlogModule,
    CheckoutModule
  ],
  providers: [MainService]
})
export class MainModule { }

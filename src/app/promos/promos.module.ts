import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromosRoutingModule } from './promos-routing.module';
import { PromosComponent } from './promos.component';

import { PromosService } from './promos.service';

@NgModule({
  declarations: [PromosComponent],
  imports: [
    CommonModule,
    PromosRoutingModule
  ],
  providers: [PromosService]
})
export class PromosModule { }

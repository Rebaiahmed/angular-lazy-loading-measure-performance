import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cc1Component } from './cc1/cc1.component';
import { Cc2Component } from './cc2/cc2.component';
import { Cc3Component } from './cc3/cc3.component';
import { Cc4Component } from './cc4/cc4.component';
import { Cc5Component } from './cc5/cc5.component';
import { Cc11Component } from './cc11/cc11.component';



@NgModule({
  declarations: [
    Cc1Component,
    Cc2Component,
    Cc3Component,
    Cc4Component,
    Cc5Component,
    Cc11Component
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleCModule { }

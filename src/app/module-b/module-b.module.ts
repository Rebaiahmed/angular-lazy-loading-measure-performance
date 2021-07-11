import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cb1Component } from './cb1/cb1.component';
import { Cb2Component } from './cb2/cb2.component';
import { Cb3Component } from './cb3/cb3.component';
import { Cb4Component } from './cb4/cb4.component';
import { Cb5Component } from './cb5/cb5.component';



@NgModule({
  declarations: [
    Cb1Component,
    Cb2Component,
    Cb3Component,
    Cb4Component,
    Cb5Component
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleBModule { }

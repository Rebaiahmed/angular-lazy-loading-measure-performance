import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1Component } from './f1/f1.component';
import { F2Component } from './f2/f2.component';
import { F3Component } from './f3/f3.component';
import { F4Component } from './f4/f4.component';



@NgModule({
  declarations: [
    F1Component,
    F2Component,
    F3Component,
    F4Component
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleFModule { }

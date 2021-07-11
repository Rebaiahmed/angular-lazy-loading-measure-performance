import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CA1Component } from './c-a1/c-a1.component';
import { CA2Component } from './c-a2/c-a2.component';
import { CA3Component } from './c-a3/c-a3.component';
import { CA4Component } from './c-a4/c-a4.component';
import { CA5Component } from './c-a5/c-a5.component';



@NgModule({
  declarations: [
    CA1Component,
    CA2Component,
    CA3Component,
    CA4Component,
    CA5Component
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleAModule { }

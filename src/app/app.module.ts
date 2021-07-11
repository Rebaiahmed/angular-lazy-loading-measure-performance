import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { ModuleCModule } from './module-c/module-c.module';
import { ModuleDModule } from './module-d/module-d.module';
import { ModuleEModule } from './module-e/module-e.module';
import { ModuleFModule } from './module-f/module-f.module';
import { ModuleHModule } from './module-h/module-h.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule,
    ModuleBModule,
    ModuleCModule,
    ModuleDModule,
    ModuleEModule,
    ModuleFModule,
    ModuleHModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

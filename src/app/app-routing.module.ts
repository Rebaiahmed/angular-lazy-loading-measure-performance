import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { ModuleFModule } from './module-f/module-f.module';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () =>
      import('./module-a/module-a.module').then((m) => m.ModuleAModule),
  },
  {
    path: 'b',
    loadChildren: () =>
      import('./module-b/module-b.module').then((m) => m.ModuleBModule),
  },
  {
    path: 'c',
    loadChildren: () =>
      import('./module-c/module-c.module').then((m) => m.ModuleCModule),
  },
  {
    path: 'd',
    loadChildren: () =>
      import('./module-d/module-d.module').then((m) => m.ModuleDModule),
  },
  {
    path: 'e',
    loadChildren: () =>
      import('./module-e/module-e.module').then((m) => m.ModuleEModule),
  },
  {
    path: 'f',
    loadChildren: () =>
      import('./module-f/module-f.module').then((m) => m.ModuleFModule),
  },
  {
    path: 'h',
    loadChildren: () =>
      import('./module-h/module-h.module').then((m) => m.ModuleHModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

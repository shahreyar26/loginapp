import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { DemoComponent } from './demo/demo.component';
import { Page1Component } from './page/page2/page1.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'extra',
    component: Page1Component
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

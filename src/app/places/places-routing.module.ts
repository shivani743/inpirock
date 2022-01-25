import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places.component';

const routes: Routes = [
  {
    path: '',
    component: PlacesComponent
    // redirectTo: 'home',
    // pathMatch: 'full',
  },
//   {
//     path: 'home',
//     component: HomeComponent,
//     loadChildren: () => import('./home.module').then(m => m.HomeModule)

//   }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }

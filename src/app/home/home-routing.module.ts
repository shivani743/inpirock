import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
export class HomeRoutingModule { }

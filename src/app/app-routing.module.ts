import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeDetComponent } from './components/home-det/home-det.component';
const routes: Routes = [
  {path:'',redirectTo:'index', pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'cat/:id/:image',component:HomeDetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

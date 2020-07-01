import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AnnonceComponent} from "./components/annonce/annonce.component";
import {AddAnnonceComponent} from "./components/add-annonce/add-annonce.component";
import {DetailAnnonceComponent} from "./components/detail-annonce/detail-annonce.component";
import {EditAnnonceComponent} from "./components/edit-annonce/edit-annonce.component";


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'annonce', component: AnnonceComponent },
  { path: 'annonce/add', component: AddAnnonceComponent },
  { path: 'annonce/:id', component: DetailAnnonceComponent},
  { path: 'annonce/update/:id', component: EditAnnonceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

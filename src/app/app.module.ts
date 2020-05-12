import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Service contenant le JSON de tous les musées et les méthodes associées
import { MuseumListService } from './services/museumList.service';

// Ajouter un musée
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
// Musée sur une carte
import { MapMuseumComponent } from './map-museum/map-museum.component';
// Liste des musée : inclue SingleMuseumComponent
import { MuseumListComponent } from './museum-list/museum-list.component';
// Un musée dans la liste
import { SingleMuseumComponent } from './single-museum/single-museum.component';
// Détail d'un musée sur une page
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';



const appRoutes:Routes = [
  {path: 'add', component: AddComponent},
  {path: 'museum/:museumRef', component: MuseumDetailComponent},
  {path: '', component: MuseumListComponent},
]

@NgModule({
  declarations: [
    AddComponent,
    AppComponent,
    MapMuseumComponent,
    MuseumDetailComponent,
    MuseumListComponent,
    SingleMuseumComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

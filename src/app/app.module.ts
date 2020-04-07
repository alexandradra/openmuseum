import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';

import { MuseumListService } from './services/museumList.service';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { AddComponent } from './add/add.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';


const appRoutes:Routes = [
  {path: 'add', component: AddComponent},
  {path: 'singleMuseum', component: SingleMuseumComponent},
  {path: '', component: MuseumListComponent},
  {path: 'museum/:museumId', component: MuseumDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    AddComponent,
    MuseumListComponent,
    MuseumDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

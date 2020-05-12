import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  museums: Observable<any[]>;

  constructor(private httpClient: HttpClient) { }

  public getMuseumsData(): Observable<any> {
    this.museums = this.httpClient.get<any>(environment.apiRoute);
    //Envoi de la requête HTTP et on retourne son résultat
    return this.museums;
  }

  // Particulier car filtre, sera abordé en cours de prog. dans un 1er temps 
  public getMuseumByRefMusee(museumRef: string):Observable<any> {
    // On fait une requete sur tout le tableau. TODO : requeter sur un seul musée (DA)
    return this.httpClient.get<any>(environment.apiRoute)
      .pipe( // On va faire des opération sur l'observable
        map(museums => {
          let result = museums.filter(museum => museum.fields.ref_musee === museumRef);
          return result[0];
        }) // On filtre sur le tableau de musée
      )
  }

}

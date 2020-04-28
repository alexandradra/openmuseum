import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})

export class MuseumDetailComponent implements OnInit {
  museumRef: string;
  museumName: string;
  museumAdress: string;
  museumZipCode: string;
  museumCity: string;
  museumPhone: string;
  museumWebSite: string;
  museumOpening: string;
  museumFax: string;
  museumCoord: number[];

  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['museumRef'];
    this.museumName = this.museumListService.getMuseumByRefMusee(museumRef).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumByRefMusee(museumRef).adr;
    this.museumZipCode = this.museumListService.getMuseumByRefMusee(museumRef).cp;
    this.museumCity = this.museumListService.getMuseumByRefMusee(museumRef).ville;
    this.museumPhone = this.museumListService.getMuseumByRefMusee(museumRef).telephone;
    this.museumWebSite = this.museumListService.getMuseumByRefMusee(museumRef).sitweb;
    this.museumOpening = this.museumListService.getMuseumByRefMusee(museumRef).periode_ouverture;
    this.museumFax = this.museumListService.getMuseumByRefMusee(museumRef).fax;
    this.museumCoord = this.museumListService.getMuseumByRefMusee(museumRef).coordonnees_finales;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumId : number;
  museumName : string;
  museumAdress : string;
  museumZipCode : string;
  museumCity : string;
  museumPhone : string;
  museumWebSite : string;
  museumOpening : string;


  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumId = this.route.snapshot.params['museumId'];
    this.museumName = this.museumListService.getMuseumById(+museumId).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumById(+museumId).adr;
    this.museumZipCode = this.museumListService.getMuseumById(+museumId).cp;
    this.museumCity = this.museumListService.getMuseumById(+museumId).ville;
    this.museumPhone = this.museumListService.getMuseumById(+museumId).telephone;
    this.museumWebSite = this.museumListService.getMuseumById(+museumId).sitweb;
    this.museumOpening = this.museumListService.getMuseumById(+museumId).periode_ouverture;
  }

}

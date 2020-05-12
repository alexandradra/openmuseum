import { Component, OnDestroy, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service'
import { Subscription } from 'rxjs';
import { DataService } from '../services/data/data.service'


@Component({
  selector: 'app-root',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit, OnDestroy {
  museums: any[];
  museumSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.museums = this.museumListService.museums;
    this.dataService.getMuseumsData()
      .subscribe(
        res => {
          this.museums = res;
          console.log(res);
        },
        error => {
          console.log("Error :" + error);
        })
  }


  ngOnDestroy() {
    // this.museumListService.museumsSubject.unsubscribe();
  }

}

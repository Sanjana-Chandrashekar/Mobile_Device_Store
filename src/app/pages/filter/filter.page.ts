import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  budget;
  category;
  viewID;

  constructor(public routing: ActivatedRoute, public router: Router
  ) { }

  ngOnInit() {
    this.viewID = this.routing.snapshot.paramMap.get('id');
  }

  filterSearch() {
   // this.router.navigate(['/view/',{ id: this.viewID}]);


  }

}

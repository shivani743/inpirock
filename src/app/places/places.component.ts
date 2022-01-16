import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
@Input() placeName: string = 'Delhi';
@Input() date: string = '2022-02-02';
  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      this.placeName = params['placeName'];
      this.date = params['date'];
    })
   }

  ngOnInit(): void {
  }

}

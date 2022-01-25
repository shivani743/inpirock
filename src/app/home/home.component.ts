import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../services/server.service';
declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formattedaddress: any;
  adres: any;
  items: any = [];
  options = {
    types: ['address'],
  }
  searchKey: any = "Goa";
  constructor(private route: ActivatedRoute, private router: Router, private server: ServerService) { }
  ngOnInit() {
    this.searchh()
  }


  //for search places//
  search() {
    this.router.navigate(['/places'],
      {
        queryParams: {
          placeName: 'Goa',
          date: '2020-01-01'
        }
      }
    );

  }

  address(event: any) {
    console.log(event)
    this.formattedaddress = event.formatted_address
  }

  searchh() {
    this.server.getPlacesSuggestions(this.searchKey).subscribe((data: any) => {
      console.log(data)
      this.items = data[0].description;
    })
  }

}

import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ServerService
} from '../services/server.service';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destination: any;
  addresses: any;
  place_ids: any = [];
  startDate: any;
  endDate: any;
  resp: any;
  constructor(private route: ActivatedRoute, private router: Router, private server: ServerService) {}
  ngOnInit() {
    // this.searchh()
  }
  change() {
    console.log(this.destination)
    this.searchh()

  }

  searchh() {
    this.server.getPlacesSuggestions(this.destination).subscribe((data: any) => {
      console.log(data)
      this.addresses = data;
    })
  }

  onSelectPlace(address: any) {

    if (this.place_ids.length == 0) {
      this.place_ids.push(address.place_id);
    } else {
      if (this.place_ids.includes(address.place_id)) {
        console.log('found');
        // this.place_ids.splice(this.place_ids.indexOf(id), 1);
      } else {
        console.log('not found');
        this.place_ids.push(address.place_id);
      }
    }
    console.log(this.place_ids);
  }
deletePlace(address: any) {
  if (this.place_ids.includes(address.place_id)) {
    console.log('found');
    this.place_ids.splice(this.place_ids.indexOf(address.place_id), 1);
  }
}
  getPlan() {
    if (this.startDate != null || this.startDate != undefined || this.startDate != '' ||
      this.endDate != null || this.endDate != undefined || this.endDate != '') {
      const payload = {
        "startDate": this.startDate,
        "endDate": this.endDate,
        "place_ids": this.place_ids
      }
      this.server.postPlan(payload).subscribe((res) => {
          this.resp = res;

          localStorage.setItem('plan', JSON.stringify(this.resp));
          this.router.navigate(['/places'], {
            queryParams: {
              data: this.resp
            }
          })
        }),
        (err: any) => {
          console.log(err)
        }
    } else {
      alert("Enter start Date or End Date")
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private http: HttpClient

  ) {


  }
  private BASE_URL = 'http://52.66.242.10/user/';
  private sample_photo_id = 'Aap_uEBLF3KN_DIY00w1ORDNCndNVnZbbt5Y5hGrKAK1L4f5n8Ln1Pq7oJBJcSfORwAcGk8u2Zr8kRKBJyZtFLYIQfbBrS37Z0fBN_ueJPjwipezOnx5BEaXl519BTdQ6G1ydEg_wXJYG7lTL1Yo1UJotkButvErzQeaZQfrrIdhdg2seLfM';
  private sampleWidth = 4000;
  private sampleHeight = 1800
  private API_URL = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${this.sample_photo_id}&maxheight=${this.sampleHeight}&maxwidth=${this.sampleWidth}&key=AIzaSyDQ5zkRAqnqlutX6MDp2FgCF8bkRb7oD7Q`



  getPlacesPhotos(referenceId: string, height: number, width: number) {
    const url = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${referenceId}&maxheight=${height}&maxwidth=${width}&key=AIzaSyDQ5zkRAqnqlutX6MDp2FgCF8bkRb7oD7Q`

    return this.http.get(url);
  }
  getPlacesSuggestions(placeName: any) {
    const url = this.BASE_URL + 'suggestplace?query=' + placeName;
    // const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const req = this.http.get(url, { headers: headers })
    return req
  }
firstCall(place_ids:any[]) {
  const url = this.BASE_URL + 'getplan';
  // const token = localStorage.getItem('token')
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  const req = this.http.post(url, JSON.stringify(place_ids), { headers: headers })
  return req

}
  postPlan(payload: any) {
    // const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    })
    // Authorization: `Bearer ` + token,
    return this.http.post(this.BASE_URL + 'postplan', JSON.stringify(payload), { headers: headers })
  }

  async getPlaces(placeName: string) {
    const url = this.BASE_URL + 'suggestplace/' + placeName;
    // const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const req = await this.http.get(url, { headers: headers }).toPromise()
    return req
  }

}

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
private BASE_URL = 'http://localhost:3000/api/';
private sample_photo_id = 'Aap_uEBLF3KN_DIY00w1ORDNCndNVnZbbt5Y5hGrKAK1L4f5n8Ln1Pq7oJBJcSfORwAcGk8u2Zr8kRKBJyZtFLYIQfbBrS37Z0fBN_ueJPjwipezOnx5BEaXl519BTdQ6G1ydEg_wXJYG7lTL1Yo1UJotkButvErzQeaZQfrrIdhdg2seLfM';
private sampleWidth = 4000;
private sampleHeight = 1800
private API_URL = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${this.sample_photo_id}&maxheight=${this.sampleHeight}&maxwidth=${this.sampleWidth}&key=AIzaSyDQ5zkRAqnqlutX6MDp2FgCF8bkRb7oD7Q`



getPlacesPhotos(referenceId: string, height: number, width: number) {
const url = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${referenceId}&maxheight=${height}&maxwidth=${width}&key=AIzaSyDQ5zkRAqnqlutX6MDp2FgCF8bkRb7oD7Q`

  return this.http.get(url);
}
}

import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Request } from './api.service';
describe('ApiService', () => {
  const requestHandler = (method: string, url: string, payload: { body: any }): Observable<any> => {
    return of({
      url: url,
      body: payload.body,
      method: method
    });
  }
  let service: ApiService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ApiService]
  }));
  beforeEach(() => {
    service = TestBed.get(ApiService);
    spyOn(service.http, 'request').and.callFake(requestHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build correct url', () => {
    service.sendRequest({
      apiBase: 'http://www.google.com/',
      method: 'get',
      endpoint: 'images/',
    }).subscribe(res => {
      expect(res.url).toEqual('http://www.google.com/images')
    })
  });

  it('should add route params correctly', () => {
    service.sendRequest({
      apiBase: 'http://www.google.com/',
      method: 'get',
      endpoint: '',
      routeParams: {
        'users': '123',
        'images': '123'
      }
    }).subscribe(res => {
      expect(res.url).toEqual('http://www.google.com/users/123/images/123')
    })
  });

  it('should add query params correctly', () => {
    service.sendRequest({
      apiBase: 'http://www.google.com/',
      method: 'get',
      endpoint: '',
      queryParams: {
        'users': '123',
        'images': '123'
      }
    }).subscribe(res => {
      expect(res.url).toEqual('http://www.google.com?users=123&images=123')
    })
  });
});


export class ApiFakeService {
  sendRequest(request: Request): Observable<{ hello: string }> {
    return of({ hello: 'world' });
  }
}

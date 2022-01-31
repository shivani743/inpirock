import { TestBed } from '@angular/core/testing';

import { InterceptorService, HttpStatusCodes } from './interceptor.service';
import { LocalStorageService } from '../storage/local-storage.service';
import { CoreModule } from '../../core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpRequest, HttpHandler, HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { StorageKeys } from 'src/app/shared/constants/storage-keys';

describe('InterceptorService', () => {
  let service: InterceptorService;
  let storageService: LocalStorageService;
  const httpHandler: HttpHandler = {
    handle: (req: HttpRequest<any>) => {
      return of(new HttpResponse({ body: req }));
    }
  }
  const httpErrorHandler: HttpHandler = {
    handle: (req: HttpRequest<any>) => {
      const error = new HttpErrorResponse({
        status: HttpStatusCodes.Unauthorized
      })
      return throwError(error);
    }
  }
  beforeEach(() => TestBed.configureTestingModule({
    providers: [InterceptorService],
    imports: [CoreModule, RouterTestingModule]
  }));

  beforeEach(() => {
    service = TestBed.get(InterceptorService);
    storageService = TestBed.get(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should intercept each request and add session id', () => {
    storageService.set(StorageKeys.sessionId, '123456');
    const request = new HttpRequest('GET', 'http://google.com');
    service.intercept(request, httpHandler).subscribe((res: HttpResponse<HttpRequest<any>>) => {
      expect(res.body.headers.get('sessionid')).toEqual('123456');
    });
  });

  it('should navigate to login screen if request is unauthorizes', () => {
    const request = new HttpRequest('GET', 'http://google.com');
    spyOn(service.router, 'navigate').and.callFake(() => { });
    spyOn(window, 'alert').and.callFake(() => { });
    service.intercept(request, httpErrorHandler).subscribe(() => {
    }, () => {
      expect(service.router.navigate).toHaveBeenCalled();
    });
  });
});

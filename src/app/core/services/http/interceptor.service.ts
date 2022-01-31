import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
    APIHttpResponse,
    APIHttpResponseStatus,
} from 'src/app/shared/models/http-response';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    userloggedOut: boolean =false;
    constructor(
        public readonly router: Router,
        public auth: AuthService
    ) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const isCustomer = req.url.indexOf('customer') >= 0;
        let headers;
        
        if (this.auth.getToken()) {
            headers = req.headers.set(
                'Authorization',
                `Bearer ${this.auth.getToken()}`
            ); 
        }
       

        const dupReq = req.clone({
            headers: headers,
        });

        return next.handle(dupReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // if (event.url.indexOf(environment.apiBase) === -1) {
                    //     this.userloggedOut = false;
                    //     return event;
                    // }
                    const _res = event.body as APIHttpResponse;
                    // if (
                    //     _res.statusCode === SupportCamHttpResponseStatus.OK &&
                    //     (_res.result !== undefined || _res.result !== null)
                    // ) {
                    //     const _event = event.clone({
                    //         body: _res.result,
                    //     });
                    //     this.userloggedOut = false;
                    //     return _event;
                    // } else {
                    //     throw { status: _res.statusCode, error: _res.error };
                    // }
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                switch (err.status) {
                    case HttpStatusCodes.Unauthorized:
                        if (!this.userloggedOut) {
                            if (
                                err.error &&
                                err.error.messages &&
                                err.error.messages.length
                            ) {
                                console.log(err.error.messages.join(','));
                            } else {
                                console.log(
                                    `Session expired\nPlease login again`
                                );
                            }
                            this.router.navigate(['/login']);
                            //this.localStorage.remove(StorageKeys.sessionId);
                        }
                        this.userloggedOut = true;
                        break;
                    case HttpStatusCodes.LimitExceeded:
                    case HttpStatusCodes.ContentNotAvailable:
                        if (
                            err.error &&
                            err.error.messages &&
                            err.error.messages.length
                        ) {
                            console.log(err.error.messages.join(','));
                        }
                        break;
                    case HttpStatusCodes.Badrequest:
                        // alert('An error occured');
                        break;
                }
                return throwError(err);
            })
        );
    }
}

export enum HttpStatusCodes {
    Unauthorized = 401,
    ContentNotAvailable = 410,
    LimitExceeded = 429,
    Badrequest = 400,
}

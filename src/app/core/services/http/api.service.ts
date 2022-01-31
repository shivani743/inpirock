import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';
import { HttpClient } from '@angular/common/http';

import { timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export const serverBase = environment.apiBase;
export const apiBase = `${serverBase}`;

export class Request {
    apiBase?: string;
    endpoint: string = '';
    routeParams?: { [key: string]: number | string | Date };
    queryParams?: { [key: string]: number | string | Date };
    body?: any;
    formData?: FormData;
    method: string = '';
}

@Injectable({
    providedIn: CoreModule,
})
export class ApiService {
    constructor(public http: HttpClient) {}

    public sendRequest(request: Request) {
        const finalUrl = this.buildURL(request);
        let a = this.http
            .request(request.method, finalUrl, {
                body: request.body || request.formData || {},
            })
            .pipe(timeout(30000));
        return a;
    }

    private removeTrailingSlash(endpoint: string) {
        if (endpoint.endsWith('/')) {
            endpoint = endpoint.substr(0, endpoint.length - 1);
        }
        return endpoint;
    }

    private buildURL(request: Request): string {
        request.endpoint = this.removeTrailingSlash(request.endpoint);
        let route = this.removeTrailingSlash(
            `${request.apiBase ? request.apiBase : apiBase}${request.endpoint}`
        );
        if (request.routeParams) {
            for (const key in request.routeParams) {
                if (key in request.routeParams) {
                    route = `${route}/${key}/${request.routeParams[key]}`;
                }
            }
        }
        let paramChar = route.indexOf('?') >= 0 ? '&' : '?';

        /**
         * If while opening a URL queryparams include log=false
         * this means UI needs to send this query param
         * to the api for it to stop logging
         */
        const disableLogging = location.href.indexOf('log=false') >= 0;
        if (disableLogging) {
            request.queryParams = request.queryParams || {};
            // request.queryParams.log = 'false';
        }

        if (request.queryParams) {
            for (const key in request.queryParams) {
                if (request.queryParams.hasOwnProperty(key)) {
                    route = `${route}${paramChar}${key}=${request.queryParams[key]}`;
                    paramChar = '&';
                }
            }
        }
        return route;
    }
}

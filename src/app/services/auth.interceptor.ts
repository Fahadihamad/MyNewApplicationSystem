import { HttpInterceptor,HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, } from "@angular/common/http"
import { Injectable } from "@angular/core"
import {Observable} from "rxjs"
import { LoginServiceService } from "./login-service.service"


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginServiceService){

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): Observable<HttpEvent<any>> {

            //add the jwt token(local storage) request
            let authReq= req;
            const token = this.login;
            console.log('inside interceptor');
            if(authReq != null){
                authReq=authReq.clone({
                    setHeaders:{'Authentication': `Bearer ${token}` },
                });
            }
        return next.handle(authReq);
    }

}

export const authInterceptorProviders = [
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    },
];
import { HttpInterceptor,HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse, } from "@angular/common/http"
import { Injectable } from "@angular/core"
import {Observable, throwError} from "rxjs"
import {catchError} from "rxjs/operators"
import { LoginServiceService } from "./login-service.service"
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginServiceService, private router:Router){

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): Observable <HttpEvent<any>> {

        if(req.headers.get('No-Auth')==='True'){
            return next.handle(req.clone());
        }
        const token = this.login.getToken();

        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError(
                (err:HttpErrorResponse)=>{
                    console.log(err.status);

                    if(err.status === 401){
                     this.router.navigate(['/login'])
                    }else if (err.status === 403){
                     this.router.navigate(['/login'])
                    }
                    return throwError("something went wrong")
                }
            )
        );
        }

        private addToken(request:HttpRequest<any>, token:String){
            return request.clone(
                {
                    setHeaders:{
                        Authentication: `Bearer ${token}`
                    }
                }

            );
        }
}

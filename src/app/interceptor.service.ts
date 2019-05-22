import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {


   constructor() { }


   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const updatedRequest = req.clone({                                         // ajout de la constante update request
         headers: req.headers.set("ma key" , new Date().toISOString())
       });

      return next.handle(req);
   }

}

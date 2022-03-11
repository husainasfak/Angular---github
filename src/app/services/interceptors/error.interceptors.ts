import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError as observableThrowError } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()

export class HttpErrorInterceptor implements HttpInterceptor{
     constructor(private message: NzMessageService){}
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          return next.handle(req).pipe(
               catchError((err:HttpErrorResponse)=>{
                    if(err){
                         this.err()
                    }
                    return observableThrowError(err.error)
               })
          )
     }
     err(){
          this.message.info('There is error occure. Please provide correct User Name');
     }
}
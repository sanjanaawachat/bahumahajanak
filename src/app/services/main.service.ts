// import { Injectable } from '@angular/core';
// import { BaseService } from './base.service'
// import { ApiConfigService } from './api-config.service'
// import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import { map } from 'rxjs/operators';
// import { ApplicationIdService } from '../services/application-id.service';
// import { HttpClient } from '@angular/common/http';
// //import { promise } from 'protractor';

// const url = "https://serverengg.oceansofttech.net/api/ZION/SENDMAIL";
// @Injectable({
//   providedIn: 'root'
// })
// export class MainService extends BaseService {
//   /** */
//   public products: any = []; // new variable declared on 2020-02-13 by nilesh  
//   static PageId: any;
//   static Pageidmaster: any;
//   /** */
//   baseUrl: string;
//   appId: any;
//   public errors: any;
//   constructor(private http: HttpClient, private configService: ApiConfigService, private applicationId: ApplicationIdService) {
//     super();
//     this.baseUrl = configService.getApiURI();
//     this.appId = applicationId.getApplicationId();
//   }
//   //start working after login//
//   objInnerMethod(MoObj: any) {
//     MoObj.ApplicationId = this.appId;
//     MoObj.IsCipher = "1";
//     var obj = MoObj;
//     var body = JSON.stringify(obj);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     let authToken = localStorage.getItem('auth_token');
//     headers.append('Authorization', `Bearer ${authToken}`);
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(this.baseUrl + '/cipher/main', body, options,)
//       .pipe(map((data: Response) => {
//         return data.json();
//       }))
//   }
//   //start working before login//
//   objOuterMethod(MoObj: any) {
//     MoObj.ApplicationId = this.appId;
//     MoObj.IsCipher = "0";
//     var obj = MoObj;
//     var body = JSON.stringify(obj);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(this.baseUrl + "/zion/main", body, options)
//       .pipe(map((data: Response) => {
//         return data.json();
//       }))
//   }
//   emailMethod(MoObj: any) {
//     MoObj.ApplicationId = this.appId;
//     MoObj.IsCipher = "0";
//     // MoObj.PkSystemEmailSetting=2;
//     // MoObj.message="Thank you for Subscribe"
//     var obj = MoObj;
//     var body = JSON.stringify(obj);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, body, options)
//       .pipe(map((data: Response) => {
//         return data.json();
//       }))
//   }

//   OneMethod(MoObj: any) {
//     return new Promise(resolve => {
//       this.objInnerMethod(MoObj)
//         .subscribe(
//           (result: unknown) => {
//             resolve(result);
//           },
//           (error: any) => this.errors = error);
//     });
//   }

//   TwoMethod(MoObj: any) {
//     return new Promise(resolve => {
//       this.objOuterMethod(MoObj)
//         .subscribe(
//           (          result: unknown) => {
//             resolve(result);
//           },
//           (          error: any) => this.errors = error);
//     })
//   }

//   ImageUploader(MoObj: any) {
//     MoObj.ApplicationId = this.appId;
//     MoObj.IsCipher = "1";
//     MoObj.PkSystemUploadDocSetting = "1"
//     var obj = MoObj;
//     var body = JSON.stringify(obj);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     let authToken = localStorage.getItem('auth_token');
//     headers.append('Authorization', `Bearer ${authToken}`);
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(this.baseUrl + '/cipher/UPLOAD', body, options,)
//       .pipe(map((data: Response) => {
//         return data.json();
//       }))
//   }
// }


import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiConfigService } from './api-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApplicationIdService } from '../services/application-id.service';

const url = "https://serverengg.oceansofttech.net/api/ZION/SENDMAIL";

@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseService {
  /** */
  public products: any = []; // new variable declared on 2020-02-13 by nilesh  
  static PageId: any;
  static Pageidmaster: any;
  /** */
  baseUrl: string;
  appId: any;
  public errors: any;

  constructor(private http: HttpClient, private configService: ApiConfigService, private applicationId: ApplicationIdService) {
    super();
    this.baseUrl = configService.getApiURI();
    this.appId = applicationId.getApplicationId();
  }

  // Start working after login
  objInnerMethod(MoObj: any) {
    MoObj.ApplicationId = this.appId;
    MoObj.IsCipher = "1";
    var obj = MoObj;
    var body = JSON.stringify(obj);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.post(this.baseUrl + '/cipher/main', body, { headers })
      .pipe(map((data: any) => {
        return data;
      }));
  }

  // Start working before login
  objOuterMethod(MoObj: any) {
    MoObj.ApplicationId = this.appId;
    MoObj.IsCipher = "0";
    var obj = MoObj;
    var body = JSON.stringify(obj);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + "/zion/main", body, { headers })
      .pipe(map((data: any) => {
        return data;
      }));
  }

  emailMethod(MoObj: any) {
    MoObj.ApplicationId = this.appId;
    MoObj.IsCipher = "0";
    var obj = MoObj;
    var body = JSON.stringify(obj);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, body, { headers })
      .pipe(map((data: any) => {
        return data;
      }));
  }

  OneMethod(MoObj: any) {
    return new Promise(resolve => {
      this.objInnerMethod(MoObj)
        .subscribe(
          (result: unknown) => {
            resolve(result);
          },
          (error: any) => this.errors = error
        );
    });
  }

  TwoMethod(MoObj: any) {
    return new Promise(resolve => {
      this.objOuterMethod(MoObj)
        .subscribe(
          (result: unknown) => {
            resolve(result);
          },
          (error: any) => this.errors = error
        );
    });
  }

  ImageUploader(MoObj: any) {
    MoObj.ApplicationId = this.appId;
    MoObj.IsCipher = "1";
    MoObj.PkSystemUploadDocSetting = "1";
    var obj = MoObj;
    var body = JSON.stringify(obj);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.post(this.baseUrl + '/cipher/UPLOAD', body, { headers })
      .pipe(map((data: any) => {
        return data;
      }));
  }
}

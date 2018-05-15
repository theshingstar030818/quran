import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ChaptersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChaptersProvider {

  chapters: any;

  constructor(
    private http: HttpClient
  ) {
    console.log('Hello ChaptersProvider Provider');
    this.getChapters();
  }

  getChapters(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get('http://staging.quran.com:3000/api/v3/chapters?language=ur') 
        .subscribe(res => {
          this.chapters = res['chapters'];
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

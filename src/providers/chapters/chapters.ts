import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChaptersProvider {

  chapters: any;

  constructor(
    private http: HttpClient
  ) {
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

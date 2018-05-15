import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class VerseProvider {

  allVerses: any;

  constructor(
    public http: HttpClient
  ){
    
  }

  getAllVerses(chapterId: number) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get('http://staging.quran.com:3000/api/v3/chapters/'+chapterId+'/verses?recitation=1&translations=54&language=ur&text_type=words') 
        .subscribe(res => {
          this.allVerses = res['verses'];
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

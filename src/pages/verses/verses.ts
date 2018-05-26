import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { VerseProvider } from '../../providers/verse/verse';

/**
 * Generated class for the VersesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verses',
  templateUrl: 'verses.html',
})
export class VersesPage {

  chapterId: number;
  verses: any;
  pageNumber: number;
  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public verseProvider: VerseProvider,
    public loadingCtrl: LoadingController
  ){
    this.chapterId = navParams.get('chapterId');
    this.verses = [];
     this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }
  
  ionViewDidEnter() {
    this.pageNumber = 1;
    this.loading.present();
    this.verseProvider.getAllVerses(this.chapterId, this.pageNumber)
    .then((data) => {
      this.loading.dismiss();
      this.verses = data['verses'];
      console.log("the verse promise ", this.verses);
      console.log(data);
    }), (error) => { 
      console.error(error);
    }
    
  }

  doInfinite(infiniteScroll) {
    this.pageNumber++;
    this.verseProvider.getAllVerses(this.chapterId, this.pageNumber)
      .then((data) => {
        let temp: any[] = data['verses'];
        for(var i=0; i<temp.length;i++) {
          this.verses.push(temp[i]);
        }
        infiniteScroll.complete();
      }), (error) => { 
        console.error(error);
      }
  }


}

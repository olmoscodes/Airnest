import { Injectable } from '@angular/core';
import { Article } from '../models/article.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(public afs: AngularFirestore) {    
  }

  formData: Article[] = [];

  public getArticles() {
    return this.afs.collection('articles').snapshotChanges();
  }
}

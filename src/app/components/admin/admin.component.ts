import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Article } from 'src/app/models/article.interface';

import { ArticleService } from 'src/app/services/article.service';

export class Hola {
  constructor(
    public title: string,
    public text: string,
    public date: string
  ){

  }

}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  articlesList: Article[] = [];
  
  a:unknown = {};

  constructor(private service: ArticleService, private fireStore: AngularFirestore) {}

  ngOnInit() {
    this.service.getArticles().subscribe(response => {
      this.articlesList = response.map(document => {
        return {
          uid: document.payload.doc.id,
          data: document.payload.doc.data()    
        } as Article;
      })
    
      this.articlesList = this.articlesList.sort((obj1, obj2) => (obj1 as any).rollNo - (obj2 as any).rollNo);
    });
  }
}

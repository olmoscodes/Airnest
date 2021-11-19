import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  article: Article = {
    id: '',
    title: '',
    text: '',
    date: '',
    img: '',
  }

  anotherParagraphTag = '<br><br>'

  editProcessOn: boolean = false;
  editProcessOff: boolean = true;

  publishProcessOn: boolean = false;
  publishProcessOff: boolean = true;

  articlesList: Article[] = [];
  
  constructor(private database: FirestoreService) {}

  ngOnInit() {
    this.showArticles();
  }

  createArticle() {
    const id = this.database.getId();
    this.article.id = id;
    this.database.creatDoc(this.article, 'articles', id).then( () => {
      console.log('test push to firebase database');
    })
  }

  showArticles() {
    this.database.getCollection<Article>('articles').subscribe( (res) => {
      this.articlesList = res;
    })
  }

  deleteArticle(id: string) {
    if(confirm("Are you sure you want to delete this article?")) {
      this.database.deleteDoc('articles', id).then( () => {
        console.log(id + ' deleted');
      })
    }

  }

  updateArticle(id: string) {
    this.database.updateDoc(this.article, 'articles', this.article.id).then( () => {
      console.log(id + ' updated');
    })
    this.desactivateEditProcess ()
  }

  getOneArticle (id: string) {
    this.database.getDoc<Article>('articles', id).subscribe( (res) => {
      this.article.id = res!.id;
      this.article.title = res!.title;
      this.article.text = res!.text;
      this.article.date = res!.date;
      this.article.img = res!.img;
    })
    this.activateEditProcess()
  }

  activateEditProcess () {
    this.editProcessOff = false;
    this.editProcessOn = true;
  }

  desactivateEditProcess () {
    this.editProcessOff = true;
    this.editProcessOn = false;
  }

  cancelEdit(){
    this.editProcessOff = true;
    this.editProcessOn = false;
    this.article.id = ' ';
    this.article.title = ' ';
    this.article.text = ' ';
    this.article.date = ' ';
    this.article.img = ' ';
  }

  clear(){
    this.article.id = ' ';
    this.article.title = ' ';
    this.article.text = ' ';
    this.article.date = ' ';
    this.article.img = ' ';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    img1: '',
    img2: '',
  }

  anotherParagraphTag = '<br><br>'

  editProcessOn: boolean = false;
  editProcessOff: boolean = true;

  publishProcessOn: boolean = false;
  publishProcessOff: boolean = true;

  articlesList: Article[] = [];
  
  constructor(private database: FirestoreService, private router: Router) {}

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
      this.article.img1 = res!.img1;
      this.article.img2 = res!.img2;

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
    this.article.img1 = ' ';
    this.article.img2 = ' ';

  }

  clear(){
    this.article.id = ' ';
    this.article.title = ' ';
    this.article.text = ' ';
    this.article.date = ' ';
    this.article.img1 = ' ';
    this.article.img2 = ' ';
  }

  public logOut():void {
    localStorage.removeItem('token');
    this.router.navigate(['login'])

}
}

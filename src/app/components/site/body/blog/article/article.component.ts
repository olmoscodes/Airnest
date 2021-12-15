import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any;
  id: string = '';

  constructor(private route: ActivatedRoute, private database: FirestoreService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['article']
    this.showArticle();
  }

  showArticle() {
    this.database.getDoc<Article>('articles', this.id).subscribe( (res) => {
      this.article = res;
      console.log(this.article)
    })
  }


}

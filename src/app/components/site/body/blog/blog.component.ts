import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class BlogComponent implements OnInit {

  articlesList: Article[] = [];

  constructor(private database: FirestoreService) { }

  ngOnInit() {

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
  } else {
      localStorage.removeItem('foo')
  }


    gsap.registerPlugin(ScrollTrigger);

    this.showArticles();

  }

  showArticles() {
    this.database.getCollection<Article>('articles').subscribe( (res) => {
      this.articlesList = res;
      console.log(this.articlesList)
    })
  }

}

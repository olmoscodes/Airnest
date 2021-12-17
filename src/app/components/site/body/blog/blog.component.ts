import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
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

    window.onload = function() {
      if (window.matchMedia('(min-width: 400px)').matches) {
        ScrollTrigger.batch('.a', {
          onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.1 }),
          onLeave: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.1 }),
          onEnterBack: (batch) =>
            gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
          onLeaveBack: (batch) =>
            gsap.set(batch, { opacity: 0, overwrite: true }),
        });
      } else {
        ScrollTrigger.batch('.a', {
          onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.1 }),
          onLeave: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.1 }),
          onEnterBack: (batch) =>
            gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
          onLeaveBack: (batch) =>
            gsap.set(batch, { opacity: 0, overwrite: true }),
        });
      }
    }

  }

  showArticles() {
    this.database.getCollection<Article>('articles').subscribe( (res) => {
      this.articlesList = res;
      console.log(this.articlesList)
    })
  }

}

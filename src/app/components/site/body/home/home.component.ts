import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const widgetStart = gsap.timeline()

    widgetStart.fromTo("#search-widget_IO312PWQ", {opacity: 0}, {opacity: 1}, "+=1")

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
        localStorage.removeItem('foo')
    }

    if (window.matchMedia('(min-width: 400px)').matches) {
      const home1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.hm1',
          start: 'top 0%',
          end: '+=1300',
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      home1.fromTo('.hc1', { x: '100vw', pointerEvents: 'auto' }, { x: '-100vw', pointerEvents: 'auto' });
    } 
  }
}

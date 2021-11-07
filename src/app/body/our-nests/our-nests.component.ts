import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-our-nests',
  templateUrl: './our-nests.component.html',
  styleUrls: ['./our-nests.component.css'],
})
export class OurNestsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia('(min-width: 400px)').matches) {
      ScrollTrigger.batch('.pp', {
        onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.1 }),
        onLeave: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.1 }),
        onEnterBack: (batch) =>
          gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, overwrite: true }),
      });
    } else {
      ScrollTrigger.batch('.pp', {
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

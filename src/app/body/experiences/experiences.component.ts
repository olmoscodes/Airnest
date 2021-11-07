import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    gsap.registerPlugin(ScrollTrigger);
  
    if (window.matchMedia("(min-width: 400px)").matches) {
  
      const experiences1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".m1",
          start: "top 0%",
          end: "+=1400",
          pin: true,
          scrub: 1,
          markers: false
        }
      });
  
      experiences1.fromTo(".c1", {x: "100vw"}, {x: "-100vw"})
  
      const experiences2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".m2",
          start: "top 0%",
          end: "+=1800",
          pin: true,
          scrub: 1,
          markers: false
        }
      });
  
      experiences2.fromTo(".c2", {x: "100vw"}, {x: "-100vw"})
      
      const experiences3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".m3",
          start: "top 0%",
          end: "+=2000",
          pin: true,
          scrub: 1,
          markers: false
        }
      });
  
      experiences3.fromTo(".c3", {x: "100vw"}, {x: "-100vw"})
  
    }  else {
  
      const experiences1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".m1",
          start: "top 5px",
          end: "+=1700",
          pin: true,
          scrub: 1,
          markers: false
        }
      });
  
      experiences1.fromTo(".c1", {x: "100vw"}, {x: "-680vw"})
  
      const experiences2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".m2",
          start: "top 5px",
          end: "+=1700",
          pin: true,
          scrub: 1,
          markers: false
        }
      });
  
      experiences2.fromTo(".c2", {x: "100vw"}, {x: "-680vw"})
      
      const experiences3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".m3",
          start: "top 5px",
          end: "+=1700",
          pin: true,
          scrub: 1,
          markers: false
        }
      });
  
      experiences3.fromTo(".c3", {x: "100vw"}, {x: "-480vw"})
    }
  }

}

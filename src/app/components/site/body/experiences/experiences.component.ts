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

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
  } else {
      localStorage.removeItem('foo')
  }

    gsap.registerPlugin(ScrollTrigger);

    const a1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a1',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a1.fromTo('.a1', { opacity: 0 }, { opacity: 1 });


    const a2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a2',
        start: 'bottom 100%',
        end: 'bottom 80%',
        scrub: true,
        markers: false
      },
    });

    a2.fromTo('.a2', { opacity: 0 }, { opacity: 1 });

    const a3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a3',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a3.fromTo('.a3', { opacity: 0 }, { opacity: 1 });

    const a4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a4',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a4.fromTo('.a4', { opacity: 0 }, { opacity: 1 });

    const a5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a5',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a5.fromTo('.a5', { opacity: 0 }, { opacity: 1 });

    const a6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a6',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a6.fromTo('.a6', { opacity: 0 }, { opacity: 1 });
  
    if (window.matchMedia("(min-width: 400px)").matches) {
  
      /*const experiences1 = gsap.timeline({
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
  
      experiences3.fromTo(".c3", {x: "100vw"}, {x: "-100vw"})*/
  
    }  else {
  
      // const experiences1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".m1",
      //     start: "top 5px",
      //     end: "+=1700",
      //     pin: true,
      //     scrub: 1,
      //     markers: false
      //   }
      // });
  
      // experiences1.fromTo(".c1", {x: "100vw"}, {x: "-680vw"})
  
      // const experiences2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".m2",
      //     start: "top 5px",
      //     end: "+=1700",
      //     pin: true,
      //     scrub: 1,
      //     markers: false
      //   }
      // });
  
      // experiences2.fromTo(".c2", {x: "100vw"}, {x: "-680vw"})
      
      // const experiences3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".m3",
      //     start: "top 5px",
      //     end: "+=1700",
      //     pin: true,
      //     scrub: 1,
      //     markers: false
      //   }
      // });
  
      // experiences3.fromTo(".c3", {x: "100vw"}, {x: "-480vw"})
    }
  }

}

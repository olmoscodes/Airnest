import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-remote-working',
  templateUrl: './remote-working.component.html',
  styleUrls: ['./remote-working.component.css']
})
export class RemoteWorkingComponent implements OnInit {

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
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a1.fromTo('.a1', { opacity: 0 }, { opacity: 1 });

    const a2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a2',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a2.fromTo('.a2', { opacity: 0 }, { opacity: 1 });

    const a3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a3',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a3.fromTo('.a3', { opacity: 0 }, { opacity: 1 });

    const a4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a4',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a4.fromTo('.a4', { opacity: 0 }, { opacity: 1 });

    const a5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a5',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a5.fromTo('.a5', { opacity: 0 }, { opacity: 1 });

    const a6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a6',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a6.fromTo('.a6', { opacity: 0 }, { opacity: 1 });

    const a7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a7',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a7.fromTo('.a7', { opacity: 0 }, { opacity: 1 });

    const a8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a8',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a8.fromTo('.a8', { opacity: 0 }, { opacity: 1 });

    const a9 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a9',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a9.fromTo('.a9', { opacity: 0 }, { opacity: 1 });

    const a10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a10',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a10.fromTo('.a10', { opacity: 0 }, { opacity: 1 });

    const a11 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a11',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a11.fromTo('.a11', { opacity: 0 }, { opacity: 1 });

    const a12 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a12',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a12.fromTo('.a12', { opacity: 0 }, { opacity: 1 });

    const a13 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a13',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a13.fromTo('.a13', { opacity: 0 }, { opacity: 1 });

    const a14 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a14',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a14.fromTo('.a14', { opacity: 0 }, { opacity: 1 });

    const a15 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a15',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a15.fromTo('.a15', { opacity: 0 }, { opacity: 1 });

    
  }

}

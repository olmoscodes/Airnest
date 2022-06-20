import { NONE_TYPE } from '@angular/compiler';
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

    const a16 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a16',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a16.fromTo('.a16', { opacity: 0 }, { opacity: 1 });

    const a17 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a17',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a17.fromTo('.a17', { opacity: 0 }, { opacity: 1 });

    const a18 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a18',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a18.fromTo('.a18', { opacity: 0 }, { opacity: 1 });

    const a19 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a19',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a19.fromTo('.a19', { opacity: 0 }, { opacity: 1 });

    const a20 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a20',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a20.fromTo('.a20', { opacity: 0 }, { opacity: 1 });

    const a21 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a21',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a21.fromTo('.a21', { opacity: 0 }, { opacity: 1 });

    const a22 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a22',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a22.fromTo('.a22', { opacity: 0 }, { opacity: 1 });

    const a23 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a23',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a23.fromTo('.a23', { opacity: 0 }, { opacity: 1 });

    const a24 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a24',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a24.fromTo('.a24', { opacity: 0 }, { opacity: 1 });

    const a25 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a25',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a25.fromTo('.a25', { opacity: 0 }, { opacity: 1 });

    const a26 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a26',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a26.fromTo('.a26', { opacity: 0 }, { opacity: 1 });

    const a27 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a27',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
        markers: false
      },
    });

    a27.fromTo('.a27', { opacity: 0 }, { opacity: 1 });
    
    const widgetStart = gsap.timeline()
    
    widgetStart.fromTo(".header-content", {opacity: 0}, {opacity: 1}, "+=1")
    .fromTo("#search-widget_IO312PWQ", {opacity: 0}, {opacity: 1}, "+=0.1")

    const cookies = gsap.timeline()

    cookies.fromTo(".cookies", {pointerEvents: "none", opacity: 0}, {pointerEvents: "auto", opacity: 1}, "+=2")

    const closeCookies = document.getElementById('closeCookies')!;

    closeCookies.addEventListener("click", function() {
      cookies.reverse();
    })

    // const popUp = gsap.timeline()
    
    // popUp.fromTo(".pop-up-background", {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'auto'}, "+=5")
    // .fromTo(".pop-up", {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'auto'}, "-=.5")
    // .fromTo(".pop-up", {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'auto'}, "-=.5")

    // const crosPop = document.getElementById('crossPop')!;

    // crosPop.addEventListener("click", function() {
    //   popUp.reverse();
    // });

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
        localStorage.removeItem('foo')
    }

    if (window.matchMedia('(min-width: 400px)').matches) {
      gsap.set('.wrapper',{xPercent:-50,yPercent:-50})

      var boxWidth = 400 + 8 * 5,
          totalWidth = boxWidth * 8,  // * n of boxes + diff textBox + (n of boxes * margin right)
          time = 60,
          no01 = document.querySelectorAll("#no01 .boxC"),
          dirFromLeft = "+=" + totalWidth,
          dirFromRight = "-=" + totalWidth;
  
      var mod = gsap.utils.wrap(0, totalWidth);
  
      gsap.set(no01, {
        x:function(i) {
          return i * boxWidth;
        }
      });
  
      var action = gsap.timeline()
      .to(no01,  {
        x: dirFromRight,
        modifiers: {
          x: x => mod(parseFloat(x)) + "px"
        },
        duration:time, ease:'none',
        repeat:-1,
      });
  
      Array.from(document.getElementsByClassName('boxC')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action.pause()
        }, false)
      });
  
      Array.from(document.getElementsByClassName('play')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action.play()
        }, false)
      });
  
    }
  
    } 




  
}

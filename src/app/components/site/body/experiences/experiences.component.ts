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
  
    if (window.matchMedia("(min-width: 400px)").matches) {
  
      gsap.set('.w1',{xPercent:-50,yPercent:-50})


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
  
      var action1 = gsap.timeline()
      .to(no01,  {
        x: dirFromRight,
        modifiers: {
          x: x => mod(parseFloat(x)) + "px"
        },
        duration:time, ease:'none',
        repeat:-1,
      });
  
      Array.from(document.getElementsByClassName('exp-1')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action1.pause()
          console.log('pause')
        }, false)
      });
  
      Array.from(document.getElementsByClassName('explay1')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action1.play()
        }, false)
      });
  
  
      gsap.set('.w2',{xPercent:-50,yPercent:-50})
  
  
      var boxWidth = 400 + 8 * 5,
          totalWidth = boxWidth * 8,  // * n of boxes + diff textBox + (n of boxes * margin right)
          time = 60,
          no01 = document.querySelectorAll("#no02 .boxC"),
          dirFromLeft = "+=" + totalWidth,
          dirFromRight = "-=" + totalWidth;
  
      var mod = gsap.utils.wrap(0, totalWidth);
  
      gsap.set(no01, {
        x:function(i) {
          return i * boxWidth;
        }
      });
  
      var action2 = gsap.timeline()
      .to(no01,  {
        x: dirFromRight,
        modifiers: {
          x: x => mod(parseFloat(x)) + "px"
        },
        duration:time, ease:'none',
        repeat:-1,
      });
  
      Array.from(document.getElementsByClassName('exp-2')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action2.pause()
          console.log('pause')
        }, false)
      });
  
      Array.from(document.getElementsByClassName('explay2')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action2.play()
        }, false)
      });
  
  
      gsap.set('.w3',{xPercent:-50,yPercent:-50})
  
  
      var boxWidth3 = 400 + 6 * 5,
          totalWidth3 = boxWidth3 * 6,  // * n of boxes + diff textBox + (n of boxes * margin right)
          time3 = 40,
          no03 = document.querySelectorAll("#no03 .boxC"),
          dirFromLeft = "+=" + totalWidth3,
          dirFromRight3 = "-=" + totalWidth3;
  
      var mod3 = gsap.utils.wrap(0, totalWidth3);
  
      gsap.set(no03, {
        x:function(i) {
          return i * boxWidth3;
        }
      });
  
      var action3 = gsap.timeline()
      .to(no03,  {
        x: dirFromRight3,
        modifiers: {
          x: x => mod3(parseFloat(x)) + "px"
        },
        duration:time3, ease:'none',
        repeat:-1,
      });
  
      Array.from(document.getElementsByClassName('exp-3')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action3.pause()
          console.log('pause')
        }, false)
      });
  
      Array.from(document.getElementsByClassName('explay3')).forEach(element => {
        element.addEventListener('mouseenter', function() {
          action3.play()
        }, false)
      });
    
    }  
  }

}

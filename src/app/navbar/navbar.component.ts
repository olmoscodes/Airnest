import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    gsap.registerPlugin(ScrollTrigger);
  
    const navbarHideTL = gsap.timeline({paused: true})
      
    navbarHideTL.to("#nav", {y: -100})
    
    let hamOpen = document.getElementById("ham-open")!;
    let hamClose = document.getElementById("ham-close")!;
  
    const navbarShowTL = gsap.timeline({paused: true})
  
    navbarShowTL.fromTo(".hamburguer-nav", {opacity: 0, y: -200}, { opacity: 1, y: 0})
    .to("#ham-line-1-nav", {rotation: "45", y: 8}, "-=0.5")
    .to("#ham-line-2-nav", {opacity: 0}, "-=0.5")
    .to("#ham-line-3-nav", {rotation: "-45", y: -8}, "-=0.5")
  
    hamOpen.addEventListener("click", function () {
      console.log("nav opened");
      hamOpen.style.pointerEvents= "none";
      hamClose.style.pointerEvents= "inherit";
      hamOpen.style.opacity = "0";
      hamOpen.style.opacity = "1";
      navbarShowTL.play();
    }, false);
  
    hamClose.addEventListener("click", function () {
      console.log("nav closed");
      hamOpen.style.pointerEvents= "inherit";
      hamClose.style.pointerEvents= "none";
      hamOpen.style.opacity = "1";
      hamOpen.style.opacity = "0";
      navbarShowTL.reverse();
    }, false);
  
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos > 176) {
              if (prevScrollpos > currentScrollPos) {
            navbarHideTL.reverse();		
            } else {
                navbarHideTL.play();
            }
        }
        prevScrollpos = currentScrollPos;
      }
    
    const navbarTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger',
        start: 'bottom 50%',
        end: 'bottom 40%',
        scrub: true,
        markers: false
      },
    });
    
    navbarTL.fromTo( '#nav', { background: 'transparent' }, { backgroundColor: 'white' })
    .to(".nav-button", {color: "#2D2D2D"}, "-=0.5")
    .fromTo(".airnest-logo-white", {opacity: 1}, {opacity: 0}, "-=0.5")
    .fromTo(".airnest-logo-black", {opacity: 0}, {opacity: 1}, "-=0.5")
    .fromTo(".livebox", {backgroundColor: 'transparent'}, {backgroundColor: 'white'}, "-=0.5")
    
  
  }

}

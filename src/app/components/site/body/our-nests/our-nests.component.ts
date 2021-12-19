import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class Nest {
  constructor(
    public id: number,
    public link: string,
    public name: string,
    public description: string,
    public guests: number,
    public rooms: number,
    public href: string
  ){

  }
}

@Component({
  selector: 'app-our-nests',
  templateUrl: './our-nests.component.html',
  styleUrls: ['./our-nests.component.css'],
})
export class OurNestsComponent implements OnInit {

  GranCanariaTitle = 'Gran Canaria'
  Lanzarote = 'Lanzarote'
  LaGraciosa = 'La Graciosa'

  Nests = [
    new Nest(1,'Lomo-Quiebre', 'Lomo Quiebre | Gran Canaria', 'Cozy apartment in the heart of Puerto de Mogan', 3, 1, 'https://ournests.airnest.es/listings/6063963b5301ad002f8a49e8' ),
    //new Nest(2,'Taoyo-Suites-I', 'Taoyo Suites I | Gran Canaria', 'Apartment located in the historical town of Las Palmas', 4, 1, 'https://ournests.airnest.es/listings/603ab94ab1c122002e83eaf7'),
    new Nest(3,'Las-Canteras-I', 'Las Canteras I | Gran Canaria', 'Beachfront apartment in Las Canteras', 4, 1, 'https://ournests.airnest.es/listings/5eea21689e4410002dfa5b8b'),
    new Nest(4,'Las-Canteras-II', 'Las Canteras II | Gran Canaria', 'Beachside apartment with lateral sea view', 6, 2, 'https://ournests.airnest.es/listings/5f1310396b86b4002ca39323'),
    //new Nest(5,'Lagos-Villa-I', 'Lagos-Villa I | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2, 'https://ournests.airnest.es/listings/5eea214ba1f3a10029b8eb6c'),
    new Nest(6,'Las-Palmas-City-Center', 'Las Palmas City Center | Gran Canaria', 'Brand new apartment in Las Palmas city center', 2, 1, 'https://ournests.airnest.es/listings/5eea213a9e4410002dfa54be'),
    new Nest(7,'Patalavaca-Apartment-I', 'Patalavaca Apartment I | Gran Canaria', 'Glass apartment with ocean views', 3, 2, 'https://ournests.airnest.es/listings/5fd50333387fe30032d18df1'),
    new Nest(8,'Patalavaca-Apartment-II', 'Patalavaca Apartment II | Gran Canaria', 'Glass apartment with ocean views', 3, 2, 'https://ournests.airnest.es/listings/5fe0df09377861002ea7d2a0'),
    new Nest(9,'Patalavaca-Apartment-III', 'Patalavaca Apartment III | Gran Canaria', 'Glass apartment with sunset and ocean views', 3, 2, 'https://ournests.airnest.es/listings/5fd8f25e24b300002db30c23'),
    new Nest(10,'Puerto-Rico-I', 'Puerto Rico I | Gran Canaria', 'Apartment in Puerto Rico with ocean views and a large terrace', 4, 2, 'https://ournests.airnest.es/listings/5fddcfc3ea5d19002ff2f240'),
    new Nest(11,'Las-Canteras-III', 'Las Canteras III | Gran Canaria', 'Beachfront apartment in Las Canteras', 4, 1,'https://ournests.airnest.es/listings/5eea219041105c002c92bb59'),
    new Nest(12,'Taoyo-Suites-II', 'Taoyo Suites II | Gran  Canaria', 'New apartment located in the historical town of Las Palmas', 4, 1,'https://ournests.airnest.es/listings/603a7ac1fe44f4002e8fc3d7'),
    new Nest(13,'Triana-Suites', 'Urban Suites | Gran  Canaria', 'Deluxe double suite with a beautiful balcony', 2, 1,'https://urbansuites.airnest.es/listings'),
    new Nest(15,'Casa-San-Marcial', 'Casa San Marcial | Gran Canaria', 'Cozy apartment in historical Vegueta House', 1, 4,'https://sanmarcial.airnest.es/listings'),
    new Nest(22,'Dreamscape', 'Dreamscape | Lanzarote', "Exclusive villa in Lanzarote's southeast shore", 10, 5,'https://ournests.airnest.es/listings/604a1a33c32e8f0030ddd326'),
    new Nest(23,'Selva-Doramas', 'Selva Doramas | Gran Canaria', 'Eco-villa in the beautiful Laurisilva forests', 6, 4,'https://ournests.airnest.es/listings/6011b7a2e9cb99002e50f2f0'),
    new Nest(24,'Puerto-Rico-II', 'Puerto Rico II | Gran Canaria', 'Apartment with a huge sunset terrace and ocean views', 4, 2,'https://ournests.airnest.es/listings/5fedfbcfcd2219003083a4b0'),
    new Nest(25,'Las-Casas-de-Maspalomas', 'Las Casas de Maspalomas | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2,'https://lascasas.airnest.es/listings'),
    new Nest(30,'Las-Lomas', 'Las Lomas | Gran Canaria', 'Beachside apartment in Las Lomas', 5, 2,'https://ournests.airnest.es/listings/60d990b6a131a30030d12716'),
    new Nest(32,'Taoyo-Suites-III', 'Taoyo Suites III | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1,'https://ournests.airnest.es/listings/603a7b47b1c122002e7d23fe'),
    new Nest(33,'Las-Nieves', 'Las Nieves | Gran Canaria', 'Casa De Las Nieves is a modern architectural marvel', 8, 3,'https://ournests.airnest.es/listings/61088dbaeb4495002f23ffb5'),
    new Nest(34,'Puerto-de-Mogan', 'Puerto de Mogan | Gran Canaria', 'Right by the seafront of Puerto de Mogan vibrant marina', 4, 2,'https://ournests.airnest.es/listings/5eea215a41105c002c92b6f3'),
    new Nest(35,'Patalavaca-IV', 'Patalavaca IV | Gran Canaria', 'Glass apartment with ocean views', 2, 1,'https://ournests.airnest.es/listings/5fedf5a52314f3002c184602'),
    new Nest(38,'Seaside-Villa', 'Seaside Villa | La Graciosa', 'Beautiful rural house in a remote little village', 8, 4,'https://ournests.airnest.es/listings/5eea21ada1f3a10029b8f605'),
    new Nest(41,'Quality-Design-Home', 'Quality Design Home | Gran Canaria', 'Designed and furbished to the highest Japanese standards', 4, 2,'https://ournests.airnest.es/listings/5eea21f39e4410002dfa682e'),
    new Nest(42,'Traditional-Townhouse', 'Traditional Townhouse | Gran Canaria', 'Between a traditional Canarian house and a Brooklyn loft', 4, 2,'https://ournests.airnest.es/listings/60f017ca02f603002f9a188f'),
    new Nest(43,'Lagos-Villa-II', 'Lagos Villa II | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2,'https://ournests.airnest.es/listings/5eea2172533079002a70349d'),
    new Nest(44,'Lagos-Villa-III', 'Lagos Villa III | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2,'https://ournests.airnest.es/listings/5eea2194a1f3a10029b8f1c9'),
    new Nest(45,'Lagos-Villa-IV', 'Lagos Villa IV | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2,'https://ournests.airnest.es/listings/5eea21439e4410002dfa5734'),
    new Nest(46,'Taoyo-Suites-IV', 'Taoyo Suites IV | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1,'https://ournests.airnest.es/listings/603ab93e71ed9c002f064cd5'),
    new Nest(47,'Taoyo-Suites-V', 'Taoyo Suites V | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1,'https://ournests.airnest.es/listings/603ab95671ed9c002f0653b3'),
    new Nest(49,'Maspalomas-Apartment', 'Maspalomas Apartment | Gran Canaria', 'Seaside studio with sunset views', 4, 0,'https://ournests.airnest.es/listings/60d0fd752f51870030eacef3'),
    new Nest(50,'Taoyo-Suites-VI', 'Taoyo Suites VI | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1,'https://ournests.airnest.es/listings/603a789f47160c002d73fdff'),
  ]

  constructor(private router: Router) {}

  ngOnInit(): void {
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
        end: 'bottom 50%',
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

    const a7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a7',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a7.fromTo('.a7', { opacity: 0 }, { opacity: 1 });

    const a8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a8',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });


    a8.fromTo('.a8', { opacity: 0 }, { opacity: 1 });

    const a9 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a9',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a9.fromTo('.a9', { opacity: 0 }, { opacity: 1 });


    const a10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.a10',
        start: 'bottom 100%',
        end: 'bottom 50%',
        scrub: true,
        markers: false
      },
    });

    a10.fromTo('.a10', { opacity: 0 }, { opacity: 1 });

    if (!localStorage.getItem('foo')) {
        localStorage.setItem('foo', 'no reload')
        location.reload()
    } else {
        localStorage.removeItem('foo')
    }
    

    window.onload = function() {
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
}

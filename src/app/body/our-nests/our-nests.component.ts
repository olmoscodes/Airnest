import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class Nest {
  constructor(
    public id: number,
    public link: string,
    public name: string,
    public description: string,
    public guests: number,
    public rooms: number
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
    new Nest(1,'Lomo-Quiebre', 'Lomo Quiebre | Gran Canaria', 'Cozy apartment in the heart of Puerto de Mogan', 3, 1 ),
    new Nest(2,'Taoyo-Suites-I', 'Taoyo Suites I | Gran Canaria', 'Apartment located in the historical town of Las Palmas', 4, 1),
    new Nest(3,'Las-Canteras-I', 'Las Canteras I | Gran Canaria', 'Beachfront apartment in Las Canteras', 4, 1),
    new Nest(4,'Las-Canteras-II', 'Las Canteras II | Gran Canaria', 'Beachside apartment with lateral sea view', 6, 2),
    new Nest(5,'Lagos-Villa-I', 'Lagos-Villa I | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(6,'Las-Palmas-City-Center', 'Las Palmas City Center | Gran Canaria', 'Brand new apartment in Las Palmas city center', 2, 1),
    new Nest(7,'Patalavaca-Apartment-I', 'Patalavaca Apartment I | Gran Canaria', 'Glass apartment with ocean views', 3, 2),
    new Nest(8,'htPatalavaca-Apartment-II', 'Patalavaca Apartment II | Gran Canaria', 'Glass apartment with ocean views', 3, 2),
    new Nest(9,'Patalavaca-Apartment-III', 'Patalavaca Apartment III | Gran Canaria', 'Glass apartment with sunset and ocean views', 3, 2),
    new Nest(10,'Puerto-Rico-I', 'Puerto Rico I | Gran Canaria', 'Apartment in Puerto Rico with ocean views and a large terrace', 4, 2),
    new Nest(11,'Las-Canteras-III', 'Las Canteras III | Gran Canaria', 'Beachfront apartment in Las Canteras', 4, 1),
    new Nest(12,'Taoyo-Suites-II', 'Taoyo Suites II | Gran  Canaria', 'New apartment located in the historical town of Las Palmas', 4, 1),
    new Nest(13,'Triana-Suites', 'Triana Suites | Gran  Canaria', 'Deluxe double suite with a beautiful balcony', 2, 1),
    new Nest(15,'Casa-San-Marcial', 'Casa San Marcial | Gran Canaria', 'Cozy apartment in historical Vegueta House', 1, 4),
    new Nest(22,'Dreamscape', 'Dreamscape | Lanzarote', "Exclusive villa in Lanzarote's southeast shore", 10, 5),
    new Nest(23,'Selva-Doramas', 'Selva Doramas | Gran Canaria', 'Eco-villa in the beautiful Laurisilva forests', 6, 4),
    new Nest(24,'Puerto-Rico-II', 'Puerto Rico II | Gran Canaria', 'Apartment with a huge sunset terrace and ocean views', 4, 2),
    new Nest(25,'Las-Casas-de-Maspalomas', 'Las Casas de Maspalomas | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2),
    new Nest(30,'Las-Lomas', 'Las Lomas | Gran Canaria', 'Beachside apartment in Las Lomas', 5, 2),
    new Nest(32,'Taoyo-Suites-III', 'Taoyo Suites III | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
    new Nest(33,'Las-Nieves', 'Las Nieves | Gran Canaria', 'Casa De Las Nieves is a modern architectural marvel', 8, 3),
    new Nest(34,'Puerto-de-Mogan', 'Puerto de Mogan | Gran Canaria', 'Right by the seafront of Puerto de Mogan vibrant marina', 4, 2),
    new Nest(35,'Patalavaca-IV', 'Patalavaca IV | Gran Canaria', 'Glass apartment with ocean views', 2, 1),
    new Nest(38,'Seaside-Villa', 'Seaside Villa | La Graciosa', 'Beautiful rural house in a remote little village', 8, 4),
    new Nest(39,'Triana-Suites-IX', 'Triana Suites IX | Gran Canaria', 'Small suite with private bathroom', 2, 1),
    new Nest(41,'Quality-Design-Home', 'Quality Design Home | Gran Canaria', 'Designed and furbished to the highest Japanese standards', 4, 2),
    new Nest(42,'Traditional-Townhouse', 'Traditional Townhouse | Gran Canaria', 'Between a traditional Canarian house and a Brooklyn loft', 4, 2),
    new Nest(43,'Lagos-Villa-II', 'Lagos Villa II | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(44,'Lagos-Villa-III', 'Lagos Villa III | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(45,'Lagos-Villa-IV', 'Lagos Villa IV | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(46,'Taoyo-Suites-IV', 'Taoyo Suites IV | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
    new Nest(47,'Taoyo-Suites-', 'Taoyo Suites V | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
    new Nest(49,'Maspalomas-Apartment', 'Maspalomas Apartment | Gran Canaria', 'Seaside studio with sunset views', 4, 0),
    new Nest(50,'Taoyo-Suites-VI', 'Taoyo Suites VI | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
  ]

  constructor() {
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

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

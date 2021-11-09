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

  Nests = [
    new Nest(1,'https://airnest.guestybookings.com/listings/6063963b5301ad002f8a49e8', 'Lomo Quiebre | Gran Canaria', 'Cozy apartment in the heart of Puerto de Mogan', 3, 1 ),
    new Nest(2,'https://airnest.guestybookings.com/listings/603ab94ab1c122002e83eaf7', 'Taoyo Suites I | Gran Canaria', 'Apartment located in the historical town of Las Palmas', 4, 1),
    new Nest(3,'https://airnest.guestybookings.com/listings/5eea21689e4410002dfa5b8b', 'Las Canteras I | Gran Canaria', 'Beachfront apartment in Las Canteras', 4, 1),
    new Nest(4,'https://airnest.guestybookings.com/listings/5f1310396b86b4002ca39323', 'Las Canteras II | Gran Canaria', 'Beachside apartment with lateral sea view', 6, 2),
    new Nest(5,'https://airnest.guestybookings.com/listings/5eea214baaf3a10029b8eb6c', 'Lagos Villa I | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(6,'https://airnest.guestybookings.com/listings/5eea213a9e4410002dfa54be', 'Las Palmas City Center | Gran Canaria', 'Brand new apartment in Las Palmas city center', 2, 1),
    new Nest(7,'https://airnest.guestybookings.com/listings/5fd50333387fe30032d18df1', 'Patalavaca Apartment I | Gran Canaria', 'Glass apartment with ocean views', 3, 2),
    new Nest(8,'https://airnest.guestybookings.com/listings/5fe0df09377861002ea7d2a0', 'Patalavaca Apartment II | Gran Canaria', 'Glass apartment with ocean views', 3, 2),
    new Nest(9,'https://airnest.guestybookings.com/listings/5fd8f25e24b300002db30c23', 'Patalavaca Apartment III | Gran Canaria', 'Glass apartment with sunset and ocean views', 3, 2),
    new Nest(10,'https://airnest.guestybookings.com/listings/5fddcfc3ea5d19002ff2f240', 'Puerto Rico I | Gran Canaria', 'Apartment in Puerto Rico with ocean views and a large terrace', 4, 2),
    new Nest(11,'https://airnest.guestybookings.com/listings/5eea219041105c002c92bb59', 'Las Canteras III | Gran Canaria', 'Beachfront apartment in Las Canteras', 4, 1),
    new Nest(12,'https://airnest.guestybookings.com/listings/603a7ac1fe44f4002e8fc3d7', 'Taoyo Suites II | Gran  Canaria', 'New apartment located in the historical town of Las Palmas', 4, 1),
    new Nest(13,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5ec', 'Triana Suites I | Gran  Canaria', 'Deluxe double suite with a beautiful balcony', 2, 1),
    new Nest(14,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5e5', 'Triana Suites II | Gran Canaria', 'Deluxe double suite  with a beautiful balcony', 2, 1),
    new Nest(15,'https://airnest.guestybookings.com/listings/615ce7aeb448e7002d2f935e', 'Don Pepe | Gran Canaria', 'Cozy apartment in historical Vegueta House', 1, 4),
    new Nest(16,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5d0', 'Triana Suites III | Gran Canaria', 'Double suite with  private bathroom and no window', 2, 1),
    new Nest(17,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5c9', 'Triana Suites IV | Gran Canaria', 'Double suite with private bathroom and no window', 2, 1),
    new Nest(18,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5d7', 'Triana Suites V | Gran Canaria', 'Double suite with private bathroom and no window', 2, 1),
    new Nest(19,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5c2', 'Triana Suites VI | Gran Canaria', 'Double suite with private bathroom and no window', 2, 1),
    new Nest(20,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5de', 'Triana Suites VII | Gran Canaria', 'Double suite with private bathroom and no window', 2, 1),
    new Nest(21,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5fa', 'Triana Suites VIII | Gran Canaria', 'Double suite with desk space and a private bathroom', 2, 1),
    new Nest(22,'https://airnest.guestybookings.com/listings/604a1a33c32e8f0030ddd326', 'Dreamscape | Lanzarote', "Exclusive villa in Lanzarote's southeast shore", 10, 5),
    new Nest(23,'https://airnest.guestybookings.com/listings/6011b7a2e9cb99002e50f2f0', 'Selva Doramas | Gran Canaria', 'Eco-villa in the beautiful Laurisilva forests', 6, 4),
    new Nest(24,'https://airnest.guestybookings.com/listings/5fedfbcfcd2219003083a4b0', 'Puerto Rico II | Gran Canaria', 'Apartment with a huge sunset terrace and ocean views', 4, 2),
    new Nest(25,'https://airnest.guestybookings.com/listings/60c745a79b6fff002d6f1edd', 'Las Casas de Maspalomas I | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2),
    new Nest(26,'https://airnest.guestybookings.com/listings/60c745a79b6fff002d6f1ee4', 'Las Casas de Maspalomas II | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2),
    new Nest(27,'https://airnest.guestybookings.com/listings/60c746728d80d1002f6f0ad1', 'Las Casas de Maspalomas III | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2),
    new Nest(28,'https://airnest.guestybookings.com/listings/60c746728d80d1002f6f0ad8', 'Las Casas de Maspalomas IV | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2),
    new Nest(29,'https://airnest.guestybookings.com/listings/60c8c8301d9780002e9aa9df', 'Las Casas de Maspalomas V | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2),
    new Nest(30,'https://airnest.guestybookings.com/listings/60d990b6aa31a30030d12716', 'Las Lomas | Gran Canaria', 'Beachside apartment in Las Lomas', 5, 2),
    new Nest(31,'https://airnest.guestybookings.com/listings/615cebe7574711002ef72fb4', 'Lopez | Gran Canaria', 'Beautiful studio in Historic House by the Cathedral', 3, 1),
    new Nest(32,'https://airnest.guestybookings.com/listings/603a7b47b1c122002e7d23fe', 'Taoyo Suites III | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
    new Nest(33,'https://airnest.guestybookings.com/listings/61088dbaeb4495002f23ffb5', 'Las Nieves | Gran Canaria', 'Casa De Las Nieves is a modern architectural marvel', 8, 3),
    new Nest(34,'https://airnest.guestybookings.com/listings/5eea215a41105c002c92b6f3', 'Puerto de Mogan | Gran Canaria', 'Right by the seafront of Puerto de Mogan vibrant marina', 4, 2),
    new Nest(35,'https://airnest.guestybookings.com/listings/5fedf5a52314f3002c184602', 'Patalavaca IV | Gran Canaria', 'Glass apartment with ocean views', 2, 1),
    new Nest(36,'https://airnest.guestybookings.com/listings/615d79ce15a7a90030aebd31', 'Pepita | Gran Canaria', 'Classical apartment in historical Vegueta House', 6, 3),
    new Nest(37,'https://airnest.guestybookings.com/listings/60c745a79b6fff002d6f1ed6', 'Las Casas de Maspalomas VI | Gran Canaria', 'Beautiful apartment in Maspalomas', 5, 2),
    new Nest(38,'https://airnest.guestybookings.com/listings/5eea21adaaf3a10029b8f605', 'Seaside Villa | La Graciosa', 'Beautiful rural house in a remote little village', 8, 4),
    new Nest(39,'https://airnest.guestybookings.com/listings/6030e4e347363a003073e5f3', 'Triana Suites IX | Gran Canaria', 'Small suite with private bathroom', 2, 1),
    new Nest(40,'https://airnest.guestybookings.com/listings/615ec95ea3742d002cb503b2', 'Tatiana | Gran Canaria', 'Traditional studio in historical Vegueta House', 2, 1),
    new Nest(41,'https://airnest.guestybookings.com/listings/5eea21f39e4410002dfa682e', 'Quality Design Home | Gran Canaria', 'Designed and furbished to the highest Japanese standards', 4, 2),
    new Nest(42,'https://airnest.guestybookings.com/listings/60f017ca02f603002f9a188f', 'Traditional Townhouse | Gran Canaria', 'Between a traditional Canarian house and a Brooklyn loft', 4, 2),
    new Nest(43,'https://airnest.guestybookings.com/listings/5eea2172533079002a70349d', 'Lagos Villa II | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(44,'https://airnest.guestybookings.com/listings/5eea2194aaf3a10029b8f1c9', 'Lagos Villa III | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(45,'https://airnest.guestybookings.com/listings/5eea21439e4410002dfa5734', 'Lagos Villa IV | Gran Canaria', 'Beautiful modern Villa in 5 stars Golf Resort', 5, 2),
    new Nest(46,'https://airnest.guestybookings.com/listings/603ab93e71ed9c002f064cd5', 'Taoyo Suites IV | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
    new Nest(47,'https://airnest.guestybookings.com/listings/603ab95671ed9c002f0653b3', 'Taoyo Suites V | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
    new Nest(48,'https://airnest.guestybookings.com/listings/615ce986574711002ef715e5', 'Vegueta House | Gran Canaria', 'Cozy studio in historical Vegueta House', 2, 1),
    new Nest(49,'https://airnest.guestybookings.com/listings/60d0fd752f51870030eacef3', 'Maspalomas Apartment | Gran Canaria', 'Seaside studio with sunset views', 4, 0),
    new Nest(50,'https://airnest.guestybookings.com/listings/603a789f47160c002d73fdff', 'Taoyo Suites VI | Gran Canaria', 'New apartment located in the historical town of Las Palmas', 3, 1),
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

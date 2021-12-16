import { Pipe, Component, OnInit, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

export class Link {
  constructor(
      public link: string,
      public route: string
  ){

  }
}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-nest',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.css']
})
export class NestComponent implements OnInit {

  link = '';
  url = '';

  Links = [
    new Link('https://ournests.airnest.es/listings/6063963b5301ad002f8a49e8', 'Lomo-Quiebre'),
    new Link('https://ournests.airnest.es/listings/603ab94ab1c122002e83eaf7', 'Taoyo-Suites-I'),
    new Link('https://ournests.airnest.es/listings/5eea21689e4410002dfa5b8b', 'Las-Canteras-I'),
    new Link('https://ournests.airnest.es/listings/5f1310396b86b4002ca39323', 'Las-Canteras-II'),
    new Link('https://ournests.airnest.es/listings/5eea214baaf3a10029b8eb6c', 'Lagos-Villa-I'),
    new Link('https://ournests.airnest.es/listings/5eea213a9e4410002dfa54be', 'Las-Palmas-City-Center'),
    new Link('https://ournests.airnest.es/listings/5fd50333387fe30032d18df1', 'Patalavaca-Apartment-I'),
    new Link('https://ournests.airnest.es/listings/5fe0df09377861002ea7d2a0', 'Patalavaca-Apartment-II'),
    new Link('https://ournests.airnest.es/listings/5fd8f25e24b300002db30c23', 'Patalavaca-Apartment-III'),
    new Link('https://ournests.airnest.es/listings/5fddcfc3ea5d19002ff2f240', 'Puerto-Rico-I'),
    new Link('https://ournests.airnest.es/listings/5eea219041105c002c92bb59', 'Las-Canteras-III'),
    new Link('https://ournests.airnest.es/listings/603a7ac1fe44f4002e8fc3d7', 'Taoyo-Suites-II'),
    new Link('https://urbansuites.guestybookings.com/listings', 'Triana-Suites'),
    new Link('https://sanmarcial.guestybookings.com/listings', 'Casa-San-Marcial'),
    new Link('https://ournests.airnest.es/listings/604a1a33c32e8f0030ddd326', 'Dreamscape'),
    new Link('https://ournests.airnest.es/listings/6011b7a2e9cb99002e50f2f0', 'Selva-Doramas'),
    new Link('https://ournests.airnest.es/listings/5fedfbcfcd2219003083a4b0', 'Puerto-Rico-II'),
    new Link('https://lascasas.guestybookings.com/listings', 'Las-Casas-de-Maspalomas'),
    new Link('https://ournests.airnest.es/listings/60d990b6aa31a30030d12716', 'Las-Lomas'),
    new Link('https://ournests.airnest.es/listings/603a7b47b1c122002e7d23fe', 'Taoyo-Suites-III'),
    new Link('https://ournests.airnest.es/listings/61088dbaeb4495002f23ffb5', 'Las-Nieves'),
    new Link('https://ournests.airnest.es/listings/5eea215a41105c002c92b6f3', 'Puerto-de-Mogan'),
    new Link('https://ournests.airnest.es/listings/5fedf5a52314f3002c184602', 'Patalavaca-IV'),
    new Link('https://ournests.airnest.es/listings/5eea21adaaf3a10029b8f605', 'Seaside-Villa'),
    new Link('https://ournests.airnest.es/listings/5eea21f39e4410002dfa682e', 'Quality-Design-Home'),
    new Link('https://ournests.airnest.es/listings/60f017ca02f603002f9a188f', 'Traditional-Townhouse'),
    new Link('https://ournests.airnest.es/listings/5eea2172533079002a70349d', 'Lagos-Villa-II'),
    new Link('https://ournests.airnest.es/listings/5eea2194aaf3a10029b8f1c9', 'Lagos-Villa-III'),
    new Link('https://ournests.airnest.es/listings/5eea21439e4410002dfa5734', 'Lagos-Villa-IV'),
    new Link('https://ournests.airnest.es/listings/603ab93e71ed9c002f064cd5', 'Taoyo-Suites-IV'),
    new Link('https://ournests.airnest.es/listings/603ab95671ed9c002f0653b3', 'Taoyo-Suites-V'),
    new Link('https://ournests.airnest.es/listings/60d0fd752f51870030eacef3', 'Maspalomas-Apartment'),
    new Link('https://ournests.airnest.es/listings/603a789f47160c002d73fdff', 'Taoyo-Suites-VI'),

  ]


  constructor(private route:ActivatedRoute, private sanitizer: DomSanitizer) {
   

   }

  ngOnInit(): void {
    this.link = this.route.snapshot.params['link'];

    this.Links.forEach(element => {
      if (element.route === this.link) {
        this.url = element.link
      }
    });


  }

}

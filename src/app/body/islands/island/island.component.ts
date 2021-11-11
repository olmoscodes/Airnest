import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class IslandContent {
  constructor(
    public headerTitle: string,
    public headerSubtitle: string,
    public module3Title: string,
    public module3TitleSpan: string,
    public module3BodyCopy1: string,
    public module3BodyCopy2: string,
    public module4Title: string,
    public module4TitleSpan: string,
    public module4BodyCopy1: string,
    public module4BodyCopy2: string,
  ) {

  }
}

export class Island {
  constructor(
    public island: string,
    public islandContent: IslandContent
  ) {

  }
}

@Component({
  selector: 'app-island',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.css']
})
export class IslandComponent implements OnInit {

  islandsList = ['lanzarote', 'grancanaria', 'tenerife', 'fuerteventura', 'lapalma', 'lagomera', 'elhierro', 'lagraciosa' ]
  islandsCounter = 0
  islandName = ''

  island:Island = new Island('', new IslandContent('','','','','','','','','',''))

  Islands = [
    new Island('lanzarote',
      new IslandContent('Lanzarote.',
        'The one that feels like Mars.',
        'Where art meets ',
        'nature.',
        'Aside from its signature volcanic scenery, this Mars-like island is remarkably diverse. Beautiful white beaches, lush palm groves, and hidden coves are some of its numerous treasures.',
        'If you look closely, you will notice the magical touch of its most influential artist, César Manrique, whose work aimed to find a balance between art and nature, and whose legacy has helped develop the island in a sustainable and harmonious way.',
        'A trip to another ',
        'planet.',
        'Lanzarote is by far one of the most unique places within the eight-island archipelago. A wild wonderland of beautiful brown and gold colors that blend perfectly with the blue Atlantic Ocean and its whitewashed traditional villages. A natural work of art like no other.',
        'Close your eyes, take a deep breath, and let the salty air embrace you.',)
    )
  ]


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.islandName = this.route.snapshot.params['island'];

    this.islandsList.forEach(element => {
      if (element === this.islandName) {
        this.islandsCounter++
      }
    });

    if (this.islandsCounter === 0) {
      this.router.navigate(['/islands'])
    }

    this.Islands.forEach(element => {
      if (element.island === this.islandName) {
        this.island = element
      }
    });

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia('(min-width: 400px)').matches) {
      const home1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.hm1',
          start: 'top 0%',
          end: '+=1300',
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      home1.fromTo('.hc1', { x: '100vw' }, { x: '-100vw' });
    } else {
      // const home1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.hm1',
      //     start: 'top 5px',
      //     end: '+=1700',
      //     pin: true,
      //     scrub: 1,
      //     markers: false,
      //   },
      // });

      // home1.fromTo('.hc1', { x: '100vw' }, { x: '-650vw' });
    }

  }

}

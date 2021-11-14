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

  islandsList = ['lanzarote', 'grancanaria', 'tenerife', 'fuerteventura', 'lapalma', 'lagomera', 'elhierro', 'lagraciosa']
  islandsCounter = 0
  islandName = ''

  island: Island = new Island('', new IslandContent('', '', '', '', '', '', '', '', '', ''))

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
        'Close your eyes, take a deep breath, and let the salty air embrace you.')
    ),
    new Island('grancanaria',
      new IslandContent('Gran Canaria.',
        'The one that has it all.',
        'Pamper yourself on the island of ',
        'well-being.',
        'Let yourself be captivated by Las Palmas de Gran Canaria, the largest city in the Canary Islands. An urban hub full of life where you will find wellness resorts and restaurants to treat your mind and body.',
        'Another great way to relax is to spend the day at one of the multiple beaches it has to offer. Whether it be large, secluded, lively, volcanic, quiet, or a cove, there is a beach to suit every taste.',
        'From sand dunes to ',
        'pine forests.',
        'Gran Canaria is renowned for its marked contrasts. As you discover this marvellous land, you will encounter steep ravines and volcanic calderas, all the way to fairytale beaches and extensive sand dunes.',
        '')
    ),
    new Island('tenerife',
      new IslandContent('Gran Canaria.',
        'Endless possibilities await.',
        'Take yourself back ',
        'in time.',
        'Tenerife preserves beautiful historic quarters of great artistic value. Stroll along its streets and let its architecture take you back in time, all the way to the 15th century. If you get hungry, try typical Canary Island food in one of their famous “guachinches”.',
        'The island also offers some of the most spectacular volcanic manifestations on the planet which you cannot miss at the Teide National Park. At night, be mesmerized by the million sparkling stars in the sky as they reflect on the striking silhouettes of the volcanic landscape.',
        'A new adventure ',
        'in every corner.',
        'Let yourself enjoy it all on the island of a thousand experiences. Climb the highest peak in Spain, see dolphins and whales swimming in the wild, and discover impressive volcanoes and lush forests that will take your breath away.',
        '')
    ),
    new Island('fuerteventura',
      new IslandContent('Fuerteventura.',
        'A beach lover’s dream.',
        'Picture perfect ',
        'beaches.',
        'Choose from the 150 kilometers of white and golden sand beaches and take a revitalizing swim in its crystal clear turquoise waters. If you are also looking for adventure, Fuerteventura is one of the best spots in the world for surfing, windsurfing and kitesurfing. Let the wind and waves embrace you.',
        'Its inland landscapes have nothing to envy. Walk along the streets of its first cities and let its beauty and heritage absorb you. Later, visit the Tindaya mountain, Fuerteventura’s spiritual home, whose walls tell a thousand ancient stories. At sunset, watch the world turn to pink from this unique vantage point.',
        'The first island of ',
        'them all.',
        'Fuertevnetura was the first island to emerge from the Atlantic Ocean. As a result, vast plains of low mountains, mesmerizing beaches, enthralling ancient engraving, a fairytale islet and its very own cheese with milk from an endemic goat make this island the perfect paradise.',
        '')
    ),
    new Island('palma',
      new IslandContent('La Palma.',
        'The «Isla Bonita».',
        'The best sky in the ',
        'world.',
        'They say La Palma has the best sky in the world for stargazing. When the sun sets, the stars invade the skies and captivate anyone who raises their gaze to the clear, transparent sky.',
        'But it’s not just the sky in La Palma that’s transparent, the waters that bathe the island’s coastline are too. Underwater volcanic landscapes and stunning natural pools make up the perfect paradise.',
        'Let its magic ',
        'entrance you.',
        'La Palma is, in one word, breathtaking. It is astoundingly beautiful from the stars in its skies to its spectacular pine forests and underwater caves. An island with an awe-inspiring atmosphere that connects us to the powerful energy of this indomitable nature.',
        '')
    ),
    new Island('gomera',
      new IslandContent('La Gomera.',
        'A green heaven.',
        'Endless trails and ',
        'spectacular views.',
        'More than 600 kilometers of endless trails invite you to discover La Gomera on foot; the island that houses one of the most important natural ecosystems in the world: the primitive laurisilva; a lush, humid forest now extinct in most of the planet.',
        'Its extensive network of trails also allows you to reach its magnificent vantage points from which to see spectacular views, like the Mirador del Palmarejo, the Mirador de Abrante or Alto de Garajonay, the island’s highest point.',
        'Connect with ',
        'simple life.',
        'Lush laurisilva, deep ravines and abrupt cliffs, valleys colonised by leafy palm groves, wild little beaches… you can find them all in this truly diverse and intricate island. A place so unique that still preserves the ancient whistled language used centuries ago, the “Silbo Gomero”.',
        '')
    ),
    new Island('hierro',
      new IslandContent('El Hierro.',
        'A shelter to disconnect.',
        'A diving ',
        'paradise.',
        'Over 40 diving points await on the island, considered one of the best places in the world for scuba diving. Prepare yourself for up to 30 meters of crystal clear waters and a thousand underwater species and volcanic landscapes like no other.',
        'This enigmatic paradise is also known as the island of sustainability, as it is underway to fully becoming energy self-sufficient through clean, renewable energies. All in all, El Hierro poses a natural awe-inspiring getaway where you can find yourself in the simple pleasures of life.',
        'A sea of ',
        'tranquility.',
        'The one furthest to the south and to the west, a place that in ancient times was thought to be the end of the world. Now, it is a place of peace and tranquility, where time and stress disappear.',
        '')
    ),
    new Island('graciosa',
      new IslandContent('La Graciosa.',
        'A virginal paradise.',
        'Nature in its ',
        'purest form.',
        'Gifted with warm, summer weather all year round, this marine reserve is the getaway for those seeking a place to relax and connect with nature. Walk, bike or take a swim in the island’s waters to discover its wide range of flora and fauna; the largest marine reserve in Europe.',
        'A place that seems like a dream in itself, and yet is only a few hours away from any European city.',
        'Peace and quiet at ',
        'its finest.',
        'Imagine a place with white sand beaches and turquoise waters. A place with no paved roads or pollution, almost untouched by the human hand. 29 square kilometers of pure peace and quiet for you to explore; the little island of La Graciosa.',
        '')
    ),
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

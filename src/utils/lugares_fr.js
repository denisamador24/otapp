/*
 {
    name: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    images: [
      ''
    ],
    services: [],
    activities: [],
    know: '',
  },

*/

const lugaresEs = [
   {
    name: 'La Primavera',
    description: 'La Primavera est un très bel endroit, sa principale attraction sont les cocotiers que l on trouve le long de toute la côte, en plus de profiter de ses eaux profondes, vous pourrez apprécier la belle vue au volcan.',
    address: 'De l entrée d Ojo de Agua 275 mètres à l est. ',
    phone: '',
    email: '',
    images: [
      'primavera'
    ],
    services: [],
    activities: [],
    know: '',
  },
  {
    name: 'El Tesoro del Pirata',
    description: 'Hôtel loin du bruit de la population pour contacter la nature, vous pouvez respirer la paix et la tranquillité, il a une belle vue sur le lac Cocibolca, et avec une très bonne attention ',
    address: 'Dans Valle Verde Ometepe, au km 15 Altagracia.',
    phone: '89475846',
    email: '',
    images: [
      'pirata1',
      'pirata2',
      'pirata3'
    ],
    services: [
      'Chambres',
      'Piscine',
      'Plage',
      'Restaurant'
    ],
    activities: [],
    know: '',
  },
  {
    name: 'Cascade San Ramón',
    description: 'La Cascada San Ramón est située sur les pentes du volcan Maderas sur l île d Ometepe, à 4 km de la ville de San Ramón. est un endroit incroyable où les paysages d une grande beauté, la faune et.',
    address: 'Communauté de San Ramón, Altagracia, Rivas, Nicaragua.',
    phone: '',
    email: '',
    images: [
      'cascada1',
      'cascada2'
    ],
    services: [],
    activities: [],
    know: '',
  },
  {
    name: 'Hôtel la Estancia',
    description: 'Cest un Hôtel aux allures de Réserve Naturelle, doté d une piscine classique, qui impressionne par son grand jardin à la végétation variée, qui permet de profiter du calme et de la tranquillité en famille.',
        address: 'Du hôpital Moyogalpa à 800 mètres au sud (Moyogalpa, Rivas, Nicaragu).',
    phone: '84118589',
    email: '',
    images: [
      'estancia1',
      'estancia2',
      'estancia3',
      'estancia4'
    ],
    services: [
          'Restaurant',
      'Location de motos, quadricycles et voitures',      'Restaurant',
      'Location de motos, quadricycles et voitures',
    ],
    activities: [],
    know: '',
  },
  {
    name: 'Ferme Mérida',
    description: 'L Hôtel Hacienda Merida est un véritable paradis tropical, car il offre de belles vues sur les volcans Maderas et Concepción, vous pourrez apprécier des couchers de soleil spectaculaires et profiter d une atmosphère.',
    address: 'Mérida, Altagracia, île d Ometepe',
    phone: '87017082',
    email: 'info@hmerida.com',
    images: [
      'hmerida1'
   ],
    services: [
      'bar',
      'hôtel',
      'Restaurant'
      
      ],
    activities: [
      'Randonnée',
      'monter à cheval'
    ],
    know: 'C était l une des fermes les plus importantes de la famille Somoza.'
  },
  {
    name: 'Charco Verde',
    description: 'El Charco Verde est une réserve écologique, il contient une forêt tropicale sèche qui abrite de nombreux animaux sauvages, Sur la plage en face de Charco Verde, vous pourrez nager et vous détendre, lors d un long tour, vous pourrez visiter le lagon qui abrite une grande légende d Ometepe <br/> 60C$ - 100C$',
    address: 'Hôtel Charco Verde,Altagracia , Isla de Ometepe ,Rivas ',
    phone: '88694037',
    email: '',
    images: [
      'verde1',
      'verde2',
      'verde3',
      'verde4'
    ],
    services: [
      'Bar',
      'restaurant',
      'location de moto',
      'Wifi'
    ],
    activities: [
      'kayak',
      'Tour autour de l île',
      'Auvents',
      'monter à cheval'
    ],
    know: 'Dans la lagune de Charco Verde, un long garçon a transformé ses visiteurs en bétail par sorcellerie puis les a vendus à des abattoirs. (Leyenda long boy, http://www.viajeroinsatisfecho.com/2016/10/leyenda-de-ch'
  },
  {
    name: 'L hôtel Punta Resort',
    description: 'C est un endroit très agréable et confortable pour votre séjour, vous pouvez passer la journée dans la piscine extérieure et vous détendre, nous pouvons également profiter de la vue sur Punta Jesús María et admirer le coucher du soleil.',
    address: 'Punta Jesús María, Moyogalpa, Isla de Ometepe .',
    phone: '85113130',
    email: '',
    images: [
      'resort1',
      'resort2',
      'resort3'
    ],
    services: [
      'Hôtel',
      'Restaurant',
      'Petit-déjeuner',
      'Terrain de stationnement'
    ],
    activities: [
      'Visites',
      'kayak'
    ]
  },
  {
    name: 'Plage Santa Cruz',
    description: 'Cette plage d eau douce est une expérience récréative, vous pouvez voir les deux volcans, il y a de petits hôtels, des restaurants, de nombreux lieux et activités pour profiter de cette magnifique plage.',
    address: 'De la jonction Quino, route de 4 km jusqu à Santa Cruz, Altagracia, Ometepe.',
    phone: '',
    email: '',
    images: [
      'pcruz1',
      'pcruz2'
     ],
    services: [
      'Hôtel',
      'Location de moto',
      'Bar et Resto'
    ],
    activities: [
      'Vélo',
      'kite surf',
      'Volley-ball',
    ]
  },
 {
    name: 'Point de vue écologique',
    description: 'C est un bel endroit qui est en contact avec la nature, avec un beau paysage du grand lac et une petite île, où vous pouvez être en paix et en harmonie, apprécier le coucher du soleil tout en profitant .',
    address: 'De quinze km1/2 à Altagracia devant les Twins.',
    phone: '57642833',
    email: '',
    images: [
      'miradorec1',
      'miradorec2',
      'miradorec3',
      'miradorec4'
     ],
    services: [
      'Hôtel',
      'Bar',
      'Piscine'
    ],
    activities: []
  },
  {
    name: 'Hôtel San Juan Ometepe',
    description: 'C est un bel endroit en pleine nature, il est situé au bord de la plage avec vue sur trois îlots, vous pourrez faire diverses activités qui rendront votre expérience unique.',
    address: 'Du cinquième 90 mètres au nord et 1 km à l est.',
    phone: '88860734',
    email: '',
    images: [
      'juan1',
      'juan2',
      'juan3',
      'juan4',
      'juan5',
    ],
    services: [
      `Hôtel: <br> hébergement: $65 a $180`,
      `Restaurant: <br> cymbales: $6 a &16`
    ],
    activities: []
  },
  {
    name: 'Caballito de Mar',
    description: 'C est un endroit calme à Ometepe, avec une auberge, des cabanes, un bar et un restaurant.Endroit incroyable avec un excellent emplacement, de beaux couchers de soleil, idéal pour se reposer.',
    address: 'Isla de Ometepe, Mérida depuis l église, à 100 mètres au nord, à 300 mètres du lac Altagracia, Nicaragua',
    phone: '84512093',
    email: 'ferliri@hotmail.com',
    images: [
      'caballito1',
      'caballito2',
      'caballito3'
    ],
    services: [
      `Chambres privées 30 $ (chalets)
      <br>
      - Air conditionné
      <br>
      - 2 petits déjeuners inclus dans le prix.
      `
    ],
    activities: []
  },
  {
    name: 'Plage San Fernando',
    description: 'C est une attraction touristique à Ometepe où vous pourrez vous détendre, nager et pratiquer des sports nautiques, elle a du sable solide, comme les plages voisines en raison du mouvement volcanique sur l île depuis des milliers d  années,cela en fait une plage parfaite pour marcher, jouer, faire de l équitation et toute activité que vous voulez faire',
    address: 'Il est situé le long de la route de Balgue-Merida',
    phone: '',
    email: '',
    images: [
      'fernando1'
    ],
    services: [],
    activities: []
  },
  {
    name: 'Musée El Ceibo:',
    description: 'C est un endroit très attrayant où l on peut retrouver une partie de l histoire du Nicaragua, il dispose de 5 salles très bien équipées sur l évolution de la monnaie et de la politique de notre pays et dans son musée précolombien, plus de 1500 pièces de céramique, d or, de silex oxydé et de jade sont exposées.',
    address: 'Communauté de Sacramento, à 10 km de Moyogalpa.',
    phone: '88825528',
    email: 'hotelfincaelceibo@gmail.com',
    images: [
      'museo1',
      'museo2'
    ],
    services: [],
    activities: [],
    know: 'El Ceibo avait 500 manzanas de territoire, dont 200 ont été confisqués par l État.<br> La plupart des pièces anciennes ont été trouvées dans les territoires ceibo.'
  },
  {
    name: 'Plage Perú',
    description: 'Le Pérou est une station balnéaire magnifique et tranquille face au grand lac du Nicaragua, Cosibolca, aux eaux douces et calmes, avec de grands espaces pour réaliser tout type d activité en famille ou entre amis, en plus d une belle vue sur le volcan . ',
    address: `Pérou Merida Beach, volcan Madera `,
    phone: '89321805',
    email: '',
    images: [
      'peru1',
      'peru2',
      'peru3'
    ],
    services: [
      'Bar et Resto',
      'Hébergement',
      'Camping',
      'Transport',
    ],
    activities: [],
    know: 'Sous le gouvernement Somoza, cette terre était utilisée pour cultiver des cocotiers et on trouve encore un de ces palmiers au Pérou.'
  },
  {
    name: 'Plage Mango',
    description: 'C est un bar et un restaurant, avec une atmosphère calme, surplombant le volcan Concepción, vous pourrez admirer le coucher du soleil et vous reposer sous ses manguiers caractéristiques. <br/> 170C$ - 540C$',
    address: 'Playa Mangos est située à 3 km de la jonction Santa Cruz, Communauté Limonal - Mérida.',
    phone: '',
    email: '',
    images: [
      'mango2',
      'mango1'
    ],
    services: [
      'Bar',
      'Restaurant',
      'kayak',
      'excursions en kayak'
    ],
    activities: [],
    know: 'Les manguiers trouvés sur cette plage ont environ plus de 10 ans, selon les données des ouvriers..' 
  },
  {
    name: 'La rivière Istian',
    description: 'C est un terrain marécageux sur le côté ouest de l isthme entre Maderas et Concepción.C est un excellent endroit pour admirer toutes sortes de beautés naturelles, vous pouvez profiter d une excursion en kayak et apprécier la faune du lieu .',
    address: 'Route  Santo Domingo-Balgüe , Altagracia , Nicaragua.',
    phone: '85150818',
    email: 'casaistiam@hotmail.com',
    images: [
      'istian1',
      'istian2'
    ],
    services: [],
    activities: []
  },
  {
    name: 'héberger le Chocoyos',
    description: 'Chocoyos est un bar et un restaurant sur les rives de la plage de Mérida avec vue sur le volcan, il offre un excellent service à ses visiteurs, conçu pour la détente et le plaisir de ses visiteurs. <br/> 140C$ - 240C$',
    address: '300 mètres de l église catholique de Mérida, Ometepe, Rivas, Nicaragua.',
    phone: '78852881',
    email: '',
    images: [
      'cocoyo1',
      'cocoyo2'
    ],
    services: [
      'Bar et Resto',
      'Chambre à coucher',
      'Salle de bain partagée',
      'Louer une voiture'
    ],
    activities: [
      'Visites',
      'monter à cheval',
      'Vélo',
      'kayak'
    ]
  },
  {
    name: 'La Omaja',
    description: 'C est un hôtel à l ambiance cool et calme, qui dispose d une piscine avec vue extérieure et d une terrasse ouverte toute l année avec une belle vue sur l hôtel et la beauté des lieux..',
    address: 'Situé de l Hacienda Mérida à 500 m au sud de Mérida',
    phone: '88851124',
    email: 'laomaja@hotmail.com',
    images: [
      'omaja1',
      'omaja2',
      'omaja3'
    ],
    services: [
      'Bar et Restaurant',
      'spa privé ',
      'Terrasses donnant sur le Jardin',
      'Chambres avec salle de bain privée',
      'Télévision',
      'Blanchisserie'
    ],
    activities: []
  },
  {
    name: 'Plage Tagüizapa',
    description: 'Tagüizapa l une des plages les plus connues de la zone urbaine d Altagracia, elle possède un environnement naturel et frais où vous pourrez vous reposer paisiblement.Cette plage est indiquée pour passer un beau week-end avec votre famille et vos amis.',
    address: 'Du parc Altagracia, 1,1 km à l est, île d Ometepe, Rivas, Nicaragua.',
    phone: '86066237',
    email: 'tagüizapabeach@hotmail.com',
    images: [
      'taguizapa1',
      'taguizapa2'
    ],
    services: [],
    activities: [],
    know: 'Cette plage contient le plus vieil arbre d Ometepe, appelé ceibo (il a environ 800 ans d existence).'
  },
  {
    name: ' Plage Santo Domingo',
    description: 'Saint-Domingue mesure environ 4 km de long, ce qui en fait une plage assez complète pour pratiquer différentes activités, promenade aux sports aquatique.À Saint-Domingue, il est facile d accéder aux services de restauration, aux hôtels, à l hébergement, à l équitation, aux visites et plus encore.',
    address: 'Santo Domingo, Altagracia, Rivas, Nicaragua ',
    phone: '',
    email: '',
    images: [
      'pdomingo1',
      'pdomingo2'
    ],
    services: [],
    activities: []
  },
  {
    name: 'Punta de Jesús María',
    description: 'La pointe de Jesús María est un étroit détroit de terre qui s étend dans le lac cosibólica, aux eaux calmes et peu profondes. De là, vous aurez une vue panoramique sur les volcans Madera et Concepción et vous pourrez profiter des magnifiques couchers de soleil de tous les points de la plage, préparé pour le plaisir des familles',
    address: '3 km de la commune de Moyogalpa, route d Altagracia.',
    phone: '86964692',
    email: '',
    images: [
      'punta1',
      'punta2',
      'punta3'
    ],
    services: [],
    activities: [],
    know: 'La pointe de Jesús María peut mesurer plus de 1 km de long en saison sèche.'
  },
  {
    name: 'El Pital',
    description: 'C est un endroit qui vous invite à vous connecter avec la nature et à laisser tous vos soucis derrière vous, où vous pourrez admirer une vue magnifique que vous allez adorer , Vous ne regretterez pas ce beau paradis, ce lieu vous offre de belles chambres qui s intègrent parfaitement à la jungle et créent une atmosphère authentique , vous pouvez profiter de petits déjeuners végétaliens avec des fruits et légumes qui sont cultivés sur place .',
    address: 'Balgue , Altagracia, Rivas, Nicaragua .',
    phone: '85035481',
    email: 'elpital@mail.com',
    images: [
      'pital1',
      'pital2',
      'pital3',
      'pital4',
      'pital5',
      'pital6'
    ],
    services: [
      'Hôtel',
      'Bar',
      'Restaurant'
    ],
    activities: [
      'Vélo',
      'des promenades',
      'Cours de yoga',
      'soirées reggae hebdomadaires',
      'soirées cinéma',
      'feux de joie'
    ]
  },
  {
    name: 'El Ojo de Agua',
    description: 'Un endroit où vous pourrez vous détendre à l ombre d une forêt tropicale, avec une piscine d eaux cristallines et rafraîchissantes d origine volcanique, ainsi qu une grande beauté naturelle.,Il a un excellent service clients',
    address: 'De la jonction le quino 1.7km autoroute santo domingo (altagracia rivas nicaragua)',
    phone: '58310130',
    email: 'rnojodeaguaometepe@gmail.com',
    images: [
      'ojo1',
      'ojo2',
      'ojo3',
      'ojo4'
    ],
    services: [
      'Restaurant',
      'Piscine',
      'Randonnée'
    ],
    activities: [
      'Monter à cheval',
      'Vélo',
     'Apiculture',
    ],
    know: 'Les eaux cristallines de l Ojo de Agua proviennent de sources qui se connectent au volcan Concepción par une chaîne souterraine qui génère 700 gallons par minute.'
  },
  {
    name: 'Finca Magdalena',
    description: `C'est un endroit cool; Avec un environnement de campagne et une ascension importante vers le volcan Madera, c'est une excellente option pour votre séjour et vous pourrez apprécier l'activité productive paysanne.
    <br>
    <br>
    Vos tarifs d'activités: <br>
    0.90$-50.24$`,
    address: 'Volcan Madera, Balgüe, île d Ometepe.',
    phone: '84185636',
    email: '',
    images: [
      'fmagdalena1',
      'fmagdalena2',
      'fmagdalena3'
    ],
    services: [
      'Hébergement',
      'Restaurant',
      'Bar',
      'Piscine extérieure',
      'Jardin et terrasse',
      'Wifi gratuit',
      'Location de voitures et de vélos'
    ],
    activities: [
      'Randonnée',
      'Pêche',
      'Visite à pied'
    ],
  },
  {
    name: 'Plage Paso Real',
    description: 'C est un très bel endroit caractérisé par ses larges côtes et sa grande végétation, et une vue immense.',
    address: 'à environ 1 km de la ville d Altagracia',
    phone: '',
    email: '',
    images: [
      'real1',
      'real2'
    ],
    services: [],
    activities: [],
    know: 'Cette plage a une légende du "cheval d or", qui, selon les habitants, est apparu à côté d un arbre ceibo.'
  },
  {
    name: 'Plage San Miguel',
    description: 'San Miguel est l une des plages de la municipalité d Altagracia, elle a une atmosphère extraordinaire où vous pourrez nager avec votre famille et vos amis.Il contient également un petit gravier à l intérieur et à quelques kilomètres de là se trouve une pierre dite "grosse pierre"',
    address: 'Région de San Miguel, compagnie portuaire du côté sud.',
    phone: '',
    email: '',
    images: [
      'miguel1',
      'miguel2'
    ],
    services: [],
    activities: [],
    know: 'Cette plage a un port appelé "Puerto de Gracia" où les gens peuvent se rendre à San Carlos et Grenade.'
  },
  {
    name: 'Lagune du volcan Madera',
    description: 'Comme son nom lindique, il s agit d un lagon situé dans le volcan Madera, pour y accéder vous devrez grimper et profiter de la faune, de la flore et du climat du volcan, à son sommet vous trouverez le magnifique lagune' ,
    address: `Pour vous rendre au magnifique lagon, vous devrez être accompagné d'un guide touristique'
      <br>
      <br>
      Guide touristique:
      <br>
      1- Téléphone: +50589367471,
      <br>
      2- Téléphone: +50586390399
    `,
    phone: '',
    email: '',
    images: [
      'laguna1',
      'laguna2'
    ],
    services: [],
    activities: [],
    know: 'Le nom nahuatl du bois est coatlán qui signifie "lieu du soleil" ou "lieu où vit le soleil".'
  },
  {
    name: 'Hotel Finca Venecia',
    description: 'C est un hôtel situé sur l île d Ometepe, avec l apparence d une réserve naturelle, il est situé près de la plage, il a une vue magnifique sur le volcan Madera, avec une atmosphère fraîche et calme. <br/> 70C',
    address: 'Il est situé à 4 km de Los Ramos.',
    phone: '88439595',
    email: 'hotelfincavenecia@yahoo.com',
    images: [
      'venecia1',
      'venecia2',
      'venecia3',
      'venecia4',
      'venecia5',
      'venecia6'
    ],
    services: [
      'Chambres',
      'Restaurant',
      'Piscine',
    ],
    activities: [
      'Lazy tour',
      'Tours a los volcanes'
    ]
  },
  {
    name: 'Playa Bamboo',
    description: 'Il se caractérise par les cabanes en bambou au design rustique situées près de la côte, c est une large plage avec beaucoup de végétation, parfaite pour se reposer.',
    address: 'Balgüe, Altagracia, Nicaragua',
    email: 'elbamboo.ometepe@gmail.com',
    phone: '87167640',
    images: [
      'bambo1',
      'bambo2',
      'bambo3',
      'bambo4'
    ],
    services: [],
    activities: []
  },
  {
    name: 'Cabañas del Paraíso Ometepe',
    description: 'C est un hôtel de plage situé à San Lázaro, il dispose d une piscine extérieure, d un beau jardin et d un salon commun, tous les logements ont une vue sur la plage et un accès à un bar et un restaurant',
    address: 'De l école San Lázaro à 700 mètres du lac',
    phone: '82322497',
    email: 'cabañasparaiso23@yahoo.com',
    images: [
      'paraiso1',
      'paraiso2',
      'paraiso3',
      'paraiso4',
      'paraiso5',
      'paraiso6'
    ],
    services: [],
    activities: []
  },
  {
     name: 'belvédère les volcans',
     description: 'Ce belvédère est situé au sommet d une colline sur les rives de la route de Saint-Domingue, ce qui permet une vue imprenable sur le lac, la nature et la culture de ses environs. <br/> 180',
     address: '24 km autoroute Altagracia-Playa Santo Domingo, Ometepe.',
     phone: '87213383 - 87265150',
     email: '',
     images: [
        'miradordos1',
        'miradordos2'
      ],
     services: [
       'Tours' ,
       'nourriture',
       'bar',
     ],
     activities: [],
     know: '',
   },
];


export default lugaresEs;
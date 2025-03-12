export interface Country {
  id: string;
  name: string;
  capital: string;
  region: Region;
  flag: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  descriptionKey?: string; // Optional translation key for description
  neighbors: string[]; // array of country ids
  facts: string[];
  factKeys?: string[]; // Optional translation keys for facts
}

export type Region = 'northernEurope' | 'southernEurope' | 'westernEurope' | 'easternEurope' | 'centralEurope';

const europeanCountries: Country[] = [
  {
    id: 'albania',
    name: 'Albania',
    capital: 'Tirana',
    region: 'southernEurope',
    flag: '🇦🇱',
    coordinates: [41.1533, 20.1683],
    description: 'Albania is a country in Southeast Europe on the Adriatic and Ionian Sea. It shares land borders with Montenegro, Kosovo, North Macedonia, and Greece.',
    descriptionKey: 'albania_description',
    neighbors: ['montenegro', 'kosovo', 'north_macedonia', 'greece'],
    facts: [
      'Albania has over 750,000 bunkers scattered throughout the country.',
      'The majority of Albanians are Muslim, making it one of the few European countries with a Muslim majority.',
      'The Albanian language, known as Shqip, is one of the oldest in Europe.'
    ],
    factKeys: ['albania_fact1', 'albania_fact2', 'albania_fact3']
  },
  {
    id: 'andorra',
    name: 'Andorra',
    capital: 'Andorra la Vella',
    region: 'southernEurope',
    flag: '🇦🇩',
    coordinates: [42.5063, 1.5218],
    description: 'Andorra is a small, landlocked country located between France and Spain in the Pyrenees mountains.',
    descriptionKey: 'andorra_description',
    neighbors: ['france', 'spain'],
    facts: [
      'Andorra has no airport or train stations, making it accessible only by road.',
      'It is the only country in the world with Catalan as its official language.',
      'Andorra has the highest life expectancy in the world at around 83 years.'
    ],
    factKeys: ['andorra_fact1', 'andorra_fact2', 'andorra_fact3']
  },
  {
    id: 'austria',
    name: 'Austria',
    capital: 'Vienna',
    region: 'centralEurope',
    flag: '🇦🇹',
    coordinates: [47.5162, 14.5501],
    description: 'Austria is a landlocked country in Central Europe with a high standard of living. It borders Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein.',
    descriptionKey: 'austria_description',
    neighbors: ['germany', 'czech_republic', 'slovakia', 'hungary', 'slovenia', 'italy', 'switzerland', 'liechtenstein'],
    facts: [
      'Vienna, the capital of Austria, has been ranked as the most liveable city in the world multiple times.',
      'The Austrian flag is one of the oldest national flags in the world.',
      'The famous composer Wolfgang Amadeus Mozart was born in Salzburg, Austria.'
    ],
    factKeys: ['austria_fact1', 'austria_fact2', 'austria_fact3']
  },
  {
    id: 'belarus',
    name: 'Belarus',
    capital: 'Minsk',
    region: 'easternEurope',
    flag: '🇧🇾',
    coordinates: [53.7098, 27.9534],
    description: 'Belarus is a landlocked country in Eastern Europe, bordered by Russia, Ukraine, Poland, Lithuania, and Latvia.',
    descriptionKey: 'belarus_description',
    neighbors: ['russia', 'ukraine', 'poland', 'lithuania', 'latvia'],
    facts: [
      'Belarus has two official languages: Belarusian and Russian.',
      'About 40% of Belarus is covered by forests.',
      'Belarus is home to Europe\'s largest remaining old-growth forest, Białowieża Forest.'
    ],
    factKeys: ['belarus_fact1', 'belarus_fact2', 'belarus_fact3']
  },
  {
    id: 'belgium',
    name: 'Belgium',
    capital: 'Brussels',
    region: 'westernEurope',
    flag: '🇧🇪',
    coordinates: [50.8503, 4.3517],
    description: 'Belgium is a country in Western Europe known for its medieval towns, Renaissance architecture, and as headquarters of the European Union and NATO.',
    descriptionKey: 'belgium_description',
    neighbors: ['france', 'netherlands', 'germany', 'luxembourg'],
    facts: [
      'Belgium is famous for its chocolate, waffles, beer, and fries.',
      'Brussels, the capital, is home to the headquarters of the European Union.',
      'Belgium has three official languages: Dutch, French, and German.'
    ],
    factKeys: ['belgium_fact1', 'belgium_fact2', 'belgium_fact3']
  },
  {
    id: 'bosnia_herzegovina',
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    region: 'southernEurope',
    flag: '🇧🇦',
    coordinates: [43.9159, 17.6791],
    description: 'Bosnia and Herzegovina is a country on the Balkan Peninsula in southeastern Europe. Its countryside is home to medieval villages, rivers, and lakes.',
    descriptionKey: 'bosnia_herzegovina_description',
    neighbors: ['croatia', 'serbia', 'montenegro'],
    facts: [
      'Bosnia and Herzegovina has three official languages: Bosnian, Croatian, and Serbian.',
      'Sarajevo was the host city of the 1984 Winter Olympics.',
      'The country has three presidents representing the three main ethnic groups.'
    ],
    factKeys: ['bosnia_herzegovina_fact1', 'bosnia_herzegovina_fact2', 'bosnia_herzegovina_fact3']
  },
  {
    id: 'bulgaria',
    name: 'Bulgaria',
    capital: 'Sofia',
    region: 'easternEurope',
    flag: '🇧🇬',
    coordinates: [42.7339, 25.4858],
    description: 'Bulgaria is a Balkan nation with diverse terrain encompassing Black Sea coastline, rivers, and a mountainous interior.',
    descriptionKey: 'bulgaria_description',
    neighbors: ['romania', 'serbia', 'north_macedonia', 'greece', 'turkey'],
    facts: [
      'Bulgaria is one of the oldest European states, established in 681 AD.',
      'The Bulgarian alphabet, called Cyrillic, is used in many Slavic languages.',
      'Bulgaria is the world\'s largest producer of rose oil, used in perfumes.'
    ],
    factKeys: ['bulgaria_fact1', 'bulgaria_fact2', 'bulgaria_fact3']
  },
  {
    id: 'croatia',
    name: 'Croatia',
    capital: 'Zagreb',
    region: 'southernEurope',
    flag: '🇭🇷',
    coordinates: [45.1, 15.2],
    description: 'Croatia is a Central European and Mediterranean country, bordering Slovenia, Hungary, Serbia, Bosnia and Herzegovina, Montenegro, and the Adriatic Sea.',
    descriptionKey: 'croatia_description',
    neighbors: ['slovenia', 'hungary', 'serbia', 'bosnia_herzegovina', 'montenegro'],
    facts: [
      'Croatia has over 1,200 islands, islets, and reefs along its coastline.',
      'The necktie (cravat) originated in Croatia.',
      'Dubrovnik, a UNESCO World Heritage site, was used as a filming location for Game of Thrones.'
    ],
    factKeys: ['croatia_fact1', 'croatia_fact2', 'croatia_fact3']
  },
  {
    id: 'cyprus',
    name: 'Cyprus',
    capital: 'Nicosia',
    region: 'southernEurope',
    flag: '🇨🇾',
    coordinates: [35.1264, 33.4299],
    description: 'Cyprus is an island country in the Eastern Mediterranean Sea. It is the third-largest and third-most populous island in the Mediterranean.',
    descriptionKey: 'cyprus_description',
    neighbors: [],
    facts: [
      'Cyprus is divided into two parts: the Republic of Cyprus and Northern Cyprus.',
      'Nicosia is the world\'s last divided capital city.',
      'According to mythology, Cyprus is the birthplace of Aphrodite, the goddess of love.'
    ],
    factKeys: ['cyprus_fact1', 'cyprus_fact2', 'cyprus_fact3']
  },
  {
    id: 'czech_republic',
    name: 'Czech Republic',
    capital: 'Prague',
    region: 'centralEurope',
    flag: '🇨🇿',
    coordinates: [49.8175, 15.473],
    description: 'The Czech Republic, also known as Czechia, is a landlocked country in Central Europe. It is bordered by Austria, Germany, Poland, and Slovakia.',
    descriptionKey: 'czech_republic_description',
    neighbors: ['austria', 'germany', 'poland', 'slovakia'],
    facts: [
      'The Czech Republic has the highest castle density in the world.',
      'Beer is cheaper than water in many Czech restaurants.',
      'The word "robot" originated from the Czech word "robota", meaning forced labor.'
    ],
    factKeys: ['czech_republic_fact1', 'czech_republic_fact2', 'czech_republic_fact3']
  },
  {
    id: 'denmark',
    name: 'Denmark',
    capital: 'Copenhagen',
    region: 'northernEurope',
    flag: '🇩🇰',
    coordinates: [56.2639, 9.5018],
    description: 'Denmark is a Nordic country in Northern Europe, consisting of the Jutland Peninsula and numerous islands. It borders Germany to the south and is connected to Sweden via a bridge-tunnel.',
    descriptionKey: 'denmark_description',
    neighbors: ['germany'],
    facts: [
      'Denmark consists of a peninsula and 443 named islands.',
      'The Danish flag, Dannebrog, is the oldest state flag in the world still in use.',
      'Denmark is often ranked as one of the happiest countries in the world.'
    ],
    factKeys: ['denmark_fact1', 'denmark_fact2', 'denmark_fact3']
  },
  {
    id: 'estonia',
    name: 'Estonia',
    capital: 'Tallinn',
    region: 'northernEurope',
    flag: '🇪🇪',
    coordinates: [58.5953, 25.0136],
    description: 'Estonia is a country in Northern Europe bordered by the Gulf of Finland, the Baltic Sea, Latvia, and Russia.',
    descriptionKey: 'estonia_description',
    neighbors: ['latvia', 'russia'],
    facts: [
      'Estonia is one of the least crowded countries in Europe.',
      'Estonia is one of the most digitally advanced societies in the world.',
      'Tallinn\'s Old Town is one of the best-preserved medieval cities in Europe.'
    ],
    factKeys: ['estonia_fact1', 'estonia_fact2', 'estonia_fact3']
  },
  {
    id: 'finland',
    name: 'Finland',
    capital: 'Helsinki',
    region: 'northernEurope',
    flag: '🇫🇮',
    coordinates: [61.9241, 25.7482],
    description: 'Finland is a Northern European nation bordering Sweden, Norway, and Russia. Its capital, Helsinki, sits on a peninsula and surrounding islands in the Baltic Sea.',
    descriptionKey: 'finland_description',
    neighbors: ['sweden', 'norway', 'russia'],
    facts: [
      'Finland has approximately 188,000 lakes.',
      'Finland has the highest coffee consumption per capita in the world.',
      'The Finnish education system is often rated as one of the best in the world.'
    ],
    factKeys: ['finland_fact1', 'finland_fact2', 'finland_fact3']
  },
  {
    id: 'france',
    name: 'France',
    capital: 'Paris',
    region: 'westernEurope',
    flag: '🇫🇷',
    coordinates: [46.2276, 2.2137],
    description: 'France is a country in Western Europe with several overseas territories and regions. Metropolitan France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean.',
    descriptionKey: 'france_description',
    neighbors: ['spain', 'andorra', 'monaco', 'italy', 'switzerland', 'germany', 'luxembourg', 'belgium'],
    facts: [
      'France is the most visited country in the world.',
      'The Louvre Museum in Paris is the most visited art museum in the world.',
      'France produces over 1,500 different types of cheese.'
    ],
    factKeys: ['france_fact1', 'france_fact2', 'france_fact3']
  },
  {
    id: 'germany',
    name: 'Germany',
    capital: 'Berlin',
    region: 'centralEurope',
    flag: '🇩🇪',
    coordinates: [51.1657, 10.4515],
    description: 'Germany is a Western European country with a landscape of forests, rivers, mountain ranges, and the North Sea beaches. It has over 2 millennia of history.',
    descriptionKey: 'germany_description',
    neighbors: ['denmark', 'poland', 'czech_republic', 'austria', 'switzerland', 'france', 'luxembourg', 'belgium', 'netherlands'],
    facts: [
      'Germany is home to over 2,100 castles.',
      'German is the most widely spoken language in the European Union.',
      'Germany has the largest economy in Europe and the fourth-largest in the world.'
    ],
    factKeys: ['germany_fact1', 'germany_fact2', 'germany_fact3']
  },
  {
    id: 'greece',
    name: 'Greece',
    capital: 'Athens',
    region: 'southernEurope',
    flag: '🇬🇷',
    coordinates: [39.0742, 21.8243],
    description: 'Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. It is often called the cradle of Western civilization.',
    descriptionKey: 'greece_description',
    neighbors: ['albania', 'north_macedonia', 'bulgaria', 'turkey'],
    facts: [
      'Greece has the longest coastline in the Mediterranean Basin.',
      'Athens is one of the oldest cities in the world, with its recorded history spanning over 3,400 years.',
      'The Greek alphabet has been used for over 2,500 years.'
    ],
    factKeys: ['greece_fact1', 'greece_fact2', 'greece_fact3']
  },
  {
    id: 'hungary',
    name: 'Hungary',
    capital: 'Budapest',
    region: 'centralEurope',
    flag: '🇭🇺',
    coordinates: [47.1625, 19.5033],
    description: 'Hungary is a landlocked country in Central Europe. It borders Slovakia, Ukraine, Romania, Serbia, Croatia, Slovenia, and Austria.',
    descriptionKey: 'hungary_description',
    neighbors: ['slovakia', 'ukraine', 'romania', 'serbia', 'croatia', 'slovenia', 'austria'],
    facts: [
      'Hungarian is one of the most difficult languages to learn, unrelated to most other European languages.',
      'Budapest has the oldest underground metro system in mainland Europe.',
      'Hungary has the largest thermal water cave system in Europe.'
    ],
    factKeys: ['hungary_fact1', 'hungary_fact2', 'hungary_fact3']
  },
  {
    id: 'iceland',
    name: 'Iceland',
    capital: 'Reykjavik',
    region: 'northernEurope',
    flag: '🇮🇸',
    coordinates: [64.9631, -19.0208],
    description: 'Iceland is a Nordic island country between the North Atlantic and the Arctic Ocean. It has a population of 360,390 and an area of 103,000 km².',
    descriptionKey: 'iceland_description',
    neighbors: [],
    facts: [
      'Iceland has no standing army.',
      'More than 60% of Iceland\'s population lives in Reykjavík.',
      'Iceland uses more electricity per person than any other country, largely due to geothermal energy usage.'
    ],
    factKeys: ['iceland_fact1', 'iceland_fact2', 'iceland_fact3']
  },
  {
    id: 'ireland',
    name: 'Ireland',
    capital: 'Dublin',
    region: 'northernEurope',
    flag: '🇮🇪',
    coordinates: [53.1424, -7.6921],
    description: 'Ireland is an island in the North Atlantic separated from Great Britain to its east by the North Channel, the Irish Sea, and St George\'s Channel.',
    descriptionKey: 'ireland_description',
    neighbors: ['united_kingdom'],
    facts: [
      'Ireland is known as the "Emerald Isle" because of its lush green landscape.',
      'Halloween originated from the ancient Celtic festival of Samhain in Ireland.',
      'Ireland has produced many famous writers including James Joyce, Samuel Beckett, and W.B. Yeats.'
    ],
    factKeys: ['ireland_fact1', 'ireland_fact2', 'ireland_fact3']
  },
  {
    id: 'italy',
    name: 'Italy',
    capital: 'Rome',
    region: 'southernEurope',
    flag: '🇮🇹',
    coordinates: [41.8719, 12.5674],
    description: 'Italy is a Southern European country consisting of a peninsula delimited by the Alps and surrounded by several islands including Sicily and Sardinia.',
    descriptionKey: 'italy_description',
    neighbors: ['france', 'switzerland', 'austria', 'slovenia', 'san_marino', 'vatican_city'],
    facts: [
      'Italy has the most UNESCO World Heritage Sites in the world.',
      'Rome is over 2,500 years old.',
      'The Italian language stems directly from Latin.'
    ],
    factKeys: ['italy_fact1', 'italy_fact2', 'italy_fact3']
  },
  {
    id: 'kosovo',
    name: 'Kosovo',
    capital: 'Pristina',
    region: 'southernEurope',
    flag: '🇽🇰',
    coordinates: [42.6026, 20.903],
    description: 'Kosovo is a disputed territory and partially recognized state in Southeast Europe. It declared independence from Serbia in 2008.',
    descriptionKey: 'kosovo_description',
    neighbors: ['serbia', 'montenegro', 'albania', 'north_macedonia'],
    facts: [
      'Kosovo is one of the youngest countries in the world, having declared independence in 2008.',
      'Kosovo has one of the youngest populations in Europe, with an average age of about 30.',
      'Kosovo\'s recognition remains disputed, with some countries recognizing it as an independent state and others considering it part of Serbia.'
    ],
    factKeys: ['kosovo_fact1', 'kosovo_fact2', 'kosovo_fact3']
  },
  {
    id: 'latvia',
    name: 'Latvia',
    capital: 'Riga',
    region: 'northernEurope',
    flag: '🇱🇻',
    coordinates: [56.8796, 24.6032],
    description: 'Latvia is a country in the Baltic region of Northern Europe. It is bordered by Estonia, Lithuania, Russia, Belarus, and the Baltic Sea.',
    descriptionKey: 'latvia_description',
    neighbors: ['estonia', 'lithuania', 'russia', 'belarus'],
    facts: [
      'Latvia is home to one of the fastest internet connections in the world.',
      'Latvia\'s flag is one of the oldest in the world, dating back to the 13th century.',
      'Over half of Latvia is covered by forests.'
    ],
    factKeys: ['latvia_fact1', 'latvia_fact2', 'latvia_fact3']
  },
  {
    id: 'liechtenstein',
    name: 'Liechtenstein',
    capital: 'Vaduz',
    region: 'westernEurope',
    flag: '🇱🇮',
    coordinates: [47.166, 9.5553],
    description: 'Liechtenstein is a doubly landlocked alpine microstate in Central Europe, bordered by Switzerland to the west and south and Austria to the east and north.',
    descriptionKey: 'liechtenstein_description',
    neighbors: ['switzerland', 'austria'],
    facts: [
      'Liechtenstein is one of only two doubly landlocked countries in the world (the other is Uzbekistan).',
      'Liechtenstein has no airport or train station.',
      'Liechtenstein has the highest GDP per capita in the world.'
    ],
    factKeys: ['liechtenstein_fact1', 'liechtenstein_fact2', 'liechtenstein_fact3']
  },
  {
    id: 'lithuania',
    name: 'Lithuania',
    capital: 'Vilnius',
    region: 'northernEurope',
    flag: '🇱🇹',
    coordinates: [55.1694, 23.8813],
    description: 'Lithuania is a country and member state of the European Union on the eastern shore of the Baltic Sea, bordered by Latvia, Belarus, Poland, and Russia.',
    descriptionKey: 'lithuania_description',
    neighbors: ['latvia', 'belarus', 'poland', 'russia'],
    facts: [
      'Lithuania was the last pagan country in Europe.',
      'Basketball is the most popular sport in Lithuania.',
      'Lithuania has one of the fastest public Wi-Fi networks in the world.'
    ],
    factKeys: ['lithuania_fact1', 'lithuania_fact2', 'lithuania_fact3']
  },
  {
    id: 'luxembourg',
    name: 'Luxembourg',
    capital: 'Luxembourg City',
    region: 'westernEurope',
    flag: '🇱🇺',
    coordinates: [49.8153, 6.1296],
    description: 'Luxembourg is a small, landlocked country in western Europe, bordered by Belgium, France, and Germany.',
    descriptionKey: 'luxembourg_description',
    neighbors: ['belgium', 'france', 'germany'],
    facts: [
      'Luxembourg has the highest GDP per capita in the European Union.',
      'Luxembourg has three official languages: Luxembourgish, French, and German.',
      'Luxembourg City is one of the three official capitals of the European Union.'
    ],
    factKeys: ['luxembourg_fact1', 'luxembourg_fact2', 'luxembourg_fact3']
  },
  {
    id: 'malta',
    name: 'Malta',
    capital: 'Valletta',
    region: 'southernEurope',
    flag: '🇲🇹',
    coordinates: [35.9375, 14.3754],
    description: 'Malta is a small island country in the Mediterranean Sea that lies south of the island of Sicily, Italy.',
    descriptionKey: 'malta_description',
    neighbors: [],
    facts: [
      'Malta is one of the smallest and most densely populated countries in the world.',
      'The official languages of Malta are Maltese and English.',
      'Malta has been inhabited since approximately 5900 BC.'
    ],
    factKeys: ['malta_fact1', 'malta_fact2', 'malta_fact3']
  },
  {
    id: 'moldova',
    name: 'Moldova',
    capital: 'Chisinau',
    region: 'easternEurope',
    flag: '🇲🇩',
    coordinates: [47.4116, 28.3699],
    description: 'Moldova is a landlocked country in Eastern Europe, bordered by Romania to the west and Ukraine to the north, east, and south.',
    descriptionKey: 'moldova_description',
    neighbors: ['romania', 'ukraine'],
    facts: [
      'Moldova is famous for its wine production and has the largest wine cellar in the world.',
      'Moldova was part of Romania between 1918 and 1940.',
      'Moldova is one of the poorest countries in Europe.'
    ],
    factKeys: ['moldova_fact1', 'moldova_fact2', 'moldova_fact3']
  },
  {
    id: 'monaco',
    name: 'Monaco',
    capital: 'Monaco',
    region: 'westernEurope',
    flag: '🇲🇨',
    coordinates: [43.7384, 7.4246],
    description: 'Monaco is a microstate on the French Riviera bordered by France and the Mediterranean Sea.',
    descriptionKey: 'monaco_description',
    neighbors: ['france'],
    facts: [
      'Monaco is the second smallest country in the world, after Vatican City.',
      'Monaco has the highest population density in Europe.',
      'Monaco\'s residents are prohibited from entering the casinos.'
    ],
    factKeys: ['monaco_fact1', 'monaco_fact2', 'monaco_fact3']
  },
  {
    id: 'montenegro',
    name: 'Montenegro',
    capital: 'Podgorica',
    region: 'southernEurope',
    flag: '🇲🇪',
    coordinates: [42.5, 19.3],
    description: 'Montenegro is a Balkan country with rugged mountains, medieval villages, and a narrow strip of beaches along its Adriatic coastline.',
    descriptionKey: 'montenegro_description',
    neighbors: ['croatia', 'bosnia_herzegovina', 'serbia', 'albania', 'kosovo'],
    facts: [
      'Montenegro means "Black Mountain" in many languages.',
      'Montenegro became independent from Serbia in 2006, making it one of Europe\'s newest countries.',
      'The Tara River Canyon in Montenegro is the deepest in Europe.'
    ],
    factKeys: ['montenegro_fact1', 'montenegro_fact2', 'montenegro_fact3']
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    capital: 'Amsterdam',
    region: 'westernEurope',
    flag: '🇳🇱',
    coordinates: [52.1326, 5.2913],
    description: 'The Netherlands is a country in Northwestern Europe with a coastline along the North Sea. It borders Germany to the east and Belgium to the south.',
    descriptionKey: 'netherlands_description',
    neighbors: ['belgium', 'germany'],
    facts: [
      'The Netherlands is often called "Holland," although this actually refers to only two of its provinces.',
      'Amsterdam has more than 100 kilometers of canals.',
      'The Netherlands is one of the most densely populated countries in Europe.'
    ],
    factKeys: ['netherlands_fact1', 'netherlands_fact2', 'netherlands_fact3']
  },
  {
    id: 'north_macedonia',
    name: 'North Macedonia',
    capital: 'Skopje',
    region: 'southernEurope',
    flag: '🇲🇰',
    coordinates: [41.6086, 21.7453],
    description: 'North Macedonia is a landlocked country in the Balkan Peninsula in Southeast Europe. It gained independence in 1991 as one of the successor states of Yugoslavia.',
    descriptionKey: 'north_macedonia_description',
    neighbors: ['kosovo', 'serbia', 'bulgaria', 'greece', 'albania'],
    facts: [
      'North Macedonia changed its name from "Macedonia" in 2019 to resolve a dispute with Greece.',
      'Mother Teresa was born in Skopje, the capital of North Macedonia.',
      'Lake Ohrid, one of Europe\'s oldest and deepest lakes, is located in North Macedonia.'
    ],
    factKeys: ['north_macedonia_fact1', 'north_macedonia_fact2', 'north_macedonia_fact3']
  },
  {
    id: 'norway',
    name: 'Norway',
    capital: 'Oslo',
    region: 'northernEurope',
    flag: '🇳🇴',
    coordinates: [60.472, 8.4689],
    description: 'Norway is a Nordic country in Northern Europe whose mainland territory comprises the western and northernmost portion of the Scandinavian Peninsula.',
    descriptionKey: 'norway_description',
    neighbors: ['sweden', 'finland', 'russia'],
    facts: [
      'Norway has the highest Human Development Index in the world.',
      'The Nobel Peace Prize ceremony is held annually in Oslo.',
      'Norway has the world\'s longest road tunnel, the Lærdal Tunnel, which is 24.5 kilometers long.'
    ],
    factKeys: ['norway_fact1', 'norway_fact2', 'norway_fact3']
  },
  {
    id: 'poland',
    name: 'Poland',
    capital: 'Warsaw',
    region: 'centralEurope',
    flag: '🇵🇱',
    coordinates: [51.9194, 19.1451],
    description: 'Poland is a country in Central Europe bordered by Germany, Czech Republic, Slovakia, Ukraine, Belarus, Russia, Lithuania, and the Baltic Sea.',
    descriptionKey: 'poland_description',
    neighbors: ['germany', 'czech_republic', 'slovakia', 'ukraine', 'belarus', 'russia', 'lithuania'],
    facts: [
      'Poland is the 9th largest country in Europe.',
      'Marie Curie, the first woman to win a Nobel Prize, was born in Poland.',
      'Poland has 16 UNESCO World Heritage Sites.'
    ],
    factKeys: ['poland_fact1', 'poland_fact2', 'poland_fact3']
  },
  {
    id: 'portugal',
    name: 'Portugal',
    capital: 'Lisbon',
    region: 'southernEurope',
    flag: '🇵🇹',
    coordinates: [39.3999, -8.2245],
    description: 'Portugal is a southern European country on the Iberian Peninsula, bordering Spain and the Atlantic Ocean.',
    descriptionKey: 'portugal_description',
    neighbors: ['spain'],
    facts: [
      'Portugal is one of the oldest nations in Europe, with borders virtually unchanged since 1139.',
      'Portuguese is the official language of 9 countries and is spoken by more than 236 million people worldwide.',
      'Portugal is the world\'s largest producer of cork.'
    ],
    factKeys: ['portugal_fact1', 'portugal_fact2', 'portugal_fact3']
  },
  {
    id: 'romania',
    name: 'Romania',
    capital: 'Bucharest',
    region: 'easternEurope',
    flag: '🇷🇴',
    coordinates: [45.9432, 24.9668],
    description: 'Romania is a country located at the crossroads of Central, Eastern, and Southeastern Europe. It borders Hungary, Ukraine, Moldova, Bulgaria, Serbia, and the Black Sea.',
    descriptionKey: 'romania_description',
    neighbors: ['hungary', 'ukraine', 'moldova', 'bulgaria', 'serbia'],
    facts: [
      'The Romanian Parliament Palace is the second-largest administrative building in the world, after the Pentagon.',
      'Transylvania, a region in Romania, is associated with the legend of Dracula.',
      'The Danube Delta, located in Romania, is the second-largest river delta in Europe.'
    ],
    factKeys: ['romania_fact1', 'romania_fact2', 'romania_fact3']
  },
  {
    id: 'russia',
    name: 'Russia',
    capital: 'Moscow',
    region: 'easternEurope',
    flag: '🇷🇺',
    coordinates: [61.524, 105.3188],
    description: 'Russia is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world by area.',
    descriptionKey: 'russia_description',
    neighbors: ['norway', 'finland', 'estonia', 'latvia', 'lithuania', 'poland', 'belarus', 'ukraine'],
    facts: [
      'Russia spans 11 time zones.',
      'Lake Baikal in Russia is the deepest lake in the world.',
      'The Moscow Metro is one of the busiest and most beautiful subway systems in the world.'
    ],
    factKeys: ['russia_fact1', 'russia_fact2', 'russia_fact3']
  },
  {
    id: 'san_marino',
    name: 'San Marino',
    capital: 'San Marino',
    region: 'southernEurope',
    flag: '🇸🇲',
    coordinates: [43.9424, 12.4578],
    description: 'San Marino is a microstate surrounded by Italy. Located on the northeastern side of the Apennine Mountains, it is the oldest sovereign state and constitutional republic in the world.',
    descriptionKey: 'san_marino_description',
    neighbors: ['italy'],
    facts: [
      'San Marino is the world\'s oldest republic, founded in 301 AD.',
      'San Marino has the smallest population of all European states.',
      'It is one of only three countries in the world completely surrounded by another country (the others being Vatican City and Lesotho).'
    ],
    factKeys: ['san_marino_fact1', 'san_marino_fact2', 'san_marino_fact3']
  },
  {
    id: 'serbia',
    name: 'Serbia',
    capital: 'Belgrade',
    region: 'southernEurope',
    flag: '🇷🇸',
    coordinates: [44.0165, 21.0059],
    description: 'Serbia is a landlocked country in Southeastern and Central Europe, located in the Balkan Peninsula.',
    descriptionKey: 'serbia_description',
    neighbors: ['hungary', 'romania', 'bulgaria', 'north_macedonia', 'kosovo', 'montenegro', 'bosnia_herzegovina', 'croatia'],
    facts: [
      'Serbia has one of the oldest and most varied archaeological cultures in Europe.',
      'Belgrade, the capital, is one of the oldest continuously inhabited cities in Europe.',
      'The Serbian inventor Nikola Tesla made significant contributions to the development of electric power systems.'
    ],
    factKeys: ['serbia_fact1', 'serbia_fact2', 'serbia_fact3']
  },
  {
    id: 'slovakia',
    name: 'Slovakia',
    capital: 'Bratislava',
    region: 'centralEurope',
    flag: '🇸🇰',
    coordinates: [48.669, 19.699],
    description: 'Slovakia is a landlocked country in Central Europe. It is bordered by Poland, Ukraine, Hungary, Austria, and the Czech Republic.',
    descriptionKey: 'slovakia_description',
    neighbors: ['poland', 'ukraine', 'hungary', 'austria', 'czech_republic'],
    facts: [
      'Slovakia has the highest number of castles and chateaux per capita in the world.',
      'The geographic center of Europe is located in Slovakia.',
      'Slovakia is home to more than 6,000 caves.'
    ],
    factKeys: ['slovakia_fact1', 'slovakia_fact2', 'slovakia_fact3']
  },
  {
    id: 'slovenia',
    name: 'Slovenia',
    capital: 'Ljubljana',
    region: 'southernEurope',
    flag: '🇸🇮',
    coordinates: [46.1512, 14.9955],
    description: 'Slovenia is a country in Central Europe bordered by Italy, Austria, Hungary, Croatia, and the Adriatic Sea.',
    descriptionKey: 'slovenia_description',
    neighbors: ['italy', 'austria', 'hungary', 'croatia'],
    facts: [
      'Slovenia is one of the most environmentally friendly countries in the world.',
      'More than half of Slovenia\'s total area is covered in forest.',
      'The Postojna Cave in Slovenia is one of the largest cave systems in Europe.'
    ],
    factKeys: ['slovenia_fact1', 'slovenia_fact2', 'slovenia_fact3']
  },
  {
    id: 'spain',
    name: 'Spain',
    capital: 'Madrid',
    region: 'southernEurope',
    flag: '🇪🇸',
    coordinates: [40.4637, -3.7492],
    description: 'Spain occupies most of the Iberian Peninsula, stretching south from the Pyrenees Mountains to the Strait of Gibraltar. It also includes the Balearic Islands and the Canary Islands.',
    descriptionKey: 'spain_description',
    neighbors: ['portugal', 'france', 'andorra'],
    facts: [
      'Spanish is the second most widely spoken language in the world by number of native speakers.',
      'Spain has the third-largest number of UNESCO World Heritage Sites.',
      'Spain is the world\'s largest producer of olive oil.'
    ],
    factKeys: ['spain_fact1', 'spain_fact2', 'spain_fact3']
  },
  {
    id: 'sweden',
    name: 'Sweden',
    capital: 'Stockholm',
    region: 'northernEurope',
    flag: '🇸🇪',
    coordinates: [60.1282, 18.6435],
    description: 'Sweden is a Scandinavian country in Northern Europe. It borders Norway to the west and north, Finland to the east, and is connected to Denmark in the southwest via a bridge-tunnel.',
    descriptionKey: 'sweden_description',
    neighbors: ['norway', 'finland'],
    facts: [
      'Sweden has the most islands of any country in the world, with over 267,570 islands.',
      'IKEA, H&M, Volvo, and Spotify all originated in Sweden.',
      'Sweden is one of the world\'s most gender-equal countries.'
    ],
    factKeys: ['sweden_fact1', 'sweden_fact2', 'sweden_fact3']
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    capital: 'Bern',
    region: 'westernEurope',
    flag: '🇨🇭',
    coordinates: [46.8182, 8.2275],
    description: 'Switzerland is a landlocked country in Central Europe. It borders France, Italy, Austria, Liechtenstein, and Germany.',
    descriptionKey: 'switzerland_description',
    neighbors: ['france', 'italy', 'austria', 'liechtenstein', 'germany'],
    facts: [
      'Switzerland has four official languages: German, French, Italian, and Romansh.',
      'Switzerland has been neutral in global conflicts since 1815.',
      'Switzerland is home to the European headquarters of the United Nations.'
    ],
    factKeys: ['switzerland_fact1', 'switzerland_fact2', 'switzerland_fact3']
  },
  {
    id: 'ukraine',
    name: 'Ukraine',
    capital: 'Kyiv',
    region: 'easternEurope',
    flag: '🇺🇦',
    coordinates: [48.3794, 31.1656],
    description: 'Ukraine is a country in Eastern Europe. It is the second-largest European country after Russia.',
    descriptionKey: 'ukraine_description',
    neighbors: ['belarus', 'poland', 'slovakia', 'hungary', 'romania', 'moldova', 'russia'],
    facts: [
      'Ukraine is home to seven UNESCO World Heritage Sites.',
      'The Chernobyl disaster occurred in Ukraine in 1986.',
      'Ukraine is known as the "breadbasket of Europe" due to its fertile soil.'
    ],
    factKeys: ['ukraine_fact1', 'ukraine_fact2', 'ukraine_fact3']
  },
  {
    id: 'united_kingdom',
    name: 'United Kingdom',
    capital: 'London',
    region: 'northernEurope',
    flag: '🇬🇧',
    coordinates: [55.3781, -3.436],
    description: 'The United Kingdom is a sovereign state in northwestern Europe. It consists of England, Scotland, Wales, and Northern Ireland.',
    descriptionKey: 'united_kingdom_description',
    neighbors: ['ireland'],
    facts: [
      'The UK consists of four countries: England, Scotland, Wales, and Northern Ireland.',
      'London\'s Underground (the Tube) is the oldest underground railway network in the world.',
      'English is the primary language, but the UK recognizes several regional languages including Welsh, Gaelic, and Scots.'
    ],
    factKeys: ['united_kingdom_fact1', 'united_kingdom_fact2', 'united_kingdom_fact3']
  },
  {
    id: 'vatican_city',
    name: 'Vatican City',
    capital: 'Vatican City',
    region: 'southernEurope',
    flag: '🇻🇦',
    coordinates: [41.9029, 12.4534],
    description: 'Vatican City is the smallest sovereign state in the world and enclave in Rome, Italy. It is the headquarters of the Roman Catholic Church.',
    descriptionKey: 'vatican_city_description',
    neighbors: ['italy'],
    facts: [
      'Vatican City is the smallest country in the world, with an area of just 49 hectares.',
      'It has the lowest population of any independent country, with about 800 inhabitants.',
      'Vatican City has its own postal service, which is known to be more efficient than the Italian postal service.'
    ],
    factKeys: ['vatican_city_fact1', 'vatican_city_fact2', 'vatican_city_fact3']
  }
];

export default europeanCountries; 
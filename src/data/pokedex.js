// Pokédex Gen 1-3 con stats base de 6ª gen y evoluciones "Easier Evolutions"
export const POKEDEX_DATA = [
  {
    number: 1,
    name: 'Bulbasaur',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'Lleva un bulbo en el lomo desde que nace. Al crecer, se transforma en una flor gigante.',
    stats: { hp: 45, attack: 49, defense: 49, spAttack: 65, spDefense: 65, speed: 45 },
    evolution: 'Evoluciona a Ivysaur en nivel 16'
  },
  {
    number: 2,
    name: 'Ivysaur',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'Cuando le crece mucho el bulbo del lomo, pierde fuerza para erguirse sobre sus patas.',
    stats: { hp: 60, attack: 62, defense: 63, spAttack: 80, spDefense: 80, speed: 60 },
    evolution: 'Evoluciona a Venusaur en nivel 32'
  },
  {
    number: 3,
    name: 'Venusaur',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'La flor de su lomo emite un aroma delicado. En combate, el aroma se vuelve más intenso.',
    stats: { hp: 80, attack: 82, defense: 83, spAttack: 100, spDefense: 100, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 4,
    name: 'Charmander',
    types: ['Fuego'],
    generation: 1,
    description: 'La llama de su cola indica su estado de ánimo. Oscila cuando está contento.',
    stats: { hp: 39, attack: 52, defense: 43, spAttack: 60, spDefense: 50, speed: 65 },
    evolution: 'Evoluciona a Charmeleon en nivel 16'
  },
  {
    number: 5,
    name: 'Charmeleon',
    types: ['Fuego'],
    generation: 1,
    description: 'Se vuelve salvaje en combate. Sus garras afiladas pueden cortar a su rival.',
    stats: { hp: 58, attack: 64, defense: 58, spAttack: 80, spDefense: 65, speed: 80 },
    evolution: 'Evoluciona a Charizard en nivel 36'
  },
  {
    number: 6,
    name: 'Charizard',
    types: ['Fuego', 'Volador'],
    generation: 1,
    description: 'Escupe fuego tan caliente que puede derretir cualquier cosa. Su aliento abrasador puede calcinar el suelo.',
    stats: { hp: 78, attack: 84, defense: 78, spAttack: 109, spDefense: 85, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 7,
    name: 'Squirtle',
    types: ['Agua'],
    generation: 1,
    description: 'Cuando retrae su largo cuello, dispara un chorro de agua con mucha potencia.',
    stats: { hp: 44, attack: 48, defense: 65, spAttack: 50, spDefense: 64, speed: 43 },
    evolution: 'Evoluciona a Wartortle en nivel 16'
  },
  {
    number: 8,
    name: 'Wartortle',
    types: ['Agua'],
    generation: 1,
    description: 'Su cola peluda es un símbolo de longevidad. Puede vivir hasta 10,000 años.',
    stats: { hp: 59, attack: 63, defense: 80, spAttack: 65, spDefense: 80, speed: 58 },
    evolution: 'Evoluciona a Blastoise en nivel 36'
  },
  {
    number: 9,
    name: 'Blastoise',
    types: ['Agua'],
    generation: 1,
    description: 'Los chorros de agua de los cañones de su espalda pueden perforar el acero.',
    stats: { hp: 79, attack: 83, defense: 100, spAttack: 85, spDefense: 105, speed: 78 },
    evolution: 'No evoluciona'
  },
  {
    number: 10,
    name: 'Caterpie',
    types: ['Bicho'],
    generation: 1,
    description: 'Sus patas tienen ventosas que le permiten escalar paredes de cristal sin resbalar.',
    stats: { hp: 45, attack: 30, defense: 35, spAttack: 20, spDefense: 20, speed: 45 },
    evolution: 'Evoluciona a Metapod en nivel 7'
  },
  {
    number: 11,
    name: 'Metapod',
    types: ['Bicho'],
    generation: 1,
    description: 'Endurece su caparazón para protegerse. Apenas puede moverse en esta forma.',
    stats: { hp: 50, attack: 20, defense: 55, spAttack: 25, spDefense: 25, speed: 30 },
    evolution: 'Evoluciona a Butterfree en nivel 10'
  },
  {
    number: 12,
    name: 'Butterfree',
    types: ['Bicho', 'Volador'],
    generation: 1,
    description: 'Las alas repelen el agua. Puede volar incluso bajo la lluvia torrencial.',
    stats: { hp: 60, attack: 45, defense: 50, spAttack: 90, spDefense: 80, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 13,
    name: 'Weedle',
    types: ['Bicho', 'Veneno'],
    generation: 1,
    description: 'Tiene un sentido del olfato extremadamente desarrollado. Detecta lo que le gusta con su nariz.',
    stats: { hp: 40, attack: 35, defense: 30, spAttack: 20, spDefense: 20, speed: 50 },
    evolution: 'Evoluciona a Kakuna en nivel 7'
  },
  {
    number: 14,
    name: 'Kakuna',
    types: ['Bicho', 'Veneno'],
    generation: 1,
    description: 'Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.',
    stats: { hp: 45, attack: 25, defense: 50, spAttack: 25, spDefense: 25, speed: 35 },
    evolution: 'Evoluciona a Beedrill en nivel 10'
  },
  {
    number: 15,
    name: 'Beedrill',
    types: ['Bicho', 'Veneno'],
    generation: 1,
    description: 'Vuela a gran velocidad y ataca con los aguijones venenosos de sus patas delanteras y cola.',
    stats: { hp: 65, attack: 90, defense: 40, spAttack: 45, spDefense: 80, speed: 75 },
    evolution: 'No evoluciona'
  },
  {
    number: 16,
    name: 'Pidgey',
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Muy dócil. Si lo atacan, levanta arena con las alas para protegerse.',
    stats: { hp: 40, attack: 45, defense: 40, spAttack: 35, spDefense: 35, speed: 56 },
    evolution: 'Evoluciona a Pidgeotto en nivel 18'
  },
  {
    number: 17,
    name: 'Pidgeotto',
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de 100 km.',
    stats: { hp: 63, attack: 60, defense: 55, spAttack: 50, spDefense: 50, speed: 71 },
    evolution: 'Evoluciona a Pidgeot en nivel 36'
  },
  {
    number: 18,
    name: 'Pidgeot',
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.',
    stats: { hp: 83, attack: 80, defense: 75, spAttack: 70, spDefense: 70, speed: 101 },
    evolution: 'No evoluciona'
  },
  {
    number: 19,
    name: 'Rattata',
    types: ['Normal'],
    generation: 1,
    description: 'Vive allí donde haya comida disponible. Busca sin descanso en cualquier sitio.',
    stats: { hp: 30, attack: 56, defense: 35, spAttack: 25, spDefense: 35, speed: 72 },
    evolution: 'Evoluciona a Raticate en nivel 20'
  },
  {
    number: 20,
    name: 'Raticate',
    types: ['Normal'],
    generation: 1,
    description: 'Sus patas traseras son palmeadas. Puede atravesar ríos para buscar presas.',
    stats: { hp: 55, attack: 81, defense: 60, spAttack: 50, spDefense: 70, speed: 97 },
    evolution: 'No evoluciona'
  },
  {
    number: 21,
    name: 'Spearow',
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Emite un grito muy agudo. Si le oyes cerca, ten cuidado, porque ataca sin previo aviso.',
    stats: { hp: 40, attack: 60, defense: 30, spAttack: 31, spDefense: 31, speed: 70 },
    evolution: 'Evoluciona a Fearow en nivel 20'
  },
  {
    number: 22,
    name: 'Fearow',
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Con sus enormes y magníficas alas, puede seguir volando sin tener que aterrizar para descansar.',
    stats: { hp: 65, attack: 90, defense: 65, spAttack: 61, spDefense: 61, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 23,
    name: 'Ekans',
    types: ['Veneno'],
    generation: 1,
    description: 'Cuanto más viejo, más crece. Por la noche, descansa en las ramas de los árboles.',
    stats: { hp: 35, attack: 60, defense: 44, spAttack: 40, spDefense: 54, speed: 55 },
    evolution: 'Evoluciona a Arbok en nivel 22'
  },
  {
    number: 24,
    name: 'Arbok',
    types: ['Veneno'],
    generation: 1,
    description: 'El dibujo de su panza aterroriza. Los débiles huyen solo de verlo.',
    stats: { hp: 60, attack: 95, defense: 69, spAttack: 65, spDefense: 79, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 25,
    name: 'Pikachu',
    types: ['Eléctrico'],
    generation: 1,
    description: 'Cuando varios Pikachu se juntan, su electricidad puede causar tormentas.',
    stats: { hp: 35, attack: 55, defense: 40, spAttack: 50, spDefense: 50, speed: 90 },
    evolution: 'Evoluciona a Raichu con Piedra Trueno'
  },
  {
    number: 26,
    name: 'Raichu',
    types: ['Eléctrico'],
    generation: 1,
    description: 'Su cola le sirve de toma de tierra para protegerse de su propia descarga.',
    stats: { hp: 60, attack: 90, defense: 55, spAttack: 90, spDefense: 80, speed: 110 },
    evolution: 'No evoluciona'
  },
  {
    number: 27,
    name: 'Sandshrew',
    types: ['Tierra'],
    generation: 1,
    description: 'Se esconde en el desierto para protegerse del sol abrasador y de sus depredadores.',
    stats: { hp: 50, attack: 75, defense: 85, spAttack: 20, spDefense: 30, speed: 40 },
    evolution: 'Evoluciona a Sandslash en nivel 22'
  },
  {
    number: 28,
    name: 'Sandslash',
    types: ['Tierra'],
    generation: 1,
    description: 'Se enrosca como una bola para protegerse de los enemigos. También puede rodar a gran velocidad.',
    stats: { hp: 75, attack: 100, defense: 110, spAttack: 45, spDefense: 55, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 29,
    name: 'Nidoran♀',
    types: ['Veneno'],
    generation: 1,
    description: 'Aunque pequeño, inyecta veneno con su cuerno. Las hembras tienen el cuerno más pequeño.',
    stats: { hp: 55, attack: 47, defense: 52, spAttack: 40, spDefense: 40, speed: 41 },
    evolution: 'Evoluciona a Nidorina en nivel 16'
  },
  {
    number: 30,
    name: 'Nidorina',
    types: ['Veneno'],
    generation: 1,
    description: 'Cuando está con sus amigas y familia, retrae las púas para no herir a nadie.',
    stats: { hp: 70, attack: 62, defense: 67, spAttack: 55, spDefense: 55, speed: 56 },
    evolution: 'Evoluciona a Nidoqueen con Piedra Lunar'
  },
  {
    number: 31,
    name: 'Nidoqueen',
    types: ['Veneno', 'Tierra'],
    generation: 1,
    description: 'Su cuerpo está recubierto de escamas duras. Le encanta enviar a sus rivales a volar por los aires.',
    stats: { hp: 90, attack: 92, defense: 87, spAttack: 75, spDefense: 85, speed: 76 },
    evolution: 'No evoluciona'
  },
  {
    number: 32,
    name: 'Nidoran♂',
    types: ['Veneno'],
    generation: 1,
    description: 'Endurece las orejas para detectar movimientos, incluso cuando duerme. El veneno de su cuerno es potente.',
    stats: { hp: 46, attack: 57, defense: 40, spAttack: 40, spDefense: 40, speed: 50 },
    evolution: 'Evoluciona a Nidorino en nivel 16'
  },
  {
    number: 33,
    name: 'Nidorino',
    types: ['Veneno'],
    generation: 1,
    description: 'Tiene un cuerno de dureza superior al diamante. Si siente una presencia hostil, las púas se erizan.',
    stats: { hp: 61, attack: 72, defense: 57, spAttack: 55, spDefense: 55, speed: 65 },
    evolution: 'Evoluciona a Nidoking con Piedra Lunar'
  },
  {
    number: 34,
    name: 'Nidoking',
    types: ['Veneno', 'Tierra'],
    generation: 1,
    description: 'La cola actúa como un látigo. Puede derribar un poste metálico de un solo golpe.',
    stats: { hp: 81, attack: 102, defense: 77, spAttack: 85, spDefense: 75, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 35,
    name: 'Clefairy',
    types: ['Hada'],
    generation: 1,
    description: 'Se dice que trae felicidad. Con la luna llena, grupos de ellos bailan toda la noche.',
    stats: { hp: 70, attack: 45, defense: 48, spAttack: 60, spDefense: 65, speed: 35 },
    evolution: 'Evoluciona a Clefable con Piedra Lunar'
  },
  {
    number: 36,
    name: 'Clefable',
    types: ['Hada'],
    generation: 1,
    description: 'Puede oír una aguja caer a 1 km. Vive en montañas tranquilas.',
    stats: { hp: 95, attack: 70, defense: 73, spAttack: 95, spDefense: 90, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 37,
    name: 'Vulpix',
    types: ['Fuego'],
    generation: 1,
    description: 'Al nacer, tiene una cola blanca. La cola se divide a medida que crece.',
    stats: { hp: 38, attack: 41, defense: 40, spAttack: 50, spDefense: 65, speed: 65 },
    evolution: 'Evoluciona a Ninetales con Piedra Fuego'
  },
  {
    number: 38,
    name: 'Ninetales',
    types: ['Fuego'],
    generation: 1,
    description: 'Cada una de sus nueve colas contiene un poder místico diferente. Puede vivir 1000 años.',
    stats: { hp: 73, attack: 76, defense: 75, spAttack: 81, spDefense: 100, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 39,
    name: 'Jigglypuff',
    types: ['Normal', 'Hada'],
    generation: 1,
    description: 'Cuando canta, no para de inflar los pulmones hasta que su canción termine.',
    stats: { hp: 115, attack: 45, defense: 20, spAttack: 45, spDefense: 25, speed: 20 },
    evolution: 'Evoluciona a Wigglytuff con Piedra Lunar'
  },
  {
    number: 40,
    name: 'Wigglytuff',
    types: ['Normal', 'Hada'],
    generation: 1,
    description: 'Su piel tiene una textura sublime. Si dos se acurrucan juntos, no querrán separarse.',
    stats: { hp: 140, attack: 70, defense: 45, spAttack: 85, spDefense: 50, speed: 45 },
    evolution: 'No evoluciona'
  },
  {
    number: 41,
    name: 'Zubat',
    types: ['Veneno', 'Volador'],
    generation: 1,
    description: 'Emite ondas ultrasónicas por la boca. Durante el día duerme en cuevas.',
    stats: { hp: 40, attack: 45, defense: 35, spAttack: 30, spDefense: 40, speed: 55 },
    evolution: 'Evoluciona a Golbat en nivel 22'
  },
  {
    number: 42,
    name: 'Golbat',
    types: ['Veneno', 'Volador'],
    generation: 1,
    description: 'Una vez clava sus colmillos, no suelta a su presa. Bebe sangre cada noche.',
    stats: { hp: 75, attack: 80, defense: 70, spAttack: 65, spDefense: 75, speed: 90 },
    evolution: 'Evoluciona a Crobat con alta amistad'
  },
  {
    number: 43,
    name: 'Oddish',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'Durante el día, se entierra en el suelo. De noche, deambula sembrando sus semillas.',
    stats: { hp: 45, attack: 50, defense: 55, spAttack: 75, spDefense: 65, speed: 30 },
    evolution: 'Evoluciona a Gloom en nivel 21'
  },
  {
    number: 44,
    name: 'Gloom',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'El fluido que fluye de su boca no es saliva, sino néctar pegajoso.',
    stats: { hp: 60, attack: 65, defense: 70, spAttack: 85, spDefense: 75, speed: 40 },
    evolution: 'Evoluciona a Vileplume con Piedra Hoja, o Bellossom con Piedra Solar'
  },
  {
    number: 45,
    name: 'Vileplume',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'Cuanto más grandes son sus pétalos, más tóxico es el polen. Le pesa la cabeza.',
    stats: { hp: 75, attack: 80, defense: 85, spAttack: 110, spDefense: 90, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 46,
    name: 'Paras',
    types: ['Bicho', 'Planta'],
    generation: 1,
    description: 'Excava para chupar las raíces de los árboles. Las setas de su lomo son parásitos.',
    stats: { hp: 35, attack: 70, defense: 55, spAttack: 45, spDefense: 55, speed: 25 },
    evolution: 'Evoluciona a Parasect en nivel 24'
  },
  {
    number: 47,
    name: 'Parasect',
    types: ['Bicho', 'Planta'],
    generation: 1,
    description: 'La seta parásita en su lomo controla al huésped. Esparce esporas venenosas.',
    stats: { hp: 60, attack: 95, defense: 80, spAttack: 60, spDefense: 80, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 48,
    name: 'Venonat',
    types: ['Bicho', 'Veneno'],
    generation: 1,
    description: 'Sus ojos funcionan como radares. De noche, sus ojos son más grandes.',
    stats: { hp: 60, attack: 55, defense: 50, spAttack: 40, spDefense: 55, speed: 45 },
    evolution: 'Evoluciona a Venomoth en nivel 31'
  },
  {
    number: 49,
    name: 'Venomoth',
    types: ['Bicho', 'Veneno'],
    generation: 1,
    description: 'Las escamas que cubren su cuerpo cambian de color según el ángulo. Algunas son venenosas.',
    stats: { hp: 70, attack: 65, defense: 60, spAttack: 90, spDefense: 75, speed: 90 },
    evolution: 'No evoluciona'
  },
  {
    number: 50,
    name: 'Diglett',
    types: ['Tierra'],
    generation: 1,
    description: 'Vive un metro bajo tierra. Levanta montículos de tierra para marcar su territorio.',
    stats: { hp: 10, attack: 55, defense: 25, spAttack: 35, spDefense: 45, speed: 95 },
    evolution: 'Evoluciona a Dugtrio en nivel 26'
  },
  {
    number: 51,
    name: 'Dugtrio',
    types: ['Tierra'],
    generation: 1,
    description: 'Un trío de Diglett. Causa grandes terremotos al excavar 100 km bajo tierra.',
    stats: { hp: 35, attack: 100, defense: 50, spAttack: 50, spDefense: 70, speed: 120 },
    evolution: 'No evoluciona'
  },
  {
    number: 52,
    name: 'Meowth',
    types: ['Normal'],
    generation: 1,
    description: 'Le gustan las cosas brillantes. De noche, sus ojos brillan.',
    stats: { hp: 40, attack: 45, defense: 35, spAttack: 40, spDefense: 40, speed: 90 },
    evolution: 'Evoluciona a Persian en nivel 28'
  },
  {
    number: 53,
    name: 'Persian',
    types: ['Normal'],
    generation: 1,
    description: 'Tiene seis sensibles bigotes. Le gustan las cosas brillantes y ataca sin avisar.',
    stats: { hp: 65, attack: 70, defense: 60, spAttack: 65, spDefense: 65, speed: 115 },
    evolution: 'No evoluciona'
  },
  {
    number: 54,
    name: 'Psyduck',
    types: ['Agua'],
    generation: 1,
    description: 'Usa un misterioso poder. Cuando lo hace, este Pokémon genera ondas cerebrales nunca vistas.',
    stats: { hp: 50, attack: 52, defense: 48, spAttack: 65, spDefense: 50, speed: 55 },
    evolution: 'Evoluciona a Golduck en nivel 33'
  },
  {
    number: 55,
    name: 'Golduck',
    types: ['Agua'],
    generation: 1,
    description: 'Nada con estilo libre a gran velocidad. Este Pokémon es muy superior a Psyduck.',
    stats: { hp: 80, attack: 82, defense: 78, spAttack: 95, spDefense: 80, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 56,
    name: 'Mankey',
    types: ['Lucha'],
    generation: 1,
    description: 'Extremadamente irascible. Se enfurece sin razón. Ataca a cualquiera que lo mire fijamente.',
    stats: { hp: 40, attack: 80, defense: 35, spAttack: 35, spDefense: 45, speed: 70 },
    evolution: 'Evoluciona a Primeape en nivel 28'
  },
  {
    number: 57,
    name: 'Primeape',
    types: ['Lucha'],
    generation: 1,
    description: 'Siempre furiosamente enfadado. Perseguirá a su presa sin importar cuán lejos huya.',
    stats: { hp: 65, attack: 105, defense: 60, spAttack: 60, spDefense: 70, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 58,
    name: 'Growlithe',
    types: ['Fuego'],
    generation: 1,
    description: 'Muy protector de su territorio. Ladrará y morderá para repeler intrusos.',
    stats: { hp: 55, attack: 70, defense: 45, spAttack: 70, spDefense: 50, speed: 60 },
    evolution: 'Evoluciona a Arcanine con Piedra Fuego'
  },
  {
    number: 59,
    name: 'Arcanine',
    types: ['Fuego'],
    generation: 1,
    description: 'Un Pokémon legendario en China. Muchos se sienten atraídos por su gracia.',
    stats: { hp: 90, attack: 110, defense: 80, spAttack: 100, spDefense: 80, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 60,
    name: 'Poliwag',
    types: ['Agua'],
    generation: 1,
    description: 'Sus patas recién desarrolladas le impiden correr. Parece preferir nadar que intentar pararse.',
    stats: { hp: 40, attack: 50, defense: 40, spAttack: 40, spDefense: 40, speed: 90 },
    evolution: 'Evoluciona a Poliwhirl en nivel 25'
  },
  {
    number: 61,
    name: 'Poliwhirl',
    types: ['Agua'],
    generation: 1,
    description: 'Capaz de vivir dentro o fuera del agua. Cuando está en tierra, suda para mantener su cuerpo baboso.',
    stats: { hp: 65, attack: 65, defense: 65, spAttack: 50, spDefense: 50, speed: 90 },
    evolution: 'Evoluciona a Poliwrath con Piedra Agua, o Politoed con intercambio + Roca del Rey (nivel 37 en Easier Evolution)'
  },
  {
    number: 62,
    name: 'Poliwrath',
    types: ['Agua', 'Lucha'],
    generation: 1,
    description: 'Un hábil nadador, tanto crol como espalda. Fácilmente supera a los mejores nadadores humanos.',
    stats: { hp: 90, attack: 95, defense: 95, spAttack: 70, spDefense: 90, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 63,
    name: 'Abra',
    types: ['Psíquico'],
    generation: 1,
    description: 'Duerme 18 horas al día. Detecta el peligro mientras duerme con telequinesis.',
    stats: { hp: 25, attack: 20, defense: 15, spAttack: 105, spDefense: 55, speed: 90 },
    evolution: 'Evoluciona a Kadabra en nivel 16'
  },
  {
    number: 64,
    name: 'Kadabra',
    types: ['Psíquico'],
    generation: 1,
    description: 'Emite ondas alfa que pueden causar dolores de cabeza. Solo con acercarse se sienten.',
    stats: { hp: 40, attack: 35, defense: 30, spAttack: 120, spDefense: 70, speed: 105 },
    evolution: 'Evoluciona a Alakazam en nivel 37 (Easier Evolution)'
  },
  {
    number: 65,
    name: 'Alakazam',
    types: ['Psíquico'],
    generation: 1,
    description: 'Su cerebro puede superar a una supercomputadora. Su coeficiente intelectual es de 5000.',
    stats: { hp: 55, attack: 50, defense: 45, spAttack: 135, spDefense: 95, speed: 120 },
    evolution: 'No evoluciona'
  },
  {
    number: 66,
    name: 'Machop',
    types: ['Lucha'],
    generation: 1,
    description: 'Adora el culturismo. Come cuerpos de Copperajah enteros para fortalecerse.',
    stats: { hp: 70, attack: 80, defense: 50, spAttack: 35, spDefense: 35, speed: 35 },
    evolution: 'Evoluciona a Machoke en nivel 28'
  },
  {
    number: 67,
    name: 'Machoke',
    types: ['Lucha'],
    generation: 1,
    description: 'Su cinturón le ayuda a controlar su enorme fuerza. Sin él, se descontrola.',
    stats: { hp: 80, attack: 100, defense: 70, spAttack: 50, spDefense: 60, speed: 45 },
    evolution: 'Evoluciona a Machamp en nivel 37 (Easier Evolution)'
  },
  {
    number: 68,
    name: 'Machamp',
    types: ['Lucha'],
    generation: 1,
    description: 'Con sus cuatro brazos puede propinar 1000 puñetazos en dos segundos.',
    stats: { hp: 90, attack: 130, defense: 80, spAttack: 65, spDefense: 85, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 69,
    name: 'Bellsprout',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'Su delgado cuerpo se mueve ágilmente para esquivar ataques. Prefiere lugares cálidos y húmedos.',
    stats: { hp: 50, attack: 75, defense: 35, spAttack: 70, spDefense: 30, speed: 40 },
    evolution: 'Evoluciona a Weepinbell en nivel 21'
  },
  {
    number: 70,
    name: 'Weepinbell',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'Escupe un fluido disolvente para derretir a su presa. Una vez disuelta, la sorbe.',
    stats: { hp: 65, attack: 90, defense: 50, spAttack: 85, spDefense: 45, speed: 55 },
    evolution: 'Evoluciona a Victreebel con Piedra Hoja'
  },
  {
    number: 71,
    name: 'Victreebel',
    types: ['Planta', 'Veneno'],
    generation: 1,
    description: 'Atrae a las presas con su dulce aroma. El ácido disuelve cualquier cosa.',
    stats: { hp: 80, attack: 105, defense: 65, spAttack: 100, spDefense: 70, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 72,
    name: 'Tentacool',
    types: ['Agua', 'Veneno'],
    generation: 1,
    description: 'Su cuerpo está compuesto casi en su totalidad de agua. Absorbe la luz solar.',
    stats: { hp: 40, attack: 40, defense: 35, spAttack: 50, spDefense: 100, speed: 70 },
    evolution: 'Evoluciona a Tentacruel en nivel 30'
  },
  {
    number: 73,
    name: 'Tentacruel',
    types: ['Agua', 'Veneno'],
    generation: 1,
    description: 'Los tentáculos se pueden extender libremente. Capturan presas enredándolas.',
    stats: { hp: 80, attack: 70, defense: 65, spAttack: 80, spDefense: 120, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 74,
    name: 'Geodude',
    types: ['Roca', 'Tierra'],
    generation: 1,
    description: 'Se encuentra en senderos de montaña y sitios parecidos. Los viandantes los pisan sin querer.',
    stats: { hp: 40, attack: 80, defense: 100, spAttack: 30, spDefense: 30, speed: 20 },
    evolution: 'Evoluciona a Graveler en nivel 25'
  },
  {
    number: 75,
    name: 'Graveler',
    types: ['Roca', 'Tierra'],
    generation: 1,
    description: 'Rueda montaña abajo. Si encuentra obstáculos, los aparta a puñetazos.',
    stats: { hp: 55, attack: 95, defense: 115, spAttack: 45, spDefense: 45, speed: 35 },
    evolution: 'Evoluciona a Golem en nivel 37 (Easier Evolution)'
  },
  {
    number: 76,
    name: 'Golem',
    types: ['Roca', 'Tierra'],
    generation: 1,
    description: 'Su caparazón es extremadamente duro. Ni siquiera la dinamita puede dañarlo.',
    stats: { hp: 80, attack: 120, defense: 130, spAttack: 55, spDefense: 65, speed: 45 },
    evolution: 'No evoluciona'
  },
  {
    number: 77,
    name: 'Ponyta',
    types: ['Fuego'],
    generation: 1,
    description: 'Su crin ardiente se apaga cuando duerme. El fuego se vuelve más potente al crecer.',
    stats: { hp: 50, attack: 85, defense: 55, spAttack: 65, spDefense: 65, speed: 90 },
    evolution: 'Evoluciona a Rapidash en nivel 40'
  },
  {
    number: 78,
    name: 'Rapidash',
    types: ['Fuego'],
    generation: 1,
    description: 'Muy competitivo, perseguirá cualquier cosa que se mueva más rápido. Puede galopar a 240 km/h.',
    stats: { hp: 65, attack: 100, defense: 70, spAttack: 80, spDefense: 80, speed: 105 },
    evolution: 'No evoluciona'
  },
  {
    number: 79,
    name: 'Slowpoke',
    types: ['Agua', 'Psíquico'],
    generation: 1,
    description: 'Increíblemente lento y tonto. Tarda 5 segundos en sentir dolor.',
    stats: { hp: 90, attack: 65, defense: 65, spAttack: 40, spDefense: 40, speed: 15 },
    evolution: 'Evoluciona a Slowbro en nivel 37, o Slowking con intercambio + Roca del Rey (nivel 37 en Easier Evolution)'
  },
  {
    number: 80,
    name: 'Slowbro',
    types: ['Agua', 'Psíquico'],
    generation: 1,
    description: 'Cuando un Shellder muerde la cola de Slowpoke, este evoluciona. Increíblemente lento.',
    stats: { hp: 95, attack: 75, defense: 110, spAttack: 100, spDefense: 80, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 81,
    name: 'Magnemite',
    types: ['Eléctrico', 'Acero'],
    generation: 1,
    description: 'Levita usando ondas electromagnéticas. Emite ondas de alta frecuencia desde las unidades laterales.',
    stats: { hp: 25, attack: 35, defense: 70, spAttack: 95, spDefense: 55, speed: 45 },
    evolution: 'Evoluciona a Magneton en nivel 30'
  },
  {
    number: 82,
    name: 'Magneton',
    types: ['Eléctrico', 'Acero'],
    generation: 1,
    description: 'Tres Magnemite unidos. Genera poderosas ondas de radio que elevan la temperatura 2 grados en 1 km.',
    stats: { hp: 50, attack: 60, defense: 95, spAttack: 120, spDefense: 70, speed: 70 },
    evolution: 'Evoluciona a Magnezone subiendo nivel en Monte Corona (nivel 45 en Easier Evolution)'
  },
  {
    number: 83,
    name: "Farfetch'd",
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Siempre lleva un puerro. Lo usa como arma para cortar cosas y construir su nido.',
    stats: { hp: 52, attack: 90, defense: 55, spAttack: 58, spDefense: 62, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 84,
    name: 'Doduo',
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Sus dos cabezas representan alegría y tristeza alternativamente. Corre a 100 km/h.',
    stats: { hp: 35, attack: 85, defense: 45, spAttack: 35, spDefense: 35, speed: 75 },
    evolution: 'Evoluciona a Dodrio en nivel 31'
  },
  {
    number: 85,
    name: 'Dodrio',
    types: ['Normal', 'Volador'],
    generation: 1,
    description: 'Una de las cabezas duerme mientras las otras vigilan. Nunca duerme profundamente.',
    stats: { hp: 60, attack: 110, defense: 70, spAttack: 60, spDefense: 60, speed: 110 },
    evolution: 'No evoluciona'
  },
  {
    number: 86,
    name: 'Seel',
    types: ['Agua'],
    generation: 1,
    description: 'El cuerno en su cabeza es muy duro. Lo usa para romper icebergs.',
    stats: { hp: 65, attack: 45, defense: 55, spAttack: 45, spDefense: 70, speed: 45 },
    evolution: 'Evoluciona a Dewgong en nivel 34'
  },
  {
    number: 87,
    name: 'Dewgong',
    types: ['Agua', 'Hielo'],
    generation: 1,
    description: 'Su cuerpo está cubierto de piel blanca resbaladiza. Resiste temperaturas de -40°C.',
    stats: { hp: 90, attack: 70, defense: 80, spAttack: 70, spDefense: 95, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 88,
    name: 'Grimer',
    types: ['Veneno'],
    generation: 1,
    description: 'Nació del lodo contaminado del mar. Le gusta alimentarse de cosas inmundas.',
    stats: { hp: 80, attack: 80, defense: 50, spAttack: 40, spDefense: 50, speed: 25 },
    evolution: 'Evoluciona a Muk en nivel 38'
  },
  {
    number: 89,
    name: 'Muk',
    types: ['Veneno'],
    generation: 1,
    description: 'Tan tóxico que incluso sus huellas contienen veneno. Come cualquier basura.',
    stats: { hp: 105, attack: 105, defense: 75, spAttack: 65, spDefense: 100, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 90,
    name: 'Shellder',
    types: ['Agua'],
    generation: 1,
    description: 'Su caparazón es más duro que el diamante. En su interior, sin embargo, es sorprendentemente tierno.',
    stats: { hp: 30, attack: 65, defense: 100, spAttack: 45, spDefense: 25, speed: 40 },
    evolution: 'Evoluciona a Cloyster con Piedra Agua'
  },
  {
    number: 91,
    name: 'Cloyster',
    types: ['Agua', 'Hielo'],
    generation: 1,
    description: 'Una vez cerrado, es imposible abrirlo. Dispara púas si es atacado.',
    stats: { hp: 50, attack: 95, defense: 180, spAttack: 85, spDefense: 45, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 92,
    name: 'Gastly',
    types: ['Fantasma', 'Veneno'],
    generation: 1,
    description: 'Casi invisible, este Pokémon gaseoso ahoga a sus víctimas y las hace dormir.',
    stats: { hp: 30, attack: 35, defense: 30, spAttack: 100, spDefense: 35, speed: 80 },
    evolution: 'Evoluciona a Haunter en nivel 25'
  },
  {
    number: 93,
    name: 'Haunter',
    types: ['Fantasma', 'Veneno'],
    generation: 1,
    description: 'Su lengua fantasmal puede robar la vida. La gente evita entrar en las casas donde vive.',
    stats: { hp: 45, attack: 50, defense: 45, spAttack: 115, spDefense: 55, speed: 95 },
    evolution: 'Evoluciona a Gengar en nivel 37 (Easier Evolution)'
  },
  {
    number: 94,
    name: 'Gengar',
    types: ['Fantasma', 'Veneno'],
    generation: 1,
    description: 'Emerge de las sombras y absorbe el calor a su alrededor. Su presencia hace bajar la temperatura 5°C.',
    stats: { hp: 60, attack: 65, defense: 60, spAttack: 130, spDefense: 75, speed: 110 },
    evolution: 'No evoluciona'
  },
  {
    number: 95,
    name: 'Onix',
    types: ['Roca', 'Tierra'],
    generation: 1,
    description: 'Abre túneles bajo tierra a 80 km/h. Se endurece con la edad.',
    stats: { hp: 35, attack: 45, defense: 160, spAttack: 30, spDefense: 45, speed: 70 },
    evolution: 'Evoluciona a Steelix con intercambio + Metal Coat (nivel 37 en Easier Evolution)'
  },
  {
    number: 96,
    name: 'Drowzee',
    types: ['Psíquico'],
    generation: 1,
    description: 'Se alimenta de los sueños de las personas. Si comes justo antes de dormir, Drowzee te mostrará el sueño que acabas de tener.',
    stats: { hp: 60, attack: 48, defense: 45, spAttack: 43, spDefense: 90, speed: 42 },
    evolution: 'Evoluciona a Hypno en nivel 26'
  },
  {
    number: 97,
    name: 'Hypno',
    types: ['Psíquico'],
    generation: 1,
    description: 'Lleva un péndulo en la mano. Una vez, se llevó a un niño que hipnotizó.',
    stats: { hp: 85, attack: 73, defense: 70, spAttack: 73, spDefense: 115, speed: 67 },
    evolution: 'No evoluciona'
  },
  {
    number: 98,
    name: 'Krabby',
    types: ['Agua'],
    generation: 1,
    description: 'Sus pinzas no solo son armas poderosas, también se usan para mantener el equilibrio.',
    stats: { hp: 30, attack: 105, defense: 90, spAttack: 25, spDefense: 25, speed: 50 },
    evolution: 'Evoluciona a Kingler en nivel 28'
  },
  {
    number: 99,
    name: 'Kingler',
    types: ['Agua'],
    generation: 1,
    description: 'Su pinza es tan fuerte que puede aplastar cualquier cosa. Sin embargo, es demasiado grande y difícil de mover.',
    stats: { hp: 55, attack: 130, defense: 115, spAttack: 50, spDefense: 50, speed: 75 },
    evolution: 'No evoluciona'
  },
  {
    number: 100,
    name: 'Voltorb',
    types: ['Eléctrico'],
    generation: 1,
    description: 'Suele encontrarse en centrales eléctricas. Se confunde fácilmente con una Poké Ball.',
    stats: { hp: 40, attack: 30, defense: 50, spAttack: 55, spDefense: 55, speed: 100 },
    evolution: 'Evoluciona a Electrode en nivel 30'
  },
  {
    number: 101,
    name: 'Electrode',
    types: ['Eléctrico'],
    generation: 1,
    description: 'Almacena energía eléctrica. Si se sobrecarga, explota sin previo aviso.',
    stats: { hp: 60, attack: 50, defense: 70, spAttack: 80, spDefense: 80, speed: 150 },
    evolution: 'No evoluciona'
  },
  {
    number: 102,
    name: 'Exeggcute',
    types: ['Planta', 'Psíquico'],
    generation: 1,
    description: 'Seis huevos que se comunican por telepatía. Se dice que tiene seis caras diferentes.',
    stats: { hp: 60, attack: 40, defense: 80, spAttack: 60, spDefense: 45, speed: 40 },
    evolution: 'Evoluciona a Exeggutor con Piedra Hoja'
  },
  {
    number: 103,
    name: 'Exeggutor',
    types: ['Planta', 'Psíquico'],
    generation: 1,
    description: 'Sus tres cabezas piensan independientemente. Sin embargo, son amigables y nunca se pelean.',
    stats: { hp: 95, attack: 95, defense: 85, spAttack: 125, spDefense: 75, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 104,
    name: 'Cubone',
    types: ['Tierra'],
    generation: 1,
    description: 'Lleva el cráneo de su madre fallecida. Se dice que llora solitario bajo la luna.',
    stats: { hp: 50, attack: 50, defense: 95, spAttack: 40, spDefense: 50, speed: 35 },
    evolution: 'Evoluciona a Marowak en nivel 28'
  },
  {
    number: 105,
    name: 'Marowak',
    types: ['Tierra'],
    generation: 1,
    description: 'Ha superado la pena por su madre. Ahora es más fuerte. Su hueso es un arma formidable.',
    stats: { hp: 60, attack: 80, defense: 110, spAttack: 50, spDefense: 80, speed: 45 },
    evolution: 'No evoluciona'
  },
  {
    number: 106,
    name: 'Hitmonlee',
    types: ['Lucha'],
    generation: 1,
    description: 'Las patas se estiran libremente. Cuando está en apuros, patea sin parar.',
    stats: { hp: 50, attack: 120, defense: 53, spAttack: 35, spDefense: 110, speed: 87 },
    evolution: 'No evoluciona'
  },
  {
    number: 107,
    name: 'Hitmonchan',
    types: ['Lucha'],
    generation: 1,
    description: 'Especializado en golpes de puño. Sus puños vuelan a la velocidad del sonido.',
    stats: { hp: 50, attack: 105, defense: 79, spAttack: 35, spDefense: 110, speed: 76 },
    evolution: 'No evoluciona'
  },
  {
    number: 108,
    name: 'Lickitung',
    types: ['Normal'],
    generation: 1,
    description: 'Su lengua mide más de 2 metros. Se mueve como un brazo. La saliva causa parálisis.',
    stats: { hp: 90, attack: 55, defense: 75, spAttack: 60, spDefense: 75, speed: 30 },
    evolution: 'Evoluciona a Lickilicky al subir nivel conociendo Rollout (nivel 33 en Easier Evolution)'
  },
  {
    number: 109,
    name: 'Koffing',
    types: ['Veneno'],
    generation: 1,
    description: 'Su delgado y frágil cuerpo está lleno de gas venenoso. Puede explotar sin aviso.',
    stats: { hp: 40, attack: 65, defense: 95, spAttack: 60, spDefense: 45, speed: 35 },
    evolution: 'Evoluciona a Weezing en nivel 35'
  },
  {
    number: 110,
    name: 'Weezing',
    types: ['Veneno'],
    generation: 1,
    description: 'Combina dos Koffing. Ocasionalmente explota uno de los gemelos causando detonación.',
    stats: { hp: 65, attack: 90, defense: 120, spAttack: 85, spDefense: 70, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 111,
    name: 'Rhyhorn',
    types: ['Tierra', 'Roca'],
    generation: 1,
    description: 'Su cerebro es muy pequeño. Embiste sin pensar y derriba cualquier cosa.',
    stats: { hp: 80, attack: 85, defense: 95, spAttack: 30, spDefense: 30, speed: 25 },
    evolution: 'Evoluciona a Rhydon en nivel 42'
  },
  {
    number: 112,
    name: 'Rhydon',
    types: ['Tierra', 'Roca'],
    generation: 1,
    description: 'Camina sobre sus patas traseras. Su cuerno puede pulverizar incluso diamantes.',
    stats: { hp: 105, attack: 130, defense: 120, spAttack: 45, spDefense: 45, speed: 40 },
    evolution: 'Evoluciona a Rhyperior con intercambio + Protector (nivel 55 en Easier Evolution)'
  },
  {
    number: 113,
    name: 'Chansey',
    types: ['Normal'],
    generation: 1,
    description: 'Lleva un huevo lleno de felicidad. Camina cuidadosamente para no romperlo.',
    stats: { hp: 250, attack: 5, defense: 5, spAttack: 35, spDefense: 105, speed: 50 },
    evolution: 'Evoluciona a Blissey con alta amistad'
  },
  {
    number: 114,
    name: 'Tangela',
    types: ['Planta'],
    generation: 1,
    description: 'Todo su cuerpo está oculto por lianas azules. Nadie sabe qué hay debajo.',
    stats: { hp: 65, attack: 55, defense: 115, spAttack: 100, spDefense: 40, speed: 60 },
    evolution: 'Evoluciona a Tangrowth al subir nivel conociendo Ancient Power (nivel 33 en Easier Evolution)'
  },
  {
    number: 115,
    name: 'Kangaskhan',
    types: ['Normal'],
    generation: 1,
    description: 'La madre no duerme hasta que su cría pueda valerse por sí misma.',
    stats: { hp: 105, attack: 95, defense: 80, spAttack: 40, spDefense: 80, speed: 90 },
    evolution: 'No evoluciona'
  },
  {
    number: 116,
    name: 'Horsea',
    types: ['Agua'],
    generation: 1,
    description: 'Vive en aguas tranquilas. Mueve la aleta dorsal para nadar en cualquier dirección.',
    stats: { hp: 30, attack: 40, defense: 70, spAttack: 70, spDefense: 25, speed: 60 },
    evolution: 'Evoluciona a Seadra en nivel 32'
  },
  {
    number: 117,
    name: 'Seadra',
    types: ['Agua'],
    generation: 1,
    description: 'Sus afiladas púas lo protegen. Hiere a quien lo toca. El veneno es potente.',
    stats: { hp: 55, attack: 65, defense: 95, spAttack: 95, spDefense: 45, speed: 85 },
    evolution: 'Evoluciona a Kingdra con intercambio + Escama Dragón (nivel 45 en Easier Evolution)'
  },
  {
    number: 118,
    name: 'Goldeen',
    types: ['Agua'],
    generation: 1,
    description: 'Su aleta caudal ondula elegantemente como un velo. Se le llama la Reina del Agua.',
    stats: { hp: 45, attack: 67, defense: 60, spAttack: 35, spDefense: 50, speed: 63 },
    evolution: 'Evoluciona a Seaking en nivel 33'
  },
  {
    number: 119,
    name: 'Seaking',
    types: ['Agua'],
    generation: 1,
    description: 'En otoño, los machos dan un espectáculo danzante. La hembra elige al mejor.',
    stats: { hp: 80, attack: 92, defense: 65, spAttack: 65, spDefense: 80, speed: 68 },
    evolution: 'No evoluciona'
  },
  {
    number: 120,
    name: 'Staryu',
    types: ['Agua'],
    generation: 1,
    description: 'Mientras su núcleo rojo brille, puede regenerar partes perdidas de su cuerpo.',
    stats: { hp: 30, attack: 45, defense: 55, spAttack: 70, spDefense: 55, speed: 85 },
    evolution: 'Evoluciona a Starmie con Piedra Agua'
  },
  {
    number: 121,
    name: 'Starmie',
    types: ['Agua', 'Psíquico'],
    generation: 1,
    description: 'Su núcleo central brilla en siete colores. Es valorado como joya.',
    stats: { hp: 60, attack: 75, defense: 85, spAttack: 100, spDefense: 85, speed: 115 },
    evolution: 'No evoluciona'
  },
  {
    number: 122,
    name: 'Mr. Mime',
    types: ['Psíquico', 'Hada'],
    generation: 1,
    description: 'Si lo interrumpen mientras hace mímica, te abofeteará con sus enormes manos.',
    stats: { hp: 40, attack: 45, defense: 65, spAttack: 100, spDefense: 120, speed: 90 },
    evolution: 'No evoluciona'
  },
  {
    number: 123,
    name: 'Scyther',
    types: ['Bicho', 'Volador'],
    generation: 1,
    description: 'Con movimientos ninja, corta a su presa. Rara vez usa las alas para volar.',
    stats: { hp: 70, attack: 110, defense: 80, spAttack: 55, spDefense: 80, speed: 105 },
    evolution: 'Evoluciona a Scizor con intercambio + Metal Coat (nivel 37 en Easier Evolution)'
  },
  {
    number: 124,
    name: 'Jynx',
    types: ['Hielo', 'Psíquico'],
    generation: 1,
    description: 'Camina rítmicamente, balanceando las caderas como si bailara. Sus movimientos son tan cautivadores que la gente no puede evitar bailar también.',
    stats: { hp: 65, attack: 50, defense: 35, spAttack: 115, spDefense: 95, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 125,
    name: 'Electabuzz',
    types: ['Eléctrico'],
    generation: 1,
    description: 'Se encuentra cerca de centrales eléctricas. Puede causar apagones si se acerca a una ciudad.',
    stats: { hp: 65, attack: 83, defense: 57, spAttack: 95, spDefense: 85, speed: 105 },
    evolution: 'Evoluciona a Electivire con intercambio + Electrizador (nivel 45 en Easier Evolution)'
  },
  {
    number: 126,
    name: 'Magmar',
    types: ['Fuego'],
    generation: 1,
    description: 'Su cuerpo siempre arde. Tiene que enfriarse en volcanes activos.',
    stats: { hp: 65, attack: 95, defense: 57, spAttack: 100, spDefense: 85, speed: 93 },
    evolution: 'Evoluciona a Magmortar con intercambio + Magmatizador (nivel 45 en Easier Evolution)'
  },
  {
    number: 127,
    name: 'Pinsir',
    types: ['Bicho'],
    generation: 1,
    description: 'Sus dos cuernos pueden romper lo que sea. Odia el frío y se refugia en climas cálidos.',
    stats: { hp: 65, attack: 125, defense: 100, spAttack: 55, spDefense: 70, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 128,
    name: 'Tauros',
    types: ['Normal'],
    generation: 1,
    description: 'Cuando azota sus tres colas, es señal de que está a punto de cargar.',
    stats: { hp: 75, attack: 100, defense: 95, spAttack: 40, spDefense: 70, speed: 110 },
    evolution: 'No evoluciona'
  },
  {
    number: 129,
    name: 'Magikarp',
    types: ['Agua'],
    generation: 1,
    description: 'Famoso por ser muy débil. Incluso los Pokémon más pequeños pueden derrotarlo fácilmente.',
    stats: { hp: 20, attack: 10, defense: 55, spAttack: 15, spDefense: 20, speed: 80 },
    evolution: 'Evoluciona a Gyarados en nivel 20'
  },
  {
    number: 130,
    name: 'Gyarados',
    types: ['Agua', 'Volador'],
    generation: 1,
    description: 'Cuando enfurece puede destruir ciudades enteras. Su furia es destructiva.',
    stats: { hp: 95, attack: 125, defense: 79, spAttack: 60, spDefense: 100, speed: 81 },
    evolution: 'No evoluciona'
  },
  {
    number: 131,
    name: 'Lapras',
    types: ['Agua', 'Hielo'],
    generation: 1,
    description: 'Un Pokémon gentil y muy inteligente. Lleva gente en su espalda a través del mar.',
    stats: { hp: 130, attack: 85, defense: 80, spAttack: 85, spDefense: 95, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 132,
    name: 'Ditto',
    types: ['Normal'],
    generation: 1,
    description: 'Puede reorganizar sus células para transformarse en cualquier cosa que vea.',
    stats: { hp: 48, attack: 48, defense: 48, spAttack: 48, spDefense: 48, speed: 48 },
    evolution: 'No evoluciona'
  },
  {
    number: 133,
    name: 'Eevee',
    types: ['Normal'],
    generation: 1,
    description: 'Su irregularidad genética le permite evolucionar de múltiples formas.',
    stats: { hp: 55, attack: 55, defense: 50, spAttack: 45, spDefense: 65, speed: 55 },
    evolution: 'Evoluciona con piedras: Vaporeon (Agua), Jolteon (Trueno), Flareon (Fuego), Espeon (Sol), Umbreon (Luna), Leafeon (Hoja), Glaceon (Hielo), Sylveon (Alba)'
  },
  {
    number: 134,
    name: 'Vaporeon',
    types: ['Agua'],
    generation: 1,
    description: 'Su estructura celular es similar al agua. Puede fundirse con el agua.',
    stats: { hp: 130, attack: 65, defense: 60, spAttack: 110, spDefense: 95, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 135,
    name: 'Jolteon',
    types: ['Eléctrico'],
    generation: 1,
    description: 'Acumula iones negativos en la atmósfera para disparar rayos de 10000 voltios.',
    stats: { hp: 65, attack: 65, defense: 60, spAttack: 110, spDefense: 95, speed: 130 },
    evolution: 'No evoluciona'
  },
  {
    number: 136,
    name: 'Flareon',
    types: ['Fuego'],
    generation: 1,
    description: 'Almacena llamas en su cuerpo que pueden alcanzar 900°C antes de lanzarlas.',
    stats: { hp: 65, attack: 130, defense: 60, spAttack: 95, spDefense: 110, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 137,
    name: 'Porygon',
    types: ['Normal'],
    generation: 1,
    description: 'Un Pokémon hecho por humanos usando tecnología avanzada. Puede viajar por el ciberespacio.',
    stats: { hp: 65, attack: 60, defense: 70, spAttack: 85, spDefense: 75, speed: 40 },
    evolution: 'Evoluciona a Porygon2 con intercambio + Mejora (nivel 30 en Easier Evolution)'
  },
  {
    number: 138,
    name: 'Omanyte',
    types: ['Roca', 'Agua'],
    generation: 1,
    description: 'Pokémon antiguo resucitado de un fósil. Nada retorciendo sus 10 tentáculos.',
    stats: { hp: 35, attack: 40, defense: 100, spAttack: 90, spDefense: 55, speed: 35 },
    evolution: 'Evoluciona a Omastar en nivel 40'
  },
  {
    number: 139,
    name: 'Omastar',
    types: ['Roca', 'Agua'],
    generation: 1,
    description: 'Un Pokémon prehistórico. Su caparazón se volvió demasiado grande y pesado, causando su extinción.',
    stats: { hp: 70, attack: 60, defense: 125, spAttack: 115, spDefense: 70, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 140,
    name: 'Kabuto',
    types: ['Roca', 'Agua'],
    generation: 1,
    description: 'Un Pokémon resucitado de un fósil. Se esconde en su caparazón cuando es atacado.',
    stats: { hp: 30, attack: 80, defense: 90, spAttack: 55, spDefense: 45, speed: 55 },
    evolution: 'Evoluciona a Kabutops en nivel 40'
  },
  {
    number: 141,
    name: 'Kabutops',
    types: ['Roca', 'Agua'],
    generation: 1,
    description: 'Sus garras afiladas como navajas pueden cortar a su presa. Nada extremadamente rápido.',
    stats: { hp: 60, attack: 115, defense: 105, spAttack: 65, spDefense: 70, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 142,
    name: 'Aerodactyl',
    types: ['Roca', 'Volador'],
    generation: 1,
    description: 'Un salvaje Pokémon prehistórico. Vuela gritando estridentemente.',
    stats: { hp: 80, attack: 105, defense: 65, spAttack: 60, spDefense: 75, speed: 130 },
    evolution: 'No evoluciona'
  },
  {
    number: 143,
    name: 'Snorlax',
    types: ['Normal'],
    generation: 1,
    description: 'No está satisfecho hasta no comer 400 kg de comida al día. Después duerme.',
    stats: { hp: 160, attack: 110, defense: 65, spAttack: 65, spDefense: 110, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 144,
    name: 'Articuno',
    types: ['Hielo', 'Volador'],
    generation: 1,
    description: 'Ave legendaria que puede controlar el hielo. Crea ventiscas al agitar sus alas.',
    stats: { hp: 90, attack: 85, defense: 100, spAttack: 95, spDefense: 125, speed: 85 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 145,
    name: 'Zapdos',
    types: ['Eléctrico', 'Volador'],
    generation: 1,
    description: 'Ave legendaria que controla la electricidad. Aparece cuando caen rayos.',
    stats: { hp: 90, attack: 90, defense: 85, spAttack: 125, spDefense: 90, speed: 100 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 146,
    name: 'Moltres',
    types: ['Fuego', 'Volador'],
    generation: 1,
    description: 'Ave legendaria que controla el fuego. Cuando agita sus alas lanza llamaradas.',
    stats: { hp: 90, attack: 100, defense: 90, spAttack: 125, spDefense: 85, speed: 90 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 147,
    name: 'Dratini',
    types: ['Dragón'],
    generation: 1,
    description: 'Acumula energía en su interior. Se dice que puede cambiar el clima.',
    stats: { hp: 41, attack: 64, defense: 45, spAttack: 50, spDefense: 50, speed: 50 },
    evolution: 'Evoluciona a Dragonair en nivel 30'
  },
  {
    number: 148,
    name: 'Dragonair',
    types: ['Dragón'],
    generation: 1,
    description: 'Emite una aura de lo más singular. Dicen que puede controlar el clima.',
    stats: { hp: 61, attack: 84, defense: 65, spAttack: 70, spDefense: 70, speed: 70 },
    evolution: 'Evoluciona a Dragonite en nivel 55'
  },
  {
    number: 149,
    name: 'Dragonite',
    types: ['Dragón', 'Volador'],
    generation: 1,
    description: 'Es tan bondadoso que si ve a un Pokémon o una persona ahogándose, los rescata.',
    stats: { hp: 91, attack: 134, defense: 95, spAttack: 100, spDefense: 100, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 150,
    name: 'Mewtwo',
    types: ['Psíquico'],
    generation: 1,
    description: 'Pokémon creado por ingeniería genética. Su corazón es de lo más cruel.',
    stats: { hp: 106, attack: 110, defense: 90, spAttack: 154, spDefense: 90, speed: 130 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 151,
    name: 'Mew',
    types: ['Psíquico'],
    generation: 1,
    description: 'Dicen que posee el código genético de todos los Pokémon. Puede aprender cualquier movimiento.',
    stats: { hp: 100, attack: 100, defense: 100, spAttack: 100, spDefense: 100, speed: 100 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 152,
    name: 'Chikorita',
    types: ['Planta'],
    generation: 2,
    description: 'Su hoja desprende un dulce aroma que calma a quien lucha. Huele a sol.',
    stats: { hp: 45, attack: 49, defense: 65, spAttack: 49, spDefense: 65, speed: 45 },
    evolution: 'Evoluciona a Bayleef en nivel 16'
  },
  {
    number: 153,
    name: 'Bayleef',
    types: ['Planta'],
    generation: 2,
    description: 'El aroma de su hoja tiene efectos revitalizantes en quien lo inhala.',
    stats: { hp: 60, attack: 62, defense: 80, spAttack: 63, spDefense: 80, speed: 60 },
    evolution: 'Evoluciona a Meganium en nivel 32'
  },
  {
    number: 154,
    name: 'Meganium',
    types: ['Planta'],
    generation: 2,
    description: 'La fragancia de su flor puede calmar los instintos violentos.',
    stats: { hp: 80, attack: 82, defense: 100, spAttack: 83, spDefense: 100, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 155,
    name: 'Cyndaquil',
    types: ['Fuego'],
    generation: 2,
    description: 'Se protege con las llamas que emite por el lomo. Cuando está enojado, arden con fuerza.',
    stats: { hp: 39, attack: 52, defense: 43, spAttack: 60, spDefense: 50, speed: 65 },
    evolution: 'Evoluciona a Quilava en nivel 14'
  },
  {
    number: 156,
    name: 'Quilava',
    types: ['Fuego'],
    generation: 2,
    description: 'Calma las llamas de su espalda para ocultar su presencia cuando acecha.',
    stats: { hp: 58, attack: 64, defense: 58, spAttack: 80, spDefense: 65, speed: 80 },
    evolution: 'Evoluciona a Typhlosion en nivel 36'
  },
  {
    number: 157,
    name: 'Typhlosion',
    types: ['Fuego'],
    generation: 2,
    description: 'Crea columnas de fuego giratorias que calcinan todo a su alrededor.',
    stats: { hp: 78, attack: 84, defense: 78, spAttack: 109, spDefense: 85, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 158,
    name: 'Totodile',
    types: ['Agua'],
    generation: 2,
    description: 'Sus potentes mandíbulas pueden triturar cualquier cosa. No suelta a su presa.',
    stats: { hp: 50, attack: 65, defense: 64, spAttack: 44, spDefense: 48, speed: 43 },
    evolution: 'Evoluciona a Croconaw en nivel 18'
  },
  {
    number: 159,
    name: 'Croconaw',
    types: ['Agua'],
    generation: 2,
    description: 'Una vez que muerde algo, no lo suelta. Sus colmillos son huecos y afilados.',
    stats: { hp: 65, attack: 80, defense: 80, spAttack: 59, spDefense: 63, speed: 58 },
    evolution: 'Evoluciona a Feraligatr en nivel 30'
  },
  {
    number: 160,
    name: 'Feraligatr',
    types: ['Agua'],
    generation: 2,
    description: 'Intimida con su enorme boca y cuerpo. Solo un golpe de su colosal cola puede pulverizar una casa.',
    stats: { hp: 85, attack: 105, defense: 100, spAttack: 79, spDefense: 83, speed: 78 },
    evolution: 'No evoluciona'
  },
  {
    number: 161,
    name: 'Sentret',
    types: ['Normal'],
    generation: 2,
    description: 'Se yergue sobre su cola para explorar. Si detecta peligro, grita para alertar a otros.',
    stats: { hp: 35, attack: 46, defense: 34, spAttack: 35, spDefense: 45, speed: 20 },
    evolution: 'Evoluciona a Furret en nivel 15'
  },
  {
    number: 162,
    name: 'Furret',
    types: ['Normal'],
    generation: 2,
    description: 'Hace nidos en lugares estrechos. Si es atacado, golpea con su larga cola.',
    stats: { hp: 85, attack: 76, defense: 64, spAttack: 45, spDefense: 55, speed: 90 },
    evolution: 'No evoluciona'
  },
  {
    number: 163,
    name: 'Hoothoot',
    types: ['Normal', 'Volador'],
    generation: 2,
    description: 'Siempre se para sobre una pata. Cambia de pata tan rápido que apenas se nota.',
    stats: { hp: 60, attack: 30, defense: 30, spAttack: 36, spDefense: 56, speed: 50 },
    evolution: 'Evoluciona a Noctowl en nivel 20'
  },
  {
    number: 164,
    name: 'Noctowl',
    types: ['Normal', 'Volador'],
    generation: 2,
    description: 'Sus ojos son especiales. Puede ver en la más completa oscuridad como si fuera de día.',
    stats: { hp: 100, attack: 50, defense: 50, spAttack: 86, spDefense: 96, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 165,
    name: 'Ledyba',
    types: ['Bicho', 'Volador'],
    generation: 2,
    description: 'Es muy tímido. Se comunica con otros usando aromas y ondas de sus antenas.',
    stats: { hp: 40, attack: 35, defense: 30, spAttack: 55, spDefense: 110, speed: 55 },
    evolution: 'Evoluciona a Ledian en nivel 18'
  },
  {
    number: 166,
    name: 'Ledian',
    types: ['Bicho', 'Volador'],
    generation: 2,
    description: 'Cuando las estrellas parpadean en el cielo nocturno, vuela dispersando polvo brillante.',
    stats: { hp: 55, attack: 35, defense: 50, spAttack: 55, spDefense: 110, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 167,
    name: 'Spinarak',
    types: ['Bicho', 'Veneno'],
    generation: 2,
    description: 'Teje una red y espera pacientemente a que caiga una presa. Puede esperar días.',
    stats: { hp: 40, attack: 60, defense: 40, spAttack: 40, spDefense: 40, speed: 30 },
    evolution: 'Evoluciona a Ariados en nivel 22'
  },
  {
    number: 168,
    name: 'Ariados',
    types: ['Bicho', 'Veneno'],
    generation: 2,
    description: 'Teje telarañas con hilo fino pero resistente. Caza de noche.',
    stats: { hp: 70, attack: 90, defense: 70, spAttack: 60, spDefense: 70, speed: 40 },
    evolution: 'No evoluciona'
  },
  {
    number: 169,
    name: 'Crobat',
    types: ['Veneno', 'Volador'],
    generation: 2,
    description: 'Sus cuatro alas le permiten volar más rápido y silenciosamente. Vuela sin descanso.',
    stats: { hp: 85, attack: 90, defense: 80, spAttack: 70, spDefense: 80, speed: 130 },
    evolution: 'No evoluciona'
  },
  {
    number: 170,
    name: 'Chinchou',
    types: ['Agua', 'Eléctrico'],
    generation: 2,
    description: 'Sus dos antenas brillan para comunicarse. La intensidad de la luz indica sus emociones.',
    stats: { hp: 75, attack: 38, defense: 38, spAttack: 56, spDefense: 56, speed: 67 },
    evolution: 'Evoluciona a Lanturn en nivel 27'
  },
  {
    number: 171,
    name: 'Lanturn',
    types: ['Agua', 'Eléctrico'],
    generation: 2,
    description: 'La luz de su antena puede iluminar el fondo del mar. Es conocido como la Estrella del Fondo del Mar.',
    stats: { hp: 125, attack: 58, defense: 58, spAttack: 76, spDefense: 76, speed: 67 },
    evolution: 'No evoluciona'
  },
  {
    number: 172,
    name: 'Pichu',
    types: ['Eléctrico'],
    generation: 2,
    description: 'No es bueno almacenando electricidad. Si se divierte, libera energía sin querer.',
    stats: { hp: 20, attack: 40, defense: 15, spAttack: 35, spDefense: 35, speed: 60 },
    evolution: 'Evoluciona a Pikachu con alta amistad'
  },
  {
    number: 173,
    name: 'Cleffa',
    types: ['Hada'],
    generation: 2,
    description: 'Su cuerpo con forma de estrella brilla débilmente. Se dice que llegó del espacio.',
    stats: { hp: 50, attack: 25, defense: 28, spAttack: 45, spDefense: 55, speed: 15 },
    evolution: 'Evoluciona a Clefairy con alta amistad'
  },
  {
    number: 174,
    name: 'Igglybuff',
    types: ['Normal', 'Hada'],
    generation: 2,
    description: 'Tiene una textura elástica. Si empieza a rebotar, no puede parar.',
    stats: { hp: 90, attack: 30, defense: 15, spAttack: 40, spDefense: 20, speed: 15 },
    evolution: 'Evoluciona a Jigglypuff con alta amistad'
  },
  {
    number: 175,
    name: 'Togepi',
    types: ['Hada'],
    generation: 2,
    description: 'Se dice que trae buena suerte. Su caparazón está lleno de alegría.',
    stats: { hp: 35, attack: 20, defense: 65, spAttack: 40, spDefense: 65, speed: 20 },
    evolution: 'Evoluciona a Togetic con alta amistad'
  },
  {
    number: 176,
    name: 'Togetic',
    types: ['Hada', 'Volador'],
    generation: 2,
    description: 'Se dice que aparece ante gente bondadosa y les comparte su felicidad.',
    stats: { hp: 55, attack: 40, defense: 85, spAttack: 80, spDefense: 105, speed: 40 },
    evolution: 'Evoluciona a Togekiss con Piedra Alba'
  },
  {
    number: 177,
    name: 'Natu',
    types: ['Psíquico', 'Volador'],
    generation: 2,
    description: 'Apenas puede volar. Salta de rama en rama usando sus patas desarrolladas.',
    stats: { hp: 40, attack: 50, defense: 45, spAttack: 70, spDefense: 45, speed: 70 },
    evolution: 'Evoluciona a Xatu en nivel 25'
  },
  {
    number: 178,
    name: 'Xatu',
    types: ['Psíquico', 'Volador'],
    generation: 2,
    description: 'Mira fijamente al sol todo el día. Dicen que puede ver el pasado y el futuro.',
    stats: { hp: 65, attack: 75, defense: 70, spAttack: 95, spDefense: 70, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 179,
    name: 'Mareep',
    types: ['Eléctrico'],
    generation: 2,
    description: 'Su lana esponjosa genera electricidad estática fácilmente. Crece el doble en verano.',
    stats: { hp: 55, attack: 40, defense: 40, spAttack: 65, spDefense: 45, speed: 35 },
    evolution: 'Evoluciona a Flaaffy en nivel 15'
  },
  {
    number: 180,
    name: 'Flaaffy',
    types: ['Eléctrico'],
    generation: 2,
    description: 'Su lana almacena electricidad estática. La punta de su cola brilla cuando está cargada.',
    stats: { hp: 70, attack: 55, defense: 55, spAttack: 80, spDefense: 60, speed: 45 },
    evolution: 'Evoluciona a Ampharos en nivel 30'
  },
  {
    number: 181,
    name: 'Ampharos',
    types: ['Eléctrico'],
    generation: 2,
    description: 'La luz de su cola es tan brillante que puede verse desde el espacio. Se usa como baliza.',
    stats: { hp: 90, attack: 75, defense: 85, spAttack: 115, spDefense: 90, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 182,
    name: 'Bellossom',
    types: ['Planta'],
    generation: 2,
    description: 'Cuando hace sol, las hojas de su cabeza giran. Es muy activo durante el día.',
    stats: { hp: 75, attack: 80, defense: 95, spAttack: 90, spDefense: 100, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 183,
    name: 'Marill',
    types: ['Agua', 'Hada'],
    generation: 2,
    description: 'Su cola actúa como flotador. Puede nadar en ríos rápidos sin ser arrastrado.',
    stats: { hp: 70, attack: 20, defense: 50, spAttack: 20, spDefense: 50, speed: 40 },
    evolution: 'Evoluciona a Azumarill en nivel 18'
  },
  {
    number: 184,
    name: 'Azumarill',
    types: ['Agua', 'Hada'],
    generation: 2,
    description: 'Puede hacer burbujas de aire para rescatar a Pokémon que se están ahogando.',
    stats: { hp: 100, attack: 50, defense: 80, spAttack: 60, spDefense: 80, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 185,
    name: 'Sudowoodo',
    types: ['Roca'],
    generation: 2,
    description: 'Se camufla como un árbol. Odia el agua, así que huye cuando llueve.',
    stats: { hp: 70, attack: 100, defense: 115, spAttack: 30, spDefense: 65, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 186,
    name: 'Politoed',
    types: ['Agua'],
    generation: 2,
    description: 'Cuando tres o más de estos gritan, llueve. Se le conoce como el Llamador de Lluvia.',
    stats: { hp: 90, attack: 75, defense: 75, spAttack: 90, spDefense: 100, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 187,
    name: 'Hoppip',
    types: ['Planta', 'Volador'],
    generation: 2,
    description: 'Es tan ligero que el viento lo lleva. Cuando sopla fuerte, se agrupa con otros.',
    stats: { hp: 35, attack: 35, defense: 40, spAttack: 35, spDefense: 55, speed: 50 },
    evolution: 'Evoluciona a Skiploom en nivel 18'
  },
  {
    number: 188,
    name: 'Skiploom',
    types: ['Planta', 'Volador'],
    generation: 2,
    description: 'La flor de su cabeza se abre y cierra según la temperatura. Se abre en días cálidos.',
    stats: { hp: 55, attack: 45, defense: 50, spAttack: 45, spDefense: 65, speed: 80 },
    evolution: 'Evoluciona a Jumpluff en nivel 27'
  },
  {
    number: 189,
    name: 'Jumpluff',
    types: ['Planta', 'Volador'],
    generation: 2,
    description: 'Flota en el viento. Si detecta que se acerca una tormenta, se agarra firmemente al suelo.',
    stats: { hp: 75, attack: 55, defense: 70, spAttack: 55, spDefense: 95, speed: 110 },
    evolution: 'No evoluciona'
  },
  {
    number: 190,
    name: 'Aipom',
    types: ['Normal'],
    generation: 2,
    description: 'Usa su cola como una mano. Su cola es tan hábil que apenas usa sus verdaderas manos.',
    stats: { hp: 55, attack: 70, defense: 55, spAttack: 40, spDefense: 55, speed: 85 },
    evolution: 'Evoluciona a Ambipom al subir nivel conociendo Double Hit (nivel 32 en Easier Evolution)'
  },
  {
    number: 191,
    name: 'Sunkern',
    types: ['Planta'],
    generation: 2,
    description: 'Cae del cielo sin razón aparente. No puede hacer más que sacudirse desesperadamente.',
    stats: { hp: 30, attack: 30, defense: 30, spAttack: 30, spDefense: 30, speed: 30 },
    evolution: 'Evoluciona a Sunflora con Piedra Solar'
  },
  {
    number: 192,
    name: 'Sunflora',
    types: ['Planta'],
    generation: 2,
    description: 'Convierte la luz solar en energía. Es más activo durante el día soleado.',
    stats: { hp: 75, attack: 75, defense: 55, spAttack: 105, spDefense: 85, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 193,
    name: 'Yanma',
    types: ['Bicho', 'Volador'],
    generation: 2,
    description: 'Puede ver 360 grados sin mover los ojos. Es experto evitando ataques.',
    stats: { hp: 65, attack: 65, defense: 45, spAttack: 75, spDefense: 45, speed: 95 },
    evolution: 'Evoluciona a Yanmega al subir nivel conociendo Ancient Power (nivel 33 en Easier Evolution)'
  },
  {
    number: 194,
    name: 'Wooper',
    types: ['Agua', 'Tierra'],
    generation: 2,
    description: 'Vive en agua fría. Sale a tierra en busca de comida cuando hace frío.',
    stats: { hp: 55, attack: 45, defense: 45, spAttack: 25, spDefense: 25, speed: 15 },
    evolution: 'Evoluciona a Quagsire en nivel 20'
  },
  {
    number: 195,
    name: 'Quagsire',
    types: ['Agua', 'Tierra'],
    generation: 2,
    description: 'Es descuidado y despreocupado. Choca su cabeza contra rocas y botes sin darse cuenta.',
    stats: { hp: 95, attack: 85, defense: 85, spAttack: 65, spDefense: 65, speed: 35 },
    evolution: 'No evoluciona'
  },
  {
    number: 196,
    name: 'Espeon',
    types: ['Psíquico'],
    generation: 2,
    description: 'Es extremadamente leal. Se dice que desarrolló poderes psíquicos para proteger a su entrenador.',
    stats: { hp: 65, attack: 65, defense: 60, spAttack: 130, spDefense: 95, speed: 110 },
    evolution: 'No evoluciona'
  },
  {
    number: 197,
    name: 'Umbreon',
    types: ['Siniestro'],
    generation: 2,
    description: 'Cuando salta a atacar, sus anillos brillan. Ataca antes de que el enemigo pueda reaccionar.',
    stats: { hp: 95, attack: 65, defense: 110, spAttack: 60, spDefense: 130, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 198,
    name: 'Murkrow',
    types: ['Siniestro', 'Volador'],
    generation: 2,
    description: 'Se dice que trae desgracia. La gente lo evita. Le gustan los objetos brillantes.',
    stats: { hp: 60, attack: 85, defense: 42, spAttack: 85, spDefense: 42, speed: 91 },
    evolution: 'Evoluciona a Honchkrow con Piedra Noche'
  },
  {
    number: 199,
    name: 'Slowking',
    types: ['Agua', 'Psíquico'],
    generation: 2,
    description: 'Tiene una mente brillante. Es tan inteligente que puede superar a los humanos en ingenio.',
    stats: { hp: 95, attack: 75, defense: 80, spAttack: 100, spDefense: 110, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 200,
    name: 'Misdreavus',
    types: ['Fantasma'],
    generation: 2,
    description: 'Grita y aúlla para asustar a la gente de noche. Le gusta comer su miedo.',
    stats: { hp: 60, attack: 60, defense: 60, spAttack: 85, spDefense: 85, speed: 85 },
    evolution: 'Evoluciona a Mismagius con Piedra Noche'
  },
  {
    number: 201,
    name: 'Unown',
    types: ['Psíquico'],
    generation: 2,
    description: 'Tiene forma de antigua escritura. Aparece en ruinas. No se sabe cuál vino primero.',
    stats: { hp: 48, attack: 72, defense: 48, spAttack: 72, spDefense: 48, speed: 48 },
    evolution: 'No evoluciona'
  },
  {
    number: 202,
    name: 'Wobbuffet',
    types: ['Psíquico'],
    generation: 2,
    description: 'Para proteger su cola negra, permanece quieto en la oscuridad. Nunca ataca primero.',
    stats: { hp: 190, attack: 33, defense: 58, spAttack: 33, spDefense: 58, speed: 33 },
    evolution: 'No evoluciona'
  },
  {
    number: 203,
    name: 'Girafarig',
    types: ['Normal', 'Psíquico'],
    generation: 2,
    description: 'Su cola tiene un cerebro pequeño. Muerde y ataca por reflejo si algo se acerca.',
    stats: { hp: 70, attack: 80, defense: 65, spAttack: 90, spDefense: 65, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 204,
    name: 'Pineco',
    types: ['Bicho'],
    generation: 2,
    description: 'Se cuelga de ramas y espera. Si es molestado, explota sin previo aviso.',
    stats: { hp: 50, attack: 65, defense: 90, spAttack: 35, spDefense: 35, speed: 15 },
    evolution: 'Evoluciona a Forretress en nivel 31'
  },
  {
    number: 205,
    name: 'Forretress',
    types: ['Bicho', 'Acero'],
    generation: 2,
    description: 'Su caparazón de acero es tan duro que ni siquiera un misil puede dañarlo.',
    stats: { hp: 75, attack: 90, defense: 140, spAttack: 60, spDefense: 60, speed: 40 },
    evolution: 'No evoluciona'
  },
  {
    number: 206,
    name: 'Dunsparce',
    types: ['Normal'],
    generation: 2,
    description: 'Excava madrigueras con su cola. Hace nidos laberínticos bajo tierra.',
    stats: { hp: 100, attack: 70, defense: 70, spAttack: 65, spDefense: 65, speed: 45 },
    evolution: 'No evoluciona'
  },
  {
    number: 207,
    name: 'Gligar',
    types: ['Tierra', 'Volador'],
    generation: 2,
    description: 'Planea silenciosamente. Se aferra a la cara de su objetivo y le inyecta veneno.',
    stats: { hp: 65, attack: 75, defense: 105, spAttack: 35, spDefense: 65, speed: 85 },
    evolution: 'Evoluciona a Gliscor al subir nivel de noche con Colmillo Agudo (nivel 35 en Easier Evolution)'
  },
  {
    number: 208,
    name: 'Steelix',
    types: ['Acero', 'Tierra'],
    generation: 2,
    description: 'Su cuerpo es más duro que el diamante. Vive a 1 km bajo tierra.',
    stats: { hp: 75, attack: 85, defense: 200, spAttack: 55, spDefense: 65, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 209,
    name: 'Snubbull',
    types: ['Hada'],
    generation: 2,
    description: 'Parece feroz pero es tierno. Se dice que es popular entre las mujeres por su aspecto.',
    stats: { hp: 60, attack: 80, defense: 50, spAttack: 40, spDefense: 40, speed: 30 },
    evolution: 'Evoluciona a Granbull en nivel 23'
  },
  {
    number: 210,
    name: 'Granbull',
    types: ['Hada'],
    generation: 2,
    description: 'Tiene una mandíbula poderosa. Es tímido, así que muestra los colmillos para asustar.',
    stats: { hp: 90, attack: 120, defense: 75, spAttack: 60, spDefense: 60, speed: 45 },
    evolution: 'No evoluciona'
  },
  {
    number: 211,
    name: 'Qwilfish',
    types: ['Agua', 'Veneno'],
    generation: 2,
    description: 'Se infla para intimidar. Lanza púas venenosas cuando está hinchado.',
    stats: { hp: 65, attack: 95, defense: 85, spAttack: 55, spDefense: 55, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 212,
    name: 'Scizor',
    types: ['Bicho', 'Acero'],
    generation: 2,
    description: 'Sus pinzas tienen patrones que intimidan al enemigo. Son duras como el acero.',
    stats: { hp: 70, attack: 130, defense: 100, spAttack: 55, spDefense: 80, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 213,
    name: 'Shuckle',
    types: ['Bicho', 'Roca'],
    generation: 2,
    description: 'Se esconde bajo rocas. Almacena bayas en su caparazón y las fermenta en zumo.',
    stats: { hp: 20, attack: 10, defense: 230, spAttack: 10, spDefense: 230, speed: 5 },
    evolution: 'No evoluciona'
  },
  {
    number: 214,
    name: 'Heracross',
    types: ['Bicho', 'Lucha'],
    generation: 2,
    description: 'Derriba a sus enemigos con su poderoso cuerno. Es sorprendentemente dócil.',
    stats: { hp: 80, attack: 125, defense: 75, spAttack: 40, spDefense: 95, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 215,
    name: 'Sneasel',
    types: ['Siniestro', 'Hielo'],
    generation: 2,
    description: 'Escala árboles agarrándose con sus garras ganchudas. Es muy vengativo.',
    stats: { hp: 55, attack: 95, defense: 55, spAttack: 35, spDefense: 75, speed: 115 },
    evolution: 'Evoluciona a Weavile al subir nivel de noche con Garra Afilada (nivel 35 en Easier Evolution)'
  },
  {
    number: 216,
    name: 'Teddiursa',
    types: ['Normal'],
    generation: 2,
    description: 'Lame sus garras empapadas de miel. Hace su propia miel mezclando frutas y polen.',
    stats: { hp: 60, attack: 80, defense: 50, spAttack: 50, spDefense: 50, speed: 40 },
    evolution: 'Evoluciona a Ursaring en nivel 30'
  },
  {
    number: 217,
    name: 'Ursaring',
    types: ['Normal'],
    generation: 2,
    description: 'Con su sentido del olfato, puede encontrar comida enterrada bajo tierra.',
    stats: { hp: 90, attack: 130, defense: 75, spAttack: 75, spDefense: 75, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 218,
    name: 'Slugma',
    types: ['Fuego'],
    generation: 2,
    description: 'Su cuerpo es pura magma. Si se enfría, se endurece y no puede moverse.',
    stats: { hp: 40, attack: 40, defense: 40, spAttack: 70, spDefense: 40, speed: 20 },
    evolution: 'Evoluciona a Magcargo en nivel 38'
  },
  {
    number: 219,
    name: 'Magcargo',
    types: ['Fuego', 'Roca'],
    generation: 2,
    description: 'Su cuerpo alcanza 10,000°C. El agua se evapora al contacto.',
    stats: { hp: 60, attack: 50, defense: 120, spAttack: 90, spDefense: 80, speed: 30 },
    evolution: 'No evoluciona'
  },
  {
    number: 220,
    name: 'Swinub',
    types: ['Hielo', 'Tierra'],
    generation: 2,
    description: 'Busca comida bajo la nieve con su nariz. Ocasionalmente encuentra Hot Springs.',
    stats: { hp: 50, attack: 50, defense: 40, spAttack: 30, spDefense: 30, speed: 50 },
    evolution: 'Evoluciona a Piloswine en nivel 33'
  },
  {
    number: 221,
    name: 'Piloswine',
    types: ['Hielo', 'Tierra'],
    generation: 2,
    description: 'Su largo pelaje le protege del frío. Usa sus colmillos para excavar en el hielo.',
    stats: { hp: 100, attack: 100, defense: 80, spAttack: 60, spDefense: 60, speed: 50 },
    evolution: 'Evoluciona a Mamoswine al subir nivel conociendo Ancient Power (nivel 45 en Easier Evolution)'
  },
  {
    number: 222,
    name: 'Corsola',
    types: ['Agua', 'Roca'],
    generation: 2,
    description: 'Vive en mares del sur. Sus ramas rojas se regeneran si se rompen.',
    stats: { hp: 65, attack: 55, defense: 95, spAttack: 65, spDefense: 95, speed: 35 },
    evolution: 'No evoluciona'
  },
  {
    number: 223,
    name: 'Remoraid',
    types: ['Agua'],
    generation: 2,
    description: 'Escupe chorros de agua con precisión asombrosa para derribar presas voladoras.',
    stats: { hp: 35, attack: 65, defense: 35, spAttack: 65, spDefense: 35, speed: 65 },
    evolution: 'Evoluciona a Octillery en nivel 25'
  },
  {
    number: 224,
    name: 'Octillery',
    types: ['Agua'],
    generation: 2,
    description: 'Dispara tinta a los ojos del enemigo para escapar. Vive en agujeros en rocas.',
    stats: { hp: 75, attack: 105, defense: 75, spAttack: 105, spDefense: 75, speed: 45 },
    evolution: 'No evoluciona'
  },
  {
    number: 225,
    name: 'Delibird',
    types: ['Hielo', 'Volador'],
    generation: 2,
    description: 'Comparte su comida con gente perdida en las montañas. Lleva comida en su cola.',
    stats: { hp: 45, attack: 55, defense: 45, spAttack: 65, spDefense: 45, speed: 75 },
    evolution: 'No evoluciona'
  },
  {
    number: 226,
    name: 'Mantine',
    types: ['Agua', 'Volador'],
    generation: 2,
    description: 'Nada elegantemente y sin esfuerzo. A menudo viaja con Remoraid adheridos.',
    stats: { hp: 85, attack: 40, defense: 70, spAttack: 80, spDefense: 140, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 227,
    name: 'Skarmory',
    types: ['Acero', 'Volador'],
    generation: 2,
    description: 'Sus alas de acero son delgadas. Vuela a más de 300 km/h.',
    stats: { hp: 65, attack: 80, defense: 140, spAttack: 40, spDefense: 70, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 228,
    name: 'Houndour',
    types: ['Siniestro', 'Fuego'],
    generation: 2,
    description: 'Caza en manada coordinándose con aullidos. Nunca desobedece a su líder.',
    stats: { hp: 45, attack: 60, defense: 30, spAttack: 80, spDefense: 50, speed: 65 },
    evolution: 'Evoluciona a Houndoom en nivel 24'
  },
  {
    number: 229,
    name: 'Houndoom',
    types: ['Siniestro', 'Fuego'],
    generation: 2,
    description: 'Su aullido espeluznante hace que la gente tiemble de miedo. Lanza llamas tóxicas.',
    stats: { hp: 75, attack: 90, defense: 50, spAttack: 110, spDefense: 80, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 230,
    name: 'Kingdra',
    types: ['Agua', 'Dragón'],
    generation: 2,
    description: 'Duerme en el fondo del mar. Se dice que causa torbellinos al despertar.',
    stats: { hp: 75, attack: 95, defense: 95, spAttack: 95, spDefense: 95, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 231,
    name: 'Phanpy',
    types: ['Tierra'],
    generation: 2,
    description: 'Se rocía con agua usando su trompa. Le encanta jugar en el lodo.',
    stats: { hp: 90, attack: 60, defense: 60, spAttack: 40, spDefense: 40, speed: 40 },
    evolution: 'Evoluciona a Donphan en nivel 25'
  },
  {
    number: 232,
    name: 'Donphan',
    types: ['Tierra'],
    generation: 2,
    description: 'Enrollado, puede derribar una casa con su peso. Su piel es tan dura como neumáticos.',
    stats: { hp: 90, attack: 120, defense: 120, spAttack: 60, spDefense: 60, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 233,
    name: 'Porygon2',
    types: ['Normal'],
    generation: 2,
    description: 'Mejorado para explorar el espacio. No puede volar en gravedad normal.',
    stats: { hp: 85, attack: 80, defense: 90, spAttack: 105, spDefense: 95, speed: 60 },
    evolution: 'Evoluciona a Porygon-Z con intercambio + Disco Extraño (nivel 45 en Easier Evolution)'
  },
  {
    number: 234,
    name: 'Stantler',
    types: ['Normal'],
    generation: 2,
    description: 'Sus cuernos crean un espacio distorsionado. Puede hacer ver ilusiones.',
    stats: { hp: 73, attack: 95, defense: 62, spAttack: 85, spDefense: 65, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 235,
    name: 'Smeargle',
    types: ['Normal'],
    generation: 2,
    description: 'Marca su territorio con un fluido de su cola. Se han encontrado 5000 marcas diferentes.',
    stats: { hp: 55, attack: 20, defense: 35, spAttack: 20, spDefense: 45, speed: 75 },
    evolution: 'No evoluciona'
  },
  {
    number: 236,
    name: 'Tyrogue',
    types: ['Lucha'],
    generation: 2,
    description: 'Siempre está lleno de energía. Entrena constantemente para volverse fuerte.',
    stats: { hp: 35, attack: 35, defense: 35, spAttack: 35, spDefense: 35, speed: 35 },
    evolution: 'Evoluciona en nivel 20: Ataque>Defensa=Hitmonlee, Defensa>Ataque=Hitmonchan, Ataque=Defensa=Hitmontop'
  },
  {
    number: 237,
    name: 'Hitmontop',
    types: ['Lucha'],
    generation: 2,
    description: 'Gira sobre su cabeza para atacar. Usa la rotación centrífuga para golpear.',
    stats: { hp: 50, attack: 95, defense: 95, spAttack: 35, spDefense: 110, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 238,
    name: 'Smoochum',
    types: ['Hielo', 'Psíquico'],
    generation: 2,
    description: 'Examina todo besándolo. Sus labios son la parte más sensible de su cuerpo.',
    stats: { hp: 45, attack: 30, defense: 15, spAttack: 85, spDefense: 65, speed: 65 },
    evolution: 'Evoluciona a Jynx en nivel 30'
  },
  {
    number: 239,
    name: 'Elekid',
    types: ['Eléctrico'],
    generation: 2,
    description: 'Rota sus brazos para generar electricidad. Se electrocuta si genera demasiada.',
    stats: { hp: 45, attack: 63, defense: 37, spAttack: 65, spDefense: 55, speed: 95 },
    evolution: 'Evoluciona a Electabuzz en nivel 30'
  },
  {
    number: 240,
    name: 'Magby',
    types: ['Fuego'],
    generation: 2,
    description: 'Sopla llamas de 600°C por la nariz. Resfriarse puede debilitar sus llamas.',
    stats: { hp: 45, attack: 75, defense: 37, spAttack: 70, spDefense: 55, speed: 83 },
    evolution: 'Evoluciona a Magmar en nivel 30'
  },
  {
    number: 241,
    name: 'Miltank',
    types: ['Normal'],
    generation: 2,
    description: 'Su leche es muy nutritiva. Se dice que beber su leche a diario te hace más saludable.',
    stats: { hp: 95, attack: 80, defense: 105, spAttack: 40, spDefense: 70, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 242,
    name: 'Blissey',
    types: ['Normal'],
    generation: 2,
    description: 'Siente la tristeza con su pelaje rizado. Pone un huevo nutritivo para personas tristes.',
    stats: { hp: 255, attack: 10, defense: 10, spAttack: 75, spDefense: 135, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 243,
    name: 'Raikou',
    types: ['Eléctrico'],
    generation: 2,
    description: 'La velocidad del rayo. Sus rugidos lanzan ondas de choque por el aire.',
    stats: { hp: 90, attack: 85, defense: 75, spAttack: 115, spDefense: 100, speed: 115 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 244,
    name: 'Entei',
    types: ['Fuego'],
    generation: 2,
    description: 'Dicen que cuando ruge, un volcán entra en erupción en algún lugar del mundo.',
    stats: { hp: 115, attack: 115, defense: 85, spAttack: 90, spDefense: 75, speed: 100 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 245,
    name: 'Suicune',
    types: ['Agua'],
    generation: 2,
    description: 'Corre por el mundo para purificar el agua contaminada. Camina sobre ella.',
    stats: { hp: 100, attack: 75, defense: 115, spAttack: 90, spDefense: 115, speed: 85 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 246,
    name: 'Larvitar',
    types: ['Roca', 'Tierra'],
    generation: 2,
    description: 'Nace bajo tierra. Come tierra para salir a la superficie y ver a sus padres.',
    stats: { hp: 50, attack: 64, defense: 50, spAttack: 45, spDefense: 50, speed: 41 },
    evolution: 'Evoluciona a Pupitar en nivel 30'
  },
  {
    number: 247,
    name: 'Pupitar',
    types: ['Roca', 'Tierra'],
    generation: 2,
    description: 'Su caparazón es tan duro como una lámina de acero. Está preparándose para evolucionar.',
    stats: { hp: 70, attack: 84, defense: 70, spAttack: 65, spDefense: 70, speed: 51 },
    evolution: 'Evoluciona a Tyranitar en nivel 55'
  },
  {
    number: 248,
    name: 'Tyranitar',
    types: ['Roca', 'Siniestro'],
    generation: 2,
    description: 'Su cuerpo no puede ser herido por ningún ataque. Es conocido por destruir montañas enteras.',
    stats: { hp: 100, attack: 134, defense: 110, spAttack: 95, spDefense: 100, speed: 61 },
    evolution: 'No evoluciona'
  },
  {
    number: 249,
    name: 'Lugia',
    types: ['Psíquico', 'Volador'],
    generation: 2,
    description: 'El aleteo de sus alas puede causar tormentas devastadoras de 40 días.',
    stats: { hp: 106, attack: 90, defense: 130, spAttack: 90, spDefense: 154, speed: 110 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 250,
    name: 'Ho-Oh',
    types: ['Fuego', 'Volador'],
    generation: 2,
    description: 'Sus alas reflejan colores brillantes. Ver uno trae felicidad eterna.',
    stats: { hp: 106, attack: 130, defense: 90, spAttack: 110, spDefense: 154, speed: 90 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 251,
    name: 'Celebi',
    types: ['Psíquico', 'Planta'],
    generation: 2,
    description: 'Viaja a través del tiempo. Las plantas florecen exuberantemente donde ha estado.',
    stats: { hp: 100, attack: 100, defense: 100, spAttack: 100, spDefense: 100, speed: 100 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 252,
    name: 'Treecko',
    types: ['Planta'],
    generation: 3,
    description: 'Las plantas pequeñas de su cola son sensores que vigilan el entorno.',
    stats: { hp: 40, attack: 45, defense: 35, spAttack: 65, spDefense: 55, speed: 70 },
    evolution: 'Evoluciona a Grovyle en nivel 16'
  },
  {
    number: 253,
    name: 'Grovyle',
    types: ['Planta'],
    generation: 3,
    description: 'Las hojas de sus brazos son afiladas. Corta ramas para hacer su nido.',
    stats: { hp: 50, attack: 65, defense: 45, spAttack: 85, spDefense: 65, speed: 95 },
    evolution: 'Evoluciona a Sceptile en nivel 36'
  },
  {
    number: 254,
    name: 'Sceptile',
    types: ['Planta'],
    generation: 3,
    description: 'Las hojas de su cuerpo tienen bordes muy afilados. Es ágil y salta entre los árboles.',
    stats: { hp: 70, attack: 85, defense: 65, spAttack: 105, spDefense: 85, speed: 120 },
    evolution: 'No evoluciona'
  },
  {
    number: 255,
    name: 'Torchic',
    types: ['Fuego'],
    generation: 3,
    description: 'En su interior arde una llama. Lanza bolas de fuego de hasta 1000°C.',
    stats: { hp: 45, attack: 60, defense: 40, spAttack: 70, spDefense: 50, speed: 45 },
    evolution: 'Evoluciona a Combusken en nivel 16'
  },
  {
    number: 256,
    name: 'Combusken',
    types: ['Fuego', 'Lucha'],
    generation: 3,
    description: 'Lanza potentes patadas. Sus garras afiladas son armas letales.',
    stats: { hp: 60, attack: 85, defense: 60, spAttack: 85, spDefense: 60, speed: 55 },
    evolution: 'Evoluciona a Blaziken en nivel 36'
  },
  {
    number: 257,
    name: 'Blaziken',
    types: ['Fuego', 'Lucha'],
    generation: 3,
    description: 'Puede saltar edificios fácilmente. Sus patadas flamígeras queman al rival.',
    stats: { hp: 80, attack: 120, defense: 70, spAttack: 110, spDefense: 70, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 258,
    name: 'Mudkip',
    types: ['Agua'],
    generation: 3,
    description: 'La aleta de su cabeza detecta corrientes de agua. Le ayuda a nadar.',
    stats: { hp: 50, attack: 70, defense: 50, spAttack: 50, spDefense: 50, speed: 40 },
    evolution: 'Evoluciona a Marshtomp en nivel 16'
  },
  {
    number: 259,
    name: 'Marshtomp',
    types: ['Agua', 'Tierra'],
    generation: 3,
    description: 'Puede caminar sobre el lodo movedizo. Detecta tormentas con sus aletas.',
    stats: { hp: 70, attack: 85, defense: 70, spAttack: 60, spDefense: 70, speed: 50 },
    evolution: 'Evoluciona a Swampert en nivel 36'
  },
  {
    number: 260,
    name: 'Swampert',
    types: ['Agua', 'Tierra'],
    generation: 3,
    description: 'Ve en el agua turbia. Puede nadar tirando de barcazas sin problemas.',
    stats: { hp: 100, attack: 110, defense: 90, spAttack: 85, spDefense: 90, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 261,
    name: 'Poochyena',
    types: ['Siniestro'],
    generation: 3,
    description: 'Persigue y muerde todo lo que se mueve. Huye al enfrentarse a enemigos fuertes.',
    stats: { hp: 35, attack: 55, defense: 35, spAttack: 30, spDefense: 30, speed: 35 },
    evolution: 'Evoluciona a Mightyena en nivel 18'
  },
  {
    number: 262,
    name: 'Mightyena',
    types: ['Siniestro'],
    generation: 3,
    description: 'Obedece a entrenadores habilidosos. Trabaja en equipo para cazar presas.',
    stats: { hp: 70, attack: 90, defense: 70, spAttack: 60, spDefense: 60, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 263,
    name: 'Zigzagoon',
    types: ['Normal'],
    generation: 3,
    description: 'Camina en zigzag sin ninguna razón. Encuentra objetos escondidos.',
    stats: { hp: 38, attack: 30, defense: 41, spAttack: 30, spDefense: 41, speed: 60 },
    evolution: 'Evoluciona a Linoone en nivel 20'
  },
  {
    number: 264,
    name: 'Linoone',
    types: ['Normal'],
    generation: 3,
    description: 'Corre a 100 km/h en línea recta. No puede girar bruscamente.',
    stats: { hp: 78, attack: 70, defense: 61, spAttack: 50, spDefense: 61, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 265,
    name: 'Wurmple',
    types: ['Bicho'],
    generation: 3,
    description: 'Usa las púas de su cola para pelar cortezas de árboles y alimentarse.',
    stats: { hp: 45, attack: 45, defense: 35, spAttack: 20, spDefense: 30, speed: 20 },
    evolution: 'Evoluciona en nivel 7: aleatoriamente a Silcoon o Cascoon'
  },
  {
    number: 266,
    name: 'Silcoon',
    types: ['Bicho'],
    generation: 3,
    description: 'Bebe agua de lluvia. Espera inmóvil a que llegue el momento de evolucionar.',
    stats: { hp: 50, attack: 35, defense: 55, spAttack: 25, spDefense: 25, speed: 15 },
    evolution: 'Evoluciona a Beautifly en nivel 10'
  },
  {
    number: 267,
    name: 'Beautifly',
    types: ['Bicho', 'Volador'],
    generation: 3,
    description: 'Busca néctar de flores. Puede detectar las flores con más polen.',
    stats: { hp: 60, attack: 70, defense: 50, spAttack: 100, spDefense: 50, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 268,
    name: 'Cascoon',
    types: ['Bicho'],
    generation: 3,
    description: 'No se mueve mientras espera evolucionar. Bebe agua de lluvia.',
    stats: { hp: 50, attack: 35, defense: 55, spAttack: 25, spDefense: 25, speed: 15 },
    evolution: 'Evoluciona a Dustox en nivel 10'
  },
  {
    number: 269,
    name: 'Dustox',
    types: ['Bicho', 'Veneno'],
    generation: 3,
    description: 'Es atraído por la luz. Esparce polvo venenoso cuando es atacado.',
    stats: { hp: 60, attack: 50, defense: 70, spAttack: 50, spDefense: 90, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 270,
    name: 'Lotad',
    types: ['Agua', 'Planta'],
    generation: 3,
    description: 'Parece un lirio. Sirve como balsa para Pokémon pequeños.',
    stats: { hp: 40, attack: 30, defense: 30, spAttack: 40, spDefense: 50, speed: 30 },
    evolution: 'Evoluciona a Lombre en nivel 14'
  },
  {
    number: 271,
    name: 'Lombre',
    types: ['Agua', 'Planta'],
    generation: 3,
    description: 'Es nocturno. Se dice que jala a la gente hacia los estanques.',
    stats: { hp: 60, attack: 50, defense: 50, spAttack: 60, spDefense: 70, speed: 50 },
    evolution: 'Evoluciona a Ludicolo con Piedra Agua'
  },
  {
    number: 272,
    name: 'Ludicolo',
    types: ['Agua', 'Planta'],
    generation: 3,
    description: 'Aparece cuando escucha música alegre. Nunca deja de bailar.',
    stats: { hp: 80, attack: 70, defense: 70, spAttack: 90, spDefense: 100, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 273,
    name: 'Seedot',
    types: ['Planta'],
    generation: 3,
    description: 'Cuelga de ramas. Sorbe la humedad del árbol para crecer.',
    stats: { hp: 40, attack: 40, defense: 50, spAttack: 30, spDefense: 30, speed: 30 },
    evolution: 'Evoluciona a Nuzleaf en nivel 14'
  },
  {
    number: 274,
    name: 'Nuzleaf',
    types: ['Planta', 'Siniestro'],
    generation: 3,
    description: 'Vive en bosques densos. Su hoja funciona como flauta para asustar gente.',
    stats: { hp: 70, attack: 70, defense: 40, spAttack: 60, spDefense: 40, speed: 60 },
    evolution: 'Evoluciona a Shiftry con Piedra Hoja'
  },
  {
    number: 275,
    name: 'Shiftry',
    types: ['Planta', 'Siniestro'],
    generation: 3,
    description: 'Agita sus abanicos para crear vientos de 30 metros por segundo.',
    stats: { hp: 90, attack: 100, defense: 60, spAttack: 90, spDefense: 60, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 276,
    name: 'Taillow',
    types: ['Normal', 'Volador'],
    generation: 3,
    description: 'Es valiente pero temerario. Luchará contra oponentes mucho más grandes.',
    stats: { hp: 40, attack: 55, defense: 30, spAttack: 30, spDefense: 30, speed: 85 },
    evolution: 'Evoluciona a Swellow en nivel 22'
  },
  {
    number: 277,
    name: 'Swellow',
    types: ['Normal', 'Volador'],
    generation: 3,
    description: 'Vuela alto circulando. Se zambulle en picada para atrapar presas.',
    stats: { hp: 60, attack: 85, defense: 60, spAttack: 75, spDefense: 50, speed: 125 },
    evolution: 'No evoluciona'
  },
  {
    number: 278,
    name: 'Wingull',
    types: ['Agua', 'Volador'],
    generation: 3,
    description: 'Construye nidos en acantilados. Planea en corrientes ascendentes.',
    stats: { hp: 40, attack: 30, defense: 30, spAttack: 55, spDefense: 30, speed: 85 },
    evolution: 'Evoluciona a Pelipper en nivel 25'
  },
  {
    number: 279,
    name: 'Pelipper',
    types: ['Agua', 'Volador'],
    generation: 3,
    description: 'Transporta comida y otros objetos en su pico. Patrulla mares en busca de comida.',
    stats: { hp: 60, attack: 50, defense: 100, spAttack: 95, spDefense: 70, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 280,
    name: 'Ralts',
    types: ['Psíquico', 'Hada'],
    generation: 3,
    description: 'Siente las emociones de la gente. Se esconde si detecta hostilidad.',
    stats: { hp: 28, attack: 25, defense: 25, spAttack: 45, spDefense: 35, speed: 40 },
    evolution: 'Evoluciona a Kirlia en nivel 20'
  },
  {
    number: 281,
    name: 'Kirlia',
    types: ['Psíquico', 'Hada'],
    generation: 3,
    description: 'Cuando baila, libera poderes psíquicos que distorsionan el espacio.',
    stats: { hp: 38, attack: 35, defense: 35, spAttack: 65, spDefense: 55, speed: 50 },
    evolution: 'Evoluciona a Gardevoir en nivel 30 o Gallade (macho) con Piedra Alba'
  },
  {
    number: 282,
    name: 'Gardevoir',
    types: ['Psíquico', 'Hada'],
    generation: 3,
    description: 'Predice el futuro. Crearía un agujero negro para proteger a su entrenador.',
    stats: { hp: 68, attack: 65, defense: 65, spAttack: 125, spDefense: 115, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 283,
    name: 'Surskit',
    types: ['Bicho', 'Agua'],
    generation: 3,
    description: 'Parece que está deslizándose sobre el agua. Segrega miel de su cabeza.',
    stats: { hp: 40, attack: 30, defense: 32, spAttack: 50, spDefense: 52, speed: 65 },
    evolution: 'Evoluciona a Masquerain en nivel 22'
  },
  {
    number: 284,
    name: 'Masquerain',
    types: ['Bicho', 'Volador'],
    generation: 3,
    description: 'Sus antenas tienen forma de ojos para intimidar. Vuela erráticamente.',
    stats: { hp: 70, attack: 60, defense: 62, spAttack: 100, spDefense: 82, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 285,
    name: 'Shroomish',
    types: ['Planta'],
    generation: 3,
    description: 'Habita en lugares oscuros y húmedos. Esparce esporas venenosas.',
    stats: { hp: 60, attack: 40, defense: 60, spAttack: 40, spDefense: 60, speed: 35 },
    evolution: 'Evoluciona a Breloom en nivel 23'
  },
  {
    number: 286,
    name: 'Breloom',
    types: ['Planta', 'Lucha'],
    generation: 3,
    description: 'Sus brazos elásticos lanzan puñetazos devastadores. Esparce esporas tóxicas.',
    stats: { hp: 60, attack: 130, defense: 80, spAttack: 60, spDefense: 60, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 287,
    name: 'Slakoth',
    types: ['Normal'],
    generation: 3,
    description: 'Duerme 20 horas al día. Come hojas sin moverse del mismo lugar.',
    stats: { hp: 60, attack: 60, defense: 60, spAttack: 35, spDefense: 35, speed: 30 },
    evolution: 'Evoluciona a Vigoroth en nivel 18'
  },
  {
    number: 288,
    name: 'Vigoroth',
    types: ['Normal'],
    generation: 3,
    description: 'Su corazón late tan rápido que no puede quedarse quieto ni un segundo.',
    stats: { hp: 80, attack: 80, defense: 80, spAttack: 55, spDefense: 55, speed: 90 },
    evolution: 'Evoluciona a Slaking en nivel 36'
  },
  {
    number: 289,
    name: 'Slaking',
    types: ['Normal'],
    generation: 3,
    description: 'Es el Pokémon más holgazán. Pasa días enteros tumbado sin moverse.',
    stats: { hp: 150, attack: 160, defense: 100, spAttack: 95, spDefense: 65, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 290,
    name: 'Nincada',
    types: ['Bicho', 'Tierra'],
    generation: 3,
    description: 'Vive bajo tierra durante años en total oscuridad. Absorbe nutrientes de raíces.',
    stats: { hp: 31, attack: 45, defense: 90, spAttack: 30, spDefense: 30, speed: 40 },
    evolution: 'Evoluciona a Ninjask en nivel 20 (si hay espacio, también aparece Shedinja)'
  },
  {
    number: 291,
    name: 'Ninjask',
    types: ['Bicho', 'Volador'],
    generation: 3,
    description: 'Se mueve tan rápido que es difícil de ver. Su grito perfora los oídos.',
    stats: { hp: 61, attack: 90, defense: 45, spAttack: 50, spDefense: 50, speed: 160 },
    evolution: 'No evoluciona'
  },
  {
    number: 292,
    name: 'Shedinja',
    types: ['Bicho', 'Fantasma'],
    generation: 3,
    description: 'Un caparazón hueco. Dicen que roba el alma de quien mira dentro.',
    stats: { hp: 1, attack: 90, defense: 45, spAttack: 30, spDefense: 30, speed: 40 },
    evolution: 'No evoluciona'
  },
  {
    number: 293,
    name: 'Whismur',
    types: ['Normal'],
    generation: 3,
    description: 'Sus gritos pueden ser tan fuertes como un jet. Tiene pulmones enormes.',
    stats: { hp: 64, attack: 51, defense: 23, spAttack: 51, spDefense: 23, speed: 28 },
    evolution: 'Evoluciona a Loudred en nivel 20'
  },
  {
    number: 294,
    name: 'Loudred',
    types: ['Normal'],
    generation: 3,
    description: 'Sus gritos pueden demoler una casa de madera. Usa sus oídos como altavoces.',
    stats: { hp: 84, attack: 71, defense: 43, spAttack: 71, spDefense: 43, speed: 48 },
    evolution: 'Evoluciona a Exploud en nivel 40'
  },
  {
    number: 295,
    name: 'Exploud',
    types: ['Normal'],
    generation: 3,
    description: 'Sus rugidos pueden causar terremotos. Se escucha a 10 km de distancia.',
    stats: { hp: 104, attack: 91, defense: 63, spAttack: 91, spDefense: 73, speed: 68 },
    evolution: 'No evoluciona'
  },
  {
    number: 296,
    name: 'Makuhita',
    types: ['Lucha'],
    generation: 3,
    description: 'Entrena golpeando árboles y rocas. Nunca se rinde sin importar cuánto caiga.',
    stats: { hp: 72, attack: 60, defense: 30, spAttack: 20, spDefense: 30, speed: 25 },
    evolution: 'Evoluciona a Hariyama en nivel 24'
  },
  {
    number: 297,
    name: 'Hariyama',
    types: ['Lucha'],
    generation: 3,
    description: 'Sus palmadas pueden enviar un camión volando. Es un experto en lucha sumo.',
    stats: { hp: 144, attack: 120, defense: 60, spAttack: 40, spDefense: 60, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 298,
    name: 'Azurill',
    types: ['Normal', 'Hada'],
    generation: 3,
    description: 'Su cola llena de nutrientes rebota como una pelota elástica.',
    stats: { hp: 50, attack: 20, defense: 40, spAttack: 20, spDefense: 40, speed: 20 },
    evolution: 'Evoluciona a Marill con alta amistad'
  },
  {
    number: 299,
    name: 'Nosepass',
    types: ['Roca'],
    generation: 3,
    description: 'Su nariz magnética siempre apunta al norte. Se pelea con otros Nosepass.',
    stats: { hp: 30, attack: 45, defense: 135, spAttack: 45, spDefense: 90, speed: 30 },
    evolution: 'Evoluciona a Probopass al subir nivel en Monte Corona (nivel 40 en Easier Evolution)'
  },
  {
    number: 300,
    name: 'Skitty',
    types: ['Normal'],
    generation: 3,
    description: 'Persigue cualquier cosa que se mueva. Persigue su propia cola y se marea.',
    stats: { hp: 50, attack: 45, defense: 45, spAttack: 35, spDefense: 35, speed: 50 },
    evolution: 'Evoluciona a Delcatty con Piedra Lunar'
  },
  {
    number: 301,
    name: 'Delcatty',
    types: ['Normal'],
    generation: 3,
    description: 'No tiene hogar fijo. Duerme donde le plazca y come lo que encuentra.',
    stats: { hp: 70, attack: 65, defense: 65, spAttack: 55, spDefense: 55, speed: 90 },
    evolution: 'No evoluciona'
  },
  {
    number: 302,
    name: 'Sableye',
    types: ['Siniestro', 'Fantasma'],
    generation: 3,
    description: 'Excava cuevas con sus garras afiladas. Come gemas y cristales.',
    stats: { hp: 50, attack: 75, defense: 75, spAttack: 65, spDefense: 65, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 303,
    name: 'Mawile',
    types: ['Acero', 'Hada'],
    generation: 3,
    description: 'Sus enormes mandíbulas de acero eran originalmente cuernos. Engaña con su apariencia dócil.',
    stats: { hp: 50, attack: 85, defense: 85, spAttack: 55, spDefense: 55, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 304,
    name: 'Aron',
    types: ['Acero', 'Roca'],
    generation: 3,
    description: 'Come mineral de hierro. Cuando termina de comer una montaña, se muda.',
    stats: { hp: 50, attack: 70, defense: 100, spAttack: 40, spDefense: 40, speed: 30 },
    evolution: 'Evoluciona a Lairon en nivel 32'
  },
  {
    number: 305,
    name: 'Lairon',
    types: ['Acero', 'Roca'],
    generation: 3,
    description: 'Bebe agua rica en minerales de manantiales. Pelea para proteger su territorio.',
    stats: { hp: 60, attack: 90, defense: 140, spAttack: 50, spDefense: 50, speed: 40 },
    evolution: 'Evoluciona a Aggron en nivel 42'
  },
  {
    number: 306,
    name: 'Aggron',
    types: ['Acero', 'Roca'],
    generation: 3,
    description: 'Reivindica montañas enteras como su territorio y las defiende ferozmente.',
    stats: { hp: 70, attack: 110, defense: 180, spAttack: 60, spDefense: 60, speed: 50 },
    evolution: 'No evoluciona'
  },
  {
    number: 307,
    name: 'Meditite',
    types: ['Lucha', 'Psíquico'],
    generation: 3,
    description: 'Medita durante horas sin moverse. Entrena su mente y su cuerpo.',
    stats: { hp: 30, attack: 40, defense: 55, spAttack: 40, spDefense: 55, speed: 60 },
    evolution: 'Evoluciona a Medicham en nivel 37'
  },
  {
    number: 308,
    name: 'Medicham',
    types: ['Lucha', 'Psíquico'],
    generation: 3,
    description: 'Se dice que mediante meditación, acumula energía y agudiza su sexto sentido.',
    stats: { hp: 60, attack: 60, defense: 75, spAttack: 60, spDefense: 75, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 309,
    name: 'Electrike',
    types: ['Eléctrico'],
    generation: 3,
    description: 'Almacena electricidad en su pelaje. Corre más rápido que el ojo humano.',
    stats: { hp: 40, attack: 45, defense: 40, spAttack: 65, spDefense: 40, speed: 65 },
    evolution: 'Evoluciona a Manectric en nivel 26'
  },
  {
    number: 310,
    name: 'Manectric',
    types: ['Eléctrico'],
    generation: 3,
    description: 'Descarga rayos de su melena. Crea nubes de tormenta sobre su cabeza.',
    stats: { hp: 70, attack: 75, defense: 60, spAttack: 105, spDefense: 60, speed: 105 },
    evolution: 'No evoluciona'
  },
  {
    number: 311,
    name: 'Plusle',
    types: ['Eléctrico'],
    generation: 3,
    description: 'Anima a sus aliados con pompones eléctricos. Corto circuita si se moja.',
    stats: { hp: 60, attack: 50, defense: 40, spAttack: 85, spDefense: 75, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 312,
    name: 'Minun',
    types: ['Eléctrico'],
    generation: 3,
    description: 'Anima más a otros que a sí mismo. Emite chispas de alegría.',
    stats: { hp: 60, attack: 40, defense: 50, spAttack: 75, spDefense: 85, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 313,
    name: 'Volbeat',
    types: ['Bicho'],
    generation: 3,
    description: 'Su cola brilla como una luciérnaga. Dibuja patrones geométricos en el cielo.',
    stats: { hp: 65, attack: 73, defense: 75, spAttack: 47, spDefense: 85, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 314,
    name: 'Illumise',
    types: ['Bicho'],
    generation: 3,
    description: 'Atrae enjambres de Volbeat con su dulce aroma. Guía su danza nocturna.',
    stats: { hp: 65, attack: 47, defense: 75, spAttack: 73, spDefense: 85, speed: 85 },
    evolution: 'No evoluciona'
  },
  {
    number: 315,
    name: 'Roselia',
    types: ['Planta', 'Veneno'],
    generation: 3,
    description: 'Lanza espinas venenosas. Cuanto más saludable, más tóxico es su veneno.',
    stats: { hp: 50, attack: 60, defense: 45, spAttack: 100, spDefense: 80, speed: 65 },
    evolution: 'Evoluciona a Roserade con Piedra Alba'
  },
  {
    number: 316,
    name: 'Gulpin',
    types: ['Veneno'],
    generation: 3,
    description: 'Su estómago ocupa la mayor parte de su cuerpo. Puede tragar cualquier cosa.',
    stats: { hp: 70, attack: 43, defense: 53, spAttack: 43, spDefense: 53, speed: 40 },
    evolution: 'Evoluciona a Swalot en nivel 26'
  },
  {
    number: 317,
    name: 'Swalot',
    types: ['Veneno'],
    generation: 3,
    description: 'Puede tragar neumáticos enteros. Segrega un fluido tóxico por todo su cuerpo.',
    stats: { hp: 100, attack: 73, defense: 83, spAttack: 73, spDefense: 83, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 318,
    name: 'Carvanha',
    types: ['Agua', 'Siniestro'],
    generation: 3,
    description: 'Ataca en enjambres. Sus colmillos se regeneran inmediatamente si se rompen.',
    stats: { hp: 45, attack: 90, defense: 20, spAttack: 65, spDefense: 20, speed: 65 },
    evolution: 'Evoluciona a Sharpedo en nivel 30'
  },
  {
    number: 319,
    name: 'Sharpedo',
    types: ['Agua', 'Siniestro'],
    generation: 3,
    description: 'Conocido como el Tiburón Matón del mar. Nada a 120 km/h.',
    stats: { hp: 70, attack: 120, defense: 40, spAttack: 95, spDefense: 40, speed: 95 },
    evolution: 'No evoluciona'
  },
  {
    number: 320,
    name: 'Wailmer',
    types: ['Agua'],
    generation: 3,
    description: 'Almacena agua en su cuerpo para lanzar chorros. Rebota juguetonamente.',
    stats: { hp: 130, attack: 70, defense: 35, spAttack: 70, spDefense: 35, speed: 60 },
    evolution: 'Evoluciona a Wailord en nivel 40'
  },
  {
    number: 321,
    name: 'Wailord',
    types: ['Agua'],
    generation: 3,
    description: 'El Pokémon más grande conocido. Nada en grupos familiares.',
    stats: { hp: 170, attack: 90, defense: 45, spAttack: 90, spDefense: 45, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 322,
    name: 'Numel',
    types: ['Fuego', 'Tierra'],
    generation: 3,
    description: 'Almacena magma de 1,200°C en su joroba. Odia el agua y la lluvia.',
    stats: { hp: 60, attack: 60, defense: 40, spAttack: 65, spDefense: 45, speed: 35 },
    evolution: 'Evoluciona a Camerupt en nivel 33'
  },
  {
    number: 323,
    name: 'Camerupt',
    types: ['Fuego', 'Tierra'],
    generation: 3,
    description: 'Sus jorobas almacenan magma líquido. Entra en erupción cuando se enfurece.',
    stats: { hp: 70, attack: 100, defense: 70, spAttack: 105, spDefense: 75, speed: 40 },
    evolution: 'No evoluciona'
  },
  {
    number: 324,
    name: 'Torkoal',
    types: ['Fuego'],
    generation: 3,
    description: 'Quema carbón dentro de su caparazón. Expulsa hollín negro cuando es atacado.',
    stats: { hp: 70, attack: 85, defense: 140, spAttack: 85, spDefense: 70, speed: 20 },
    evolution: 'No evoluciona'
  },
  {
    number: 325,
    name: 'Spoink',
    types: ['Psíquico'],
    generation: 3,
    description: 'Rebota constantemente. Si deja de rebotar, su corazón se detiene.',
    stats: { hp: 60, attack: 25, defense: 35, spAttack: 70, spDefense: 80, speed: 60 },
    evolution: 'Evoluciona a Grumpig en nivel 32'
  },
  {
    number: 326,
    name: 'Grumpig',
    types: ['Psíquico'],
    generation: 3,
    description: 'Usa sus perlas negras para amplificar sus ondas psíquicas.',
    stats: { hp: 80, attack: 45, defense: 65, spAttack: 90, spDefense: 110, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 327,
    name: 'Spinda',
    types: ['Normal'],
    generation: 3,
    description: 'Cada Spinda tiene un patrón de manchas único. Camina tambaleándose.',
    stats: { hp: 60, attack: 60, defense: 60, spAttack: 60, spDefense: 60, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 328,
    name: 'Trapinch',
    types: ['Tierra'],
    generation: 3,
    description: 'Excava trampas en forma de embudo. Espera pacientemente a que caiga su presa.',
    stats: { hp: 45, attack: 100, defense: 45, spAttack: 45, spDefense: 45, speed: 10 },
    evolution: 'Evoluciona a Vibrava en nivel 35'
  },
  {
    number: 329,
    name: 'Vibrava',
    types: ['Tierra', 'Dragón'],
    generation: 3,
    description: 'Genera ondas ultrasónicas con sus alas vibrantes para atacar a sus presas.',
    stats: { hp: 50, attack: 70, defense: 50, spAttack: 50, spDefense: 50, speed: 70 },
    evolution: 'Evoluciona a Flygon en nivel 45'
  },
  {
    number: 330,
    name: 'Flygon',
    types: ['Tierra', 'Dragón'],
    generation: 3,
    description: 'Es conocido como el Espíritu del Desierto. Crea tormentas de arena con sus alas.',
    stats: { hp: 80, attack: 100, defense: 80, spAttack: 80, spDefense: 80, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 331,
    name: 'Cacnea',
    types: ['Planta'],
    generation: 3,
    description: 'Vive en desiertos áridos. Almacena agua en su cuerpo y no necesita beber a menudo.',
    stats: { hp: 50, attack: 85, defense: 40, spAttack: 85, spDefense: 40, speed: 35 },
    evolution: 'Evoluciona a Cacturne en nivel 32'
  },
  {
    number: 332,
    name: 'Cacturne',
    types: ['Planta', 'Siniestro'],
    generation: 3,
    description: 'Es nocturno. Acecha viajeros agotados en el desierto y los persigue.',
    stats: { hp: 70, attack: 115, defense: 60, spAttack: 115, spDefense: 60, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 333,
    name: 'Swablu',
    types: ['Normal', 'Volador'],
    generation: 3,
    description: 'Le gusta posarse en la cabeza de la gente. Parece un sombrero de algodón.',
    stats: { hp: 45, attack: 40, defense: 60, spAttack: 40, spDefense: 75, speed: 50 },
    evolution: 'Evoluciona a Altaria en nivel 35'
  },
  {
    number: 334,
    name: 'Altaria',
    types: ['Dragón', 'Volador'],
    generation: 3,
    description: 'Canta con una voz cristalina. Vuela entre nubes esponjosas.',
    stats: { hp: 75, attack: 70, defense: 90, spAttack: 70, spDefense: 105, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 335,
    name: 'Zangoose',
    types: ['Normal'],
    generation: 3,
    description: 'Enemigo natural de Seviper. Sus garras son su arma mortal.',
    stats: { hp: 73, attack: 115, defense: 60, spAttack: 60, spDefense: 60, speed: 90 },
    evolution: 'No evoluciona'
  },
  {
    number: 336,
    name: 'Seviper',
    types: ['Veneno'],
    generation: 3,
    description: 'Su cola es una espada afilada. Rival de toda la vida de Zangoose.',
    stats: { hp: 73, attack: 100, defense: 60, spAttack: 100, spDefense: 60, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 337,
    name: 'Lunatone',
    types: ['Roca', 'Psíquico'],
    generation: 3,
    description: 'Se descubrió en un cráter de meteorito. Se activa con la luna llena.',
    stats: { hp: 90, attack: 55, defense: 65, spAttack: 95, spDefense: 85, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 338,
    name: 'Solrock',
    types: ['Roca', 'Psíquico'],
    generation: 3,
    description: 'Gira mientras emite luz solar. Irradia una energía intensa.',
    stats: { hp: 90, attack: 95, defense: 85, spAttack: 55, spDefense: 65, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 339,
    name: 'Barboach',
    types: ['Agua', 'Tierra'],
    generation: 3,
    description: 'Su cuerpo está cubierto de limo resbaladizo. Puede detectar su entorno con sus barbillas.',
    stats: { hp: 50, attack: 48, defense: 43, spAttack: 46, spDefense: 41, speed: 60 },
    evolution: 'Evoluciona a Whiscash en nivel 30'
  },
  {
    number: 340,
    name: 'Whiscash',
    types: ['Agua', 'Tierra'],
    generation: 3,
    description: 'Causa terremotos sacudiendo su enorme cuerpo. Es territorial.',
    stats: { hp: 110, attack: 78, defense: 73, spAttack: 76, spDefense: 71, speed: 60 },
    evolution: 'No evoluciona'
  },
  {
    number: 341,
    name: 'Corphish',
    types: ['Agua'],
    generation: 3,
    description: 'Fue introducido desde el extranjero. Es increíblemente resistente y adaptable.',
    stats: { hp: 43, attack: 80, defense: 65, spAttack: 50, spDefense: 35, speed: 35 },
    evolution: 'Evoluciona a Crawdaunt en nivel 30'
  },
  {
    number: 342,
    name: 'Crawdaunt',
    types: ['Agua', 'Siniestro'],
    generation: 3,
    description: 'Es extremadamente violento. Expulsa viejos habitantes de estanques.',
    stats: { hp: 63, attack: 120, defense: 85, spAttack: 90, spDefense: 55, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 343,
    name: 'Baltoy',
    types: ['Tierra', 'Psíquico'],
    generation: 3,
    description: 'Gira sobre un solo pie. Fue descubierto en ruinas antiguas.',
    stats: { hp: 40, attack: 40, defense: 55, spAttack: 40, spDefense: 70, speed: 55 },
    evolution: 'Evoluciona a Claydol en nivel 36'
  },
  {
    number: 344,
    name: 'Claydol',
    types: ['Tierra', 'Psíquico'],
    generation: 3,
    description: 'Muñeco de arcilla animado por poderes psíquicos de una civilización antigua.',
    stats: { hp: 60, attack: 70, defense: 105, spAttack: 70, spDefense: 120, speed: 75 },
    evolution: 'No evoluciona'
  },
  {
    number: 345,
    name: 'Lileep',
    types: ['Roca', 'Planta'],
    generation: 3,
    description: 'Pokémon fósil. Se anclaba al fondo marino y cazaba con sus tentáculos.',
    stats: { hp: 66, attack: 41, defense: 77, spAttack: 61, spDefense: 87, speed: 23 },
    evolution: 'Evoluciona a Cradily en nivel 40'
  },
  {
    number: 346,
    name: 'Cradily',
    types: ['Roca', 'Planta'],
    generation: 3,
    description: 'Atrapa presas con sus tentáculos pegajosos. Vivió en mares cálidos hace 100 millones de años.',
    stats: { hp: 86, attack: 81, defense: 97, spAttack: 81, spDefense: 107, speed: 43 },
    evolution: 'No evoluciona'
  },
  {
    number: 347,
    name: 'Anorith',
    types: ['Roca', 'Bicho'],
    generation: 3,
    description: 'Pokémon fósil. Vivía en mares prehistóricos y nadaba usando sus ocho alas.',
    stats: { hp: 45, attack: 95, defense: 50, spAttack: 40, spDefense: 50, speed: 75 },
    evolution: 'Evoluciona a Armaldo en nivel 40'
  },
  {
    number: 348,
    name: 'Armaldo',
    types: ['Roca', 'Bicho'],
    generation: 3,
    description: 'Sus garras blindadas pueden triturar incluso el acero. Cazador implacable.',
    stats: { hp: 75, attack: 125, defense: 100, spAttack: 70, spDefense: 80, speed: 45 },
    evolution: 'No evoluciona'
  },
  {
    number: 349,
    name: 'Feebas',
    types: ['Agua'],
    generation: 3,
    description: 'Su aspecto desaliñado hace que nadie lo quiera. Es increíblemente resistente.',
    stats: { hp: 20, attack: 15, defense: 20, spAttack: 10, spDefense: 55, speed: 80 },
    evolution: 'Evoluciona a Milotic al subir nivel con Belleza alta (nivel 30 con objeto Escama Bella en Easier Evolution)'
  },
  {
    number: 350,
    name: 'Milotic',
    types: ['Agua'],
    generation: 3,
    description: 'El Pokémon más hermoso. Dicen que calma emociones violentas.',
    stats: { hp: 95, attack: 60, defense: 79, spAttack: 100, spDefense: 125, speed: 81 },
    evolution: 'No evoluciona'
  },
  {
    number: 351,
    name: 'Castform',
    types: ['Normal'],
    generation: 3,
    description: 'Cambia su forma según el clima. Fue creado mediante experimentos científicos.',
    stats: { hp: 70, attack: 70, defense: 70, spAttack: 70, spDefense: 70, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 352,
    name: 'Kecleon',
    types: ['Normal'],
    generation: 3,
    description: 'Cambia el color de su cuerpo para camuflarse. Solo su zigzag permanece visible.',
    stats: { hp: 60, attack: 90, defense: 70, spAttack: 60, spDefense: 120, speed: 40 },
    evolution: 'No evoluciona'
  },
  {
    number: 353,
    name: 'Shuppet',
    types: ['Fantasma'],
    generation: 3,
    description: 'Se alimenta de sentimientos negativos como envidia y rencor.',
    stats: { hp: 44, attack: 75, defense: 35, spAttack: 63, spDefense: 33, speed: 45 },
    evolution: 'Evoluciona a Banette en nivel 37'
  },
  {
    number: 354,
    name: 'Banette',
    types: ['Fantasma'],
    generation: 3,
    description: 'Una muñeca abandonada que cobra vida. Busca venganza de quien la abandonó.',
    stats: { hp: 64, attack: 115, defense: 65, spAttack: 83, spDefense: 63, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 355,
    name: 'Duskull',
    types: ['Fantasma'],
    generation: 3,
    description: 'Persigue a la gente hasta el amanecer. Puede atravesar cualquier pared.',
    stats: { hp: 20, attack: 40, defense: 90, spAttack: 30, spDefense: 90, speed: 25 },
    evolution: 'Evoluciona a Dusclops en nivel 37'
  },
  {
    number: 356,
    name: 'Dusclops',
    types: ['Fantasma'],
    generation: 3,
    description: 'Su cuerpo es hueco. Se dice que es un portal a otra dimensión.',
    stats: { hp: 40, attack: 70, defense: 130, spAttack: 60, spDefense: 130, speed: 25 },
    evolution: 'Evoluciona a Dusknoir con intercambio + Tela Terrible (nivel 45 en Easier Evolution)'
  },
  {
    number: 357,
    name: 'Tropius',
    types: ['Planta', 'Volador'],
    generation: 3,
    description: 'Los niños le encantan por las frutas dulces que crecen en su cuello.',
    stats: { hp: 99, attack: 68, defense: 83, spAttack: 72, spDefense: 87, speed: 51 },
    evolution: 'No evoluciona'
  },
  {
    number: 358,
    name: 'Chimecho',
    types: ['Psíquico'],
    generation: 3,
    description: 'Sus gritos resuenan como campanas de viento. Flota usando poderes psíquicos.',
    stats: { hp: 75, attack: 50, defense: 80, spAttack: 95, spDefense: 90, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 359,
    name: 'Absol',
    types: ['Siniestro'],
    generation: 3,
    description: 'Aparece cuando un desastre está cerca. Es malinterpretado como portador de desgracias.',
    stats: { hp: 65, attack: 130, defense: 60, spAttack: 75, spDefense: 60, speed: 75 },
    evolution: 'No evoluciona'
  },
  {
    number: 360,
    name: 'Wynaut',
    types: ['Psíquico'],
    generation: 3,
    description: 'Siempre está sonriendo. Se reúne con otros para dormir en cuevas.',
    stats: { hp: 95, attack: 23, defense: 48, spAttack: 23, spDefense: 48, speed: 23 },
    evolution: 'Evoluciona a Wobbuffet en nivel 15'
  },
  {
    number: 361,
    name: 'Snorunt',
    types: ['Hielo'],
    generation: 3,
    description: 'Vive en regiones nevadas. Se dice que trae prosperidad a hogares que visita.',
    stats: { hp: 50, attack: 50, defense: 50, spAttack: 50, spDefense: 50, speed: 50 },
    evolution: 'Evoluciona a Glalie en nivel 42 o Froslass (hembra) con Piedra Alba'
  },
  {
    number: 362,
    name: 'Glalie',
    types: ['Hielo'],
    generation: 3,
    description: 'Congela su presa instantáneamente. Su cuerpo está hecho de hielo puro.',
    stats: { hp: 80, attack: 80, defense: 80, spAttack: 80, spDefense: 80, speed: 80 },
    evolution: 'No evoluciona'
  },
  {
    number: 363,
    name: 'Spheal',
    types: ['Hielo', 'Agua'],
    generation: 3,
    description: 'Rueda más rápido de lo que camina. Se mueve rodando sobre el hielo.',
    stats: { hp: 70, attack: 40, defense: 50, spAttack: 55, spDefense: 50, speed: 25 },
    evolution: 'Evoluciona a Sealeo en nivel 32'
  },
  {
    number: 364,
    name: 'Sealeo',
    types: ['Hielo', 'Agua'],
    generation: 3,
    description: 'Hace girar cualquier cosa en su nariz. Aprende rodando Spheal.',
    stats: { hp: 90, attack: 60, defense: 70, spAttack: 75, spDefense: 70, speed: 45 },
    evolution: 'Evoluciona a Walrein en nivel 44'
  },
  {
    number: 365,
    name: 'Walrein',
    types: ['Hielo', 'Agua'],
    generation: 3,
    description: 'Sus colmillos pueden triturar icebergs. Su gruesa grasa le protege del frío.',
    stats: { hp: 110, attack: 80, defense: 90, spAttack: 95, spDefense: 90, speed: 65 },
    evolution: 'No evoluciona'
  },
  {
    number: 366,
    name: 'Clamperl',
    types: ['Agua'],
    generation: 3,
    description: 'Su caparazón es increíblemente duro. Contiene una perla resplandeciente.',
    stats: { hp: 35, attack: 64, defense: 85, spAttack: 74, spDefense: 55, speed: 32 },
    evolution: 'Evoluciona con intercambio: + Diente Marino = Huntail, + Escama Marina = Gorebyss (nivel 35 en Easier Evolution)'
  },
  {
    number: 367,
    name: 'Huntail',
    types: ['Agua'],
    generation: 3,
    description: 'Vive en las profundidades marinas. Atrae presas con su cola luminosa.',
    stats: { hp: 55, attack: 104, defense: 105, spAttack: 94, spDefense: 75, speed: 52 },
    evolution: 'No evoluciona'
  },
  {
    number: 368,
    name: 'Gorebyss',
    types: ['Agua'],
    generation: 3,
    description: 'Absorbe los fluidos corporales de su presa. Se vuelve rosa brillante en primavera.',
    stats: { hp: 55, attack: 84, defense: 105, spAttack: 114, spDefense: 75, speed: 52 },
    evolution: 'No evoluciona'
  },
  {
    number: 369,
    name: 'Relicanth',
    types: ['Agua', 'Roca'],
    generation: 3,
    description: 'Ha permanecido sin cambios por 100 millones de años. Fósil viviente.',
    stats: { hp: 100, attack: 90, defense: 130, spAttack: 45, spDefense: 65, speed: 55 },
    evolution: 'No evoluciona'
  },
  {
    number: 370,
    name: 'Luvdisc',
    types: ['Agua'],
    generation: 3,
    description: 'Símbolo del amor. Las parejas que lo ven permanecen enamoradas para siempre.',
    stats: { hp: 43, attack: 30, defense: 55, spAttack: 40, spDefense: 65, speed: 97 },
    evolution: 'No evoluciona'
  },
  {
    number: 371,
    name: 'Bagon',
    types: ['Dragón'],
    generation: 3,
    description: 'Sueña con volar. Se arroja desde acantilados para intentar volar.',
    stats: { hp: 45, attack: 75, defense: 60, spAttack: 40, spDefense: 30, speed: 50 },
    evolution: 'Evoluciona a Shelgon en nivel 30'
  },
  {
    number: 372,
    name: 'Shelgon',
    types: ['Dragón'],
    generation: 3,
    description: 'Su caparazón es increíblemente duro. Se prepara para evolucionar en su interior.',
    stats: { hp: 65, attack: 95, defense: 100, spAttack: 60, spDefense: 50, speed: 50 },
    evolution: 'Evoluciona a Salamence en nivel 50'
  },
  {
    number: 373,
    name: 'Salamence',
    types: ['Dragón', 'Volador'],
    generation: 3,
    description: 'Finalmente consiguió alas. Se pone de mal humor si no vuela regularmente.',
    stats: { hp: 95, attack: 135, defense: 80, spAttack: 110, spDefense: 80, speed: 100 },
    evolution: 'No evoluciona'
  },
  {
    number: 374,
    name: 'Beldum',
    types: ['Acero', 'Psíquico'],
    generation: 3,
    description: 'Se comunica con otros mediante magnetismo. Flota usando campos magnéticos.',
    stats: { hp: 40, attack: 55, defense: 80, spAttack: 35, spDefense: 60, speed: 30 },
    evolution: 'Evoluciona a Metang en nivel 20'
  },
  {
    number: 375,
    name: 'Metang',
    types: ['Acero', 'Psíquico'],
    generation: 3,
    description: 'Dos Beldum fusionados. Vuela a 100 km/h usando magnetismo.',
    stats: { hp: 60, attack: 75, defense: 100, spAttack: 55, spDefense: 80, speed: 50 },
    evolution: 'Evoluciona a Metagross en nivel 45'
  },
  {
    number: 376,
    name: 'Metagross',
    types: ['Acero', 'Psíquico'],
    generation: 3,
    description: 'Cuatro cerebros le dan un intelecto superior a una supercomputadora.',
    stats: { hp: 80, attack: 135, defense: 130, spAttack: 95, spDefense: 90, speed: 70 },
    evolution: 'No evoluciona'
  },
  {
    number: 377,
    name: 'Regirock',
    types: ['Roca'],
    generation: 3,
    description: 'Fue sellado hace mucho tiempo. Si se daña, busca rocas para repararse.',
    stats: { hp: 80, attack: 100, defense: 200, spAttack: 50, spDefense: 100, speed: 50 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 378,
    name: 'Regice',
    types: ['Hielo'],
    generation: 3,
    description: 'Está hecho de hielo de la era glacial. Su cuerpo alcanza -200°C.',
    stats: { hp: 80, attack: 50, defense: 100, spAttack: 100, spDefense: 200, speed: 50 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 379,
    name: 'Registeel',
    types: ['Acero'],
    generation: 3,
    description: 'Fue sellado hace miles de años. Su cuerpo es más duro que cualquier metal.',
    stats: { hp: 80, attack: 75, defense: 150, spAttack: 75, spDefense: 150, speed: 50 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 380,
    name: 'Latias',
    types: ['Dragón', 'Psíquico'],
    generation: 3,
    description: 'Altamente inteligente y sensible. Entiende el lenguaje humano.',
    stats: { hp: 80, attack: 80, defense: 90, spAttack: 110, spDefense: 130, speed: 110 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 381,
    name: 'Latios',
    types: ['Dragón', 'Psíquico'],
    generation: 3,
    description: 'Puede volar más rápido que un avión a reacción. Entiende el lenguaje humano.',
    stats: { hp: 80, attack: 90, defense: 80, spAttack: 130, spDefense: 110, speed: 110 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 382,
    name: 'Kyogre',
    types: ['Agua'],
    generation: 3,
    description: 'Tiene el poder de crear lluvia torrencial. Ha salvado pueblos de sequías.',
    stats: { hp: 100, attack: 100, defense: 90, spAttack: 150, spDefense: 140, speed: 90 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 383,
    name: 'Groudon',
    types: ['Tierra'],
    generation: 3,
    description: 'Tiene el poder de dispersar nubes de lluvia y evocar el sol intenso.',
    stats: { hp: 100, attack: 150, defense: 140, spAttack: 100, spDefense: 90, speed: 90 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 384,
    name: 'Rayquaza',
    types: ['Dragón', 'Volador'],
    generation: 3,
    description: 'Vive en la capa de ozono. Desciende cuando Kyogre y Groudon luchan.',
    stats: { hp: 105, attack: 150, defense: 90, spAttack: 150, spDefense: 90, speed: 95 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 385,
    name: 'Jirachi',
    types: ['Acero', 'Psíquico'],
    generation: 3,
    description: 'Concede deseos. Despierta solo durante 7 días cada mil años.',
    stats: { hp: 100, attack: 100, defense: 100, spAttack: 100, spDefense: 100, speed: 100 },
    evolution: 'No evoluciona (Legendario)'
  },
  {
    number: 386,
    name: 'Deoxys',
    types: ['Psíquico'],
    generation: 3,
    description: 'Nació de una mutación de un virus espacial. Es altamente inteligente.',
    stats: { hp: 50, attack: 150, defense: 50, spAttack: 150, spDefense: 50, speed: 150 },
    evolution: 'No evoluciona (Legendario)'
  }
];

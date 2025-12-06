// Habilidades hasta 6ª generación
export const ABILITIES_DATA = [
  // HABILIDADES DE COMBATE - POTENCIA
  { id: 1, name: 'Adaptable', generation: 4, description: 'Potencia los movimientos del mismo tipo que el Pokémon a 2× en vez de 1.5×.' },
  { id: 2, name: 'Aerilate', generation: 6, description: 'Convierte los movimientos de tipo Normal en tipo Volador y aumenta su potencia en un 20%.' },
  { id: 3, name: 'Agallas', generation: 3, description: 'Aumenta el Ataque en un 50% cuando sufre quemadura, parálisis o envenenamiento.' },
  { id: 4, name: 'Alma Cura', generation: 4, description: 'Recupera 1/3 de los PS cuando cambia de posición.' },
  { id: 5, name: 'Allanamiento', generation: 4, description: 'Ignora los cambios en las estadísticas del rival.' },
  { id: 6, name: 'Amistad', generation: 5, description: 'Aumenta todos los daños de ataque y defensa en un 50%.' },
  { id: 7, name: 'Análisis', generation: 4, description: 'Aumenta la potencia de los ataques en un 30% si el Pokémon ataca último.' },
  { id: 8, name: 'Anticipación', generation: 4, description: 'Predice los movimientos peligrosos del rival.' },
  { id: 9, name: 'Armadura Batalla', generation: 3, description: 'Cambia de forma al usar un movimiento de ataque.' },
  { id: 10, name: 'Aroma Velo', generation: 3, description: 'Protege al equipo de ataques que limitan movimientos.' },
  
  // HABILIDADES DEFENSIVAS
  { id: 11, name: 'Absorbe Agua', generation: 3, description: 'Recupera 1/4 de los PS máximos cuando recibe un ataque de tipo Agua.' },
  { id: 12, name: 'Absorbe Elec', generation: 3, description: 'Recupera 1/4 de los PS máximos cuando recibe un ataque de tipo Eléctrico.' },
  { id: 13, name: 'Absorbe Fuego', generation: 3, description: 'Potencia los movimientos de tipo Fuego en un 50% cuando recibe uno.' },
  { id: 14, name: 'Armadura Batalla', generation: 5, description: 'Bloquea los golpes críticos.' },
  { id: 15, name: 'Caparazón', generation: 3, description: 'Protege de los efectos secundarios de los ataques.' },
  { id: 16, name: 'Cura Natural', generation: 3, description: 'Cura los problemas de estado al cambiar de posición.' },
  { id: 17, name: 'Cuerpo Maldito', generation: 5, description: 'Puede anular la habilidad del rival al hacer contacto.' },
  { id: 18, name: 'Defensa Hoja', generation: 4, description: 'Evita problemas de estado en días soleados.' },
  { id: 19, name: 'Escudo Magma', generation: 3, description: 'Protege contra problemas de estado.' },
  { id: 20, name: 'Espejo Mágico', generation: 5, description: 'Devuelve los movimientos de estado que le lanzan.' },
  
  // HABILIDADES DE ESTADO
  { id: 21, name: 'Efecto Espora', generation: 3, description: 'Puede envenenar, paralizar o dormir al contacto.' },
  { id: 22, name: 'Electricidad Estática', generation: 3, description: 'Puede paralizar al rival cuando hace contacto.' },
  { id: 23, name: 'Enjambre', generation: 3, description: 'Aumenta la potencia de movimientos Bicho en un 50% cuando los PS bajan de 1/3.' },
  { id: 24, name: 'Espesura', generation: 3, description: 'Aumenta la potencia de movimientos Planta en un 50% cuando los PS bajan de 1/3.' },
  { id: 25, name: 'Intimidación', generation: 3, description: 'Reduce el Ataque del rival en 1 nivel al entrar en combate.' },
  { id: 26, name: 'Levitación', generation: 3, description: 'El Pokémon es inmune a los movimientos de tipo Tierra.' },
  { id: 27, name: 'Llamarada', generation: 3, description: 'Aumenta la potencia de movimientos Fuego en un 50% cuando los PS bajan de 1/3.' },
  { id: 28, name: 'Mar Llamas', generation: 3, description: 'Aumenta la potencia de movimientos Agua en un 50% cuando los PS bajan de 1/3.' },
  { id: 29, name: 'Punto Tóxico', generation: 3, description: 'Puede envenenar gravemente al rival al hacer contacto.' },
  { id: 30, name: 'Ritmo Propio', generation: 3, description: 'Evita la confusión.' },
  
  // HABILIDADES DE VELOCIDAD/PRIORIDAD
  { id: 31, name: 'Impulso', generation: 5, description: 'Aumenta la Velocidad en 1 nivel al derrotar a un rival.' },
  { id: 32, name: 'Liviano', generation: 3, description: 'Duplica la Velocidad.' },
  { id: 33, name: 'Nado Rápido', generation: 3, description: 'Duplica la Velocidad cuando llueve.' },
  { id: 34, name: 'Poderío Arena', generation: 5, description: 'Aumenta la Velocidad en tormentas de arena.' },
  { id: 35, name: 'Prankster (Bromista)', generation: 5, description: 'Los movimientos de estado tienen prioridad +1.' },
  { id: 36, name: 'Velo Arena', generation: 3, description: 'Aumenta la Evasión en tormentas de arena.' },
  { id: 37, name: 'Velo Nieve', generation: 4, description: 'Aumenta la Evasión cuando hay granizo.' },
  
  // HABILIDADES DE CLIMA
  { id: 38, name: 'Llovizna', generation: 3, description: 'Invoca la lluvia al entrar en combate.' },
  { id: 39, name: 'Sequía', generation: 3, description: 'Intensifica el sol al entrar en combate.' },
  { id: 40, name: 'Nevada', generation: 4, description: 'Invoca el granizo al entrar en combate.' },
  { id: 41, name: 'Chorro Arena', generation: 3, description: 'Invoca una tormenta de arena al entrar en combate.' },
  { id: 42, name: 'Aura Feérica', generation: 6, description: 'Activa el Campo de Niebla al entrar en combate.' },
  
  // HABILIDADES DE CRÍTICOS
  { id: 43, name: 'Francotirador', generation: 4, description: 'Aumenta el daño de los golpes críticos a 2.25× en vez de 1.5×.' },
  { id: 44, name: 'Garra Dura', generation: 4, description: 'Aumenta la potencia de movimientos de contacto directo en un 30%.' },
  { id: 45, name: 'Muro Férreo', generation: 4, description: 'Aumenta la probabilidad de críticos.' },
  { id: 46, name: 'Potencia Bruta', generation: 4, description: 'Aumenta la potencia de los movimientos en un 30% pero elimina efectos secundarios.' },
  { id: 47, name: 'Supersuerte', generation: 4, description: 'Aumenta la probabilidad de asestar un golpe crítico.' },
  
  // HABILIDADES DE CURACIÓN/RECUPERACIÓN
  { id: 48, name: 'Hidratación', generation: 4, description: 'Cura los problemas de estado cuando llueve.' },
  { id: 49, name: 'Cura Lluvia', generation: 3, description: 'Recupera 1/16 de los PS máximos cada turno cuando llueve.' },
  { id: 50, name: 'Regeneración', generation: 5, description: 'Recupera 1/3 de los PS máximos al cambiar de posición.' },
  { id: 51, name: 'Residuos', generation: 4, description: 'Recupera 1/16 de los PS máximos cada turno.' },
  { id: 52, name: 'Sebo', generation: 4, description: 'Reduce a la mitad el daño de ataques Fuego y Hielo.' },
  { id: 53, name: 'Cosecha', generation: 5, description: 'Puede recuperar bayas usadas.' },
  
  // HABILIDADES DE TERRENO/CAMPO
  { id: 54, name: 'Fuerza Arena', generation: 4, description: 'Aumenta el poder de movimientos Tierra, Roca y Acero en un 30% durante tormentas de arena.' },
  { id: 55, name: 'Pokémon Alfa', generation: 6, description: 'Crea el Campo Delta al entrar.' },
  { id: 56, name: 'Electroimán', generation: 5, description: 'Actúa como si llevara una Bolaluminosa.' },
  
  // HABILIDADES DE INMUNIDAD
  { id: 57, name: 'Inmunidad', generation: 3, description: 'Evita el envenenamiento.' },
  { id: 58, name: 'Insomnio', generation: 3, description: 'Evita el sueño.' },
  { id: 59, name: 'Líquido Amnios', generation: 3, description: 'Evita las quemaduras.' },
  { id: 60, name: 'Mudan za', generation: 3, description: 'Puede curarse de problemas de estado cada turno.' },
  { id: 61, name: 'Piel Seca', generation: 4, description: 'Recupera PS con Agua, pero recibe más daño de Fuego.' },
  { id: 62, name: 'Inmunidad Tóxica', generation: 3, description: 'No puede ser envenenado y cura el veneno del campo.' },
  
  // HABILIDADES DE TRANSFORMACIÓN
  { id: 63, name: 'Impostor', generation: 5, description: 'Se transforma en el rival al entrar en combate.' },
  { id: 64, name: 'Límite Rojo', generation: 5, description: 'Reduce los PS a la mitad pero aumenta el Ataque.' },
  { id: 65, name: 'Zen Mode (Modo Daruma)', generation: 5, description: 'Cambia de forma cuando los PS bajan de la mitad.' },
  
  // HABILIDADES DE DAÑO EXTRA
  { id: 66, name: 'Compensación', generation: 4, description: 'Cuando el rival sube estadísticas, aumenta mucho el Ataque Especial.' },
  { id: 67, name: 'Coleta Cola', generation: 4, description: 'Aumenta el Ataque pero reduce la Velocidad.' },
  { id: 68, name: 'Funda', generation: 4, description: 'Reduce el daño de ataques supereficaces en un 25%.' },
  { id: 69, name: 'Filtro', generation: 4, description: 'Reduce el daño de ataques supereficaces en un 25%.' },
  { id: 70, name: 'Piel Curtida', generation: 5, description: 'Reduce el daño de ataques físicos en un 50%.' },
  { id: 71, name: 'Roca Sólida', generation: 4, description: 'Reduce el daño de ataques supereficaces en un 25%.' },
  
  // HABILIDADES DE MULTIHIT/CAMBIO
  { id: 72, name: 'Cuerpo Puro', generation: 3, description: 'Evita la reducción de estadísticas.' },
  { id: 73, name: 'Fuerza Mental', generation: 4, description: 'Evita el retroceso.' },
  { id: 74, name: 'Madrugar', generation: 4, description: 'Se despierta en la mitad de turnos.' },
  { id: 75, name: 'Megadisparo', generation: 3, description: 'Los movimientos de múltiples golpes impactan siempre el máximo.' },
  { id: 76, name: 'Potencia', generation: 5, description: 'Los movimientos se vuelven más fuertes, pero solo pueden usarse una vez.' },
  { id: 77, name: 'Temerario', generation: 4, description: 'Aumenta la potencia de movimientos con retroceso en un 20%.' },
  
  // HABILIDADES DE OBJETOS
  { id: 78, name: 'Cromolente', generation: 4, description: 'Los objetos curativos restauran más PS.' },
  { id: 79, name: 'Gula', generation: 4, description: 'Come bayas cuando los PS bajan de la mitad en vez de 1/4.' },
  { id: 80, name: 'Herbívoro', generation: 5, description: 'Sube el Ataque al ser alcanzado por un movimiento Planta.' },
  { id: 81, name: 'Ilusión', generation: 5, description: 'Aparece como el último Pokémon del equipo.' },
  { id: 82, name: 'Recogida', generation: 3, description: 'Puede recoger objetos después del combate.' },
  { id: 83, name: 'Saco de Tinta', generation: 5, description: 'Reduce la precisión del rival al recibir daño.' },
  { id: 84, name: 'Negacionado', generation: 5, description: 'Anula las habilidades de todos los Pokémon en el campo.' },
  
  // HABILIDADES DE EQUIPO
  { id: 85, name: 'Más', generation: 3, description: 'Aumenta el Ataque Especial en combates dobles si hay un aliado con Menos o Más.' },
  { id: 86, name: 'Menos', generation: 3, description: 'Aumenta el Ataque Especial en combates dobles si hay un aliado con Más o Menos.' },
  { id: 87, name: 'Telepatía', generation: 5, description: 'Evita el daño de ataques aliados.' },
  { id: 88, name: 'Victoria Estrella', generation: 5, description: 'Aumenta la precisión del equipo.' },
  
  // HABILIDADES ESPECIALES DE COMBATE
  { id: 89, name: 'Competitivo', generation: 5, description: 'Sube mucho el Ataque Especial cuando el rival reduce una estadística.' },
  { id: 90, name: 'Desafío', generation: 5, description: 'Sube el Ataque cuando el rival reduce una estadística.' },
  { id: 91, name: 'Entusiasmo', generation: 5, description: 'Aumenta el Ataque cuando el Pokémon sufre un problema de estado.' },
  { id: 92, name: 'Ignorante', generation: 4, description: 'Ignora los cambios en las estadísticas al atacar.' },
  { id: 93, name: 'Justiciero', generation: 5, description: 'Sube el Ataque cuando un aliado es derrotado.' },
  { id: 94, name: 'Puño Férreo', generation: 4, description: 'Aumenta la potencia de movimientos de puñetazo en un 20%.' },
  { id: 95, name: 'Tenacidad', generation: 4, description: 'Aumenta el Ataque cuando sufre un problema de estado.' },
  
  // HABILIDADES DE ENCADENADO
  { id: 96, name: 'Encadenado', generation: 4, description: 'Potencia los movimientos si se usa el mismo consecutivamente.' },
  { id: 97, name: 'Toque Tóxico', generation: 5, description: 'Puede envenenar al rival al hacer contacto.' },
  { id: 98, name: 'Polvo Escudo', generation: 2, description: 'Evita los efectos secundarios de los movimientos.' },
  
  // HABILIDADES DE FORMA
  { id: 99, name: 'Predicción', generation: 4, description: 'Copia la habilidad del rival al entrar en combate.' },
  { id: 100, name: 'Presión', generation: 3, description: 'Hace que los rivales gasten 2 PP en vez de 1.' },
  { id: 101, name: 'Rezagado', generation: 4, description: 'El Pokémon siempre ataca último en su categoría de prioridad.' },
  { id: 102, name: 'Simple', generation: 4, description: 'Duplica los cambios en las estadísticas.' },
  { id: 103, name: 'Zoquete', generation: 4, description: 'Hace que los cambios de estadísticas sean inversos.' },
  
  // HABILIDADES VARIADAS
  { id: 104, name: 'Afortunado', generation: 3, description: 'Aumenta la probabilidad de encontrar objetos en rivales.' },
  { id: 105, name: 'Amor Filial', generation: 6, description: 'Potencia algunos movimientos a cambio de no poder usarlos seguidos.' },
  { id: 106, name: 'Aura Oscura', generation: 6, description: 'Potencia los movimientos de tipo Siniestro de todos los Pokémon.' },
  { id: 107, name: 'Boca Flama', generation: 4, description: 'Potencia los movimientos Fuego en un 50% si los PS están bajos.' },
  { id: 108, name: 'Cacheo', generation: 5, description: 'Roba el objeto del rival al entrar.' },
  { id: 109, name: 'Cambio Color', generation: 3, description: 'Cambia el tipo según el último ataque recibido.' },
  { id: 110, name: 'Capa Mágica', generation: 5, description: 'Roba los efectos de los movimientos de estado del rival.' },
  { id: 111, name: 'Centro Energía', generation: 4, description: 'Aumenta el Ataque Especial cuando los PS están bajos.' },
  { id: 112, name: 'Comandar', generation: 4, description: 'Los aliados obtienen aumentos de estadísticas.' },
  { id: 113, name: 'Corte Fuerte', generation: 6, description: 'Aumenta la potencia de movimientos de corte.' },
  { id: 114, name: 'Cuerpo Llama', generation: 3, description: 'Puede quemar al contacto.' },
  { id: 115, name: 'Electrogenesis', generation: 6, description: 'Crea un Campo Eléctrico al entrar.' },
  { id: 116, name: 'Equilibrio', generation: 5, description: 'Las estadísticas se promedian con el rival.' },
  { id: 117, name: 'Espíritu Vital', generation: 5, description: 'Evita el sueño y aumenta el Ataque.' },
  { id: 118, name: 'Firmeza', generation: 4, description: 'Resiste con 1 PS si estaba con todos cuando recibe un golpe.' },
  { id: 119, name: 'Flor Regalo', generation: 4, description: 'Aumenta el Ataque y Defensa Especial de los aliados con sol.' },
  { id: 120, name: 'Fuga', generation: 3, description: 'Permite huir de cualquier Pokémon salvaje.' },
  { id: 121, name: 'Gula', generation: 4, description: 'Come bayas antes de lo normal.' },
  { id: 122, name: 'Hervir', generation: 4, description: 'Aumenta el Ataque cuando sufre una quemadura.' },
  { id: 123, name: 'Humo Blanco', generation: 3, description: 'Evita la reducción de estadísticas.' },
  { id: 124, name: 'Impasible', generation: 3, description: 'Evita el enamoramiento y Provocación.' },
  { id: 125, name: 'Imán', generation: 3, description: 'Atrapa Pokémon de tipo Acero.' },
  { id: 126, name: 'Infatigable', generation: 5, description: 'No puede dormirse.' },
  { id: 127, name: 'Intrépido', generation: 4, description: 'Ignora el efecto Intimidación.' },
  { id: 128, name: 'Mal Sueño', generation: 4, description: 'Reduce los PS de rivales dormidos.' },
  { id: 129, name: 'Medicamento', generation: 5, description: 'Cura problemas de estado de aliados.' },
  { id: 130, name: 'Muda', generation: 3, description: 'Puede curarse de problemas de estado cada turno.' },
  { id: 131, name: 'Mutatipo', generation: 6, description: 'Cambia el tipo según el movimiento usado.' },
  { id: 132, name: 'Normalidad', generation: 4, description: 'Todos los Pokémon tienen habilidades normales.' },
  { id: 133, name: 'Ojo Compuesto', generation: 4, description: 'Aumenta la precisión en un 30%.' },
  { id: 134, name: 'Orgullo', generation: 5, description: 'Evita la reducción de estadísticas.' },
  { id: 135, name: 'Piel Celeste', generation: 6, description: 'Aumenta la Defensa en clima favorable.' },
  { id: 136, name: 'Pixilate', generation: 6, description: 'Convierte los movimientos Normal en tipo Hada y aumenta su potencia en un 20%.' },
  { id: 137, name: 'Poder del Metal', generation: 4, description: 'Evita la reducción de estadísticas por habilidades.' },
  { id: 138, name: 'Prender', generation: 3, description: 'Puede aumentar el Ataque al recibir un golpe.' },
  { id: 139, name: 'Refrigerar', generation: 6, description: 'Convierte los movimientos Normal en tipo Hielo y aumenta su potencia en un 20%.' },
  { id: 140, name: 'Rompemoldes', generation: 4, description: 'Ignora las habilidades que bloquean movimientos.' },
  { id: 141, name: 'Tinovía', generation: 5, description: 'Protege de ataques en el primer turno.' },
  { id: 142, name: 'Sacapechos', generation: 4, description: 'Roba el objeto del rival al golpear.' },
  { id: 143, name: 'Sanguijuela', generation: 4, description: 'Absorbe PS al golpear.' },
  { id: 144, name: 'Sincronía', generation: 3, description: 'Pasa el envenenamiento, parálisis o quemadura al rival.' },
  { id: 145, name: 'Suerte', generation: 3, description: 'Aumenta el ratio de golpe crítico de los aliados.' },
  { id: 146, name: 'Tempo Libre', generation: 5, description: 'Cura los problemas de estado después de unos turnos.' },
  { id: 147, name: 'Tumbos', generation: 3, description: 'Puede causar retroceso al rival al recibir contacto.' },
  { id: 148, name: 'Ventosa', generation: 3, description: 'Evita el cambio forzado.' },
  { id: 149, name: 'Vigilante', generation: 4, description: 'Detecta los objetos del rival al entrar.' },
  { id: 150, name: 'Vista Lince', generation: 4, description: 'La precisión no puede reducirse.' }
];

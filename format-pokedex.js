import fs from 'fs';
import { POKEDEX_DATA } from './src/data/pokedex.js';

// Usar los datos directamente importados
const data = POKEDEX_DATA;

// Formatear cada Pokémon
const formatPokemon = (p) => {
  const types = p.types.map(t => `'${t}'`).join(', ');
  const stats = `{ hp: ${p.stats.hp}, attack: ${p.stats.attack}, defense: ${p.stats.defense}, spAttack: ${p.stats.spAttack}, spDefense: ${p.stats.spDefense}, speed: ${p.stats.speed} }`;
  
  return `  {
    number: ${p.number},
    name: '${p.name}',
    types: [${types}],
    generation: ${p.generation},
    description: '${p.description.replace(/'/g, "\\'")}',
    stats: ${stats},
    evolution: '${p.evolution.replace(/'/g, "\\'")}'
  }`;
};

// Generar el archivo
const output = `// Pokédex Gen 1-3 con stats base de 6ª gen y evoluciones "Easier Evolutions"
export const POKEDEX_DATA = [
${data.map(formatPokemon).join(',\n')}
];
`;

fs.writeFileSync('./src/data/pokedex.js', output, 'utf8');
console.log(`✅ Pokédex formateada correctamente. Total: ${data.length} Pokémon`);

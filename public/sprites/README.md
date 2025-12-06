# Sprites de Jugadores

Esta carpeta contiene los sprites de los equipos Pokémon de cada jugador.

## Estructura:

Guarda los sprites de los Pokémon en formato PNG o GIF en esta carpeta.

### Formato de archivo recomendado:

Por número de Pokédex:
- `001.png` (Bulbasaur)
- `025.png` (Pikachu)
- `150.png` (Mewtwo)
- etc.

O con nombres descriptivos:
- `bulbasaur.png`
- `pikachu.png`
- `mewtwo.png`

## Uso:

Al configurar los equipos de los jugadores en la sección JUGADORES, los sprites se referencian desde:
```
/sprites/nombre-del-archivo.png
```

Los sprites se mostrarán:
- En las tarjetas compactas de jugadores
- En la vista expandida del equipo
- En el podio del INICIO (top 3)

## Fuentes de sprites:

### Oficiales:
- [PokéAPI Sprites](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/) - Sprites oficiales
- [Bulbapedia](https://bulbagarden.net/wiki/Category:Pok%C3%A9mon_sprites) - Sprites de todas las generaciones
- [Serebii.net](https://www.serebii.net/pokemon/) - Artwork y sprites

### Pixel Art:
- [PokemonDB Sprites](https://pokemondb.net/sprites) - Colección completa
- Sprites de Game Boy Advance (FireRed/LeafGreen) recomendados para mantener estética pixel art

## Consejos:

- Usa tamaño consistente (recomendado: 96x96px o 128x128px)
- Formato PNG con fondo transparente
- Nombra los archivos de forma consistente

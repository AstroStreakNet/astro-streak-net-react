export type ImageResponse = {
  id: string;
  name: string;
  imgURL: string;
};

export type ImageList = ImageResponse[];

export type PokemonSpecies = {
  name: string;
  url: string;
};

export type PokemonEntry = {
  entry_number: number;
  pokemon_species: PokemonSpecies;
};

export type PokedexResult = {
  pokemon_entries: PokemonEntry[];
};

export function AddImagesToPokedex(
  pokedexResult: PokedexResult
): PokedexResult {
  return {
    pokemon_entries: pokedexResult.pokemon_entries.map((entry) => {
      const species: PokemonSpecies = {
        name: entry.pokemon_species.name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry.entry_number}.png`,
      };
      const newEntry: PokemonEntry = {
        entry_number: entry.entry_number,
        pokemon_species: species,
      };
      return newEntry;
    }),
  };
}

export type Header = {
  "x-api-key": string;
};

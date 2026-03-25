import { Injectable, effect, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromlocalStorage = (): Character[] => {
  const data = localStorage.getItem('dragonball-characters');
  if (data === null) { 
    return [
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 }
  ]}
  return data ? JSON.parse(data) : [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters = signal<Character[]>(loadFromlocalStorage());

  saveToLocalStorage = effect(() => {
    console.log(this.characters().length);
    localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}

import { Component, signal} from '@angular/core';

interface Character{
    id: number;
    name: string;
    power: number;
}


@Component({
    templateUrl: './dragonball-page.component.html'
})

export class DragonballPagecomponent{

    name = signal('Gohan');
    power = signal(100);


    characters = signal<Character[]>([
        {id: 1, name: 'Goku', power:9001},
        {id: 2, name: 'Vegeta', power:8000},
        {id: 4, name: 'Yamcha', power:500},
    ])


}
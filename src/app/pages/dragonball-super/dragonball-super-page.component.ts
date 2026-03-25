import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/shared/character-list/character-list';
import { CharacterAdd } from "../../components/shared/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterList, CharacterAdd]
})

export class DragonballSuperPagecomponent{
    public dragonballService = inject(DragonballService);
}
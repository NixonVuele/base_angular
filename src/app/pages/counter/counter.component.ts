import { Component } from "@angular/core";


@Component({
    templateUrl:'./counter.component.html' ,   //cambiar el template html de componente
})
export class CounterPageComponent{

    counter = 15;

    increase(value: number){
        this.counter += value;
    }

    //decrease
    decrease(value: number){
        this.counter -= value;
    }

    //reset
    resetcounter(){
        this.counter = 1;
    }

}
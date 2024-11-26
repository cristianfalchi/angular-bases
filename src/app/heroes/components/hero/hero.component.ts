import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;



  get calitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(value: string = 'ironman'): void {
    this.name = value;
  }

  changeAge(value: number = 45): void {
    this.age = value;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}

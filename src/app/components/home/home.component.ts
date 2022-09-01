import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public currentSpeed: number = 0;
  public chosenUnit: Units = 'mph';
  public rawSpeed: number = 0;
  public extraAccuracy = false;

  ngOnInit(): void {
    navigator.geolocation.watchPosition(
      (position: GeolocationPosition) => {
        this.rawSpeed = position.coords.speed ?? 0;
        this.convertToChosenUnit(this.rawSpeed);
      },
      () => {
        alert(
          'There has been an error getting position, please check your location services :('
        );
      },
      { enableHighAccuracy: true }
    );
  }

  public changeUnit(newUnit: Units): void {
    this.chosenUnit = newUnit;
    this.convertToChosenUnit(this.rawSpeed);
  }

  private convertToChosenUnit(speed: number): void {
    switch (this.chosenUnit) {
      case 'm/s': {
        this.currentSpeed = this.extraAccuracy
          ? +speed.toFixed(2)
          : Math.round(speed);
        break;
      }
      case 'mph': {
        this.currentSpeed = this.extraAccuracy
          ? +(speed * 2.23694).toFixed(2)
          : Math.round(speed * 2.23694);
        break;
      }
      case 'kph': {
        this.currentSpeed = this.extraAccuracy
          ? +(speed * 3.6000059687997).toFixed(2)
          : Math.round(speed * 3.6000059687997);
        break;
      }
    }
  }
}

export type Units = 'mph' | 'kph' | 'm/s';

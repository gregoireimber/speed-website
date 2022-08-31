import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public currentSpeed: number = 0;
  public chosenUnit: Units = 'mph';

  ngOnInit(): void {
    navigator.geolocation.watchPosition(
      this.getCurrentSpeed,
      this.errorCallback
    );
  }

  public getCurrentSpeed(position: GeolocationPosition): void {
    if (navigator.geolocation) {
      const speed = position.coords.speed ?? 0;
      this.convertToChosenUnit(speed);
    } else {
      // Create a better error here
      console.log('no support for geolocation');
    }
  }

  private errorCallback(error: any): void {
    console.log('there has been an error', error);
  }

  public changeUnit(newUnit: Units): void {
    this.chosenUnit = newUnit;
    this.convertToChosenUnit(this.currentSpeed);
  }

  private convertToChosenUnit(speed: number) {
    switch (this.chosenUnit) {
      case 'm/s': {
        this.currentSpeed = speed;
        break;
      }
      case 'mph': {
        this.currentSpeed = Math.round(speed * 2.23694);
        break;
      }
      case 'kph': {
        this.currentSpeed = Math.round(speed * 3.6000059687997);
        break;
      }
    }
  }
}

export type Units = 'mph' | 'kph' | 'm/s';

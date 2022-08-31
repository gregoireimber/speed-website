import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss'],
})
export class SpeedComponent {
  @Input() speed: number = 100;
  @Input() unit: string = 'km/h';
}

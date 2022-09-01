import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss'],
})
export class SpeedComponent implements OnChanges {
  @Input() speed: number = 100;
  @Input() unit: string = 'km/h';

  public fontSize: string = '10rem';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['speed']) this.alterFontSize();
  }

  private alterFontSize(): void {
    const strLen = this.speed.toString().length;

    switch (strLen) {
      case 3: {
        this.fontSize = '8rem';
        break;
      }
      case 4: {
        this.fontSize = '6rem';
        break;
      }
      case 5: {
        this.fontSize = '4rem';
        break;
      }
      case 6: {
        this.fontSize = '2rem';
        break;
      }
    }

    if (strLen > 6) {
      this.fontSize = '1rem';
    } else if (strLen < 3) {
      this.fontSize = '10rem';
    }
  }
}

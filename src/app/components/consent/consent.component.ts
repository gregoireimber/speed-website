import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss'],
})
export class ConsentComponent {
  constructor(private router: Router) {}

  public goToHome(): void {
    this.router.navigateByUrl('/home');
  }
}

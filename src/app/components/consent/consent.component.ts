import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss'],
})
export class ConsentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goToHome(): void {
    this.router.navigateByUrl('/home');
  }
}

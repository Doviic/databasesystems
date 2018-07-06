import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-university-signup',
  templateUrl: './university-signup.component.html',
  styleUrls: ['./university-signup.component.scss'],
  animations: [routerTransition()]
})
export class UniversitySignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

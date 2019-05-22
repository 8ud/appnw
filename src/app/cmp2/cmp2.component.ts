import { Component, OnInit } from '@angular/core';
import { StestService } from '../mtest';


@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  constructor(srvTest: StestService) { } // ajout srvTest: StestService

  ngOnInit() {
  }

}

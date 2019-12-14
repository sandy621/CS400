import {Component, OnInit, Input} from '@angular/core';
import { LOCATION } from '../models/location';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  constructor() { }

  @Input() locationRes: LOCATION[];

  ngOnInit() { }

}

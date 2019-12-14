import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { LOCATION } from '../models/location';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor(private apiService: ApiCallService) {}

  @Input() ipAddress;
  locationResult: LOCATION[];

  ngOnInit() {}

  getLocation(): void {
    // @ts-ignore
    this.apiService.getLocation(this.ipAddress).subscribe(data => this.locationResult = data);
    // this.apiService.getLocation(this.ipAddress).subscribe(data => this.locationResult.push(data));
    // console.log(this.locationResult);
  }
}

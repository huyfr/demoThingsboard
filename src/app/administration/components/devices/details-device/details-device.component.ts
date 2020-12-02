import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Device} from "../../../models/device.models";
import {ActivatedRoute, Router} from "@angular/router";
import {DevicesService} from "../../../services/devices.service";

@Component({
  selector: 'app-details-device',
  templateUrl: './details-device.component.html',
  styleUrls: ['./details-device.component.scss']
})
export class DetailsDeviceComponent implements OnInit {

  editDeviceForm: FormGroup;
  submitted = false;
  currentDevice: Device;
  currentDeviceId: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private deviceService: DevicesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.trace("Go into on init details of device");
    this.editDeviceForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
    this.currentDeviceId = this.activatedRoute.snapshot.paramMap.get('deviceId')
    console.trace("Get the id from URL");
    this.deviceService.findDeviceByDeviceId(this.currentDeviceId).subscribe(
      result => {
        this.currentDevice = result;
        console.trace("Get success from backend");
        this.editDeviceForm.patchValue(this.currentDevice);
      }, error => {
        console.error("Cannot get device from backend");
      }
    )
    console.trace("Get out on init details of device");
  }

  save(): void {
    if (this.editDeviceForm.valid) {
      this.submitted = true;
      const {value} = this.editDeviceForm;
      const data = {
        ...this.currentDevice,
        ...value
      };
      this.deviceService.saveDevice(data).subscribe(
        result => {
          this.router.navigateByUrl('/admin/devices');
        }, error => {
          console.error("Cannot save edit form");
        }
      )
    } else {
      console.error("Form is invalid");
    }
  }

  get rfc(): any {
    return this.editDeviceForm.controls;
  }
}

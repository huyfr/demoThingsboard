import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DevicesService} from "../../../services/devices.service";
import {Device} from "../../../models/device.models";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  saveDeviceForm: FormGroup;
  submitted = false;
  newDevice: Device;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private deviceService: DevicesService) { }

  ngOnInit(): void {
    this.saveDeviceForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  save(): void {
    console.trace("Go into save device function");
    if (this.saveDeviceForm.valid) {
      this.submitted = true;
      this.newDevice = this.saveDeviceForm.value;
      this.deviceService.saveDevice(this.newDevice).subscribe(
        result => {
          console.info(this.newDevice);
          this.router.navigateByUrl("/admin/devices")
        }, error => {
          console.error("Cannot save device");
        }
      )
    } else {
      console.error("Form is invalid. Cannot save device");
    }
    console.trace("Get out save device function");
  }

  get rfc(): any {
    return this.saveDeviceForm.controls;
  }
}

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
              private deviceService: DevicesService
  ) { }

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
      this.newDevice.createdTime = +Date.now();
      this.deviceService.saveDevice(this.newDevice).subscribe(
        result => {
          console.info(this.newDevice);
          this.router.navigateByUrl("/admin/devices")
        }, error => {
          console.error("Cannot save device");
        }
      )
    }
    console.trace("Get out save device function");
  }

  get rfc(): any {
    return this.saveDeviceForm.controls;
  }

  deviceTemp = {
  "createdTime": 1605059648826,
  "additionalInfo": {
    "gateway": false,
    "description": null
  },
  "tenantId": {
    "entityType": "TENANT",
    "id": "5e1dd590-1d1e-11eb-aa50-b3d3cd7ce18b"
  },
  "customerId": {
    "entityType": "CUSTOMER",
    "id": "13814000-1dd2-11b2-8080-808080808080"
  },
  "name": "testPostman4",
  "type": "test",
  "label": null,
  "customerTitle": null,
  "customerIsPublic": false
}

  save1() {
    this.deviceService.saveDevice1(this.deviceTemp).subscribe(
      result => {
        console.log("success");
      }, error => {
        console.log("error")
      }
    )
  }
}

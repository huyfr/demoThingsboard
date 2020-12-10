import { Component, OnInit } from '@angular/core';
import {DevicesService} from "../../services/devices.service";
import {PageData} from "../../models/page-data";
import {Device} from "../../models/device.models";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  pageOfDevices: PageData<Device>
  listOfDevices: Array<Device>;
  length: number = 0;
  totalPages: Array<number> = [];

  constructor(private deviceService: DevicesService) { }

  ngOnInit(): void {
    console.trace("Go into onInit")
    this.deviceService.findAllDevicesFromTenant().subscribe(
      result => {
        this.pageOfDevices = result;
        this.listOfDevices = this.pageOfDevices.data;
        this.length = this.pageOfDevices.totalPages;
        for (let i = 1; i<=this.length; i++) {
          this.totalPages.push(i);
        }
        console.info(result);
      }, error => {
        console.error("Cannot get all devices of tenant")
      }
    )
    console.trace("Get out onInit")
  }

  pagination(page: number): void {
    console.trace("Go into pagination method");

    console.trace("Get out pagination method");
  }
}

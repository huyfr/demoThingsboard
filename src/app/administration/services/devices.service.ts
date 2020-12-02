import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Device} from "../models/device.models";
import {Observable} from "rxjs";

const BACKEND_LINK = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class DevicesService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public saveDevice(device: Device): Observable<Device> {
    return this.httpClient.post<Device>(BACKEND_LINK + '/api/device', device);
  }

  public findAllDevicesFromTenant(): Observable<any> {
    return this.httpClient.get<any>(BACKEND_LINK + '/api/tenant/devices?pageSize=10&page=1');
  }

  public findDeviceByDeviceId(deviceId: string): Observable<Device> {
    return this.httpClient.get<Device>(BACKEND_LINK + `/api/device/${deviceId}`);
  }
}

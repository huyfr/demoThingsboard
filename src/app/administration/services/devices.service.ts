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
}

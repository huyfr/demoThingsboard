import {TenantId} from "./tenant-id";
import {CustomerId} from "./customer-id";
import {DeviceId} from "./device-id";

export interface Device {
  id?: DeviceId;
  createdTime: number;
  additionalInfo?: any;
  tenantId?: TenantId;
  customerId?: CustomerId;
  name: string;
  type: string;
  label: string;
  customerTitle: null;
  customerIsPublic: false;
}


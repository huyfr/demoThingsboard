import {TenantId} from "./tenant-id";
import {CustomerId} from "./customer-id";

export interface Device {
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


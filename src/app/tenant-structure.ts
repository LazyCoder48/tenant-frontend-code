import { SingleTenant } from './single-tenant';

export class TenantStructure {
    roomNum: number;
    tenant1: SingleTenant;
    tenant2: SingleTenant;
    tenant3: SingleTenant;
    tenant4: SingleTenant;
    advanceAmount: number;
    rentAmount: number;
    electricityBill: number;
    miscAmount: number;
    empty: string;
    totalTenants: number;
    tenantAddition: boolean;
}

import { TenantStructure } from './tenant-structure';

export const mockTenantData: TenantStructure[] = [
    {
        roomNum: 201,
        tenant1: { name: '201-name1', number: '201-1' },
        tenant2: { name: '201-name2', number: '201-2' },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 3200, rentAmount: 3200, electricityBill: 0, miscAmount: 0, empty: 'No',
        totalTenants: 2, tenantAddition: false
    },
    {
        roomNum: 202,
        tenant1: { name: '202-name1', number: '202-1' },
        tenant2: { name: '202-name2', number: '202-2' },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 3200, rentAmount: 3200, electricityBill: 0, miscAmount: 0, empty: 'No',
        totalTenants: 2, tenantAddition: false
    },
    {
        roomNum: 203,
        tenant1: { name: '203-name1', number: '203-1' },
        tenant2: { name: '203-name2', number: '203-2' },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 3200, rentAmount: 3200, electricityBill: 0, miscAmount: 0, empty: 'No',
        totalTenants: 2, tenantAddition: true
    },
    {
        roomNum: 204,
        tenant1: { name: null, number: null },
        tenant2: { name: null, number: null },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 0, rentAmount: 0, electricityBill: 0, miscAmount: 0, empty: 'Yes',
        totalTenants: 0, tenantAddition: true
    },
    {
        roomNum: 205,
        tenant1: { name: null, number: null },
        tenant2: { name: null, number: null },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 0, rentAmount: 0, electricityBill: 0, miscAmount: 0, empty: 'Yes',
        totalTenants: 2, tenantAddition: true
    },
    {
        roomNum: 301,
        tenant1: { name: '301-name1', number: '301-1' },
        tenant2: { name: '301-name2', number: '301-2' },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 3000, rentAmount: 3000, electricityBill: 0, miscAmount: 0, empty: 'No',
        totalTenants: 2, tenantAddition: false
    },
    {
        roomNum: 302,
        tenant1: { name: '302-name1', number: '302-1' },
        tenant2: { name: '302-name2', number: '302-2' },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 3000, rentAmount: 3000, electricityBill: 0, miscAmount: 0, empty: 'No',
        totalTenants: 2, tenantAddition: true
    },
    {
        roomNum: 303,
        tenant1: { name: '303-name1', number: '303-1' },
        tenant2: { name: '303-name2', number: '303-2' },
        tenant3: { name: null, number: null },
        tenant4: { name: null, number: null },
        advanceAmount: 3000, rentAmount: 3000, electricityBill: 0, miscAmount: 0, empty: 'No',
        totalTenants: 2, tenantAddition: false
    }
];

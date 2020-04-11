export interface CallCouriorBooking {
    loginId: string;
    ConsigneeName: string;
    ConsigneeRefNo: string;
    ConsigneeCellNo: string;
    Address: string;
    Origin: string;
    DestCityId: string;
    ServiceTypeId: string;
    Pcs: string;
    Weight: string;
    Description: string;
    SelOrigin: string;
    CodAmount: string;
    SpecialHandling: string;
    MyBoxId: string;
    Holiday: string;
    remarks: string;
    ShipperName: string;
    ShipperCellNo: string;
    ShipperArea: string;
    ShipperCity: string;
    ShipperAddress: string;
    ShipperLandLineNo: string;
    ShipperEmail: string;
}

export interface CallCouriorBookingResposne {
    NetAmount: string;
    Amount: string;
    GstPer: string;
    CNNO: string;
    SpecialHandling: string;
    Response: string;
    Count: number;
}

export interface CityListByServiceType {
    CityID: number;
    CityName: string;
    CityShortDesc: string;
    StationID: number;
    StationDesc: string;
    StationShortDesc: string;
    BranchID: number;
    BranchName: string;
    HubID: number;
    HubDesc: string;
    ZoneID: number;
    ZoneDesc: string;
    RegionID: number;
    RegionDesc: string;
    ProvinceID: number;
    ProvinceName: string;
    ServiceAreaTypeID?: any;
    ServiceAreaTypeDesc?: any;
    EmployeeID?: any;
    EmployeeName?: any;
}


export interface ServiceType {
    ServiceTypeID: number;
    ServiceType1: string;
    ServiceAreaCriteriaID?: any;
    CalculationParameter?: any;
    IsCOD: boolean;
    ServiceTypeNatureID: number;
}

export let defaultCallCouriorBooking = {
    "http://cod.callcourier.com.pk/api/CallCourier/SaveBooking?loginId":"ISB-03539",
    "ConsigneeName":"Test Random",
    "ConsigneeRefNo":"test-001",
    "ConsigneeCellNo":"03345085440",
    "Address":"12 Airedale Avenue",
    "Origin":"RAWALPINDI",
    "DestCityId":"2",
    "ServiceTypeId":"7",
    "Pcs":"1",
    "Weight":"0.5",
    "Description":"test item bracelet",
    "SelOrigin":"Domestic",
    "CodAmount":"20",
    "SpecialHandling":"true",
    "MyBoxId":"1",
    "Holiday":"true",
    "remarks":"call before delivery",
    "ShipperName":"RIGOUT-ISLAMABAD",
    "ShipperCellNo":"03335180095",
    "ShipperArea":"559",
    "ShipperCity":"4",
    "ShipperAddress":"H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD",
    "ShipperLandLineNo":"03335180095",
    "ShipperEmail":"AHSANZAIDI49@GMAIL.COM",
    "ConsigneeEmail":"support@rigoutstore.com",
    "ShipperReturnAddress":"H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD"
  }
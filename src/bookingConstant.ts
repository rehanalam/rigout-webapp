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

export interface TcsBooking {
  userName: string;
  password: string;
  costCenterCode: string;
  consigneeName: string;
  consigneeAddress: string;
  consigneeMobNo: string;
  consigneeEmail: string;
  originCityName: string;
  destinationCityName: string;
  weight: number;
  pieces: number;
  codAmount: string;
  customerReferenceNo: string;
  services: string;
  productDetails: string;
  fragile: string;
  remarks: string;
  insuranceValue: number;
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

export interface BookingResponse {
  cnno: string;
  statusCode: number;
  statusMessage: string;
}

export interface CallCourierCity {
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
export interface TcsCity {
  cityID: number;
  cityName: string;
  cityCode: string;
  area: string;
}

export interface CityListByServiceType {
  callCourier: CallCourierCity[];
  tcs: TcsCity[];
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
  "http://cod.callcourier.com.pk/api/CallCourier/SaveBooking?loginId":
    "ISB-03539",
  ConsigneeName: "Test Random",
  ConsigneeRefNo: "test-001",
  ConsigneeCellNo: "03345085440",
  Address: "12 Airedale Avenue",
  Origin: "RAWALPINDI",
  DestCityId: "2",
  ServiceTypeId: "7",
  Pcs: "1",
  Weight: "0.5",
  Description: "test item bracelet",
  SelOrigin: "Domestic",
  CodAmount: "20",
  SpecialHandling: "true",
  MyBoxId: "1",
  Holiday: "true",
  remarks: "call before delivery",
  ShipperName: "RIGOUT-ISLAMABAD",
  ShipperCellNo: "03335180095",
  ShipperArea: "559",
  ShipperCity: "4",
  ShipperAddress: "H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD",
  ShipperLandLineNo: "03335180095",
  ShipperEmail: "AHSANZAIDI49@GMAIL.COM",
  ConsigneeEmail: "support@rigoutstore.com",
  ShipperReturnAddress: "H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD",
};

// CALL COURIER SETTINGS
export let callCourierConsigneeSettings = {
  ConsigneeName: "Test Random",
  ConsigneeRefNo: "test-001",
  ConsigneeCellNo: "03345085440",
  Address: "12 Airedale Avenue",
  DestCityId: "2",
  Description: "test item bracelet",
  CodAmount: "20",
  remarks: "call before delivery",
};

export let callCourierBasicSettings = {
  Origin: "RAWALPINDI",
  ServiceTypeId: "7",
  Pcs: "1",
  Weight: "0.5",
  SelOrigin: "Domestic",
  SpecialHandling: "true",
  MyBoxId: "1",
  Holiday: "true",
  ShipperName: "RIGOUT-ISLAMABAD",
  ShipperCellNo: "03335180095",
  ShipperArea: "559",
  ShipperCity: "4",
  ShipperAddress: "H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD",
  ShipperLandLineNo: "03335180095",
  ShipperEmail: "AHSANZAIDI49@GMAIL.COM",
  ConsigneeEmail: "support@rigoutstore.com",
  ShipperReturnAddress: "H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD",
};

// TCS Settings
export let tcsConsigneeSettings = {
  consigneeName: "Lizzie Becker",
  consigneeAddress: "941 Jagsup Parkway",
  consigneeMobNo: "wusguwg",
  consigneeEmail: "zes@dicevze.ca",
  originCityName: "Karachi",
  destinationCityName: "Lahore",
  weight: 1,
  pieces: 1,
  codAmount: "1",
  customerReferenceNo: "123",
  productDetails: "coubedapikpejw",
  remarks: "ucurohlakuhrened",
};

export let tcsBasicSettings = {
  userName: "sns",
  password: "abc123",
  costCenterCode: "123",
  services: "O",
  fragile: "Yes",
  insuranceValue: 1,
  originCityName: "Islamabad",
};

export let defaultTcsSettings = {
  //   ctl00$ContentPlaceHolder1$ddlCostCenter: 15269
  // ctl00$ContentPlaceHolder1$txtCustomerRef: test-3444
  // ctl00$ContentPlaceHolder1$txtConsigneeName: test-rehan
  // ctl00$ContentPlaceHolder1$ddlDeliveryType: N
  // ctl00$ContentPlaceHolder1$ddlCity: 2527
  // ctl00$ContentPlaceHolder1$txtAddress: i/5-c, street # 51
  // ctl00$ContentPlaceHolder1$txtContact: 03345085440
  // ctl00$ContentPlaceHolder1$txtEmail: m.rehan.alam@gmail.com
  // ctl00$ContentPlaceHolder1$txtCustomerName: RIGOUT
  // ctl00$ContentPlaceHolder1$txtCustomerAddress: House no 157 main double road G-7/2-4 Islamabad
  // ctl00$ContentPlaceHolder1$txtCustomerPhone: 03335180095
  // ctl00$ContentPlaceHolder1$txtCustomerEmail: ahsen.zaidi12@gmail.com
  // ctl00$ContentPlaceHolder1$txtCustomerContactPerson: AHSAN ZAIDI
  // ctl00$ContentPlaceHolder1$txtPieces: 1
  // ctl00$ContentPlaceHolder1$txtWieght: 0.5
  // ctl00$ContentPlaceHolder1$ddlFragile: NO
  // ctl00$ContentPlaceHolder1$ddlOrigin: ISB
  // ctl00$ContentPlaceHolder1$ddlDestinationCountry: 1
  // ctl00$ContentPlaceHolder1$ddlDestinationCity: 2493
  // ctl00$ContentPlaceHolder1$txtProductValueIsRupees: 200
  // ctl00$ContentPlaceHolder1$txtProductDetail: test-tego
  // ctl00$ContentPlaceHolder1$txtInsuranceValue: 1
  // ctl00$ContentPlaceHolder1$ddlService: OVERNIGHT
  // ctl00$ContentPlaceHolder1$txtRemarks: call before delivery
};

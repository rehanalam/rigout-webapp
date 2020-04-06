import { Order } from "orderConstant";
import querystringify from "querystringify";

export function getServiceType(accountId: number) {
  let responseData;
  let url = `http://cod.callcourier.com.pk/API/CallCourier/GetServiceType/${accountId}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => (responseData = data))
    .catch(console.log);

  return responseData;
}

export function saveCallCouriorBooking(order: Order) {
  let bookingResponse;
  let defaultCallCouriorBooking = {
    loginId: "test-0001",
    ConsigneeName: `${order.customer.first_name} ${order.customer.last_name}`,
    ConsigneeRefNo: order.number,
    ConsigneeCellNo: order.shipping_address.phone,
    Address: `${order.shipping_address.address1} ${order.shipping_address.address2}`,
    Origin: order.shipping_address.city,
    DestCityId: "1",
    ServiceTypeId: "7",
    Pcs: "01",
    Weight: "0.5",
    Description:
      order && order.line_items.length > 1
        ? order.number
        : order.line_items[0].name,
    SelOrigin: "Domestic",
    CodAmount: order?.total_line_items_price,
    SpecialHandling: "false",
    MyBoxId: 3,
    Holiday: "false",
    remarks: "Call before delivery",
    ShipperName: "RIGOUT",
    ShipperCellNo: "03004344328",
    ShipperArea: "1",
    ShipperCity: "1",
    ShipperAddress: "kks",
    ShipperLandLineNo: "34544343",
    ShipperEmail: "sabeeh@gmail.com",
  };
  console.log(getServiceType(26881));
  let stringifyOrder =
    order && querystringify.stringify(defaultCallCouriorBooking, "&");
  let bookingUrl = `http://cod.callcourier.com.pk/api/CallCourier/SaveBooking?${stringifyOrder}`;

  fetch(bookingUrl)
    .then((res) => res.json())
    .then((data) => {
      bookingResponse = data;
    })
    .catch(console.log);
  return bookingResponse;
}

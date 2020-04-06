import * as React from "react";
import querystringify from 'querystringify';
import { Order } from "orderConstant";
import { CallCouriorBookingResposne } from "bookingConstant";



// type OrderType = [{
//   id: number
//   number?: string;
//   email: string;
//   total_price: string;
//   gateway: string;
//   phone: string;
//   line_items: [{
//     name: string;
//     quantity: string;
//   }];
//   "shipping_address": {
//     "first_name": string,
//     "last_name": string,
//     "address1": string,
//     "phone": string,
//     "city": string,
//     "zip": string,
//     "province": string,
//     "country": string,
//     "address2": string,
//     "company": string,
//     "name": string,
//   }
// }]

export interface OrdersResponse {
  orders: Order[];
};

interface AppState {
  orders: Order[];
  bookingResponse: CallCouriorBookingResposne;
};

interface AppProps {
  
};

export class App extends React.Component<AppProps, AppState> {
  state: AppState

  constructor(props: AppProps) {
    super(props);
    
  }

  componentDidMount() {
    fetch('http://localhost:4000/order')
      .then(res => res.json())
      .then((data) => {
        this.setState({ orders: data.orders })
      })
      .catch(console.log)
  }

  componentDidUpdate() {

    // fetch('http://localhost:4000/order')
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.setState({ orders: data.orders })
    //   })
    //   .catch(console.log)
  }

  bookCallCouriour = (orderId: number) => {
    let filteredOrder: Order | undefined= this.state.orders.find(o => o.id === orderId);
    let callCouriorBookingVM = {
      "ConsigneeName": filteredOrder?.customer.first_name,
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


    console.log(callCouriorBookingVM);
    let stringifyOrder = filteredOrder && querystringify.stringify(callCouriorBookingVM, '&');
    let bookingUrl = `http://cod.callcourier.com.pk/api/CallCourier/SaveBooking?loginId=ISB-03539${stringifyOrder}`;

     fetch(bookingUrl)
      .then(res => res.json())
      .then((data) => {
        this.setState({ bookingResponse: data });
        console.log(this.state.bookingResponse)
      })
      .catch(console.log)
  }

  render() {
    return (<div>{this.state && <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Order Number</th>
          <th scope="col">Full Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">City</th>
          <th scope="col">Ordered Item</th>
          <th>Booking</th>
        </tr>
      </thead>
      
      <tbody>
        {
          this.state.orders.map(o =>
            <tr>
              <th>#{o.number}</th>
              <td>{o.shipping_address.first_name} {o.shipping_address.last_name}</td>
              <td>{o.phone}</td>
              <td>{o.shipping_address.city}</td>
              <td>
                <ul>
                  {o.line_items.map(i => <li><strong>{i.quantity}</strong> {i.name}</li>)}
                </ul>
              </td>
              <td>
                <button type="button" className="btn btn-danger">Book by TCS</button>
                <button type="button"
                  className="btn btn-success"
                  onClick={() => this.bookCallCouriour(o.id)}>Book By Call Couriour</button>
              </td>
            </tr>
          )
        }

      </tbody>
    </table>
    }
    </div>);
  }

}

export default App;

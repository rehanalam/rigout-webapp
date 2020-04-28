import * as React from "react";
import { Order } from "orderConstant";
import { CityListByServiceType, CallCourierCity, TcsCity } from "bookingConstant";
import { OrderCard } from "./orderCard";
// import { getServiceType } from "./apiClient";
import './assets/style/index.scss';

export interface OrdersResponse {
  orders: Order[];
};

interface AppState {
  orders: Order[];
  cityListByServiceType: CityListByServiceType;
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
        fetch(`http://cod.callcourier.com.pk/API/CallCourier/GetCityListByService?serviceID=7`)
          .then((resp) => resp.json())
          .then((callCourierCities) => {
            fetch(`https://apis.tcscourier.com/uat/v1/cod/cities`,
              {
                headers: {
                  accept: 'application/json',
                  'x-ibm-client-id': '69f6a55b-3d4e-4bd9-b846-0c93d038cd62'
                }
              })
              .then((resp) => resp.json())
              .then((tcsCities) => {
                this.setState({
                  orders: data.orders,
                  cityListByServiceType: {
                    tcs: tcsCities.allCities,
                    callCourier: callCourierCities
                  }
                })
              })
              .catch(console.log);

          })
          .catch(console.log);

      })
      .catch(console.log);
  }

  render() {
    return (<div>
      {this.state && this.state.orders.map((order: Order) =>
        <OrderCard key={order.id}
          order={order}
          cityListByServiceType={this.state.cityListByServiceType} />
      )}
    </div>);
  }

}

export default App;

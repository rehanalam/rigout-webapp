import * as React from 'react';
import { Order } from 'orderConstant';
import { CityListByServiceType } from 'bookingConstant';
import { CitiesList } from './citiesList';
import { BookOrderAction } from './bookOrderAction';

interface OrderCardProp {
    order: Order;
    cityListByServiceType: CityListByServiceType[];
}
interface OrderCardState {
    tagValue: string;
}

export class OrderCard extends React.Component<OrderCardProp, OrderCardState>{
    state: OrderCardState;
    constructor(props: OrderCardProp) {
        super(props);
        this.state = {
            tagValue: 'in-progress'
        }
    }

    getSelectedCityId = () => {
        return this.props.cityListByServiceType.find(c => {
            return c.CityName == this.props.order.shipping_address.city.toUpperCase();
        });
    }
    componentDidMount() {

    }

    handleChange = (event) => {
        this.setState({ tagValue: event.target.value });
    }

    renderOrderCard() {
        let { order } = this.props;
        return (
            <div className="order-card">
                <div className="header">{order.number}</div>
                <div className="body"></div>
            </div>
        );
    }

    saveOrderConfirmation = () => {
        let url = `http://localhost:4000/order/tag?id=${this.props.order.id}&tag=${this.state.tagValue}`;
        fetch(url)
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))
            .catch(console.log)
    }

    render() {
        let { order, cityListByServiceType } = this.props;
        let selectedCity = this.getSelectedCityId();
        let orderUrl = `https://stacked-store.myshopify.com/admin/orders/${order.id}`;
        return (
            <div className="order-card-wrapper">
                <div className="order-card">
                    <div className="header">
                        <h1>
                            <a target="_blank"
                                href={orderUrl}>#{order.number}</a>

                            <span className="badge badge-info">{order.fulfillment_status ? order.fulfillment_status : 'unfulfill'}</span>
                            <span className="badge badge-light">{order.tags ? order.tags : this.state.tagValue}</span>
                        </h1>
                        <p>Date: {order.created_at}</p>
                    </div>
                    <div className="body">
                        <div className="order-confirmation">
                            <form>
                                <div className="form-row">
                                    <div className="form-group  col-md-6">
                                        <label>Order Confirmation status</label>
                                        <select className="form-control" value={this.state.tagValue} onChange={this.handleChange}>
                                            <option value="in-progress">In Progress</option>
                                            <option value="confirmed">Confirmed</option>
                                            <option value="not-responding">Not Responding</option>
                                            <option value="stock-awaiting">Stock Awaiting</option>
                                            <option value="payment-pending">Payment Pending</option>
                                            <option value="dispatch-with-delay">Dispatch with Delay</option>
                                        </select>
                                    </div>
                                </div>

                            </form>
                            <div className="col-md-6">
                                <button className="btn btn-default" onClick={this.saveOrderConfirmation}>Save</button>
                            </div>
                        </div>
                        <div className="order-item-list">
                            <h3>Order Item</h3>
                            <ul>
                                {order.line_items.map(i =>
                                    <li key={i.id}>
                                        <strong>{i.quantity}</strong> {i.name}
                                    </li>)}
                            </ul>
                        </div>
                        <div className="customer-details">
                            <h3>Customers Details:</h3>
                            <form>
                                <div className="form-row">
                                    <div className="form-group  col-md-6">
                                        <label>Name</label>
                                        <input className="form-control" value={order.customer.first_name + ' ' + order.customer.last_name} />
                                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group  col-md-6">
                                        <label>Phone Number</label>
                                        <input className="form-control" value={order.shipping_address.phone} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group  col-md-12">
                                        <label>Address</label>
                                        <textarea className="form-control" value={order.shipping_address.address1 + order.shipping_address.address2} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group  col-md-4">
                                        <label>Destination City <small>{order.shipping_address.city}</small></label>
                                        <CitiesList cityListByServiceType={cityListByServiceType} selectedCity={selectedCity?.CityID} />
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label>Price</label>
                                        <input className="form-control" value={order.total_price * 165} />
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label>Email</label>
                                        <input className="form-control" value={order.customer.email} />
                                    </div>
                                </div>
                            </form>
                            <BookOrderAction order={order} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
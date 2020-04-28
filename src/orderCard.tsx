import * as React from 'react';
import { Order } from 'orderConstant';
import { CityListByServiceType } from './bookingConstant';
// import { BookOrderAction } from './bookOrderAction';
import { OrderBooking } from './orderBooking';

interface OrderCardProp {
    order: Order;
    cityListByServiceType: CityListByServiceType;
}
interface OrderCardState {
    tagValue: string;
    comment?: string;
    fullName: string;
    email: string;
    completeAddress: string;
    city: string;
    phoneNumber: string;
    totalPrice: number;
}

export class OrderCard extends React.Component<OrderCardProp, Partial<OrderCardState>>{
    state: OrderCardState;
    constructor(props: OrderCardProp) {
        super(props);
        let { order } = this.props;
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            tagValue: order.tags,
            comment: order.note,
            fullName: `${order.customer.first_name} ${order.customer.last_name || ''}`,
            email: order.customer.email,
            completeAddress: `${order.shipping_address.address1} ${order.shipping_address.address2 || ''} ${order.shipping_address.province || ''} ${order.shipping_address.zip || ''} ${order.shipping_address.country}`,
            city: order.shipping_address.city,
            phoneNumber: this.validatePhoneNumber(),
            totalPrice: order.total_price * 165,
        }
    }

    validatePhoneNumber() {
        let number = this.props.order.shipping_address.phone;

        if (!number) {
            console.log(`Phone number of ${this.props.order.order_number} is not available.`);
            return 'NA';
        }

        if (number.startsWith('+')) {
            let a = number.substr(3);
            return '0' + a.trim().replace(/\s/g, '').replace(/^0+/, '');
        }
        else if (number.startsWith('9')) {
            return '0' + number.substr(2).trim().replace(/\s/g, '').replace(/^0+/, '');
        }
        else {
            return '0' + number.trim().replace(/\s/g, '').replace(/^0+/, '');
        }
    }

    handleChange = (e) => {
        const value = e.target.name === 'isGoing' ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    saveOrderConfirmation = () => {
        let url = `http://localhost:4000/order/tag?id=${this.props.order.id}&tag=${this.state.tagValue}`;
        fetch(url)
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))
            .catch(console.log)
    }

    render() {
        let { order } = this.props;
        let orderUrl = `https://stacked-store.myshopify.com/admin/orders/${order.id}`;
        return (
            <div className="order-card-wrapper">
                <div className="order-card">
                    <div className="header">
                        <h1>
                            <a target="_blank"
                                href={orderUrl}>#{order.order_number}</a>

                            <span className="badge badge-info">{order.fulfillment_status ? order.fulfillment_status : 'unfulfill'}</span>
                            <span className="badge badge-light">{order.tags ? order.tags : this.state.tagValue}</span>
                        </h1>
                        <p>Date: {order.created_at}</p>
                    </div>
                    <div className="body">
                        <div className="form-row order-confirmation align-items-center">
                            <form className="col-4">
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
                            <div className="col-4">
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
                            <h3>Consignee Details:</h3>
                            <form>
                                <div className="form-row">
                                    <div className="form-group  col-md-6">
                                        <label>Name</label>
                                        <input type="text" className="form-control" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group  col-md-6">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group  col-md-12">
                                        <label>Address</label>
                                        <textarea className="form-control" name="completeAddress" value={this.state.completeAddress} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group  col-md-4">
                                        <label>Destination City <small>{this.state.city}</small></label>
                                        {/* <CitiesList cityListByServiceType={cityListByServiceType} selectedCity={this.state.selectedCity} onChange={this.handleReactSelectChange} /> */}
                                        <input className="form-control" name="city" value={this.state.city} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label>Price <small>({this.state.totalPrice} <strong>PKR</strong> = {this.state.totalPrice / 165} <strong>USD</strong></small>)</label>
                                        <input className="form-control" name="totalPrice" value={this.state.totalPrice} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                        <OrderBooking {...this.state}
                                orderItems={order.line_items}
                                orderNumber={order.order_number}
                                cityListByServiceType={this.props.cityListByServiceType}
                                courierService='tcs' />
                    </div>
                </div>
            </div>
        );
    }
}
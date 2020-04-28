import * as React from 'react';
import { CityOption, CitiesList } from './citiesList';
import { BookOrderAction } from './bookOrderAction';
import { LineItem } from 'orderConstant';
import { CityListByServiceType } from 'bookingConstant';

interface OrderBookingProps {
    cityListByServiceType: CityListByServiceType;
    orderNumber: number;
    orderItems: LineItem[];
    tagValue: string;
    comment?: string;
    fullName: string;
    email: string;
    completeAddress: string;
    city: string;
    phoneNumber: string;
    totalPrice: number;
    courierService: string;
}

interface OrderBookingState {
    selectedCity: CityOption;
    courierService: string;
    pieces: number;
    remarks: string;
}

export class OrderBooking extends React.Component<OrderBookingProps, Partial<OrderBookingState>> {

    constructor(props: OrderBookingProps) {
        super(props);
        this.state = {
            selectedCity: this.getSelectedCityId(this.props.courierService),
            courierService: this.props.courierService,
            remarks: 'Call Before Delivery',
            pieces: this.props.orderItems.length
        }
    }

    getSelectedCityId = (courierService) => {
        let selectedCityOption;
        if (courierService === 'tcs') {
            let selectedCity = this.props.cityListByServiceType.tcs.find(c => c.cityName == this.props.city.trim().toUpperCase());
            selectedCityOption = {
                value: selectedCity?.cityID,
                label: selectedCity?.cityName
            };
        }
        else
        {
            let selectedCity = this.props.cityListByServiceType.callCourier.find(c => c.CityName == this.props.city.trim().toUpperCase())
            selectedCityOption = {
                value: selectedCity?.CityID,
                label: selectedCity?.CityName
            };
        }
        return selectedCityOption;
    }

    handleChange = (e) => {
        const value = e.target.name === 'abc' ? e.target.checked : e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });

        if (e.target.name === 'courierService') {
            this.setState({
                selectedCity: this.getSelectedCityId(value)
            });
        }
    }

    handleReactSelectChange = (selectedOption) => {
        this.setState({
            selectedCity: selectedOption
        });
    }

    render() {
        return (
            <div className="order-booking-wrapper" >
                <div className="form-row align-items-center">
                    <div className='form-group col-md-3 '>
                        <label>Courier Service</label>
                        <select className='form-control'
                            name='courierService'
                            value={this.state.courierService}
                            onChange={this.handleChange}>
                            <option value='tcs'>TCS</option>
                            <option value='callCourier'>Call Courier</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Destination City <small>{this.props.city} {this.state.selectedCity?.value} {this.state.courierService}</small></label>
                        <CitiesList cityList={this.props.cityListByServiceType[this.state.courierService || 'tcs']}
                            selectedCity={this.state.selectedCity}
                            onChange={this.handleReactSelectChange}
                            courierService={this.state.courierService || 'tcs'} />
                    </div>
                    <div className='form-group col-md-3 '>
                        <label>Pieces</label>
                        <input className='form-control'
                            name='peices'
                            value={this.state.pieces}
                            onChange={this.handleChange}/>
                    </div>
                    <div className='form-group col-md-3 '>
                        <label>Remarks</label>
                        <input className='form-control'
                            name='remarks'
                            value={this.state.remarks}
                            onChange={this.handleChange}/>
                    </div>
                </div>
                <BookOrderAction {...this.props}
                    selectedCity={this.state.selectedCity} 
                    selectedCourierService={this.state.courierService || 'tcs'}/>
            </div>
        );
    }
}
import * as React from 'react';
import querystringify from 'querystringify';
import { LineItem } from 'orderConstant';
import { CallCouriorBookingResposne, callCourierBasicSettings, tcsBasicSettings, BookingResponse } from './bookingConstant';
import { CityOption } from 'citiesList';

interface BookOrderActionProps {
    orderNumber: number;
    orderItems: LineItem[];
    tagValue: string;
    comment?: string;
    fullName: string;
    email: string;
    completeAddress: string;
    city: string;
    selectedCity: CityOption | undefined;
    phoneNumber: string;
    totalPrice: number;
    selectedCourierService: string;
}

interface BookOrderActionState {
    bookingResponse: BookingResponse;
    loading: boolean;
}


export class BookOrderAction extends React.Component<BookOrderActionProps, BookOrderActionState> {
    state: BookOrderActionState;

    constructor(props: BookOrderActionProps) {
        super(props);
        this.state = {
            loading: false,
            bookingResponse: {
                cnno: '123',
                statusMessage: '',
                statusCode: 200
            }
        };
    }

    bookCallCourier = () => {
        let { orderNumber, orderItems, fullName, completeAddress, selectedCity, phoneNumber: phone, totalPrice } = this.props;
        let callCouriorBookingVM = {
            "ConsigneeName": fullName,
            "ConsigneeRefNo": `#${orderNumber}`,
            "ConsigneeCellNo": phone,
            "Address": completeAddress,
            "DestCityId": selectedCity?.value,
            "Description": orderItems.length > 1 ? `#${orderNumber}` : orderItems[0].name,
            "CodAmount": totalPrice * 165,
            "remarks": "call before delivery",
            ...callCourierBasicSettings
        }

        console.log(callCouriorBookingVM);
        let stringifyOrder = querystringify.stringify(callCouriorBookingVM, '&');
        let bookingUrl = `http://cod.callcourier.com.pk/api/CallCourier/SaveBooking?loginId=ISB-0353${stringifyOrder}`;

        this.setState({
            loading: true
        });

        fetch(bookingUrl)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    loading: false,
                    bookingResponse: {
                        cnno: data.CNNO,
                        statusMessage: data.Response,
                        statusCode: 200
                    }
                });
                console.log(this.state.bookingResponse)
            })
            .catch(console.log)
    }

    bookTcs = () => {
        let { orderNumber, orderItems, fullName, completeAddress, selectedCity, phoneNumber: phone, totalPrice, email } = this.props;
        let tcsBookingVM = {
            consigneeName: fullName,
            consigneeAddress: completeAddress,
            consigneeMobNo: phone,
            consigneeEmail: email || '',
            destinationCityName: selectedCity?.label,
            weight: 1,
            pieces: 1,
            codAmount: totalPrice,
            customerReferenceNo: `#${orderNumber}`,
            productDetails: orderItems.length > 1 ? `#${orderNumber}` : orderItems[0].name,
            remarks: "Call Before Delivery",
            ...tcsBasicSettings
        }

        let bookingUrl = `https://apis.tcscourier.com/production/v1/cod/create-order`;
        this.setState({
            loading: true
        });

        fetch(bookingUrl, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'x-ibm-client-id': 'ff77f4fb-45eb-43a4-995d-244d35195c2f'
            },
            body: JSON.stringify(tcsBookingVM)
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ 
                    loading: false,
                    bookingResponse: {
                    cnno: data.bookingReply.result,
                    statusCode: data.returnStatus.code,
                    statusMessage: data.returnStatus.message
                } });
                console.log(data)
            })
            .catch(console.log)
    }

    showResponse = () => {
        return (<div>
            {this.state.bookingResponse.cnno ?
                <p className="text-muted">
                    Order #{this.props.orderNumber} has been booked under CNNO {this.state.bookingResponse.cnno}
                </p>
                : <p className="text-muted ">
                    Failed to book order #{this.props.orderNumber}. {this.state.bookingResponse.statusMessage}
                </p>
            }
        </div>);
    }

    render() {
        return (
            <div>
                
                {this.props.selectedCourierService === 'callCourier' &&
                    <button className="btn btn-md btn-primary" onClick={this.bookCallCourier}>
                        {this.state.loading ? (
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>) : 'Book Call Courier'
                        }
                    </button>}
                {this.props.selectedCourierService === 'tcs' &&
                    <button className="btn btn-md btn-primary" onClick={this.bookTcs}>
                        {this.state.loading ? (
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>) : 'Book TCS'
                        }
                    </button>}
                {this.showResponse()}
            </div>
        );
    }
}
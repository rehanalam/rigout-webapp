import * as React from 'react';
import querystringify from 'querystringify';
import { Order } from 'orderConstant';
import { CallCouriorBookingResposne } from 'bookingConstant';

interface BookOrderActionProps {
    order: Order;
}

interface BookOrderActionState {
    bookingResponse: CallCouriorBookingResposne;
}

export class BookOrderAction extends React.Component<BookOrderActionProps, BookOrderActionState> {

    bookCallCouriour = () => {
        let filteredOrder: Order = this.props.order;
        let callCouriorBookingVM = {
            "ConsigneeName": `${filteredOrder?.customer.first_name} ${filteredOrder?.customer.last_name}`,
            "ConsigneeRefNo": `test-${filteredOrder?.number}`,
            "ConsigneeCellNo": "03345085440",
            "Address": `${filteredOrder?.shipping_address.address1}`,
            "Origin": "RAWALPINDI",
            "DestCityId": "2",
            "ServiceTypeId": "7",
            "Pcs": "1",
            "Weight": "0.5",
            "Description": "test item bracelet",
            "SelOrigin": "Domestic",
            "CodAmount": filteredOrder?.total_line_items_price_set.shop_money.amount,
            "SpecialHandling": "true",
            "MyBoxId": "1",
            "Holiday": "true",
            "remarks": "call before delivery",
            "ShipperName": "RIGOUT-ISLAMABAD",
            "ShipperCellNo": "03335180095",
            "ShipperArea": "559",
            "ShipperCity": "4",
            "ShipperAddress": "H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD",
            "ShipperLandLineNo": "03335180095",
            "ShipperEmail": "AHSANZAIDI49@GMAIL.COM",
            "ConsigneeEmail": "support@rigoutstore.com",
            "ShipperReturnAddress": "H NO 157 MAIN DOUBLE ROAD G-7/2-4 ISLAMABAD"
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
        let { order } = this.props;
        return (
            <div>
                <button className="btn btn-primary" onClick={this.bookCallCouriour}>Book Order</button>
                {this.state && this.state.bookingResponse && <p className="text-muted">Order #{order.number} has been booked under CNN {this.state.bookingResponse.CNNO}</p>}
            </div>
        );
    }
}
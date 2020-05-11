import * as React from 'react';

interface FulfilledOrderCardProps {
    orderNumber: number;
    orderId: number;
    fulfillmentStatus: string;
    fulfillments: any[];
}

interface FulfilledOrderCardState {

}

export class FulfilledOrderCard extends React.Component<FulfilledOrderCardProps, FulfilledOrderCardState> {
    render() {
        let {orderNumber, orderId, fulfillmentStatus, fulfillments} = this.props;
        let orderUrl = `https://stacked-store.myshopify.com/admin/orders/${orderId}`;
        return  (
            <div className="order-card-wrapper">
                <div className="order-card">
                    <div className="header">
                        <h1>
                            <a target="_blank"
                                href={orderUrl}>#{orderNumber}</a>

                            <span className="badge badge-info">{fulfillmentStatus ? fulfillmentStatus : 'unfulfill'}</span>
                            {/* <span className="badge badge-light">{order.tags ? order.tags : this.state.tagValue}</span> */}
                        </h1>
                    </div>
                    <div className="body">
                        <p><strong>Tracking Number:</strong> {fulfillments[0].tracking_number}</p>
                        <p><strong>Tracking URL:</strong> <a href={fulfillments[0].tracking_url} target="_blank">{fulfillments[0].tracking_url}</a></p>
                    </div>
                </div>
            </div>
        )
    };
}

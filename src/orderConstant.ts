export interface ShopMoney {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney {
  amount: string;
  currency_code: string;
}

export interface TotalLineItemsPriceSet {
  shop_money: ShopMoney;
  presentment_money: PresentmentMoney;
}

export interface ShopMoney2 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney2 {
  amount: string;
  currency_code: string;
}

export interface TotalDiscountsSet {
  shop_money: ShopMoney2;
  presentment_money: PresentmentMoney2;
}

export interface ShopMoney3 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney3 {
  amount: string;
  currency_code: string;
}

export interface TotalShippingPriceSet {
  shop_money: ShopMoney3;
  presentment_money: PresentmentMoney3;
}

export interface ShopMoney4 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney4 {
  amount: string;
  currency_code: string;
}

export interface SubtotalPriceSet {
  shop_money: ShopMoney4;
  presentment_money: PresentmentMoney4;
}

export interface ShopMoney5 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney5 {
  amount: string;
  currency_code: string;
}

export interface TotalPriceSet {
  shop_money: ShopMoney5;
  presentment_money: PresentmentMoney5;
}

export interface ShopMoney6 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney6 {
  amount: string;
  currency_code: string;
}

export interface TotalTaxSet {
  shop_money: ShopMoney6;
  presentment_money: PresentmentMoney6;
}

export interface ShopMoney7 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney7 {
  amount: string;
  currency_code: string;
}

export interface PriceSet {
  shop_money: ShopMoney7;
  presentment_money: PresentmentMoney7;
}

export interface ShopMoney8 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney8 {
  amount: string;
  currency_code: string;
}

export interface TotalDiscountSet {
  shop_money: ShopMoney8;
  presentment_money: PresentmentMoney8;
}

export interface OriginLocation {
  id: number;
  country_code: string;
  province_code: string;
  name: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
}

export interface LineItem {
  id: number;
  variant_id: number;
  title: string;
  quantity: number;
  sku: string;
  variant_title: string;
  vendor: string;
  fulfillment_service: string;
  product_id: number;
  requires_shipping: boolean;
  taxable: boolean;
  gift_card: boolean;
  name: string;
  variant_inventory_management: string;
  properties: any[];
  product_exists: boolean;
  fulfillable_quantity: number;
  grams: number;
  price: string;
  total_discount: string;
  fulfillment_status?: any;
  price_set: PriceSet;
  total_discount_set: TotalDiscountSet;
  discount_allocations: any[];
  admin_graphql_api_id: string;
  tax_lines: any[];
  origin_location: OriginLocation;
}

export interface ShopMoney9 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney9 {
  amount: string;
  currency_code: string;
}

export interface PriceSet2 {
  shop_money: ShopMoney9;
  presentment_money: PresentmentMoney9;
}

export interface ShopMoney10 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney10 {
  amount: string;
  currency_code: string;
}

export interface DiscountedPriceSet {
  shop_money: ShopMoney10;
  presentment_money: PresentmentMoney10;
}

export interface ShippingLine {
  id: number;
  title: string;
  price: string;
  code: string;
  source: string;
  phone?: any;
  requested_fulfillment_service_id?: any;
  delivery_category?: any;
  carrier_identifier?: any;
  discounted_price: string;
  price_set: PriceSet2;
  discounted_price_set: DiscountedPriceSet;
  discount_allocations: any[];
  tax_lines: any[];
}

export interface BillingAddress {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province?: any;
  country: string;
  last_name: string;
  address2: string;
  company?: any;
  latitude?: any;
  longitude?: any;
  name: string;
  country_code: string;
  province_code?: any;
}

export interface ShippingAddress {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province?: any;
  country: string;
  last_name: string;
  address2: string;
  company?: any;
  latitude?: any;
  longitude?: any;
  name: string;
  country_code: string;
  province_code?: any;
}

export interface ClientDetails {
  browser_ip: string;
  accept_language: string;
  user_agent: string;
  session_hash?: any;
  browser_width: number;
  browser_height: number;
}

export interface DefaultAddress {
  id: number;
  customer_id: number;
  first_name: string;
  last_name: string;
  company?: any;
  address1: string;
  address2: string;
  city: string;
  province?: any;
  country: string;
  zip: string;
  phone: string;
  name: string;
  province_code?: any;
  country_code: string;
  country_name: string;
  default: boolean;
}

export interface Customer {
  id: number;
  email: string;
  accepts_marketing: boolean;
  created_at: Date;
  updated_at: Date;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: number;
  note?: any;
  verified_email: boolean;
  multipass_identifier?: any;
  tax_exempt: boolean;
  phone?: any;
  tags: string;
  last_order_name: string;
  currency: string;
  accepts_marketing_updated_at: Date;
  marketing_opt_in_level?: any;
  tax_exemptions: any[];
  admin_graphql_api_id: string;
  default_address: DefaultAddress;
}

export interface Order {
  id: number;
  email: string;
  closed_at?: any;
  created_at: Date;
  updated_at: Date;
  number: number;
  note?: any;
  token: string;
  gateway: string;
  test: boolean;
  total_price: string;
  subtotal_price: string;
  total_weight: number;
  total_tax: string;
  taxes_included: boolean;
  currency: string;
  financial_status: string;
  confirmed: boolean;
  total_discounts: string;
  total_line_items_price: string;
  cart_token: string;
  buyer_accepts_marketing: boolean;
  name: string;
  referring_site: string;
  landing_site: string;
  cancelled_at?: any;
  cancel_reason?: any;
  total_price_usd: string;
  checkout_token: string;
  reference?: any;
  user_id?: any;
  location_id?: any;
  source_identifier?: any;
  source_url?: any;
  processed_at: Date;
  device_id?: any;
  phone?: any;
  customer_locale: string;
  app_id: number;
  browser_ip: string;
  landing_site_ref?: any;
  order_number: number;
  discount_applications: any[];
  discount_codes: any[];
  note_attributes: any[];
  payment_gateway_names: string[];
  processing_method: string;
  checkout_id: number;
  source_name: string;
  fulfillment_status?: any;
  tax_lines: any[];
  tags: string;
  contact_email: string;
  order_status_url: string;
  presentment_currency: string;
  total_line_items_price_set: TotalLineItemsPriceSet;
  total_discounts_set: TotalDiscountsSet;
  total_shipping_price_set: TotalShippingPriceSet;
  subtotal_price_set: SubtotalPriceSet;
  total_price_set: TotalPriceSet;
  total_tax_set: TotalTaxSet;
  line_items: LineItem[];
  fulfillments: any[];
  refunds: any[];
  total_tip_received: string;
  admin_graphql_api_id: string;
  shipping_lines: ShippingLine[];
  billing_address: BillingAddress;
  shipping_address: ShippingAddress;
  client_details: ClientDetails;
  customer: Customer;
}


export let orderConstant = {
    "id": 2080259211313,
    "email": "naumanm188@gmail.com",
    "closed_at": null,
    "created_at": "2020-04-05T10:15:13+05:00",
    "updated_at": "2020-04-05T10:15:18+05:00",
    "number": 3515,
    "note": null,
    "token": "e1535d55f18e206fb800e6691ac0f131",
    "gateway": "Cash on Delivery (Discount Vouchers NOT ACCEPTED)",
    "test": false,
    "total_price": "10.00",
    "subtotal_price": "10.00",
    "total_weight": 0,
    "total_tax": "0.00",
    "taxes_included": false,
    "currency": "USD",
    "financial_status": "pending",
    "confirmed": true,
    "total_discounts": "0.00",
    "total_line_items_price": "10.00",
    "cart_token": "",
    "buyer_accepts_marketing": false,
    "name": "#4515",
    "referring_site": "https://rigoutstore.pk/collections/bracelet-mens/products/pack-of-lava-and-marble-stone-beaded-stack-with-queen-crown",
    "landing_site": "/wallets/checkouts.json",
    "cancelled_at": null,
    "cancel_reason": null,
    "total_price_usd": "10.00",
    "checkout_token": "415e97a167c4c01a9fba884b7ad50ef9",
    "reference": null,
    "user_id": null,
    "location_id": null,
    "source_identifier": null,
    "source_url": null,
    "processed_at": "2020-04-05T10:15:13+05:00",
    "device_id": null,
    "phone": null,
    "customer_locale": "en",
    "app_id": 580111,
    "browser_ip": "111.119.178.151",
    "landing_site_ref": null,
    "order_number": 4515,
    "discount_applications": [],
    "discount_codes": [],
    "note_attributes": [],
    "payment_gateway_names": [
      "Cash on Delivery (Discount Vouchers NOT ACCEPTED)"
    ],
    "processing_method": "manual",
    "checkout_id": 12985764544561,
    "source_name": "web",
    "fulfillment_status": null,
    "tax_lines": [],
    "tags": "",
    "contact_email": "naumanm188@gmail.com",
    "order_status_url": "https://rigoutstore.pk/28034332/orders/e1535d55f18e206fb800e6691ac0f131/authenticate?key=aad7d883d6809b618b4f45977be34928",
    "presentment_currency": "USD",
    "total_line_items_price_set": {
      "shop_money": {
        "amount": "10.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "10.00",
        "currency_code": "USD"
      }
    },
    "total_discounts_set": {
      "shop_money": {
        "amount": "0.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "0.00",
        "currency_code": "USD"
      }
    },
    "total_shipping_price_set": {
      "shop_money": {
        "amount": "0.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "0.00",
        "currency_code": "USD"
      }
    },
    "subtotal_price_set": {
      "shop_money": {
        "amount": "10.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "10.00",
        "currency_code": "USD"
      }
    },
    "total_price_set": {
      "shop_money": {
        "amount": "10.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "10.00",
        "currency_code": "USD"
      }
    },
    "total_tax_set": {
      "shop_money": {
        "amount": "0.00",
        "currency_code": "USD"
      },
      "presentment_money": {
        "amount": "0.00",
        "currency_code": "USD"
      }
    },
    "line_items": [
      {
        "id": 4549547458609,
        "variant_id": 15657373892657,
        "title": "Pack of Lava bead stack with queen and king crown",
        "quantity": 1,
        "sku": "",
        "variant_title": "",
        "vendor": "Rigout Store – Online Shopping of Fashion Accessories",
        "fulfillment_service": "manual",
        "product_id": 2026219831345,
        "requires_shipping": true,
        "taxable": false,
        "gift_card": false,
        "name": "Pack of Lava bead stack with queen and king crown",
        "variant_inventory_management": "shopify",
        "properties": [],
        "product_exists": true,
        "fulfillable_quantity": 1,
        "grams": 0,
        "price": "10.00",
        "total_discount": "0.00",
        "fulfillment_status": null,
        "price_set": {
          "shop_money": {
            "amount": "10.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "10.00",
            "currency_code": "USD"
          }
        },
        "total_discount_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
          }
        },
        "discount_allocations": [],
        "admin_graphql_api_id": "gid://shopify/LineItem/4549547458609",
        "tax_lines": [],
        "origin_location": {
          "id": 1556012400689,
          "country_code": "PK",
          "province_code": "",
          "name": "Rigout Store – Online Shopping of Fashion Accessories",
          "address1": "House # 157,Main Double Road, G-7/2-4",
          "address2": "",
          "city": "Islamabad",
          "zip": "44000"
        }
      }
    ],
    "fulfillments": [],
    "refunds": [],
    "total_tip_received": "0.0",
    "admin_graphql_api_id": "gid://shopify/Order/2080259211313",
    "shipping_lines": [
      {
        "id": 1714839846961,
        "title": "FREE Express Shipping",
        "price": "0.00",
        "code": "FREE Express Shipping",
        "source": "shopify",
        "phone": null,
        "requested_fulfillment_service_id": null,
        "delivery_category": null,
        "carrier_identifier": null,
        "discounted_price": "0.00",
        "price_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
          }
        },
        "discounted_price_set": {
          "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
          },
          "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
          }
        },
        "discount_allocations": [],
        "tax_lines": []
      }
    ],
    "billing_address": {
      "first_name": "Nauman",
      "address1": "Opp alshfa eye hospital, flate 7 with basharat hospital on jhelum road morgaj Rawalpindi ",
      "phone": "0311 5583807",
      "city": "Rawalpindi",
      "zip": "44000",
      "province": null,
      "country": "Pakistan",
      "last_name": "Haider",
      "address2": "Flate no 7",
      "company": null,
      "latitude": null,
      "longitude": null,
      "name": "Nauman Haider",
      "country_code": "PK",
      "province_code": null
    },
    "shipping_address": {
      "first_name": "Nauman",
      "address1": "Opp alshfa eye hospital, flate 7 with basharat hospital on jhelum road morgaj Rawalpindi ",
      "phone": "0311 5583807",
      "city": "Rawalpindi",
      "zip": "44000",
      "province": null,
      "country": "Pakistan",
      "last_name": "Haider",
      "address2": "Flate no 7",
      "company": null,
      "latitude": null,
      "longitude": null,
      "name": "Nauman Haider",
      "country_code": "PK",
      "province_code": null
    },
    "client_details": {
      "browser_ip": "111.119.178.151",
      "accept_language": "en-us",
      "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 135.1.0.23.118 (iPhone9,3; iOS 13_3_1; en_PK; en-PK; scale=2.00; 750x1334; 206833405)",
      "session_hash": null,
      "browser_width": 375,
      "browser_height": 559
    },
    "customer": {
      "id": 2993245061169,
      "email": "naumanm188@gmail.com",
      "accepts_marketing": false,
      "created_at": "2020-04-05T10:10:30+05:00",
      "updated_at": "2020-04-05T10:15:14+05:00",
      "first_name": "Nauman",
      "last_name": "Haider",
      "orders_count": 1,
      "state": "disabled",
      "total_spent": "10.00",
      "last_order_id": 2080259211313,
      "note": null,
      "verified_email": true,
      "multipass_identifier": null,
      "tax_exempt": false,
      "phone": null,
      "tags": "",
      "last_order_name": "#4515",
      "currency": "USD",
      "accepts_marketing_updated_at": "2020-04-05T10:10:30+05:00",
      "marketing_opt_in_level": null,
      "tax_exemptions": [],
      "admin_graphql_api_id": "gid://shopify/Customer/2993245061169",
      "default_address": {
        "id": 3181258375217,
        "customer_id": 2993245061169,
        "first_name": "Nauman",
        "last_name": "Haider",
        "company": null,
        "address1": "Opp alshfa eye hospital, flate 7 with basharat hospital on jhelum road morgaj Rawalpindi ",
        "address2": "Flate no 7",
        "city": "Rawalpindi",
        "province": null,
        "country": "Pakistan",
        "zip": "44000",
        "phone": "0311 5583807",
        "name": "Nauman Haider",
        "province_code": null,
        "country_code": "PK",
        "country_name": "Pakistan",
        "default": true
      }
    }
  }
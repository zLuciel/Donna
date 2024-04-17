const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import { NextResponse } from "next/server";

const api = new WooCommerceRestApi({
  url: process.env.URL_WORDPRESS,
  consumerKey: process.env.KEY_CLIENT,
  consumerSecret: process.env.KEY_SECRET_CLIENT,
  version: "wc/v3",
});

export async function GET(req, res) {

  const dataCliente = {
    email: "miguel_94_14@outlook.com", // si
    first_name: "miguel", // si
    last_name: "ojara", //si
    password: "madarauchiha18",
    username: "miguel_94_14@outlook.com",
    billing: {
      first_name: "miguel",
      last_name: "ojara",
      company: "",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
      email: "miguel_94_14@outlook.com",
      phone: "(555) 555-5555",
    },
    // shipping: {
    //   first_name: "miguel",
    //   last_name: "ojara",
    //   company: "",
    //   address_1: "969 Market",
    //   address_2: "",
    //   city: "San Francisco",
    //   state: "CA",
    //   postcode: "94103",
    //   country: "US",
    // },
  };
  const dataorder = {
    payment_method: "bacs",
    customer_id: 6,
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: "miguel",
      last_name: "ojara",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
      email: "miguel_94_14@outlook.com",
      phone: "(555) 555-5555"
    },
    shipping: {
      first_name: "miguel",
      last_name: "ojara",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US"
    },
    line_items: [
      {
        product_id: 78,
        quantity: 3
      },
    ],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "50.00"
      }
    ]
  };
  const responseData = {
    success: false,
    products: [],
  };
  try {
    const { data } = await api.post(`orders`, dataorder);
    responseData.success = true;
    responseData.products = data;
    return NextResponse.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    return NextResponse.json({
      msg: "error al agregar cliente",
      error,
    });
  }
}

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
        email: "john.doe77@example.com",
        first_name: "Johnq",
        last_name: "Doeq",
        password:"madarauchiha",
        username: "john.doeq",
        billing: {
          first_name: "John",
          last_name: "Doe",
          company: "",
          address_1: "969 Market",
          address_2: "",
          city: "San Francisco",
          state: "CA",
          postcode: "94103",
          country: "US",
          email: "john.doe77@example.com",
          phone: "(555) 555-5555"
        },
        shipping: {
          first_name: "Johnq",
          last_name: "Doeq",
          company: "",
          address_1: "969 Market",
          address_2: "",
          city: "San Francisco",
          state: "CA",
          postcode: "94103",
          country: "US"
        }
      };

  const responseData = {
    success: false,
    products: [],
  };
  try {
    const { data } = await api.post(`customers`,dataCliente);
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
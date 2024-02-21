const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import { NextResponse } from "next/server";

const api = new WooCommerceRestApi({
  url: "https://woo-fortunately-different-enemy6.wpcomstaging.com/",
  consumerKey: process.env.KEY_CLIENT,
  consumerSecret: process.env.KEY_SECRET_CLIENT,
  version: "wc/v3",
});

export async function GET(req, res) {
  const responseData = {
    success: false,
    products: [],
  };
  try {
    const { data } = await api.get(`products`, {
      per_page: 50,
    });
    responseData.success = true;
    responseData.products = data;

    return NextResponse.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    return NextResponse.json({
      msg: "error al obtener los productos",
      error,
    });
  }
}

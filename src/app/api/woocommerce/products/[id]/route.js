const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import { NextResponse } from "next/server";

const api = new WooCommerceRestApi({
  url: process.env.URL_WORDPRESS,
  consumerKey: process.env.KEY_CLIENT,
  consumerSecret: process.env.KEY_SECRET_CLIENT,
  version: "wc/v3",
});

export async function GET(req, { params }) {
  const responseData = {
    success: false,
    products: [],
  };
  const categoria = Number(params.id)
  try {
    const { data } = await api.get(`products`, {
      per_page: 10,
      category: categoria
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

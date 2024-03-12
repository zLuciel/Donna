const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import { NextResponse } from "next/server";

const api = new WooCommerceRestApi({
  url: process.env.URL_WORDPRESS,
  consumerKey: process.env.KEY_CLIENT,
  consumerSecret: process.env.KEY_SECRET_CLIENT,
  version: "wc/v3",
  queryStringAuth: true,
});

export async function GET(req) {
  const responseData = {
    success: false,
    products: [],
  };
  const searchParams = req.nextUrl.searchParams
  const id_page = searchParams.get('id')

  try {
    const { data } = await api.get(`products`, {
      per_page: id_page,
      page: 1
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

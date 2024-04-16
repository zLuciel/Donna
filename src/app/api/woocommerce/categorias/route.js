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
    categorias: [],
  };


  try {
    const { data } = await api.get(`products/categories`,{
      page:2
    });
    responseData.success = true;
    responseData.categorias = data;

    return NextResponse.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    return NextResponse.json({
      msg: "error al obtener los productos",
      error,
    });
  }
}

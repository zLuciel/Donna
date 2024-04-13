'use server'
export async function dataProduct(id) {
    try {
        const URL = `${process.env.URL_WEB}/api/woocommerce/products?id=${id}`
        const res = await fetch(URL);
        const response = await res.json()
        return await response.products
    } catch (e) {
      console.log('Failed to create task')
    }
  }
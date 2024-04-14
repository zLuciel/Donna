'use server'
export async function dataProductFilter(id) {
    try {
        const URL = `${process.env.URL_WEB}/api/woocommerce/products/${id}`
        const res = await fetch(URL);
        const response = await res.json()
        return await response.products
    } catch (e) {
      console.log('Failed to create task')
    }
  }
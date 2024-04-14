'use server'
export async function dataProduct(id,category) {
   const urlVerify = category ?  `${process.env.URL_WEB}/api/woocommerce/products/${id}?category=${category}` :`${process.env.URL_WEB}/api/woocommerce/products/${id}`
    try {
        const URL = urlVerify
        const res = await fetch(URL);
        const response = await res.json()
        return await response.products
    } catch (e) {
      console.log('Failed to create task')
    }
  }
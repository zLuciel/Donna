'use server'
export async function dataProduct(id) {
    try {
        const res = await fetch("http://localhost:3000/api/woocommerce/products?id="+id);
        const response = await res.json()
        return await response.products
    } catch (e) {
      console.log('Failed to create task')
    }
  }
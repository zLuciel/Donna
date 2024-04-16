
import PageProduct from "@/components/lading/PageProduct/PageProduct"


const page= ({searchParams}) => {
  // get parametros
  const $category = searchParams.categoria;
  const $mostrar = searchParams.mostrar;
  return (
    <PageProduct  $category={$category} $mostrar={$mostrar} />

  )
}

export default page;

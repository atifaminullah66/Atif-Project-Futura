

import Mainpage from "@/components/mainpage_Component/Mainpage";
import { Product } from "@/types/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';



export default function index() {

  const [products, setProduct] = useState<Product[]>();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response =>

        setProduct(response.data.products)


      )
      .catch(error => console.log(error));
  }, []);

  console.log(products);
  const obs = products?.map(products => (
    <  Mainpage product={products} />

  ))



  return (
    <div className="d-flex  flex-wrap   w-80  mx-4  ">
      {obs}
    </div>
  )
}

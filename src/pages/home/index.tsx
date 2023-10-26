

import Mainpage from "@/components/mainpage_Component/Mainpage";
import { products } from "@/data/products";
import { Product } from "@/types/Product";
import axios from "axios";
import { useEffect, useState } from "react";



export default function index() {


  const obs = products?.map(products => (
    <  Mainpage product={products} />

  ))



  return (

    <div className="d-flex  justify-content-center  flex-wrap   w-80  mx-4  ">
      {obs}
    </div>

  )
}

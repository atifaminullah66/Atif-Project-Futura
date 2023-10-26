
import SinglePage from "@/components/singlepage_Components/SinglePage";
import { products } from "@/data/products";
import { Product } from "@/types/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function index() {


  const router = useRouter();
  const searchedID = router.query.id;

  const real = products.filter(products => products.id === searchedID);


  console.log(real);

  return (



    <div >
      {real[0] !== undefined ?
        <SinglePage pro={real[0]} /> :
        <p>working</p>}

    </div>

  );
}


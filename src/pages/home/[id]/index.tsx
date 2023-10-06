import Layout from "@/components/navbar/navbar";
import SinglePage from "@/components/singlepage_Components/SinglePage";
import { Product } from "@/types/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function index() {


  const [product, setProduct] = useState<Product>();
  const router = useRouter();
  const searchedID = router.query.id;


  useEffect(() => {
    if (searchedID !== undefined) {

      axios.get(`https://dummyjson.com/products/${searchedID}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error));
    }

  }, [searchedID])

  useEffect(() => {
    if (product != undefined)
      console.log("processing" + product)
  }, [product])




  return (
    <Layout>

    
    <div >
      {product !== undefined ?
        <SinglePage pro={product} /> :
        <p>working</p>}

    </div>
    </Layout>
  );
}


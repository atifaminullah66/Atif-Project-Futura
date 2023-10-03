
import { Product } from "@/types/Product";
import React from 'react'
import SinglePageInfo from './SinglePageInfo';
import 'bootstrap/dist/css/bootstrap.css';
import ImageComponentSingle from "./ImageComponentSingle";


type pros = {
  pro: Product
}

export default function SinglePage(pross: pros) {
  return (
    <div className="card bg-body-tertiary  w-50 " >
      <div>

        <ImageComponentSingle images={pross.pro.images} />
      </div>
      <div className="card-body  bg-gradient ">
        <SinglePageInfo
          title={pross.pro.title}

          rating={pross.pro.rating} subtitle={""} price={0} />
      </div>


    </div>
  )
}

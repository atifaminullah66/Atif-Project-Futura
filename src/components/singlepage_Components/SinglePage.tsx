
import { Product } from "@/types/Product";
import React from 'react'
import SinglePageInfo from './SinglePageInfo';

import ImageComponentSingle from "./ImageComponentSingle";


type pros = {
  pro: Product
}

export default function SinglePage(pross: pros) {
  return (
    <div className=" container  d-flex  bg-body-tertiary   justify-content-sm-center    " >
      <div className="row">
        <div className="col-md-6">  <div>
          <ImageComponentSingle images={pross.pro.images} />
        </div></div>
        <div className="col-md-6 t"> <div className="  bg-gradient d-flex align-self-center  m-5  ">
          <SinglePageInfo
            title={pross.pro.title}

            price={pross.pro.price} description={pross.pro.description} discountPercentage={pross.pro.discountPercentage} rating={0} />
        </div></div>
      </div>




    </div>
  )
}


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
        <div className="col-md-6 d-flex justify-content-center  align-items-center ">  <div d-flex justify-content-center >
          <ImageComponentSingle src={pross.pro.image.src} alt={pross.pro.image.alt} />
        </div>
        </div>

        <div className="col-md-6 t">  <div className="  bg-gradient d-flex align-self-center  m-5  ">
          <SinglePageInfo title={pross.pro.title} subtitle={pross.pro.subtitle} rating={pross.pro.rating} price={pross.pro.price} description1={pross.pro.description1} description2={pross.pro.description2} description3={pross.pro.description3} />
        </div></div>
      </div>
    </div>







  )
}

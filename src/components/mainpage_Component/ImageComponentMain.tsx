import { Product } from "@/types/Product";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

type MyProps = {
  src: string,
  alt: string

}

export default function ComponentWithImage(props: MyProps) {

  return <>
    <div className="d-flex justify-content-center object-fit-contain  ">
      <img
        src={props.src}
        width={250}
        height={250}

      />
    </div>
  </>
} 
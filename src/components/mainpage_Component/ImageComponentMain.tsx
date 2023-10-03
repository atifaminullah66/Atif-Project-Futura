import { Product } from "@/types/Product";
import Image from "next/image";

type MyProps = {
  image: string[] | undefined,

}

export default function ComponentWithImage(props: MyProps) {
  if (!props.image) {
    return <p>No Image</p>
  }
  return <>
    <img
      src={props.image[0]}
      width={250}
      height={250}
    />
  </>
} 
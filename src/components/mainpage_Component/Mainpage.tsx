import { Product } from "@/types/Product";
import ImageComponentMain from "./ImageComponentMain";
import MainInfo from "./MainInfo";
import styles from '@/styles/Home.module.css'

type Props = {

  product: Product
}


export default function Mainpage(prod: Props) {
  return (



    
    <div className="  my-4  mx-4  d-flex  arrange">
      <a className="card  " href={`home/${prod.product.id}`}>
        <div className={styles.top}>
          <div>

            <ImageComponentMain image={prod.product.images} />
          </div>
          <div>
            <MainInfo title={prod.product.title} ratings={prod.product.rating} price={prod.product.price} />

          </div>


        </div>
      </a>
    </div>
  )
}

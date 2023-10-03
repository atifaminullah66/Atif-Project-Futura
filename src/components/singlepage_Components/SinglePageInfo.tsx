// import styles from '@/styles/mainpage.module.css'

type prop = {
  title: string,

  rating: number,
  price: number,

}

export default function SinglePageInfo(props: prop) {
  return (
    <div >
      <p>{props.title}</p>

      <p >{props.price} €</p>
      <div>
        <p>Description:</p>





      </div>
    </div>
  )
}

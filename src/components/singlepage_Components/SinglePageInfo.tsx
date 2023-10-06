type prop = {
  title: string,
  rating: number,
  price: number,
  description: string,
  discountPercentage: number,
}

export default function SinglePageInfo(props: prop) {
  const discountedPrice = props.price - (props.price * props.discountPercentage / 100);
  return (
    <div className="d-flex flex-column">
      <h2>{props.title}</h2>
      <p><b ><del className="text-danger ">{props.price} €</del> {discountedPrice.toFixed(2)} €</b></p>
      <div>
        {/* <p><b className="text-bg-danger  position-absolute  ">{props.discountPercentage}%</b></p> */}
        <p>{props.description}</p>
      </div>
      <a className="btn btn-warning w-50  " href="">Add to Cart</a>
    </div>
  )
}

type prop = {
  title: string,
  subtitle: string,
  rating: number,
  price: number,
  description1: string,
  description2: string,
  description3: string,

}

export default function SinglePageInfo(props: prop) {
  return (
    <div className="d-flex flex-column">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <p className="text-danger ">{props.price} €</p>

      <p>{props.rating}</p>
      <p>{props.description1}</p>
      <p>{props.description2}</p>
      <p>{props.description3}</p>
    
      <a className="btn btn-warning w-50  " href="">Add to Cart</a>
    </div>
  )
}

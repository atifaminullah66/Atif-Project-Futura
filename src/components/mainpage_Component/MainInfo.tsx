type Props = {
  id: number,
  title: string,
  ratings: number,
  price: number,
  discountPercentage: number,
}
export default function MainInfo(prop: Props) {
  const discountedPrice = prop.price - (prop.price * prop.discountPercentage / 100);
  return (
    <div className="m-1">
      <p><b>{prop.title}</b></p>
      <p>rating : {prop.ratings}</p>
      <div className='d-flex flex-column  justify-content-between align-items'>
        <p className="m-0"><del className="text-bg-danger"><b>{prop.price} €</b></del></p> <p> <b>{discountedPrice.toFixed(2)} €</b></p>
        <a className="btn btn-danger m-2" href={`home/${prop.id}`}>
          <b>Go to Details</b> </a>
      </div>
    </div>
  )
}

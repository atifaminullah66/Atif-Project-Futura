type Props = {
  id: string,
  title: string,
  subtitle: string,
  ratings: number,
  price: number,

}
export default function MainInfo(prop: Props) {

  return (
    <div className="m-1">
      <p><b>{prop.title}</b></p>
      <p>{prop.subtitle}</p>
      <p>rating : {prop.ratings}</p>
      <div className='d-flex flex-column  justify-content-between align-items'>
        <p className="m-0"><del className="text-bg-danger"><b>{prop.price} €</b></del></p>
        <a className="btn btn-danger m-2" href={`home/${prop.id}`}>
          <b>Go to Details</b> </a>
      </div>
    </div>
  )
}

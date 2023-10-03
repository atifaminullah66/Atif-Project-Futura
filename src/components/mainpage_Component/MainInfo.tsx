import 'bootstrap/dist/css/bootstrap.css';

type Props = {
  title: string,
  ratings: number,
  price: number,
}
export default function MainInfo(prop: Props) {
  return (
    <>

      <div>
        <p >{prop.title}</p>
        <p>{prop.ratings}</p>
        <p>{prop.price} €</p>
      </div>


    </>
  )
}

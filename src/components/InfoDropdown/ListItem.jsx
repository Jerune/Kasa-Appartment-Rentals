export default function ListItems({ items }) {
  return (
    <>
        {items.map((element, index) => {
            return <span key={index}>{element}</span>
        })}
    </>
  )
}

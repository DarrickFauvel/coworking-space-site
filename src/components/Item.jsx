const Item = ({ workspace }) => {
  return (
    <section className='item'>
      <img
        src={`images/${workspace.image}`}
        className='item-img'
        alt={workspace.altText}
      />
      <div className='caption'>
        <p>{workspace.caption}</p>
      </div>
    </section>
  )
}

export default Item

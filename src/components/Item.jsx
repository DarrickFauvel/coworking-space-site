const Item = ({ workspace }) => {
  return (
    <section className='item'>
      <img
        src={`images/${workspace.image}`}
        className='item-img'
        alt={workspace.altText}
      />
      {workspace.banner && <div className='img-banner'>{workspace.banner}</div>}
      <div className='caption'>
        <p>{workspace.caption}</p>
        <button>Book</button>
      </div>
    </section>
  )
}

export default Item

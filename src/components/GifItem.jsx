

export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
       <div className="card-image">
        <img src={url} alt={title} />
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
      </div>
    </div>
  )
}

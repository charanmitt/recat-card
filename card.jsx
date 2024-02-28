import './card.css'

export const Card = () => {
  return (
    <div className="container">
        <img src="https://picsum.photos/300/200" alt='Card Image' className="card-image"/>
        <h1 className="card-title">Card Title</h1>
        <p className="card-description">Card description will be diplayed over here. If you want you can type here anyhthing you want</p>
        <a href="/card" className="card-button">
            Click here
        </a>
    </div>
  )
}

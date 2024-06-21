import './index.css'

const WinOrLoseCard = props => {
  const {details, score, onPlayAgainClicked} = props
  const {title, imgUrl, para} = details

  const onPlayAgain = () => {
    onPlayAgainClicked()
  }

  return (
    <div className="win-loss-con">
      <div className="win-loss-card-con">
        <h1 className="head">{title}</h1>
        <p className="para">{para}</p>
        <p className="scoreResult">{score}/12</p>
        <button className="btn" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img className="win-loss-img" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard

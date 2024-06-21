import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const win = {
  para: 'Best Score',
  title: 'You Won',
  imgUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
}

const loss = {
  para: 'Score',
  title: 'You Lose',
  imgUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
}

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    score: 0,
    topScore: 0,
    isWin: false,
    isLoss: false,
    winOrLoss: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClicked = id => {
    const {clickedEmojisList} = this.state

    const filteredEmojiList = clickedEmojisList.some(each => each.id === id)

    if (filteredEmojiList) {
      const {score} = this.state

      this.setState({topScore: score, isLoss: true, winOrLoss: true})
    } else {
      const {score} = this.state
      const newEmoji = {
        id,
      }
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojisList: [...prevState.clickedEmojisList, newEmoji],
      }))
      if (score === 11) {
        this.setState({isWin: true, winOrLoss: true})
      }
    }
  }

  onPlayAgainClicked = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({
        topScore: score,
      })
    }
    this.setState({
      clickedEmojisList: [],
      score: 0,
      isWin: false,
      isLoss: false,
      winOrLoss: false,
    })
  }

  render() {
    const {score, topScore, isWin, isLoss, winOrLoss} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()

    if (isWin) {
      return (
        <div className="bg-con">
          <NavBar score={score} topScore={topScore} winOrLoss={winOrLoss} />
          <WinOrLoseCard
            details={win}
            score={score}
            onPlayAgainClicked={this.onPlayAgainClicked}
          />
        </div>
      )
    } else if (isLoss) {
      return (
        <div className="bg-con">
          <NavBar score={score} topScore={topScore} winOrLoss={winOrLoss} />
          <WinOrLoseCard
            details={loss}
            score={score}
            onPlayAgainClicked={this.onPlayAgainClicked}
          />
        </div>
      )
    } else {
      return (
        <div className="bg-con">
          <NavBar score={score} topScore={topScore} winOrLoss={winOrLoss} />
          <ul className="list-con">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                key={each.id}
                emojiDetails={each}
                onEmojiClicked={this.onEmojiClicked}
              />
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default EmojiGame

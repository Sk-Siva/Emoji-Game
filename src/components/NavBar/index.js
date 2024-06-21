import React from 'react'
import './index.css'

const NavBar = props => {
  const {score, topScore, winOrLoss} = props

  return (
    <nav className="bg-nav-con">
      <div className="nav-con">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-head">Emoji Game</h1>
      </div>
      {!winOrLoss && (
        <div className="nav-con">
          <p className="score">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar

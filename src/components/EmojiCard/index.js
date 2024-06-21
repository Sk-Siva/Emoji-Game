import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClick = () => {
    onEmojiClicked(id)
  }

  return (
    <li>
      <button type="button" className="btn-emoji">
        <img
          className="emoji-image-style"
          src={emojiUrl}
          alt={emojiName}
          onClick={onEmojiClick}
        />
      </button>
    </li>
  )
}

export default EmojiCard

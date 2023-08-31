// Write your code here
import './index.css'

const CommentItem = props => {
  const {updatedlist, likeButtonChanging, onDElete} = props
  const {id, name, comment, islike} = updatedlist

  const likeButton = () => {
    likeButtonChanging(id)
  }

  const onDeleteBtn = () => {
    onDElete(id)
  }

  const likeImg = islike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list">
      <div className="Comment_contan">
        <p className="logo">R</p>
        <div className="nameCmmt_CNtr">
          <p className="Name">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="btn-contanier">
        <button type="button" onClick={likeButton}>
          <img alt="pro" src={likeImg} />
        </button>

        <button type="button" onClick={onDeleteBtn}>
          <img
            alt="detbtn"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>

      <hr />
    </li>
  )
}

export default CommentItem

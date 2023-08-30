// Write your code here
import './index.css'

const CommentItem = props => {
  const {updatedlist} = props
  const {id, name, comment, islike} = updatedlist

  let firstName = name.slice(0, 1)
  return (
    <li className="list">
      <p className="bg">R</p>
      <h1 className="Name">{name}</h1>
      <p>{comment}</p>
      <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" />
    </li>
  )
}

export default CommentItem

// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const GetComment = props => {
  const {item, toggleIsFavorite, deleteComment} = props
  const {id, name, comment, isFavorite, logobg} = item

  let image = ''
  let a = ''
  let Lc = ''

  if (isFavorite) {
    image =
      'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    Lc = 'like'
    a = 'like'
  } else {
    image = 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    Lc = 'dislike'
    a = 'liked'
  }

  const onDelete = () => {
    deleteComment(id)
  }

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li>
      <div className="name-sec">
        <p className={`name-img ${logobg}`}>{name[0]}</p>
        <h1>{name}</h1>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p>{comment}</p>
      <div className="buttons-sec">
        <div>
          <img src={image} alt={a} />
          <button className={`likebutn ${Lc}`} onClick={onClickFavoriteIcon}>
            Like
          </button>
        </div>
        <div>
          <button
            className="delbutn"
            type="button"
            onClick={onDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}
export default GetComment

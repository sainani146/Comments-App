import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import GetComment from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
export default class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, commentsList} = this.state
    const bg = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    console.log(bg)

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isFavorite: false,
      logobg: initialContainerBackgroundClassNames[bg],
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          //  each.isFavorite = !each.isFavorite
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(each => each.id !== id)
    console.log(filteredComments)

    return this.setState({commentsList: filteredComments})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="container">
        <div className="main-comment-section">
          <form onSubmit={this.onAddComment}>
            <div className="comment-section">
              <h1>Comments</h1>
              <p>Say something about 4.0 Technologies</p>
              <input
                value={name}
                onChange={this.onName}
                placeholder="Your Name"
              />{' '}
              <br />
              <textarea
                onChange={this.onComment}
                rows="4"
                cols="30"
                placeholder="Your Comment"
                value={comment}
              >
                {comment}
              </textarea>
              <br />
              <button className="addbutn" type="submit">
                Add Comment
              </button>
            </div>
          </form>

          <div className="img-section">
            <img
              className="webimg"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div className="usercomments">
          <p className="count">{commentsList.length}</p>
          <p>Comments</p>
          <ul>
            {commentsList.map(each => (
              <GetComment
                key={each.id}
                item={each}
                toggleIsFavorite={this.toggleIsFavorite}
                deleteComment={this.deleteComment}
              />
            ))}{' '}
          </ul>
        </div>
      </div>
    )
  }
}

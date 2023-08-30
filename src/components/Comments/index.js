import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const newlist = [
  {
    id: '',
    name: '',
    comment: '',
    islike: false,
  },
]

class Comments extends Component {
  state = {updatedlist: newlist, name: '', comment: ''}

  onSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const addList = {
      id: uuidv4(),
      name,
      comment,
      islike: false,
    }
    this.setState(prevState => ({
      updatedlist: [...prevState.updatedlist, addList],
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {updatedlist} = this.state
    return (
      <div className="Miain_bg">
        <h1 className="heading">Comments</h1>
        <div className="Sub_1_contanier">
          <form onSubmit={this.onSubmit}>
            <label className="lable">
              Say something about 4.0 Technologies <br />
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
            </label>
            <br />
            <textarea
              type="text"
              rows="10"
              cols="50"
              placeholder="Your Comments"
              onChange={this.onChangeComment}
            >
              {' '}
            </textarea>
            <br />
            <button type="submit">Add Comment</button>
          </form>

          <div>
            <img
              alt="labe"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr />

        <div>
          <span className="CommentCount">0</span>
          <span className="Comments">Comments</span>
          <ul>
            {updatedlist.map(eachOne => (
              <CommentItem
                key={eachOne.id}
                updatedlist={eachOne}
                initialContainerBackgroundClassNames={
                  this.initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

import React, {Component} from 'react'

export class Likes extends Component {
    state = {
        likes: 0
    }
    render () {
        return (
            <div>
                <h1>welcome to my Likes App</h1>
                <h3>likes: {this.state.likes}</h3>
                <button>like</button>
                <button>unlike</button>
                <button>reset</button>
            </div>
        )
    }
}
export default Likes
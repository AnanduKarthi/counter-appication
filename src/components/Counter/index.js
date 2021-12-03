import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.increment}>
            increase
          </button>
          <button className="button" onClick={this.decrement}>
            decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter

// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickBtn = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'Dark-mode' : 'Light-mode'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="container">
        <div className={`container1 ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.onClickBtn} type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode

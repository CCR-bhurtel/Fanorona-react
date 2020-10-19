import React from 'react'
import cssObj from './options.scss'

class Options extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { startGame, started, gameOver, nextTurn, combo } = this.props
    return (
      <div id="buttons" className={cssObj.Options}>
        {started && <button className="btn waves-effect waves-light   red "   onClick={() => gameOver()}>Give up</button>}
        {combo && <button className="btn waves-effect waves-light green"  onClick={nextTurn}>Next turn</button>}
        {!started && <button className="btn waves-effect waves-light blue lighten-3"  onClick={startGame}>Start!</button>}
        {started &&  <a  href="#Modal1" onClick={startGame}><button className="btn waves-effect waves-light blue" >
         Restart</button></a>}
      </div>
    )
  }
}

export default Options

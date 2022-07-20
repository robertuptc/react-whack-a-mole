import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {

  if (props.currentDen.isMoleVisible === true) {
    return (
      <div className="den">
        <a onClick={props.userPoints}>
          <img src={MoleIcon} className="Mole" alt="Mole" />
        </a>
      </div>
    )
  } else {
    return (
      <div className="den">
      </div>
    )
  }
}

export default Mole

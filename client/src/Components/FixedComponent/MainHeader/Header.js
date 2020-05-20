import React  ,{ Component }from "react";
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PopUp from './../PopUp/PopUp';
class Header extends Component{
  constructor(props){
    super(props);
  this.state ={
    showPopUp: false
  }
  }
  
  togglePopup(){
    this.setState({
      showPopUp :!this.state.showPopUp,
    })
  }
  closePopup() {
    this.setState({
      showPopUp: false,
    })
}
  render(){

  return (
    <div className="All-header">
      <div className="logo">
        <h1>
          Forbes
        </h1>

      </div>
      <div className="list">
        <ul>
         
          <li>
            More
          </li>
          <li>
          Breaking
          </li>
          <li>
          Featured
          </li>
          
          <li>
            Advisor
          </li>
          <li>
          Lists
          </li>
          <li>
            Lifestyle
          </li>
          
          <li>
            Small Business
          </li>
          <li>
           Business
          </li>
          <li>
            Money
          </li>
          
          <li>
          LeaderShip

          </li>
          <li>
          Innovation
          </li>
          <li>
          Billionaries
          </li>
         
        </ul>

      </div>
      <div className="search">
      {
      this.state.showPopUp ?
      <PopUp
      closePopup={this.closePopup.bind(this)} 
      ></PopUp>
      :
      <FontAwesomeIcon
      className="icon"
       icon={faSearch} 
       onClick={() => this.togglePopup()
      }
       /> 
      }      
      
      </div>

    
    </div>
  );
}
}

export default Header;

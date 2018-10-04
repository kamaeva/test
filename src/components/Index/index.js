
import React from 'react';


export default class Index extends React.Component {

  render() {
    return (
        <div className="row">
          <div className="col-md-10">
            <h2 className="available_title">Tutor’s availability</h2>
          </div>
          <div className="col-md-2">
            <div className="input_wrap select_wrap select_hover">
              <h3 className="input_title">Change your status</h3>
              <input type="text" className="input" value=""/>
              <div className="icon_wrap"><i className="fas fa-angle-down"></i></div>
              <ul className="select_list grey_list " >
                <li className="select_li" data-value="active">Available</li>
                <li className="select_li" data-value="disabled">Unavailable</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}


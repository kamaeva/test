import React from 'react';
import preloader from '../../img/spiner.gif';

const Preloader = ({cols}) => (
  	<div className ="img_wrap">
      <img src={preloader} className="spiner" alt="Preloader" />
    </div>
)

export default Preloader;

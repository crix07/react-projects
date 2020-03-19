import React from 'react';

const Button = props =>  {
  let { toggle } = props;
  return (
    <button type="button" onClick={toggle}>Click ME 👍</button>
  )
}


export default Button

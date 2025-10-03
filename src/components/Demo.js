import React from 'react'
import PropTypes from 'prop-types'

export default function Demo(props) {
  return (
    <div>
      <h1 className="h_ytl">{props.title}</h1>
    </div>
  )
}
Demo.propTypes={
    title : PropTypes.string
}
Demo.defaultProps={
   title:  'Sharwari'
};


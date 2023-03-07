import React from 'react'

const Feature = ({img}) => {
  return (
        <div className="fearure">
            <img src={img} alt="feature image" />
            <h3>Design Inspirations.</h3>
            <p>Use it as motivation to work smarter and more efficiently. Take a deep breath, stay focused, and keep moving forward.</p>
        </div>
  )
}

export default Feature

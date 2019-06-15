import React, {useState} from 'react'

const EvenMoreAwesomeFunctionalComponent = () => {
  const [color, setColor] = useState('pink')

  return (
    <div
      style={{color: color,
              fontWeight: "bold",
              fontSize: "30px",
              textAlign: "center"}}
      onClick={() => setColor("orange")}
    >
      My name is Hai Nguyen
    </div>
  )
}

export default EvenMoreAwesomeFunctionalComponent

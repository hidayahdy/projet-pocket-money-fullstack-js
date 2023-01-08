import React from 'react'

function Dateformat() {
    const maDate = new Date()
  return (
    maDate.toLocaleDateString("fr")
  )
}

export default Dateformat

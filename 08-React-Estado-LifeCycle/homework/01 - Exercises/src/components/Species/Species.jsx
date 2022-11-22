import React from 'react'

export default function Species ({ species, handleSpecies, handleAllSpecies }) {
  return (
    <div>
      
      <h2>Species</h2> {/* --- 4.1 --- */}
      {/* --- 4.2 --- */}
      {species.map((specie) => (
        <button key={specie} onClick={handleSpecies} value={specie}>{/* --- 4.4 --- */}
          {specie} {/* --- 4.3 --- */}
        </button>
      ))}
      {/* --- 4.5 --- */}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  )
}

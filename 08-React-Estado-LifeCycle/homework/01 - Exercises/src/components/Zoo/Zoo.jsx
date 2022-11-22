import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   // ------------- 1.1 -------------
   const [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      species: [],
      allAnimals: [],
   });
   // ------------- 1.6 -------------
   const handleInputChange = (evento) => {
      // console.log(evento.target.value);
      // ------------- 1.7 -------------
      setZoo({
        ...zoo,
        zooName: evento.target.value,
      });
    };
  // ------------- 2.3 -------------
    const handleSpecies = (e) => {
      setZoo({
        ...zoo,
        // ------------- 5.2 -------------
        animals: zoo.allAnimals.filter( 
          (animal) => animal.specie === e.target.value
        ),
      });
    };
  // ------------- 2.4 -------------
    const handleAllSpecies = () => {
      setZoo({
        ...zoo,
        // ------------- 5.3 -------------
        animals: zoo.allAnimals,
      });
    };
   // ------------- 2.2 -------------
    React.useEffect(() => {
      fetch("http://localhost:3001/zoo")
        .then((res) => res.json())
        .then((data) =>
          setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
          })
        )
        .catch((error) => console.log(error));
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
//-------------------------------------------------------------------------------------------
   return (
      <div>
         <label>Zoo Name:</label>   {/* --- 1.2 --- */}
         <input onChange={handleInputChange} value={zoo.zooName} />  {/* --- 1.3, 1.5, 1.8 --- */}
         <h1>{zoo.zooName}</h1>  {/* --- 1.4 --- */}
            {/* --- 2.5 --- */}
            <Species
            species={zoo.species}
            handleSpecies={handleSpecies}
            handleAllSpecies={handleAllSpecies}
            />
            <Animals animals={zoo.animals} />
      </div>
   );
}

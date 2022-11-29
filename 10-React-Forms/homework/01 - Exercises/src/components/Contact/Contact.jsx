import React from 'react'
import './Contact.modules.css'
import { useState, useEffect } from 'react';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate (inputs){
  let errors={};
  if(!inputs.name) errors.name = "Se requiere un nombre";
  if(!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico"
  if(inputs.phone <=0) errors.phone = "Sólo números positivos";
  if(!inputs.subject) errors.subject = "Se requiere un asunto";
  if(!inputs.message) errors.message = "Se requiere un mensaje";
  return errors;
}

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    subject:"",
    message:""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: 0,
    subject:"",
    message:""
  });

  function handleChange(evento){
    setErrors(
      validate({      
        ...inputs,
        [evento.target.name]:evento.target.value,
      })
    );
    // de esta manera puedo agregar propiedades al objeto sin pisar las anteriores, asi no
    // tenemos que crear un handlechange por casa input, lo mismo con los errores.
    setInputs({
      ...inputs,
      [evento.target.name]:evento.target.value,
    });
 }
  function handleSubmit(evento){
    evento.preventDefault() // evita la recarga de la pagina y asi no se pierden datos.

    if(Object.keys(errors).length > 0)// paso las keys a un arreglo, si hay valores es que tengo algun error
    {
      alert("Debes corregir los errores");
    }
    else{
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject:"",
        message:""
      });
      setErrors({
        name: "",
        email: "",
        phone: 0,
        subject:"",
        message:""
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>Crear Formulario
        <label htmlFor="name">Nombre:</label>
          <input 
            key="name" 
            name="name" 
            value={inputs.name} 
            onChange={handleChange}
            placeholder="Escribe tu nombre..." 
            type="text"
            className={errors.name && "warning"} />
          <p className='danger'> {errors.name}</p>
        

        <label htmlFor="email">Correo Electrónico:</label>
          <input 
            key="email" 
            name="email" 
            type="text"
            placeholder="Escribe tu email..." 
            value={inputs.email} 
            onChange={handleChange}
            className={errors.email && "warning"} />
          <p className='danger'> {errors.email}</p>
       

        <label htmlFor="phone">Teléfono:</label>
          <input 
            key="phone" 
            name="phone" 
            type="number"
            placeholder="Escribe un teléfono..." 
            value={inputs.phone} 
            onChange={handleChange}         
            className={errors.phone && "warning"}/>
          <p className='danger'> {errors.phone}</p>
     

        <label htmlFor="subject">Asunto:</label>
          <input 
            key="subject" 
            name="subject" 
            type="text"
            placeholder="Escribe el asunto..."
            value={inputs.subject} 
            onChange={handleChange}            
            className={errors.subject && "warning"}/>
          <p className='danger'> {errors.subject}</p>


        <label htmlFor="message">Mensaje:</label>
          <textarea 
            key="message" 
            name="message" 
            type="text"
            placeholder="Escribe tu mensaje..."
            value={inputs.message} 
            onChange={handleChange}
            className={errors.message && "warning"}/>
          <p className='danger'> {errors.message}</p>
        

        <button type="submit" >Enviar</button>
      </div>
    </form>
  
  );
}

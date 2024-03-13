import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Form}  from 'react-bootstrap';

const Formulario = (props) => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmePassword, setConfirmePassword] = useState("")

    const handleSubmit = (e) => { 
      !nombre && alert("falta ingresar nombre")
      !email && alert("falta ingresar email")
      !password && alert("falta ingresar clave")
      !confirmePassword && alert("falta confirmar clave")
      
      password !== confirmePassword && alert("contraseña diferente")
    
    }

    const onChangeNombre = (e) => {
      setNombre(e.target.value)
      console.log(nombre)
    }

    const onChangeEmail = (e) => {
      setEmail(e.target.value)
      console.log(email)
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value)
      console.log(password)
    }

    const onChangeConfirmePassword = (e) => {
      setConfirmePassword(e.target.value)
      console.log(confirmePassword)
    }

    return (

        <div> 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          
          name='nombre'
          type="text" 
          placeholder="Ingrese Nombre"
          onChange={onChangeNombre}
          // required

        />

        {/* {nombre.length<3&&<Form.Text className='text-mute'>falta ingresar nombre o tamaño inferior a 3</Form.Text>} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
          name='email'
          type="email" 
          placeholder="tucorreo@ejemplo.com"
          onChange={onChangeEmail}
          // required
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control 
          name='password'
          type="password" 
          placeholder="Contraseña"
          onChange={onChangePassword}
          // required
           />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmePassword">
        <Form.Control 
          name='ConfirmePassword'
          type="password" 
          placeholder="Confirme Contraseña" 
          onChange={onChangeConfirmePassword}
          // required
          />
          
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>

    <Alert />

    
 
        </div>
    );
}



export default Formulario;

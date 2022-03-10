import {useState} from "react";
import axios from "axios";
import { Link, Navigate, useNavigate} from "react-router-dom";




export default function Login(){
    const [user, setUser]=useState('');
    const [password,setPassword]=useState('');


    const navigate=useNavigate();



    const handleSubmit =(e)=> {
        e.preventDefault();
        const data = {
          username: user,
          password: password,
        };
        axios
          .post("http://localhost:8000/api/v1/Login/", data)
          .then(res => {
            


            alert('Registro exitoso\nUsuario: ' +res.data.user_id)

            localStorage.setItem('localToken',res.data.token)
            
            localStorage.setItem('localId',res.data.user_id)

            // localStorage.removeItem('usuario')
            // localStorage.setItem('usuario',res.data.usuario)

            // localStorage.removeItem('nombre')
            // localStorage.setItem('nombre',res.data.nombre)
            

            // localStorage.removeItem('apellido')
            // localStorage.setItem('apellido',res.data.apellido)

            // localStorage.removeItem('email')
            // localStorage.setItem('email',res.data.email)

            // localStorage.removeItem('img')
            // localStorage.setItem('img',res.data.img)

            // localStorage.removeItem('id_img')
            // localStorage.setItem('id_img',res.data.id_img)


            // navigate('/profile')
            window.location="/Profile";

          })
          .catch(error => {
            if (error.request.status==400){
              alert('Las credenciales incorrectas, intente de nuevo')
            }else{
              alert('Error en el servidor, lo sentimos, favor de reportarlo')
            }

            
            
          });
    };


    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleUserChange=(e)=>{
        setUser(e.target.value)
    }

    
        return (

            <div>  
              {/* <div>
                <div class="box">
                  <form onSubmit={handleSubmit}>
                    <label>
                      Ingrese el nombre del usuario:
                    </label>
                    <input  type="text" placeholder="Usuario"  onChange={handleUserChange}  required />
                    <label>
                      Ingrese la contraseña:
                    </label>
                    <input  type="password" placeholder="Contraseña"  onChange={handlePasswordChange}  required />
                    <button type="submit">Login</button>
                  </form>
                </div>
      
              </div> */}


                <div class="container mt-5" >
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label  class="form-label ">Nombre de usuario</label>
                            <input type="text" class="form-control" placeholder="Usuario" onChange={handleUserChange} required/>
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Contraseña</label>
                            <input type="password" class="form-control" placeholder="Contraseña" onChange={handlePasswordChange} required />
                        </div>
                        
                        
                          <button type="submit" class="btn btn-primary d-grid gap-2 col-6 mx-auto">
                            Login 
                          </button>

                        <Link to="/Register">
                          <button type="submit" class="btn btn-secondary d-grid gap-2 col-6 mx-auto m-5">
                          Registrarse
                          </button>
                        </Link>
                        
                    </form>
                    
                </div>

            </div>
            
      
          );
    
    

}
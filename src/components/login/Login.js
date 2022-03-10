import axios from "axios";
import React, {useState} from 'react';
class Post extends React.Component {

  state = {
    user: "",
    pass: ""
  };

  userChange = e => {
    this.setState(
      {
        user: e.target.value
      }
    );
  };

  passChange = e => {
    this.setState(
      {
        pass: e.target.value
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.user,
      password: this.state.pass,
    };
    axios
      .post("http://localhost:8000/api/v1/Login/", data)
      .then(res => {
        console.log(res.data)
        alert('Registro exitoso\nUsuario: ' +res.data.user_id)
        localStorage.setItem('localToken',res.data.token)
      })
      .catch(error => console.log(error));
  };






  render() {
    return (

      



      <div>

        

        <div>
          <div class="box">
            <form onSubmit={this.handleSubmit}>
              <label>
                Ingrese el nombre del usuario:
              </label>
              <input  type="text" placeholder="Usuario" value={this.state.user} onChange={this.userChange} required />
              <label>
                Ingrese la contraseña:
              </label>
              <input  type="password" placeholder="Contraseña" value={this.state.pass} onChange={this.passChange} required />
              <button type="submit">Login</button>
            </form>
          </div>

        </div>





      </div>

    );
    
  }


}

export default Post;
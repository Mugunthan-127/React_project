import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function App() {
  const Check1 = (e) => {
    e.preventDefault();
    
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user && pass.length > 5) {
      axios.get("http://localhost:3001/User")
        .then((res) => {
          const data = res.data;
          if (data.find(obj => obj.email === user)) {
            let index = data.findIndex(obj => obj.email === user);

            if (data[index].password === pass) {
              window.location.href = '/home';
            } else {
              alert("Invalid password");
            }
          } else {
            alert("User not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (!user) {
        alert("Enter User Name");
      } else {
        alert("Password must be at least 6 characters");
      }
    }
  }

  return (
    <div className="login-container">
      <form className="form" onSubmit={Check1}>
        <h2>Login</h2>
        <label>Username:</label>
        <input type="text" id="user" placeholder="Enter your username" required />
        <label>Password:</label>
        <input type="password" id='pass' placeholder="Enter your password" required />
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        <button type="submit">Login</button>
      </form>
    </div>
  ); 
}

export default App;

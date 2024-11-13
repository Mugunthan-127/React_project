import { Link } from "react-router-dom";
import './Register.css';
import axios from "axios";

function Register() {
  const Check = (e) => {
    e.preventDefault(); // Prevent form submission

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const con = document.getElementById("con").value;

    axios.get('http://localhost:3001/User')
      .then((res) => {
        const data = res.data;
        const userData = data.find(obj => obj.email === user);
        
        if (!userData && pass.length > 5) {
          if (pass === con) {
            axios.post('http://localhost:3001/User', {
              email: user,
              password: pass
            })
              .then(() => {
                window.location.href = '/';
              })
              .catch(err => console.log(err));
          } else {
            alert("Password Mismatch");
          }
        } else {
          if (pass !== con) {
            alert("Password Mismatch");
          } else if (!user) {
            alert("Enter User Name");
          } else if (pass.length < 6) {
            alert("Password must be at least 6 characters");
          } else {
            alert("User already exists");
          }
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <form className="form" onSubmit={Check}>
          <h2>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="user">Username:</label>
            <input type="text" id="user" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="pass">Create Password:</label>
            <input type="password" id="pass" placeholder="Create a password" required />
          </div>
          <div className="input-group">
            <label htmlFor="con">Confirm Password:</label>
            <input type="password" id="con" placeholder="Confirm your password" required />
          </div>
          <p>Already have an account? <Link to="/login">Login</Link></p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

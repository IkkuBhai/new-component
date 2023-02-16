import React from 'react'
import './App.css';

function App() {
  return (

    <div className="login">

        <div className='nav'>
          <div className='logo'>
            <a href="#hiclousia"><h1 href='#'>Hic<span>LOUSIA</span></h1></a>
          </div>
          
          <div className='menu'>
            <ul>
              <li><a href='#talent'>Talent Profile</a></li>
              <li><a href='#rec'>Recruiter</a></li>
              <li><a href='#about'>About Us</a></li>
              <li><a href='#contact'>Contact Us</a></li>
              <li><a href='#login'>Login</a></li>
            </ul>
          </div>
        </div>
          
        
 
       <div className="box">
        <br></br><br></br>
         <h1>Login</h1>

           <div class="inbox">
             
              <form>
                <input type="text" placeholder="Email or User Name" />
                <input type="password" placeholder="Password" />
              </form>
                
              

              <ul>
                <li><a href="#for">Forgot Password?</a></li>
                <li><a href="#al">Already have an Account?</a></li>
              </ul>
              <br></br>
              <br></br>
              <button id="log">Log In</button>
              
              
           </div>
       </div>
    </div>
  );
}

export default App;

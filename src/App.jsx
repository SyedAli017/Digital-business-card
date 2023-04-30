import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="content">
        <div className="image-container">
          <img className="profile-image" src="./images/profile-image.png" alt="profile-photo"/>

        </div>
        <div className="main-content">
          <div className="name">
            Syed Ali N
          </div>
          <div className="position">Frontend Developer</div>
          <a href="#" className="website">syedali.website</a>
          <div>
          <button className="email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
          </div>
          <div className="title">About</div>
          <div className="description">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
          <div className="title">Interests</div>
          <div className="description">Music, Football, Travelling, Food expert.</div>

          

        </div>
        <footer className="footer">
        <a href="https://twitter.com/Sydali017?t=tAXGer7188M3Mlu0RPRv7A&s=08"><i class="fa-brands fa-square-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
        <a href="https://instagram.com/sydali017?igshid=ZDdkNTZiNTM="><i class="fa-brands fa-square-instagram"></i></a>
        <a href="https://www.linkedin.com/in/syed-ali-67a161226"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/SyedAli017"><i class="fa-brands fa-square-github"></i></a>

        </footer>
      </section>
      
    </>
  )
}

export default App

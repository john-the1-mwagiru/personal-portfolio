const Home = () => {
  return (
<div className="home-div">
  
    <div className="home-page">
      
         <div className="img-container">
 
          <img className='john' src='./assets/john.jpeg' alt='john' width='190'/>

        </div>
       <div className="bio">

         <h3>ABOUT ME</h3>
         <p>Hello! I'm John a web developer based in Nairobi. I create responsive websites that are displayed on all devices.</p>
         <p>I'm quite versatile in technologies such as Javascript,React JS, HTML and CSS.</p>
      
    </div>
  </div>
      <div className="line-1"></div>
      <div className="skill-set">
        <h4>My Skills</h4>
      
      </div>
      <div className="icons">

        <img  className="css-logo" src='./assets/css.jpeg' alt='css-logo' width='100'/>
        <img  className="html-logo" src='./assets/html-logo.jpeg' alt='html-logo' width='100'/>
        <img  className="js-logo" src='./assets/JS.jpeg' alt='js-logo' width='100'/>
        <img  className="react-logo" src='./assets/react-logo.jpeg' alt='react-logo' width='100'/>
    
    </div>
    <h6>Copyright © 2022 Mwagiru</h6>
</div>
  )
}

export default Home
import Header from "../components/Header/Header";

const HomePage = () => {
  return(
    <div class="container">
        <Header/>
        <div class="header">
        <div class="card">
          <div class="cen1">
            <img src="/images/BCS.png" class="banner"/>
            <div class="center-text">
         <h1 class="centerText">
       Welcome to Vivekanand<br/>
       College!<br/>
       <h5 class="subtitle">Your journey to excellence starts here.</h5>
       <a class="apply-button" href="/addmission">Apply Now</a>
       </h1>
       </div>
       </div>
        <p class="card1"><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.
        </p>
        <p class="card1">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
        </p>
        <h2 class="card1">Why Choose Vivekanand College?
        </h2>
        <ul class="card1" type="disk">
          <li><strong>Legacy of Excellence</strong>: Decades of commitment to quality education.
          </li>
          <li><strong>Experienced Faculty</strong>: Learn from renowned experts and passionate educators.
          </li>
          <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.
          </li>
          <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.
          </li>
          <li><strong>Strong Placements</strong>: Excellent career opportunities with leading companies
          </li>
          </ul>
          <h2 class="card1">Campus Life & Facilities</h2>
          <div class="row" gap='20px'>
          <div class="column">
          <img src="/images/student.jpeg" alt="student" width="100%" height="180"/>
          </div>
          <div class="column">
          <img src="/images/vckclg.jpg" alt="vckclg" width="120%" height="180"/>
          </div>
          </div>
          <p class="card1">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
          </p>
          <p class="style">Ready to explore our courses?
          </p>
           <a class="but2" href="/courses" >Explore courses!!</a>
          </div>
          </div>
          </div>
      
    
  
  )
}
  export default HomePage;
import Header from "../components/Header/Header";

const CoursesPage = () => {
  return(
    <div class="container">
        <Header/>
        <div class="header">
          <div class="card">
            <div class="card1">
        <h1 className="centerText1">Our Academic Programs</h1>
        <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
        </p>
        <h2>Discover Campus Life</h2>
        <video src="/videos/kop.mp4" height="500" width="auto" controls></video>
        <h2>Undergraduate Programs (UG)
        </h2>
        <ul type="disk">
          <li>**Bachelor of Science (B.Sc.)**</li>
          <ul type="disk">
            <li>Computer Science (3 years)g
            </li>
            <li>Information Technology (3 years)
            </li>
            <li>Biotechnology (3 years)
            </li><br></br>
          </ul>
            <li>**Bachelor of Commerce (B.Com)**
            </li>
          <ul type="disk">
            <li>Accounting & Finance (3 years)
            </li>
            <li>Banking & Insurance (3 years)
            </li><br></br>
          </ul>
          <li>**Bachelor of Arts (B.A.)**
            </li>
          <ul type="disk">
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)
            </li><br></br>
          </ul> 
          </ul>
          <h2>Postgraduate Programs (PG)
          </h2>
          <ul type="disk">
            <li>**Master of Science (M.Sc.)**
            </li>
          <ul type="disk">
            <li>Computer Science (2 years)
            </li>
            <li>Information Technology (2 years)
            </li>
          </ul>
          <li>**Master of Commerce (M.Com)** (2 years)
          </li>
          <li>**Master of Arts (M.A.)** (2 years)
          </li>
          </ul>
          <h2>Specialized & Vocational Courses
          </h2>
          <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
          </p>

          <p class="page">Have questions about a specific course?</p>
          <a class="btn" href="/contact">Inquire About Courses</a>
       
    </div>
    </div>
    </div>
    </div>
  )
}
  export default CoursesPage;
import Header from "../components/Header/Header";

const ContactPage = () => {
  return(
    <div class="container">
        <Header/>
        <div class="header">
          <div class="card">
            <div class="card1">
          <h1 className="centerText1">Contact Us</h1>
          <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
          </p>
          <h2>General Enquiries</h2>
          <h3>Vivekanand College Main Campus</h3>
          <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
          India</p>
           <lable for="phone">Phone:**+91 12345 67890**</lable><br></br>
           <lable for="email">Email:**info@vivekanandcollege.edu**</lable><br></br>
           <lable for="office hours">Office Hours-Friday, 9:00 AM - 5:00 PM IST
           </lable>
           <h3>Admissions Office</h3>
           <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <lable for="phone">Phone:+91 98765 43210</lable><br></br>
            <lable for="email">Email:admissions@vivekanandcollege.edu</lable>
           <h2>Student Support services</h2>
           <p>For current student support, academic advising, or general assistance:</p>
            <lable for="phone">Phone:+91 8765432109</lable><br></br>
            <lable for="email">Email:studentsupport@vivekanandcollege.edu</lable>
            <h2>Find Us on the Map</h2>
            <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
            <h2>Send Us a Message</h2>
            <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]
            </p>
    </div>
    </div>
    </div>
    </div>
  )
}
  export default ContactPage;
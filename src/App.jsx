// src/App.jsx

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/pages.css";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
const [showPopup, setShowPopup] = useState(true);
const handleClosePopup = () => {
setShowPopup(false);
} 
return (
<div>
<div>
{/* Your main application content */}
<DeveloperInfoPopup
show={showPopup}
onClose={handleClosePopup}
studentName="Madhura Santosh Nikam"
studentPhotoUrl="/images/madhura.jpg" // Path to their photo
uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
/>
</div>
<Router>
<div className="main-layout">
<Header/>
<div className="content">
<Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/contact" element={<ContactPage/>} />
<Route path="/about" element={<AboutPage />} />
<Route path="/courses" element={<CoursesPage />} />
<Route path="/admissions" element={<AdmissionsPage />} />
<Route path="*" element={<NotFoundPage />} />
</Routes>
<ChatbotComponent/>
</div>
<Footer/>
</div>
</Router>
</div>
);
}
export default App;

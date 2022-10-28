import ProfileSection from "./first-stage/ProfileSection/ProfileSection";
import LinkSection from "./first-stage/LinkSection/LinkSection";
import Footer from "./components/Footer/Footer";
import Socials from "./first-stage/Socials";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div id="first-stage">
        <ProfileSection />
        <LinkSection />
        <Socials />
      </div>
      <Footer />
    </div>
  );
}

export default App;

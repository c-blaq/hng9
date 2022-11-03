import ProfileSection from "./containers/ProfileSection/ProfileSection";
import LinkSection from "./containers/LinkSection/LinkSection";
import Footer from "./components/Footer/Footer";
import Socials from "./containers/Socials";
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

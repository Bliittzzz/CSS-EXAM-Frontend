import Divider from "./components/divider/Divider";
import Home from "./components/home/Home";
import Subjects from "./components/subjects/Subjects";
import Topbar from "./components/topbar/Topbar";
import Tracks from "./components/tracks/Tracks";
import Latest from "./components/latest/Latest";
import Footer from "./components/footer/Footer";

function App() {
  
return (
    <div className="App">
        <Topbar/>
        <Home/>
        <Divider/>
        <Tracks/>
        <Divider/>
        <Subjects/>
        <Divider/>
        <Latest/>
        <Footer/>
    </div>
  );
}

export default App;

import Content from "./components/Content";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import './styles/Global.scss'


function App() {
  return (
    <div className="App">
      <SideBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

import Sidebar from "./components/sidebar";
import MainContent from "./components/MainContent";

import "./style/components/app.sass";
function App() {

  return (
    <div id="portfolio">
      <h1>Islan Anthony</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;

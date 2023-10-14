import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {
  return (
    <>
      <Navbar text="Textutile" about="aboututile"/>

      <div className="container my-3">
        <Textbox headding="Text table for convert process"/>
      </div>
    </>
  );
}

export default App;

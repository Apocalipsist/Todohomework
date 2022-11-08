import Navbar from "./component/Navbar";
import Form from "./component/Form";

function App() {
  let todolst = [{item: [], text: ''},];
  
  return (
    <>
      <Navbar />
      <div className="container">
             <h1>Hello Kids</h1>
          
             {todolst.map((item) => <Form key={item} />)}  
      </div>
    </>
  );
}

export default App;

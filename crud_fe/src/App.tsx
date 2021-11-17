import { Routes,Route } from "react-router-dom";
import Dashboard from "./Components/Common/dashboard.component";
import AddStudent from "./Components/Student/AddStudent/addstudent.component";
import ViewStudentList from "./Components/Student/viewstudents.component";

function App() {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/viewstudents" element={<ViewStudentList/>}/>
          <Route path="/addstudent" element={<AddStudent/>}/>
        </Routes>
      </div>
  );
}

export default App;

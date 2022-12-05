import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

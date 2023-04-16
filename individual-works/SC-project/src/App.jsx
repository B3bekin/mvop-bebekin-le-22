//Not IMPORTant, ha ha ha
// import Header from "./Aktuality"
import { Route, Routes } from "react-router-dom";

import FAQ from "./FAQ"
import Aktuality from "./Aktuality"
import Welcome from "./WelcomePage"
import Denicky from "./Galerie"
import News from "./Novinky";
import Stuff from "./Stuff";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/aktuality" element={<Aktuality />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/denicky" element={<Denicky />} />
        <Route path="/novinky" element={<News />} />
        <Route path="/expo" element={<Stuff />} />
      </Routes>
    </div>

  )
}

export default App

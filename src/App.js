import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Analysis from "./Compnent/Analysis";
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Analysis />
      </div>
    </ChakraProvider>
  );
}

export default App;

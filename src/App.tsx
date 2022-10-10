import AddInnovatorForm from "./components/AddInnovatorForm";
import ErrorBoundary from "./components/ErrorBoundary";
import Innovators from "./components/Innovators";
import InnovatorsContextProvider from "./context/InnovatorsContext";

function App() {
  return (
    <ErrorBoundary>
      <InnovatorsContextProvider>
        <AddInnovatorForm />
        <Innovators />
      </InnovatorsContextProvider>
    </ErrorBoundary>
  );
}

export default App;

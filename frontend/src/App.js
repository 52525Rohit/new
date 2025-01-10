import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import UserDialog from "./components/UserDialog";

function App() {
  return (
    <div>
      <Body />
      <Toaster />
      <UserDialog />
    </div>
  );
}

export default App;

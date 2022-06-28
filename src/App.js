
import "./App.css";
import { List } from "@yandex-cloud/uikit";

function App() {
  return (
    <div className="App">
      <div className="Space"></div>
      <div className="List">
        <List
          items={[
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
          ]}
          sortable
          virtualized={false}
        />
      </div>
    </div>
  );
}

export default App;






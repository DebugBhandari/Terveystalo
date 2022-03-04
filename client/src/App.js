import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TemplateForm from "./components/TemplateForm";

function App() {
  const [query, setQuery] = useState();
  const [data, setData] = useState();
 
  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const result = await axios(
          `/myapi/?action=${query.actionQuery}&number${
            query.actionQuery === "sumandcheck" ? "s" : ""
          }=${query.numbersQuery}`
        );

        setData(result.data);
      };
      fetchData();
    }
  }, [query]);

  console.log(data);
  return (
    <div className="App" data-testid="App">
      <h1>Terveystalo Test Assignment</h1>

      <TemplateForm queryHandler={setQuery} />
      {data ? (
        <div className="result" data-testid="result">
          The {data.result?"sum":"number"} is {data.result ? data.result : query.numbersQuery} and it
          is<br/> Prime: {data.isPrime.toString()}
        </div>
      ) : null}
    </div>
  );
}

export default App;

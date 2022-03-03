import React, { useState } from "react";

export default function TemplateForm({ queryHandler }) {
  const [actionQuery, setAQuery] = useState();
  const [numbersQuery, setNQuery] = useState();
  function submitHandler(e) {
    queryHandler({ actionQuery: actionQuery, numbersQuery: numbersQuery });
    console.log(actionQuery, numbersQuery);
    e.preventDefault();
  }
  function handleChange(e) {
    setNQuery(e.target.value.toString());
    e.preventDefault();
  }

  return (
    <div className="temp">
      <div className="radioo">
        <input
          data-testid="actionQuery1"
          type="radio"
          id="actionQuery1"
          name="actionQuery"
          onChange={(event) => setAQuery("checkprime")}
        />
        <label>Number and Prime check</label>
        <br />
        <input
          data-testid="actionQuery2"
          type="radio"
          id="actionQuery2"
          name="actionQuery"
          onChange={(event) => setAQuery("sumandcheck")}
        />
        <label>Sum and Prime check</label>
      </div>
      
      {actionQuery === "checkprime" ? (
        <div className="numbersCl">
          <form onSubmit={submitHandler} data-testid="form1">
            <label>Enter a number: </label>
            <input
              data-testid="numberQuery1"
              type="number"
              id="number"
              name="number"
              required
              onChange={(e) => handleChange(e)}
              
            />
            <br />
            <button type="submit" data-testid="submit1">Submit</button>
          </form>
        </div>
      ) : null}
      {actionQuery === "sumandcheck" ? (
        <div className="numbersCl">
          <form onSubmit={submitHandler} data-testid="form2">
            <label>Enter numbers separated by comma: </label>
            <input
              data-testid="numberQuery2"
              type="text"
              id="numbers"
              name="numbers"
              required
              pattern="^(?:\d+,)*\d+$"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <button type="submit" data-testid="submit2">Submit</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

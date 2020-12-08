import React from "react";

const inputcard = () => {
  return (
    <div class="text-center">
      <input type="button" value="Upload csv" /> <br/>
      <input type="button" value="Upload schema" /> <br/>
      <label>Enter your query</label><br/>
      <input type="text" /><br/>
      <button>Get SQL Query</button><br/>
      <button>Get Query Output</button><br/>
    </div>
  );
};

export default inputcard;

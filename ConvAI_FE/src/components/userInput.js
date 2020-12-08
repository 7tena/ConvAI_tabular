import React from "react";

const inputcard = () => {
  return (
    <div class="text-center">
      <input type="text" placeholder="Enter your query here" />
      <br />
      <br />
      <input type="button" value="View available csv" />
      <input type="button" value="Upload csv" />
      <input type="button" value="Upload schema" />
      <input type="button" value="Clear" />&nbsp;
      <button >Get SQL Query</button> &nbsp;
      <button>Get Query Output</button>
      
    </div>
  );
};

export default inputcard;


import React from "react";

function Form({ getWebsites }) {
  function handleSubmit(event) {
    event.preventDefault();
    getWebsites(event.target[0].value);
  }

  return (
    <form className="text-base h-8 my-8" onSubmit={handleSubmit}>
      <label className="text-lg h-8">
        Url:
        <input type="text" name="url" className="h-5 border-2 mx-2 border-black h-8 w-3/6 rounded-lg" placeholder="url to crawl ..."/>
      </label>
      <input type="submit" className="bg-slate-300 p-1 rounded-lg" />
    </form>
  );
}

export default Form
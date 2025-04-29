import React from "react";
import Form from "./Form";
import Websites from "./Websites";
import axios from "axios";
import {useState} from "react"

function Page() {
    const [websites, setWebsites] = useState([])
    function getWebsites(url) {
        axios.post('http://localhost:5000/crawler', { url: url }).then((response) => setWebsites(response.data))
    }

    return (
      <div className="m-6">
        <h1 className="text-3xl font-bold text-teal-600"> Webcrawler </h1>
            <Form getWebsites={getWebsites} />
            <Websites websites={websites}/>
      </div>
    );
}

export default Page


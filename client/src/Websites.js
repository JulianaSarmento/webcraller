
import React from "react";

function Websites({ websites }) {
    if (websites.length > 0) {
        return (
          <ul>
            {websites.map((website) => (
              <li>
                <a href={website} className="text-blue-800"> {website}</a>
              </li>
            ))}
          </ul>
        );
    }
  return (
    <></>
  );
}

export default Websites;
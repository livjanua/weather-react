import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/livjanua"
            target="_blank"
            rel="noreferrer"
          >
            Olivia J
          </a>{" "}
          and is on{" "}
          <a
            href="https://github.com/livjanua/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/comforting-babka-361423/overview"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";

import "../consent.scss";

const CONSENT_KEY = "__wcrichto_consent";

let ConsentForm = () => {
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent background scrolling when consent form is active
    document.documentElement.style.overflow = "hidden";
  }, []);

  const handleStart = () => {
    localStorage.setItem(CONSENT_KEY, "YES");
    if (ref.current) {
      ref.current.style.display = "none";
    }
    document.documentElement.style.overflow = "auto";
  };

  return (
    <div className="consent-form" ref={ref}>
      <div className="container">
        <h1>Welcome to the i 💜 Rust Docs</h1>
        <section>
          <div className="row">
            <div>
              <p>This website has the same structure as the Rust Book, but modified in two ways:</p>
              <ol>
                <li>
                  <strong>Interactive quizzes are added in each section.</strong> These quizzes help
                  you test your understanding of Rust. The quizzes also help us determine which
                  sections need improvement.
                </li>
                <li>
                  <strong>Some explanations will be changed.</strong> For instance, we will
                  experiment with modifying some of the text, including replacing it with
                  visualizations.
                </li>
              </ol>
            </div>
            <img src="img/experiment/quiz-example.png" width="300" />
          </div>
        </section>
        <div className="row">
          <button onClick={handleStart}>Start</button>
        </div>
      </div>
    </div>
  );
};

if (localStorage.getItem(CONSENT_KEY) === null) {
  const el = document.createElement("div");
  document.body.appendChild(el);
  const root = ReactDOM.createRoot(el);
  root.render(<ConsentForm />);
}

import React, { useRef } from "react";
// import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./codeDisplay.css";

export const CodeDisplay = ({ code }) => {
  // const codeRef = useRef(null);
  // const copyToClipboard = () => {
  //   const codeElement = codeRef.current;
  //   const selection = window.getSelection();
  //   const range = document.createRange();
  //   range.selectNodeContents(codeElement);
  //   selection.removeAllRanges();
  //   selection.addRange(range);
  //   document.execCommand("copy");
  //   selection.removeAllRanges();
  // };
  return (
    <div className="code-display max-w-7xl mx-auto flex">
      {/* <div className="code-header">
        <button onClick={copyToClipboard}>Copy Code</button>
      </div> */}
      <div className="code-body">
        <SyntaxHighlighter
          language="jsx"
          style={darcula}
          customStyle={{ fontSize: 14 }}
          showLineNumbers={true}
          lineNumberStyle={{ color: "#888" }}
          wrapLines={true}
          className="m-0"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

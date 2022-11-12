import "./App.css";
import CodeBlock from "./components/CodeBlock";
function App() {
  const code = `import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";;
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeBlock = ({ codeString }) => {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={vscDarkPlus}
      showLineNumber={true}
      customStyle={{ borderRadius: "5px", backgroundColor: "#001E3C" }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};
export default CodeBlock;`;
  return (
    <div>
      <CodeBlock codeString={code} />
    </div>
  );
}

export default App;

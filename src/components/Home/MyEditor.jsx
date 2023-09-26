import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState(""); // State to store the editor's HTML content

  // Function to handle changes in the editor content
  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={MyEditor.modules}
      />
    </div>
  );
};

// Define Quill modules (you can customize this as needed)
MyEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["link"],
    ["clean"],
  ],
};

export default MyEditor;

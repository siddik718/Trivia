import React, { useState } from 'react';
import './style.css';

import { useNavigate } from 'react-router';

function UploadForm() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate()
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/api/upload_file/', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      alert('Succecfully Uploaded')
      console.log(data);
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="upload-info">
          <p>Please upload a CSV file with the following format:</p>
        </div>
        <div className="upload-example">
          <p>Copy the first line paste it to your .csv file</p>
          <code>"question_text,answer_text,distractor_1_text,distractor_2_text,distractor_3_text"</code>
          <p>Then You can Add Multiple Question Like This</p>
          <p>Question?,ans,wrong ans 1,wrong ans 2,wrong ans 2</p>
          <p>Example :</p>
          <code>question_text,answer_text,distractor_1_text,distractor_2_text,distractor_3_text<br />
            What is the capital of France?,Paris,Dhaka,Tokio,New York<br />
            What is a correct syntax to output "Hello World" in Java?,System.out.println("Hello World");,echo("Hello World");,Console.WriteLine("Hello World");,print ("Hello World");</code>
        </div>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={!file}>
          Upload
        </button>
      </form>
    </>
  );
}

export default UploadForm;

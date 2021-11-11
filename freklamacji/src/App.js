import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = (e) => {
    setData({
      ...data,
      files: e.target.files,
    });
  };

  const sendFile = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const userFiles = document.querySelector("#file");
    formData.append("name", data.name);
    formData.append("surname", data.surname);

    for (let i = 0; i < userFiles.files.length; i++) {
      formData.append(`photo${i}`, userFiles.files[i]);
    }

    axios({
      method: "post",
      url: "http://localhost:3001/api/clientComplaint",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => handleInput(e)}
      />
      <br />
      <br />
      <input
        id="file"
        type="file"
        name="files"
        onChange={(e) => handleFiles(e)}
        multiple
      />
      <br />
      <br />

      <button
        onClick={(e) => {
          sendFile(e);
        }}
      >
        Send
      </button>
    </div>
  );
};

export default App;

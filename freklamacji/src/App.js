import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import styled from "styled-components";

import "./App.css";

import ProgressBar from "./Components/ProgressBar";

const MyInput = styled(TextField)({
  background: "#ffffff",
  padding: "5px 10px",
});

const App = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  const [bar, setBar] = useState(1);

  const handleStep = (id) => {
    console.log(id);
    setBar(id);
  };

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

      <ProgressBar bar={bar} handleStep={handleStep} />
      <Box component="form" noValidate autoComplete="off">
        <div>
          <MyInput
            id="outlined-password-input"
            label="Numer zamówienia lub numer faktury: *"
            type="text"
            autoComplete="current-password"
            size="small"
            fullWidth
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
};

export default App;

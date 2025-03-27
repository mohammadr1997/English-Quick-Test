"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link.js";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "../../Button.tsx";

import { Metadata } from "next";
const metadata: Metadata = {
  title: "register",
};

export default function Form() {
  const [emailInput, setEmailInput] = useState("");
  const [errorEmail, setErrorEmail] = useState<null | boolean>(null);
  const [errorPassword, setErrorPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [middleName, setMiddleName] = useState<null | string>("");
  const [lastName, setLastName] = useState<null | string>("");
  const [showPassword, setShowPassword] = useState(false);
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleRegister = () => {
    if (middleName == "") setMiddleName(null);
    if (lastName == "") setLastName(null);

    if (emailInput == "" || !emailRegex.test(emailInput)) setErrorEmail(true);
    if (password == "" || !passwordRegex.test(password)) setErrorPassword(true);

    if (
      emailInput !== "" &&
      !errorEmail &&
      password !== "" &&
      !errorPassword &&
      middleName &&
      lastName
    ) {
      setEmailInput("");
      setLastName("");
      setMiddleName("");
      setPassword("");
      window.location.href = "/questions/page-1";
    }
  };
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(!emailRegex.test(emailInput));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    setErrorPassword(!passwordRegex.test(password) && password !== "");
  };
  const handleMiddleName = (e) => {
    setMiddleName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <section className="w-full  h-screen bg-sky-50 relative flex justify-center">
      <h2 className="font-semi-bold text-3xl mt-2">Start Your English Test!</h2>
      <div className="w-10/12 md:w-8/12  mx-auto flex flex-col   p-4 bg-slate-50 absolute top-14 rounded-md border-1 border-stone-200">
        <div className="flex flex-col justify-center w-full h-1/2  mt-4  gap-4">
          <div className="flex flex-col gap-4 mt-2 w-full md:w-1/2 mx-auto  ">
            <label>E-mail:</label>
            <TextField
              value={emailInput}
              onChange={handleEmailChange}
              error={errorEmail}
              helperText={errorEmail ? "please insert valid Email address" : ""}
              id="outlined-basic"
              placeholder="write here"
              variant="outlined"
              className="w-full"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person2OutlinedIcon sx={{ color: "green" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& label": {
                  color: "black",
                },
                "& label.Mui-focused": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </div>

          <div className="flex flex-col gap-4 mt-2 w-full md:w-1/2 mx-auto ">
            <label>password:</label>
            <TextField
              value={password}
              onChange={handlePasswordChange}
              error={errorPassword}
              type={showPassword ? "text" : "password"}
              helperText={
                errorPassword &&
                "password must contains at least 6 characters with number and words "
              }
              id="outlined-basic"
              variant="outlined"
              placeholder="write here"
              className="w-full"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "green" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <Visibility sx={{ color: "green" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "green" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& label": {
                  color: "black",
                },
                "& label.Mui-focused": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-2 w-full md:w-1/2 justify-center mx-auto">
          <div className="flex flex-col gap-4 mt-2 w-full md:w-1/2">
            <label>First and MiddleName</label>
            <TextField
              value={middleName}
              onChange={handleMiddleName}
              error={middleName === null}
              helperText={middleName === null && "please insert middleName"}
              id="outlined-basic"
              variant="outlined"
              placeholder="write here"
              className="w-full"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              sx={{
                "& label": {
                  color: "black",
                },
                "& label.Mui-focused": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-4 mt-2 w-full md:w-1/2">
            <label>Last Name(s)</label>
            <TextField
              value={lastName}
              onChange={handleLastName}
              error={lastName === null}
              helperText={lastName === null && "please insert lastName"}
              id="outlined-basic"
              variant="outlined"
              placeholder="write here"
              className="w-full"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              sx={{
                "& label": {
                  color: "black",
                },
                "& label.Mui-focused": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="flex w-full justify-start md:justify-center mt-5">
          <Button onClick={handleRegister}>Register</Button>
        </div>
      </div>
    </section>
  );
}

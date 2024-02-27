import React, { useState } from "react";
import { TextField, InputAdornment, FormControl, InputLabel, IconButton, Button, Input, Checkbox, Alert, Stack, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase config/Firebase";

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const handleUsername = () => {
        if (!usernameInput || usernameInput.length < 5 || usernameInput.length > 15) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    };

    const handleEmail = () => {
        if (!isEmail(emailInput)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handlePassword = () => {
        if (!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccess("");
        if (usernameError || emailError || passwordError || !usernameInput || !emailInput || !passwordInput) {
            setFormValid("Please check your inputs and try again.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
            const user = userCredential.user;
            console.log("User signed up:", user);
            setSuccess("Form submitted successfully");
            // navigate("/home");
        } catch (error) {
            console.error("Error signing up:", error.message);
            setFormValid(error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div style={{ marginTop: "10px" }}>
                        <TextField
                            error={usernameError}
                            label="Username"
                            id="standard-basic"
                            variant="standard"
                            sx={{ width: "100%" }}
                            size="small"
                            value={usernameInput}
                            onChange={(event) => setUsernameInput(event.target.value)}
                            onBlur={handleUsername}
                        />
                    </div>

                    <div style={{ marginTop: "5px" }}>
                        <TextField
                            label="Email Address"
                            fullWidth
                            error={emailError}
                            id="standard-basic"
                            variant="standard"
                            sx={{ width: "100%" }}
                            value={emailInput}
                            size="small"
                            onBlur={handleEmail}
                            onChange={(event) => setEmailInput(event.target.value)}
                        />
                    </div>
                    <div style={{ marginTop: "5px" }}>
                        <FormControl sx={{ width: "100%" }} variant="standard">
                            <InputLabel
                                error={passwordError}
                                htmlFor="standard-adornment-password"
                            >
                                Password
                            </InputLabel>
                            <Input
                                error={passwordError}
                                onBlur={handlePassword}
                                id="standard-adornment-password"
                                type={showPassword ? "text" : "password"}
                                onChange={(event) => setPasswordInput(event.target.value)}
                                value={passwordInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>

                    <div style={{ marginTop: "25px" }}>
                        <Button
                            variant="contained"
                            fullWidth
                            startIcon={<LoginIcon />}
                            onClick={handleSubmit}
                        >
                            SIGN UP
                        </Button>
                    </div>

                    {formValid && (
                        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                            <Alert severity="error" size="small">
                                {formValid}
                            </Alert>
                        </Stack>
                    )}

                    {success && (
                        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                            <Alert severity="success" size="small">
                                {success}
                            </Alert>
                        </Stack>
                    )}

                    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: "space-between" }}>
                        <Typography variant="p" style={{ color: "dodgerblue", cursor: "pointer" }}>Create an account.</Typography>
                        <Link className="link" variant="p">Having access to an account? Login.</Link>
                    </div>

                </div>
            </form>
        </>
    );
};

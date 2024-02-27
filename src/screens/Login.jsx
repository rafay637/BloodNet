import React, { useState } from "react";
import { TextField, InputAdornment, FormControl, InputLabel, IconButton, Button, Checkbox, Alert, Stack, Typography, Input } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase config/Firebase";

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

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
        if (emailError || passwordError || !emailInput || !passwordInput) {
            setFormValid("Please check your email and password and try again.");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, emailInput, passwordInput);
            setSuccess("Login Successful");
            navigate("/home");
        } catch (error) {
            console.error("Error signing in:", error.message);
            setFormValid(error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
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

                    <div style={{ fontSize: "13px", paddingTop: "10px" }}>
                        <Checkbox
                            size="small"
                            checked={rememberMe}
                            onChange={(event) => setRememberMe(event.target.checked)}
                        />
                        Remember Me
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <Button
                            variant="contained"
                            fullWidth
                            startIcon={<LoginIcon />}
                            onClick={handleSubmit}
                        >
                            LOGIN
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
                        <Typography variant="p" style={{ color: "dodgerblue", cursor: "pointer" }}>Forgot Password?</Typography>
                        <Link className="link" variant="p">Don't have an account? SignUp.</Link>
                    </div>

                </div>
            </form>
        </>
    );
};

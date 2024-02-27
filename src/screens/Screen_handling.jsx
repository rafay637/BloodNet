import "../App.css";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const Screen_handling = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <div className="handling">
                <Paper className="subhandling" elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
                    <div align="center">
                        {checked ? (
                            <Chip
                                icon={<LockIcon />}
                                label="Log In"
                                variant="outlined"
                                color="info"
                            />
                        ) : (
                            <Chip
                                icon={<FaceIcon />}
                                label="Sign Up"
                                variant="outlined"
                                color="info"
                            />
                        )}
                        <br />

                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </div>

                    {checked ? <Login /> : <SignUp />}
                </Paper>
            </div>
        </>
    );
};
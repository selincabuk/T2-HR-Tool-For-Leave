import { useState } from "react";
import "./Components.css"
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


function RegisterationForm() {
    interface userStateString {
        state: string;
        settingState: React.Dispatch<React.SetStateAction<string>>;
    }
    // state for getting input values:
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === "fname")
            setFname(value as string);
        else if (id === "lname")
            setLname(value as string);
        else if (id === "email")
            setEmail(value as string);
        else if (id === "pwd")
            setPassword(value as string);
        else if (id === "pwdAgain")
            setPassword2(value as string);

    }

    const handleGenderSelectChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    return (
        <div>
            <form className="form__holder">

                <input type="text" name="fname" placeholder="Enter first name" required className="form__input"
                    id="fname" onChange={(e) => inputChangeHandler(e)} />

                <input type="text" name="lname" placeholder="Enter last name" required className="form__input"
                    id="lname" onChange={(e) => inputChangeHandler(e)} />

                <input type="text" name="email" placeholder="Enter email" required className="form__input"
                    id="email" onChange={(e) => inputChangeHandler(e)} />

                <input type="password" name="password" placeholder="Enter password" required className="form__input"
                    id="pwd" onChange={(e) => inputChangeHandler(e)} />

                <input type="password" name="password" placeholder="Enter password again" required className="form__input"
                    id="pwdAgain" onChange={(e) => inputChangeHandler(e)} />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select className="select__input"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            label="Gender"
                            onChange={handleGenderSelectChange}
                        >
                            <MenuItem value={"female"}>Female</MenuItem>
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"noresponse"}>I prefer not so say</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <input type="date" name="bd" placeholder="Enter Birthday" required className="form__input"
                    id="bd" onChange={(e) => inputChangeHandler(e)} />

                <button type="submit" className="button__submit"><span>Register </span>  </button>
            </form>
        </div >
    );
}

export default RegisterationForm;
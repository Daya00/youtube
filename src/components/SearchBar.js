import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = (props) => {

    const [searchTerm, SetSearchTerm] = useState("");

    const SubmitHandler = (event) => {        
        props.OnAppSubmit(searchTerm);
        event.preventDefault();
    }

    const ChangeHandler = (event) => {
        SetSearchTerm(event.target.value);        
    }

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={SubmitHandler}>
                <TextField fullWidth label="Search.." onChange={ChangeHandler} />
            </form>
        </Paper>
    )
}

export default SearchBar;


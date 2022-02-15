import React from "react";
import { Grid, Paper, Typography } from '@material-ui/core';

const VedioItem = ({ vedio, onVideoSelect }) => {
    debugger;
    return (
        <Grid item cs={12}>
            <Paper style={{ display: "flex", alignItems: 'center', cursor:'pointer' }} onClick={() => onVideoSelect(vedio)}>
                <img style={{ marginRight: '20px' }} alt="thumbnail" src={vedio.snippet.thumbnails.medium.url}></img>
                <Typography variant="subtitle"><b>{vedio.snippet.title}</b></Typography>
            </Paper>
        </Grid>

    )
}

export default VedioItem;
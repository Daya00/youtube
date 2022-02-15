import React from "react";
import { Paper, Typography } from '@material-ui/core';

const VedioDetails = ({ vedio }) => {
    if (!vedio) return <div>Loading</div>;
    const vedioURL = `https://www.youtube.com/embed/${vedio.id.videoId}`;
    console.log(vedioURL);
    return (
        <>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder={0} height="100%" width="100%" title="vedio player" src={vedioURL} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4" >{vedio.snippet.title} - {vedio.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1" >{vedio.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{vedio.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default VedioDetails;


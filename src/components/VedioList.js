import { Grid } from "@material-ui/core";
import React from "react";
import VedioItem from "./VedioItem";

const VedioList = ({ vedio, onVedioSelect }) => {
    debugger;
    const listofVedios = vedio.map((vid, id) => <VedioItem onVideoSelect={onVedioSelect} key={id} vedio={vid} />)
    return (
        <Grid container spacing={10}>
            {listofVedios}
        </Grid>
    )
}

export default VedioList;


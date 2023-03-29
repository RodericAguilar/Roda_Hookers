import React, { useState } from "react";
import { Box, Button, Divider, Stack, Card, CardActions, CardContent, CardMedia, Typography, Grid, LinearProgress } from "@mui/material";

import Options from "./Options";
import { fetchNui } from "../utils/fetchNui";
import Animations from "./Animations";


interface IAnimation {
    Label: string;
    AnimId: number;
}


const Menu: React.FC<{ animations: IAnimation[] }> = ({ animations }) => {
    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        }}>
            <Box sx={{
                marginRight: '5vw',
                width: "19vw",
                height: "25vw",
                background: "linear-gradient(316deg, #000000d4, #310050c4)",
                borderRadius: "0.25vw",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
            }}>
                <Typography variant="h6" component="h2" sx={{
                    margin: ".5vw",
                    color: "white",
                }}>
                    Animations
                </Typography>;
                <Box sx={{
                    width: "16vw",
                    height: "20vw",
                    background: "linear-gradient(0deg, rgba(255,255,255,.3) 0%, rgba(255,255,255,0.08) 50%)",
                    position: "absolute",
                    // center the box
                    top: "53%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "0.25vw",
                    overflowY: "auto",
                    padding: ".4vw",
                }}>
                    {animations.map((row: IAnimation) => (
                        <Animations onClick={(e) => {
                            e.preventDefault();
                            fetchNui("executeAnimation", { id: row.AnimId })
                        }} label={row.Label}></Animations>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Menu;
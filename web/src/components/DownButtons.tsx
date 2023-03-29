import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import { fetchNui } from "../utils/fetchNui";
import {Locale} from "../store/Locale";

const DownButtons: React.FC = () => {

    return (
        <Box sx={{
            position: 'absolute',
            bottom: '1vw',
            right: '1vw',
            width: '20vw',
            height: '3vw',
            float: 'right',
            // backgroundColor: 'red',  
            display: 'flex',
            justifyContent: 'center',
            gap: '1vw',
            alignItems: 'center',
            rowDirection: 'row',
        }}>
            <Box sx={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                padding: '.5vw',
                color: 'white',
                borderRadius: '.4vw',
                boxShadow: '.0vw .0vw .0vw .3vw rgba(0,0,0, 0.03)',
            }}>
                <span style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,.3) 0%, rgba(255,255,255,0.08) 50%)",
                    padding: '.2vw',
                    borderRadius: '.4vw',
                }}>{Locale.finishAnimation}</span> {Locale.textToExit}
            </Box>
            <Box sx={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                padding: '.5vw',
                color: 'white',
                borderRadius: '.4vw',
                boxShadow: '.0vw .0vw .0vw .3vw rgba(0,0,0, 0.03)',
            }}>
                <span style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,.3) 0%, rgba(255,255,255,0.08) 50%)",
                    padding: '.2vw .4vw .2vw .4vw',
                    borderRadius: '.4vw',
                }}>{Locale.openAnimation}</span> {Locale.textToOpen}
            </Box>
        </Box>
    )
}

export default DownButtons;
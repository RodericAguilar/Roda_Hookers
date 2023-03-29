import React, { useState } from "react";
import { Box, Button, Divider, Stack, Card, CardActions, CardContent, CardMedia, Typography, Grid, LinearProgress } from "@mui/material";

import Options from "./Options";
import { fetchNui } from "../utils/fetchNui";
import {Locale} from "../store/Locale";

interface IData {
    label: string;
    img: string;
    age: number;
    height: number;
    weight: number;
    reviews: number;
    id: number;
    price: number;
}

const Home: React.FC<{ hookers: IData[]; }> = ({ hookers }) => {
    return (
        <Box sx={{
            background: "linear-gradient(316deg, #000000d4, #310050c4)",
            width: "100%",
            height: "100%",
        }}>
            <Box sx={{
                width: "70vw",
                height: "34.5vw",
                backgroundColor: '#310050',
                boxShadow: '.0vw .0vw .3vw rgba(0,0,0,0.8)',
                borderRadius: ".5vw",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
                <Stack sx={{}}
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Box sx={{
                        overflowY: "auto",
                        width: "70vw",
                        height: "32vw",
                        margin: "1.2vw",
                    }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {hookers.map((row: IData) => (
                                <Grid item xs={2} sm={4} md={4} key={row.id}>
                                    <Card sx={{
                                        maxWidth: '33vw',
                                        background: "linear-gradient(0deg, rgba(255,255,255,.3) 0%, rgba(255,255,255,0) 80%)",
                                        borderRadius: ".7vw",
                                    }}>

                                        <CardContent sx={{
                                            textAlign: "center",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignContent: "center",
                                            alignItems: "center",
                                            padding: "1vw 1vw 0 1vw",
                                        }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                alignContent: "center",
                                                // backgroundColor: "red",
                                                width: "14vw",
                                                height: "14vw",
                                                borderRadius: "1.5vw",
                                                boxShadow: "0 0 0.3vw #9032bb75",
                                                border: "0.15vw solid #9032bb75",
                                                marginBottom: ".2vw",
                                            }}>
                                                <CardMedia sx={{
                                                    width: "12vw",
                                                    margin: "1vw",
                                                    height: "12vw",
                                                    borderRadius: "1vw",
                                                    border: ".15vw solid #9032bb",
                                                    padding: ".3vw",
                                                }}
                                                    component="img"
                                                    image={row.img}
                                                    alt="green iguana"
                                                />
                                            </Box>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {row.label}
                                            </Typography>
                                            <Box sx={{
                                                width: "100%",
                                                fontSize: ".8vw",
                                            }}>
                                                <Options label={Locale.age}> {row.age}</Options>
                                                <Options label={Locale.height}>{row.height}</Options>
                                                <Options label={Locale.weight}>{row.weight}</Options>
                                                <Options label={Locale.review}>
                                                    <Box sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        alignContent: "center",
                                                    }}>
                                                        <Box sx={{
                                                            width: "100%",
                                                            marginTop: ".35vw",
                                                            height: ".5vw",
                                                        }}>
                                                            <LinearProgress variant="determinate" value={row.reviews} sx={{
                                                                borderRadius: ".5vw",
                                                                height: ".4vw",
                                                                backgroundColor: "#ffffff22",
                                                                boxShadow: "0 0 0.3vw #31005075",
                                                                "& .MuiLinearProgress-barColorPrimary": {
                                                                    backgroundColor: "#310050",
                                                                }
                                                            }
                                                            } />
                                                        </Box>
                                                    </Box>
                                                </Options>
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{
                                            padding: "1vw",
                                        }}>
                                            <Button sx={{
                                                width: "100%",
                                                textAlign: "center",
                                                backgroundColor: "#310050",
                                                boxShadow: "0 0 0.3vw #31005075",
                                                margin: "0",
                                                // MAKE BACKGROUND COLOR CHANGE ON HOVER
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                    color: "#310050",
                                                    boxShadow: "0 0 0.3vw #ffffff75",
                                                },
                                            }} size="small" onClick={(e) => {
                                                e.preventDefault();
                                                fetchNui("select", { id: row.id });
                                            }}> ${row.price}</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Box>)
}

export default Home;
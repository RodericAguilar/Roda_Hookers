import { Box, LinearProgress } from "@mui/material";

const Animations = ({ label, onClick }: {
    label: string,
    onClick?: (e:any) => void,
}) => (
    <Box onClick={onClick} sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        boxShadow: "0 0 0.3vw #9032bb75",
        borderRadius: ".4vw",
        padding: ".5vw",
        marginBottom: ".5vw",
        color: "white",
        // make hover effect
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            cursor: "pointer",
        }
    }}>
        <div style={{
            opacity: ".6",
            letterSpacing: ".06vw",
        }}>{label}</div>
    </Box>
);

export default Animations;
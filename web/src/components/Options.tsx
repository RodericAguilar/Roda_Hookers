import { Box, LinearProgress } from "@mui/material";

const Options = ({ label, children }: {
    label: string,
    children: React.ReactNode,
}) => (
    <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        boxShadow: "0 0 0.3vw #9032bb75",
        borderRadius: ".4vw",
        padding: ".5vw",
        marginBottom: ".5vw",
        // remove the margin from last child
        "&:last-child": {
            marginBottom: 0,
        },
      }}>
        <div style={{
            opacity: ".6",
            letterSpacing: ".06vw",
        }}>{label}</div>
        <div style={{
            width: "50%",
            height: "50%",
            textAlign: "right",
        }}>{children}</div>
    </Box>
);

export default Options;
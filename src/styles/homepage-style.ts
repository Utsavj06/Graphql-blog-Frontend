import { SxProps } from "@mui/material";

export type StyleMap = {
  [key: string]: SxProps;
}

export const homepage: StyleMap = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        alignItems: 'center',
        padding: 6,
    },
    text: {
        fontSize: { lg: 50, md: 40, sm: 35, xs: 20 },
    },
    images: { 
        boxShadow: '10px 10px 25px rgba(0, 0, 0, 4)',
        borderRadius: 20,   
    },
    footerContainer: { 
        bgcolor: "#404040",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
        gap: 20,
    },
    footerBtn: {
        borderRadius: 10,
    }
}
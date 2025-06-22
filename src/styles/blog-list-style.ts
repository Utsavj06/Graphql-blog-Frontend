import { SxProps } from "@mui/material";

export type StyleMap = {
  [key: string]: SxProps;
}

const Colors = [
    "#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557",
    "#FFB703", "#FB8500", "#023047", "#8ECAE6", "#219EBC",
    "#FF006E", "#8338EC", "#3A86FF", "#06D6A0", "#118AB2",
];

export function getColors() {
    return Colors[Math.floor(Math.random() * Colors.length)];
}

export const blogpage: StyleMap = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        flexWrap: 'wrap',
        mt: 2,
        mb: 2,
    },
    card: {
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        height: '70vh',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '10px 10px 20px #ccc',
        },
    },
    cardHeader: {
        fontFamily: 'Work Sans',
        fontSize: '72px',
        height: '35%',
        padding: 1,
    },
    dateContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
    cardContent: {
        width: '80%',
        height: '100%',
        fontSize: '20px',
        fontWeight: '500',
    },
    title:{
        fontWeight: '600',
        m: 1,
        color: '#ffffff',
        textTransform: 'uppercase',
        textDecoration: 'underline',
        textUnderlineOffset: '5px',
        fontFamily: 'Work Sans',
        textShadow: '2px 7px 20px #ccc',
    },
    contentText: {
        padding: 2,
        fontSize: '20px',
        fontWeight: '500',
    }
}
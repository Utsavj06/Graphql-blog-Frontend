import { StyleMap } from "./homepage-style";

export const authPage: StyleMap = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    logoTitle: {
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        justifyContent: 'center',
        mt: 2,
        mb: 2,
    },
    logoText: {
        fontFamily: 'Work Sans',
        fontSize: '30px',
    }
}
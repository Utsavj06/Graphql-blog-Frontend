import { StyleMap } from "./homepage-style";

export const headerStyle : StyleMap = {
    appBar : {
        position: 'sticky',
        bgcolor: '#404040',
    },
    tabContainer:{
        width: '100%',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    authBtn: {
        ml:1,
        bgcolor: '#d27e20',
        color: '#ffffff',
        borderRadius: 20,
        width: '100px',
        ":hover": {
            bgcolor: '#ff9400',
        }
    }
}
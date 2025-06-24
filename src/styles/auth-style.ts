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
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'left',
        width: '90%',
    },
    signInField: {
        border: '1px solid #6c5252',
        borderRadius: 5,
        height: '270px',
        boxShadow: '10px 10px 25px rgba(0, 0, 0, 4)',
        width: { lg: '40%', md: '60%', sm: '80%', xs: '90%' },
        textAlign: 'center',
        m: '30px auto',
        '& .MuiTextField-root': { // Correct nested selector
            display: 'flex',
            padding: '0 10px',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5', // Correct property name
            borderRadius: '5px', // Example: Add rounded corners
            margin: '25px 0', // Example: Add margin between fields,
            bgcolor: '#fff',
            '& label': {
                padding: '0px 15px',  
            }
        },
    },
    signUpField: {
        border: '1px solid #6c5252',
        borderRadius: 5,
        height: '350px',
        boxShadow: '10px 10px 25px rgba(0, 0, 0, 4)',
        width: { lg: '40%', md: '60%', sm: '80%', xs: '90%' },
        textAlign: 'center',
        m: '30px auto',
        '& .MuiTextField-root': { // Correct nested selector
            display: 'flex',
            padding: '0 10px',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5', // Correct property name
            borderRadius: '5px', // Example: Add rounded corners
            margin: '25px 0', // Example: Add margin between fields,
            bgcolor: '#fff',
            '& label': {
                padding: '0px 15px',  
            }
        },
    },
    signText: {
        margin: '10px 0',
    }
}
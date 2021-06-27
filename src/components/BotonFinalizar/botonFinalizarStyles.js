export const botonFinalizarStyles = theme => {
  return ({  
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    botonCancelar: {
        textDecoration: "none",
        fontFamily: "Roboto",
        color: "green",
        fontSize: 18,
        borderStyle: "solid",
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 20,
        width: "5em",
        paddingLeft: "1em",
        fontWeight: 700,
        marginLeft: "3.4em",
        '&:hoover': { 
            backgroundColor: "red",
            color: "white"
        }
    },
    boton: {
        textDecoration: "none",
        fontFamily: "Roboto",
        fontSize: 21,
        color: "white",
        backgroundColor: "green",
        borderStyle: "solid",
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 20,
        width: "8em",
        paddingLeft: "1em",
        fontWeight: 700,
        margin: "1em",
        '&:hoover': { 
            backgroundColor: "white",
            color: "green"
        }
    }
})}
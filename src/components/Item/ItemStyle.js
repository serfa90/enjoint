export const ItemStyle = theme => {
    return({ root: {
           maxWidth: 250,
           display: "flex",
           flexDirection: "column",
           margin: '1em',
         },
         title: {
           color: "black",
           fontWeight: '350',
           textDecoration: "none",
         },
         boton: {
           display: "flex",
           justifyContent: "center",
           color: "green",
           backgroundColor: "#E8E8E8",
           textDecoration: "none",
           fontWeight: 700
         },   
       })
   }
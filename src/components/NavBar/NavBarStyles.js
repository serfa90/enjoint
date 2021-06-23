export const NavBarStyles = theme =>{

    return (
        {
            title: {
              fontFamily: 'Fredoka One',
              color: "white",
              textDecoration: "none",
            },
            barra: {
              backgroundColor: 'green',
            },
            link: {
                listStyle: "none",
                textDecoration: "none",
                fontFamily: "Roboto",
            },
            linkList: {
              display: 'flex',
              flexDirection: "row",
              flexGrow: '1',
              textDecoration: "none",
              justifyContent: "flex-start",
              alignItems: "center",    
              marginLeft: "1em"          
            },
            botones:{
              color: "white",
              textDecoration: "none",
              justifyContent: "center",
              flexGrow: "3",
              marginRight: "1em"
            },
            offset: theme.mixins.toolbar
          }
    )
} 
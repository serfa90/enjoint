export const ItemDetailStyle = theme => {
  return( { root: {
    display: 'flex',
    maxWidth: '50%',
    flexDirection: 'column',
    boxShadow: '10px 10px 8px 10px #888888',
    margin: "1em",
    padding: "1em"
    },
    title:{
      color: "green",
      fontFamily: "Roboto, sans serif",
      fontWeight: 800,
      margin: "0.5em 0 0.5em 0"
    },
    description: {
      marginBottom: "1em",
    },
    price:{
      color: "black"
    }
})
}

export default ItemDetailStyle
import { Container, makeStyles } from "@material-ui/core";

export const useStyles=makeStyles(theme=>({

appbar:{
    // backgroundColor:'red'
},
Container:{
    // border:'1px solid red',
    padding:'10px',
    // height:'100vh'
},
toolbar:theme.mixins.toolbar,
toolbarContainer:{
 display:'flex',
 justifyContent:'space-around'
 },
 media:{
     height:300
 },
 card:{
width:300
 },
 cart:{
     borderRaduis:4,
     padding:10
 },
link:{
color:'white',
textDecoration:'none'
},
root:{
    display:'flex',
    width: 400,
    padding:5
},
cartMedia:{
    height:100,
    width:100
},
divSelect:{
    display:'flex',
   justifyContent:'center',
   alignItems:'center',
    flexDirection:'column',
    marginLeft:50
},
removeFromCart:{
    display: 'flex',
    alignItems: 'center',
    marginLeft:50
},
ContainerCart:{
display:'flex',
justifyContent:'space-around'
 },
    cartTotal:{
        width:200,
        padding:10
    },
    btn:{
    },
    loading:{
       marginTop:'5vh'

    }





}))
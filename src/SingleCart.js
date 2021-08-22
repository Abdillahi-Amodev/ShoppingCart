import React,{useContext} from 'react'
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './stylesheet'
import {ShopContext} from './context'

function SingleCart({image,name,prix,id,pair}) {
    const classes = useStyles()
    const { removeFromCart, number, numberIncrement, numberDecrement} =useContext(ShopContext)
    return (
        <>


            <Card className={classes.root}>
                <div>
                <CardMedia
                    className={classes.cartMedia}
                    image={image}
                    title={name}
                />
                </div>
                 <div>
                <CardContent>
                    <Typography>{name}</Typography>
                    <Typography>{`${prix} $`}</Typography>
                </CardContent>
                 </div>
                 <div className={classes.divSelect} >
                    <ExpandLessIcon onClick={()=>numberIncrement(id)}/>
                   <span>{pair}</span>
                    <ExpandMoreIcon onClick={() => numberDecrement(id)}/>
                   
                  

                
                 </div>
                 <div className={classes.removeFromCart}>
                    <DeleteIcon onClick={()=>removeFromCart(id)}/>
                 </div>


            </Card>
        </>
    )
}

export default SingleCart

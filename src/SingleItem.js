import React, { useContext,useState} from 'react'
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import { useStyles } from './stylesheet'
import { ShopContext } from './context'
import Cart from './Cart'

function SingleItem({image,name,prix,id}) {

    const classes =useStyles()
    const { addCart} = useContext(ShopContext)
    const [ischecked, setIschecked] = useState(false)

// function check(){
//     const findit =cart.find(item=>item.id===id)
//     return cart.includes(findit)
// }
// console.log(check());
    
       
    
    return (
        <>
        
        <Card className={classes.card}>
            <CardMedia
            className={classes.media}
            image={image}
            title={name}
            />
            <CardContent>
              <Typography>{name}</Typography>
              <Typography>{`${prix} $`}</Typography>
            </CardContent>
            <CardActions>
                    <div className={classes.btn}>
                   <Button variant='contained' color='primary'size='medium' 
                   onClick={()=>{
                       setIschecked(true)
                       addCart(id)
                    }}
                    disableElevation
                            disabled={ischecked}
                        >{ischecked?"Already in the cart ":"Add to cart"}</Button>
                   

                </div>
            </CardActions>
         
        </Card> 
        </>
    )
}

export default SingleItem

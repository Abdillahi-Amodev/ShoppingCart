import React,{useContext} from 'react'
import { AppBar, Container, Toolbar, Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStyles } from './stylesheet'
import { ShopContext } from './context'
import { Link } from 'react-router-dom';
import SingleCart from './SingleCart'
function Cart() {
    const classes = useStyles()
    const { cart} = useContext(ShopContext)

    

   const total = cart.reduce((acc, current) => {
        return current.pair * current.prix + acc 
    }, 0)
console.log(total);
    return (
        <>
            <AppBar elevation={0} className={classes.appbar}>
                <Toolbar className={classes.toolbarContainer}>
                    <div>
                        <Link to='/' className={classes.link}>
                            Amodev Shop
                        </Link>
                        </div>
                    <div className={classes.cart}>
                            <Badge badgeContent={cart.length} color='secondary'>
                                <ShoppingCartIcon />
                            </Badge>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div>
            <Container className={classes.ContainerCart}  >
                <div>
                    {cart.length===0 && <Typography variant='h6' className={classes.loading}>Cart is Empty</Typography>}
                <Grid container spacing={2} direction="column">
                   {
                       cart.map(cartItem=>{
                           return <Grid item key={cartItem.id}>
                               <SingleCart {...cartItem}/>

                                  </Grid>
                       })
                   }

                </Grid>

                </div>
                <div>
              
                    <Card className={classes.cartTotal}>
                        <h3>Subtotal ({cart.length}) item</h3>
                        <CardContent>
                         <Typography>
                                Total : $ {total }
                         </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' color='primary' fullWidth>Acheter</Button>
                        </CardActions>
                    </Card>
                </div>

            </Container>
        
        </>
    )
}

export default Cart

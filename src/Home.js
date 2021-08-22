import React,{useContext} from 'react'
import {useStyles} from './stylesheet'
import { AppBar, Container, Toolbar, Grid } from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ShopContext} from './context'
import SingleItem from './SingleItem';
import {Link} from 'react-router-dom'

function Home() {
    const classes=useStyles()
  const {liste,dispatch,cart} = useContext(ShopContext)
  
    const addCart = (id) => {
        const findOne = liste.find((oneItem) => {
            return oneItem.id === id
        })
        dispatch({ type: 'ADD_CART', item: findOne })

        console.log(cart);
    }
    return (
        <>
            <AppBar elevation={0} className={classes.appbar}>
                <Toolbar className={classes.toolbarContainer}>
                  <div>Amodev Shop</div>
                    <div className={classes.cart}>
                        <Link to='/cart' className={classes.link}>
                        <Badge badgeContent={cart.length} color='secondary'>
                        <ShoppingCartIcon />
                        </Badge>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div>
       <Container className={classes.Container}>
                <Grid container spacing={2}>
           {
                    liste.map(shopItem=>{
                        return <Grid item  key={shopItem.id}>
                       
                            <SingleItem {...shopItem} />

                        </Grid>
                        
               })
           }

                </Grid>
       </Container>
    
        </>
    )
}

export default Home

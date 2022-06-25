import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BasketItem from './BasketItem'

const Basket = (props) => {
  const {
    cartOpen,
    closeCart = Function.prototype,
    order = [],
    removeFromOrder
  } = props;

  return(
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={closeCart}

    >
      <List sx={{width: 450}}>
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon/>
          </ListItemIcon>
          <ListItemText primary="Корзина"/>
        </ListItem>
        <Divider/>
      </List>

      {!order.length ?(
        <ListItem>Корзина пуста</ListItem>
      ):(
        <>
        {order.map((item) => (<BasketItem key={item.name} {...item} removeFromOrder={removeFromOrder} />)
      )}
      <Divider/>
        <ListItem>
          <Typography
            sx={{fontWeight: 700}}
          >
            Общая стоимость:{' '}
            {order.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)}{' '}
            рублей.
          </Typography>
        </ListItem>
        </>
      )}
    </Drawer>
  )
}

export default Basket

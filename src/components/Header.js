import { AppBar, Badge, Container, IconButton, Toolbar, Typography } from '@mui/material'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'

function Header ({ handleCart, orderLen }) {
  return (
    <>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              color="inherit"
              sx={{ flexGrow: 1, textDecoration: 'none' }}
            >
              VeloDelo
              <IconButton
                color="inherit"
                disabled
              >
                <DirectionsBikeIcon/>
              </IconButton>
            </Typography>
            <Typography
              component={Link}
              to="/diy"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              Веломастерская
            </Typography>
            <Typography
              component={Link}
              to="/blog"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >

              Блог

            </Typography>
            <Typography
              component={Link}
              to="/contacts"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              Контакты
            </Typography>
            <Typography
              component={Link}
              to="/todo"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              Список дел
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleCart}
            >
              <Badge
                color="secondary"
                badgeContent={orderLen}
              >
                <ShoppingCartIcon/>
              </Badge>

            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>

    </>
)
}

export default Header

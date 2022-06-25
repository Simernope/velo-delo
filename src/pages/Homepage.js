import { useState } from 'react'
import GoodsList from '../components/GoodsList'
import Search from '../components/Search'
import { goods } from '../data/goods'
import Header from '../components/Header'
import { Container } from '@mui/material'
import Basket from '../components/Basket'
import Snack from '../components/Snack'
import { useDispatch } from 'react-redux'
import {addToOrder1} from '../store/setHeaderSlice'

const Homepage = () => {
  const [order, setOrder] = useState([])
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(goods)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSnackOpen, setIsSnackOpen] = useState(false)


  const dispatch = useDispatch()

  const addTask = () => dispatch(addToOrder1(order))

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods)
      setSearch('')
      return
    }

    setSearch(e.target.value)
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))
  }

const addToOrder = (goodsItem) => {
    let quantity = 1

    const indexInOrder = order.findIndex(
      (item) => item.id === goodsItem.id
    )

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1

      setOrder(order.map((item) => {
          if (item.id !== goodsItem.id) return item

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          }
        }),
      )
    } else {
      setOrder([
          ...order,
          {
            id: goodsItem.id,
            name: goodsItem.name,
            price: goodsItem.price,
            quantity,
          },
        ],

      )
      addTask(setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        }, ]))
    }
    setIsSnackOpen(true)
  }

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem))
  }



  return (
    <>
      <Header
        handleCart={() => setIsCartOpen(true)}
        orderLen={order.length}
      />
      <Container
        sx={{ mt: 1 }}
      >
        <Search
          value={search}
          onChange={handleChange}
        />
        <GoodsList
          goods={products}
          setOrder={addToOrder}
        />
      </Container>
      <Basket
        cartOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        order={order}
        removeFromOrder={removeFromOrder}
      />
      <Snack
        isOpen={isSnackOpen}
        handleClose={() => setIsSnackOpen(false)}
      />
    </>
  )
}

export  default Homepage


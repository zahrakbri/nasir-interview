import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { selectToCompare } from '../actions/productList'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

function ProductCard (props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://via.placeholder.com/300/09f/fff.png%20C/O%20https://placeholder.com/'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.product.employee_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={() => props.dispatch(selectToCompare(props.product))}>
          Compare
        </Button>
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapDispatchToProps)(ProductCard)

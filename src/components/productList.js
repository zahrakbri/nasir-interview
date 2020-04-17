import React, { useEffect } from 'react'
import { getData } from '../actions/productList'
import { connect } from 'react-redux'
import ProductCard from './productCard'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

function ProductList (props) {
  const classes = useStyles()

  useEffect(() => {
    props.dispatch(getData())
  }, [])

  return (
    <>
      <div className='product-grid'>
        {props.productList.map((product, index) => {
          console.log('@@@@', product)
          return (
            <ProductCard product={product} />
          )
        })}
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>age</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Salary&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.compareList.map((item) => (
              <TableRow key={item.id}>
                <TableCell component='th' scope='row'>
                  {item.employee_age}
                </TableCell>
                <TableCell align='right'>{item.employee_name}</TableCell>
                <TableCell align='right'>{item.employee_salary}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

const mapStateToProps = (state) => ({
  productList: state.product.data,
  compareList: state.product.compareList
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { ambilData, ProductSelected } from '../../Redux/Action'

function ListRender(props) {
  console.log(props)

  useEffect(() => {
    props.ambilData()
  }, [])

  return (
    <div>
      <h1>Pilih Product</h1>
      {props.listFromStore.map((item) => {
        console.log(item)
        return (
          <div key={item.id}>
            <h5 style={{cursor: "pointer"}} onClick={() => props.ProductSelected(item)}>{item.product}</h5>
          </div>
        )
    })}</div>
  )
}

// makes a state of the store a prop for the property List()
const stateToProps = (state) => {
  return { listFromStore : state.ListProduct}
}

export default connect(stateToProps, {ambilData, ProductSelected})(ListRender)



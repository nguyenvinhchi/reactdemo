import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import styles from './Orders.css'
import axios from '../../axiosx'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
                return <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            })
        }
        
        return (
            <div className={styles.Orders}>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orderState.orders,
        loading: state.orderState.loading,
        token: state.authState.token,
        userId: state.authState.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));

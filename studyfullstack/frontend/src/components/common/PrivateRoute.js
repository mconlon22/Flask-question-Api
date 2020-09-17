import React from 'react'
import {Route,Redirect} from 'react-router'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
const  PrivateRoute=({component:Component,auth,...rest}) =>{
    
       <Route>
            {...rest}
            render={props=>{
                if (auth.isLoading) {
                    return <h2>is Loading</h2>
                } 
                else if(auth.isAuthenticated){
                    return <Redirect to='/Login'/>
                }
                else {
                    return <Component {...props}/>
                     
                }
            }}
       </Route>
    
}
const mapStateToProps=state=>({
auth:state.auth
});
export default(mapStateToProps)(PrivateRoute)

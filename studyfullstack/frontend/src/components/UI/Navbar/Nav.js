import React, { useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from '../../Routes';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../../actions/auth'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    NavLink: {
        marginRight: theme.spacing(2),


  },


    
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const NavigationBar =(props) => {
  NavigationBar.propTypes={
    auth:PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired

  }
  const{isAuthenticated,user}=props.auth
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const authLinks=(
               <ul>
               <li>
               <button onClick={props.logout} className="nav-link btn btn-info btn-sm">LogOut</button>
               </li>
               </ul>


  );
  const guestLinks=(
    <div>
 <NavLink to="/Login"  className={classes.NavLink} >Login</NavLink>
 <NavLink to="/Register"  className={classes.NavLink}>Register</NavLink>
</div>
  );
  
  const toggleDrawer = (open) => (
  ) => {
    

    setIsOpen(open);
  };

  const activeRoute = (routeName) => {
    return props.location.pathname === routeName ? true : false;
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
             {isAuthenticated? authLinks:guestLinks}

           

          </Toolbar>
        </AppBar>
      </div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
            {Routes.map((prop, key) => {

              return (
              prop.sidebarName!=""?
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>:null
                
              );
            })}
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};
const mapStateToProps=state=>({
  auth:state.auth

})

export default connect(mapStateToProps, { logout }) (withRouter(NavigationBar));
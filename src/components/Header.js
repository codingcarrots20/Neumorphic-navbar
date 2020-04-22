import React, { Component } from 'react'
import {ReactComponent as Cart} from '../svg/shopping-cart.svg'
import {ReactComponent as User} from '../svg/user.svg'
import {ReactComponent as Fav} from '../svg/heart.svg'
import {ReactComponent as Search} from '../svg/search.svg'

export class Header extends Component {
    render() {
        return (
            <div className="box">
                <div className="searchbox">
                    <Search className="search-btn"/>
                    <input className="search" />
                </div>
                
                <div className=" nav-links">
                    <Cart className="nav-icon"/>
                    
                </div>
            </div>
        )
    }
}

export default Header

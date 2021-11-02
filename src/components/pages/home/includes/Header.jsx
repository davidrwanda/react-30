import './header.scss'
import MenuList from './MenuList'
import React from 'react'
import {Twitter,Instagram, LinkedIn,YouTube,Flight} from '@material-ui/icons'
export default function Header() {
    const menuList = [
        {
            id:1,
            title:'About'
        },
        {
            id:2,
            title:'Features'
        },
        {
            id:3,
            title:'Pricing'
        },
        {
            id:4,
            title:'Contact'
        },
    ]
    return (
        <div>
            <div className="container">
            <div className="left">
              <p>SolutionM4</p>
              </div> 
              <div className="right">
                  <div className="menu">
                  <ul>
                      {menuList.map((menu)=>(
                          <MenuList id={menu.id} menu={menu.title}/>
                      ))}
                  </ul>
                  </div>
                  <div className="social">
                      <a href=""><span><Twitter className="icon"/></span></a>
                      <a href=""><span><Instagram className="icon"/></span></a>
                      <a href=""><span><LinkedIn className="icon"/></span></a>
                      <a href=""><span><YouTube className="icon"/></span></a>
                  </div>
                  <div className="get-started">
                      <a href=""><span><Flight className="icon"/></span>Get started</a>
                  </div>
              </div>
            </div>
              
        </div>
    )
}

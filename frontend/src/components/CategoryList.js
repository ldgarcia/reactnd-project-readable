import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryList = ({ categories }) => (
  <nav className="nav justify-content-center categories">
    <NavLink className="nav-link" activeClassName="active" exact to="/">
      All
    </NavLink>
    { categories.map((category, index) => (
      <NavLink key={index} className="nav-link" activeClassName="active" to={`/${category.path}/`}>
        {category.name}
      </NavLink>
    ))}
  </nav>
)

export default CategoryList;

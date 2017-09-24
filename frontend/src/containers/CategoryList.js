import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as categoryActions from '../actions/categories'
import * as categoriesAPI from '../utils/CategoriesAPI'

import CategoryList from '../components/CategoryList'

class CategoryListContainer extends Component {
  componentDidMount() {
      this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <CategoryList categories={categories} />
    )
  }
}

const mapStateToProps = ({categories}) => ({
  categories,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(categoryActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer))

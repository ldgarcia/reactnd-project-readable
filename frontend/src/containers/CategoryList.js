import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as categoriesActionCreators from '../actions/categories'
import * as categoriesAPI from '../utils/CategoriesAPI'

import CategoryList from '../components/CategoryList'

class CategoryListContainer extends Component {
  componentDidMount() {
      this.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <CategoryList categories={categories} />
    )
  }

  fetchCategories() {
    this.props.fetchCategoriesRequest()
    return categoriesAPI.getAll()
      .then(data => this.props.fetchCategoriesSuccess(data.categories))
      .catch(exception => this.props.fetchCategoriesFailure(exception))
  }
}

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(categoriesActionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer))

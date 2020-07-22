import React, { useState } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = props => {

    const initialState = {
        currentSearch: "",
        showOnlyOnStock: false
    }
    
    const [state, setState] = useState(initialState)
    
    const handleSearch = (value) => {
        setState(state => ({
            ...state,
            currentSearch: value
        }))
    }

    const handleToggleCheckBox = (value)  =>{
        setState(state => ({
            ...state,
            showOnlyOnStock: value
        }))
    }

    const jsData = JSON.parse(JSON.stringify(props.products))

    const filteredProducts = jsData.data.filter(product => {
        return product.name.toUpperCase().indexOf(state.currentSearch.toUpperCase()) !== -1
    })
    
    return (
        <div className="container">
            <SearchBar search={handleSearch} searchInState={state.currentSearch} showOnlyOnStock={state.showOnlyOnStock} updateCheckBox={handleToggleCheckBox} />
            <ProductTable showOnlyOnStock={state.showOnlyOnStock} products={filteredProducts} />
        </div>
    )
}

export default FilterableProductTable

// react
import React, { Component } from 'react'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'

// components
import Icon from 'components/Icon'
import TextArea from 'components/TextArea'

// utils
import { debounce } from 'utilities'

class SearchBar extends Component {

	debouncedSearch = debounce(this.props.search)

	render () {
		const { placeholder, disabled, onChange, debounceCharLimit = 2, style, className } = this.props
		return (
			<Search {...{ style, className }}>
				<StyledInput {...{ placeholder, disabled }}
				             onChange={e => {
					             onChange && onChange(e)
					             if (e.target.value.length >= debounceCharLimit) {
						             this.debouncedSearch(e.target.value)
					             } else {
						             this.debouncedSearch(e.target.value, true)
					             }
				             }}
				/>
				<SearchIcon color="disabledText" icon="search"/>
			</Search>
		)
	}
}

SearchBar.propTypes = {
	search: PropTypes.func.isRequired,
	debounceCharLimit: PropTypes.number,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool
}

export default SearchBar

const SearchIcon = styled(Icon)`
	position: absolute;
	right: .5rem;
	top: .5rem;
`

const Search = styled.label`
	display: block;
	position: relative;
	:focus-within{
		${SearchIcon}{
			color: ${props => props.theme.colors.alternate1};
		}
	}
`

const StyledInput = styled(TextArea)`
	:focus{
		outline: none;
	}
`
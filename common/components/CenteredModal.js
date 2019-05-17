// react
import React from 'react'

// proptypes
import PropTypes from 'prop-types'

// styled
import styled from 'styled-components'

// components
import Col from 'components/Col'

const CenteredModal = ({ style, className, children, isOpen = false, onClick }) => {
	return (
		<Container {...{ isOpen, onClick }}>
			<Content {...{ style, className }}>
				{children}
			</Content>
		</Container>
	)
}

export default CenteredModal

const Container = styled(Col)`
	width: 100%;
    height: 100%;
    z-index: 7000;
	display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    background-color: rgba(0,0,0,0.4);
`

const Content = styled(Col)`
	z-index: 7001;
	position: relative;
    box-sizing: border-box;
    
	flex-basis: 40%;
    max-width: calc(100vw - 4rem);
    min-width: 20rem;
    
    padding: 1rem;
    padding-top: .6rem;
    margin: 7.5rem auto 12rem;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: #FFFFFF;
`
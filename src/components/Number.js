import React from 'react'

const Number = ({children, className}) => {
    return (
        <div className={`Number pad ${className}`}>
            {children}
        </div>
    )
}

export default Number

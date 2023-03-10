import React, { Component } from 'react'

import spinner from '../icons/spinner.gif'

class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={spinner} alt="loading" />
            </div>
        )
    }
}

export default Spinner
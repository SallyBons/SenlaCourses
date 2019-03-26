import React, { PureComponent } from 'react'

export class Fruits extends PureComponent {

    render() {
       const arr  = this.props.fruits;
        return (
            <ul>
                {arr.map((item) => (
                   <li key={item}>{item}</li>
                ))}
                 {this.props.children}
            </ul>
        )
    }
}

export default Fruits;

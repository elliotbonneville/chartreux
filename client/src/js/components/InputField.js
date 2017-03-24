import React from 'react';

export default function InputField() {
    return (
        <input
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange}
        />
    );
}

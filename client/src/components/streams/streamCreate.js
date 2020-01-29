import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createStream } from '../../actions';

class StreamCreate extends Component {
    // For
    renderError = ({ touched, error }) => {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    render() {
        const { handleSubmit } = this.props; // Coming from redux-form
        return (
            <form className='ui form error' onSubmit={handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter title'></Field>
                <Field name='description' component={this.renderInput} label='Enter description'></Field>
                <button className='ui button primary' type='submit'>
                    Submit
                </button>
            </form>
        );
    }
}

// Validate function
const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Title is required';
    }
    if (!formValues.description) {
        errors.description = 'Description is required';
    }
    return errors;
};

export default connect(null, { createStream })(
    reduxForm({
        form: 'StreamCreate',
        validate
    })(StreamCreate)
);

import React from 'react';
import PropTypes from 'prop-types';
import {
  Field, reduxForm, formValueSelector, getFormValues
} from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import InputField from './InputField';
import SelectField from './SelectField';
import {
  required, minLength, minNumber, maxLength, specialSymbols, email
} from './validation';
import asyncValidate from './asyncValidate';

const Form = ({
  handleSubmit, pristine, submitting, reset, invalid, name: { name, surname }
}) => (
    <div className="form">
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          label="Name"
          type="text"
          component={InputField}
          validate={[required, minLength]}
        />
        <Field
          name="surname"
          label="Surname"
          type="text"
          component={InputField}
          validate={[required, minLength]}
        />
        <Field
          name="username"
          label="Username"
          type="text"
          component={InputField}
          validate={[required, minLength, maxLength, specialSymbols]}
        />
        <Field
          name="age"
          label="Age"
          type="number"
          component={InputField}
          validate={[required, minNumber]}
        />
        <Field
          name="email"
          label="E-mail"
          type="text"
          component={InputField}
          validate={[required, email]}
        />
        <Field
          label="Gender"
          name="gender"
          component={SelectField}
        />
        <Field
          label="Agree with terms and conditions"
          name="NDA"
          type="checkbox"
          component={InputField}
          validate={[required]}
        />
        <button type="submit" disabled={invalid}>send</button>
        <button type="button" onClick={reset} disabled={pristine || submitting}>clear</button>
      </form>
    </div>
  );

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  name: PropTypes.object.isRequired
};

const selector = formValueSelector('registrationForm');

const mapStateToProps = state => ({
  name: selector(state, 'name', 'surname'),
  formData: getFormValues('registrationForm')(state)
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'registrationForm',
    enableReinitialize: true,
    initialValues: {
      name: 'Sally',
      surname: 'Bons',
      gender: 'female'
    },
    asyncValidate,
    asyncBlurFields: ['email'],
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 4))
      props.reset();
    }
  })
)(Form);


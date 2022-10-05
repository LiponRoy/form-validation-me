import { useState, useEffect } from 'react';
// import useForm from './useForm';
import validate from './Validation';

const Register = () => {
	// Form Part
	const [values, setValues] = useState({
		name: '',
		email: '',
		mobile: '',
		password: '',
	});
	const [FormErrors, setFormErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		// jodi zero hoy tahole kono error nei and isSubmitting true
		//kore dea hoiche tana hole error zero holei alert cole asto
		if (Object.keys(FormErrors).length === 0 && isSubmitting) {
			submit();
		}
	}, [FormErrors]);

	const handleChange = event => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		// all value pass for error handiling
		setFormErrors(validate(values));

		setIsSubmitting(true);
	};

	function submit() {
		console.log(values);
	}
	// Form Part End

	return (
		<div className='register-form-container'>
			<div className='my-register-form'>
				<h1 className='register-heading_text'>REGISTER</h1>
				<form onSubmit={handleSubmit} noValidate>
					{/* name field */}
					<div className='form-group '>
						<label htmlFor=''>Name</label>
						<div className=''>
							<input className='register-form-Input-me' placeholder='Enter name' name='name' type='name' value={values.name} onChange={handleChange} />
							{FormErrors.name && <p className='register-errMessage'>{FormErrors.name}</p>}
						</div>
					</div>

					{/* email field */}
					<div className='form-group '>
						<label htmlFor=''>Email</label>
						<div>
							<input className='form-Input-me' placeholder='Enter Email' name='email' type='email' value={values.email} onChange={handleChange} />
							{FormErrors.email && <p className='register-errMessage'>{FormErrors.email}</p>}
						</div>
					</div>

					{/* mobile field */}
					<div className='form-group '>
						<label htmlFor=''>Mobile</label>
						<div>
							<input className='form-Input-me' placeholder='Enter Mobile' name='mobile' type='number' value={values.mobile} onChange={handleChange} />
							{FormErrors.mobile && <p className='register-errMessage'>{FormErrors.mobile}</p>}
						</div>
					</div>
					{/* Password field */}
					<div>
						<label htmlFor=''>Password</label>
						<div>
							<input className='form-Input-me' placeholder='Enter Password' name='password' type='password' value={values.password} onChange={handleChange} />
							{FormErrors.password && <p className='register-errMessage'>{FormErrors.password}</p>}
						</div>
					</div>

					<button className='register-form-submit-me ' type='submit'>
						SUBMIT
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;

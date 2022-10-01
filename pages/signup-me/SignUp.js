import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// yup schema
const schema = yup
	.object({
		Name: yup.string().required('Name is required'),
		Email: yup.string().email('Invalid email format').required('Mail is required'),
		Age: yup.number().positive().integer().required('Age is required'),
		Password: yup.string().required('Password is required'),
		PasswordConfirmation: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match'),
	})
	.required();
//End yup schema

const SignUp = () => {
	// yup schema and hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	// End yup schema and hook form
	const onSubmit = data => {
		console.log(data);
	};
	return (
		<>
			<div className='form-container'>
				<div className='my-signup-form'>
					<span className='heading_text'>SIGNUP</span>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input className='form-Input-me' placeholder='Full Name' type='text' onChange={Name => console.log(Name)} {...register('Name')} />
						<p>{errors.Name?.message}</p>
						<input className='form-Input-me' placeholder='Email' type='text' {...register('Email')} />
						<p>{errors.Email?.message}</p>
						<input className='form-Input-me' placeholder='Age' type='number' {...register('Age')} />
						<p>{errors.Age?.message}</p>
						<input className='form-Input-me' placeholder='Password' type='text' {...register('Password')} />
						<p>{errors.Password?.message}</p>
						<input className='form-Input-me' placeholder='Confirma Password' type='text' {...register('PasswordConfirmation')} />
						<p>{errors.PasswordConfirmation?.message}</p>

						<input className='form-submit-me' type='submit' />
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUp;

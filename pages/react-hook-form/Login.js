import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// yup schema
const schema = yup
	.object({
		Email: yup.string().email('Invalid email format').required('Mail is required'),
		Password: yup.string().required('Password is required'),
	})
	.required();
//End yup schema

const Login = () => {
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
					<h1 className='heading_text'>LOGIN</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input className='form-Input-me' placeholder='Email' type='text' {...register('Email')} />
						<p className='errMessage'>{errors.Email?.message}</p>
						<input className='form-Input-me' placeholder='Password' type='text' {...register('Password')} />
						<p className='errMessage'>{errors.Password?.message}</p>
						<input className='form-submit-me' type='submit' />
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;

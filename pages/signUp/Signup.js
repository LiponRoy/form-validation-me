import React, { useState } from 'react';
const Signup = () => {
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [userError, setUserError] = useState({
		nameError: '',
		emailError: '',
		passwordError: '',
		confirmPasswordError: '',
		generalError: '',
	});

	// validation start
	// for Name
	const handleName = event => {
		const nameREGEX = /^[a-z ,.'-]+$/i;
		const validName = nameREGEX.test(event.target.value);
		if (validName) {
			setUserInfo({ ...userInfo, name: event.target.value });
			setUserError({ ...userError, nameError: '' });
		} else {
			setUserError({ ...userError, nameError: 'Invalid name' });
			setUserInfo({ ...userInfo, name: '' });
		}
	};
	// for email
	const handleEmail = event => {
		const emailREGEX = /\S+@\S+\.\S+/;
		const validEmail = emailREGEX.test(event.target.value);
		if (validEmail) {
			setUserInfo({ ...userInfo, email: event.target.value });
			setUserError({ ...userError, emailError: '' });
		} else {
			setUserError({ ...userError, emailError: 'Invalid email' });
			setUserInfo({ ...userInfo, email: '' });
		}
	};

	// for password
	const handlePassword = event => {
		const passwordREGEX = /.{6,}/;
		const validPassword = passwordREGEX.test(event.target.value);
		if (validPassword) {
			setUserInfo({ ...userInfo, password: event.target.value });
			setUserError({ ...userError, passwordError: '' });
		} else {
			setUserError({ ...userError, passwordError: 'minimum 6 charecter' });
			setUserInfo({ ...userInfo, password: '' });
		}
	};
	// for confirm password
	const handleConfirmPassword = event => {
		if (event.target.value === userInfo.password) {
			setUserInfo({ ...userInfo, confirmPassword: event.target.value });
			setUserError({ ...userError, confirmPasswordError: '' });
			// return;
		} else {
			setUserError({ ...userError, confirmPasswordError: 'Password do not match' });
			setUserInfo({ ...userInfo, confirmPassword: '' });
		}
	};
	//go to google
	const goToLogin = () => {
		navigate('/login');
	};
	//submit
	const handleCreateUser = event => {
		event.preventDefault();
		if (!userError) {
			console.log(userInfo);
		}
	};
	return (
		<div className='form-container'>
			<form onSubmit={handleCreateUser} className='my-signup-form'>
				<span className='heading_text'>SIGNUP </span>
				<div className='form-group-me'>
					<input type='name' onChange={handleName} className='form-Input-me' placeholder='Enter Name' required />
					<br />
					{userError?.nameError && <p className='signUpError'>{userError.nameError}</p>}
				</div>
				<div className='form-group-me'>
					<input type='email' onChange={handleEmail} className='form-Input-me' placeholder='Enter Email' required />
					<br />
					{userError?.emailError && <p className='signUpError'>{userError.emailError}</p>}
				</div>
				<div className='form-group-me'>
					<input type='password' onChange={handlePassword} className='form-Input-me' placeholder='Enter Password' required />
					<br />
					{userError?.passwordError && <p className='signUpError'>{userError.passwordError}</p>}
				</div>
				<div className='form-group-me'>
					<input type='password' onChange={handleConfirmPassword} className='form-Input-me' placeholder='Enter Confirm Password' required />
					<br />
					{userError?.confirmPasswordError && <p className='signUpError'>{userError.confirmPasswordError}</p>}
				</div>
				<button type='submit' className='form-submit-me'>
					SIGNUP NOW
				</button>

				{/* <p style={{ color: 'red' }}>{error?.message}</p> */}
				{/* <p style={{ color: 'blue' }}>{loading}</p> */}
			</form>
			<div className='m-2'>
				<span>Already have account ?</span>
				<span onClick={goToLogin} className='goToSignupPage '>
					login page
				</span>
			</div>
		</div>
	);
};

export default Signup;

export default function ValidationSign(values) {
	let errors = {};
	//  name validetion
	if (!values.name) {
		errors.name = 'Name is required';
	}
	//  email email
	if (!values.email) {
		errors.email = 'Email is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}
	//  mobile mobile
	if (!values.mobile) {
		errors.mobile = 'mobile number is required';
	} else if (values.mobile) {
		var patt = /^\d{11}$/;
		if (!patt.test(values.mobile)) {
			errors.mobile = 'mobile number must be 11 digit';
		}
	}
	//  password password
	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 5) {
		errors.password = 'Password needs to be more than 5 characters';
	}
	return errors;
}

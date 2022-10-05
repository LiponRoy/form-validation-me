import { useState, useEffect } from 'react';
// import useForm from './useForm';
import validate from './Validation';
// ...for date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		mobile: '',
		password: '',
		gender: 'Male',
		redioButton: '',
	});
	const [isCheckbox, setcheckbox] = useState('');
	//for date picker
	const [selectedDate, setSelectedDate] = useState(new Date());

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
		console.log(values);
	};

	function submit() {
		console.log('Submitted Succesfully');
		alert('name : ' + values.name + '' + ' ,Email : ' + values.email + '' + ' ,mobile : ' + values.mobile + '' + ' Gender : ' + values.gender);
	}

	return (
		<div className='container mt-3 mb-3'>
			<div className='row'>
				<div className='col-md-3'></div>
				<div className='col-md-6 frombg '>
					<h1 className='text-center Heading'>SIGN UP</h1>
					<form className='align-items-center' onSubmit={handleSubmit} noValidate>
						{/* name field */}
						<div className='form-group '>
							<label htmlFor=''>Name</label>
							<div className=''>
								<input className='form-control' placeholder='Enter name' name='name' type='name' value={values.name} onChange={handleChange} />
								{FormErrors.name && <p className='error inputError'>{FormErrors.name}</p>}
							</div>
						</div>

						{/* email field */}
						<div className='form-group '>
							<label htmlFor=''>Email</label>
							<div>
								<input className='form-control' placeholder='Enter Email' name='email' type='email' value={values.email} onChange={handleChange} />
								{FormErrors.email && <p className='error inputError'>{FormErrors.email}</p>}
							</div>
						</div>

						{/* mobile field */}
						<div className='form-group '>
							<label htmlFor=''>Mobile</label>
							<div>
								<input className='form-control' placeholder='Enter Mobile' name='mobile' type='number' value={values.mobile} onChange={handleChange} />
								{FormErrors.mobile && <p className='error inputError'>{FormErrors.mobile}</p>}
							</div>
						</div>
						{/* Password field */}
						<div>
							<label htmlFor=''>Password</label>
							<div>
								<input className='form-control' placeholder='Enter Password' name='password' type='password' value={values.password} onChange={handleChange} />
								{FormErrors.password && <p className='error inputError'>{FormErrors.password}</p>}
							</div>
						</div>
						{/* Gender */}
						<div>
							<label htmlFor=''>Select your gender</label>
							<div className='my-1'>
								<select value={values.gender} name='gender' type='gender' onChange={handleChange}>
									<option value='Male'>Male</option>
									<option value='FeMale'>FeMale</option>
									<option value='Other'>Other</option>
								</select>
								{FormErrors.password && <p className='error'>{FormErrors.password}</p>}
							</div>
						</div>
						{/* Redio button */}
						<div>
							<label htmlFor=''>select any one</label>
							<div className='my-1'>
								<input className='form-check-input' type='radio' checked={values.redioButton === 'one'} value='one' name='redioButton' onChange={handleChange}></input>
								<label className='form-check-label ml-1' htmlFor=''>
									one
								</label>
								<br></br>

								<input className='form-check-input' type='radio' checked={values.redioButton === 'two'} value='two' name='redioButton' onChange={handleChange}></input>
								<label className='form-check-label ml-1' htmlFor=''>
									two
								</label>
								<br></br>

								<input className='form-check-input' type='radio' checked={values.redioButton === 'three'} value='three' name='redioButton' onChange={handleChange}></input>
								<label className='form-check-label ml-1' htmlFor=''>
									three
								</label>
							</div>

							<span>Redio button is: {values.redioButton}</span>
						</div>
						{/* Check Box */}
						<div>
							<label htmlFor=''>I am agree of your conditions</label>

							<div className='my-1'>
								<input
									className='form-check'
									type='checkbox'
									checked={isCheckbox}
									value={isCheckbox}
									name='isCheckbox'
									onChange={e => {
										setcheckbox(e.target.checked);
									}}></input>

								{FormErrors.password && <p className='error'>{FormErrors.password}</p>}
							</div>
							<h5>Check Box Is : {isCheckbox ? 'true' : 'false'}</h5>
							<h6>{isCheckbox ? 'Thanks you are agree' : 'We are sorry...'}</h6>
						</div>
						<span>Date Of Birth</span>
						<br></br>
						<DatePicker
							selected={selectedDate}
							onChange={date => setSelectedDate(date)}
							// showTimeSelect
							dateFormat='dd/MM/yyyy'
							showYearDropdown
							scrollableMonthYearDropdown
							isClearable
						/>
						<br></br>

						<button class='btn btn-primary submitbtn mt-3' type='submit'>
							SUBMIT
						</button>
					</form>
				</div>
				<div className='col-md-3'></div>
			</div>
		</div>
	);
};

export default Form;

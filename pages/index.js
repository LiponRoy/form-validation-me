import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SignUp from '../pages/react-hook-form/SignUp';
import Register from './useState-form/Register';
import Login from './react-hook-form/Login';
import Form from './useState-big-form/Form';

export default function Home() {
	return (
		<div className={styles.container}>
			{/* <SignUp></SignUp> */}
			{/* <Register></Register> */}
			{/* <Login></Login> */}
			<Form></Form>
		</div>
	);
}

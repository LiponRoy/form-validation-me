import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import SignUp from './signup-me/SignUp';

export default function Home() {
	return (
		<div className={styles.container}>
			<SignUp></SignUp>
		</div>
	);
}

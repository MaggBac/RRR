'use client';
import React, { useState } from 'react';
import styles from '../page.module.css';

const FORM_ENDPOINT = 'https://herotofu.com/start'; // TODO - update to the correct endpoint

const ContactForm = () => {
	const [status, setStatus] = useState<any>();

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const injectedData: any = {
			DYNAMIC_DATA_EXAMPLE: 123,
		};

		const inputs = e.target.elements;
		const data: any = {};

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].name) {
				data[inputs[i].name] = inputs[i].value;
			}
		}

		Object.assign(data, injectedData);

		fetch(FORM_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.status === 422) {
					Object.keys(injectedData).forEach((key) => {
						const el = document.createElement('input');
						el.type = 'hidden';
						el.name = key;
						el.value = injectedData[key];

						e.target.appendChild(el);
					});

					e.target.setAttribute('target', '_blank');
					e.target.submit();

					throw new Error('Please finish the captcha challenge');
				}

				if (response.status !== 200) {
					throw new Error(response.statusText);
				}

				return response.json();
			})
			.then(() => setStatus("We'll be in touch soon."))
			.catch((err) => setStatus(err.toString()));
	};

	if (status) {
		return (
			<>
				<div className='text-2xl'>Thank you!</div>
				<div className='text-md'>{status}</div>
			</>
		);
	}

	return (
		<div>
			<h2 className={styles.contactHeading}>Let's get in touch </h2>
			<form
			className={styles.formStyle}
				action={FORM_ENDPOINT}
				onSubmit={handleSubmit}
				method='POST'
				id='form'>
				<div>
					<input className={styles.inputStyle} type='text' placeholder='Your name' name='name' required />
				</div>
				<div>
					<input className={styles.inputStyle} type='email' placeholder='Email' name='email' required />
				</div>
				<div>
					<textarea className={styles.textStyle} placeholder='Your message' name='message' required />
				</div>
				<div>
					<button className={styles.submitBtn} id='submit' type='submit'>
						{' '}
						Send a message{' '}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import './Contact.scss';

const Contact = () => {

	useLoadScript({
		googleMapsApiKey: 'AIzaSyCwieAk6N7xWQ6XxHPs1r9zLJ1W1sJWaLQ',
		mapIds: ['b3db25af27f9ad0c'],
	});

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = () => {
		console.log({
			name,
			email,
			subject,
			message
		});
	}

	const center = useMemo(() => ({lat: 40.760780, lng: -111.891045}), []);

    return (
        <div className="contact">
            <div className="left-container">
				<div className="form-container">
					<div className="headers">
						<div className="text">C</div>
						<div className="text">o</div>
						<div className="text">n</div>
						<div className="text">t</div>
						<div className="text">a</div>
						<div className="text">c</div>
						<div className="text-b">t</div>
						<div className="text">m</div>
						<div className="text">e</div>
					</div>
					<p className="info">
						Please feel free to contact me if you have a project 
						you like me to be apart of, if you have questions about 
						your project or anything else! Please fill out this form, 
						I look forward to hearing from you.
					</p>
					<form className="contact-form" onSubmit={sendEmail}>
						<div className="contact-info">
							<input type="text" className="name" name='name' placeholder="Name" onChange={e => setName(e.target.value)} />
							<input type="email" placeholder="Email" className="email" onChange={e => setEmail(e.target.value)} />
						</div>
						<input type="text" className="subject" placeholder="Subject" onChange={e => setSubject(e.target.value)} />
						<textarea name="message" className="message" placeholder="Message..." onChange={e => setMessage(e.target.value)} />
						<button type='submit'>Let's work</button>
					</form>
				</div>
			</div>
			<div className="right-container">
				<div className="message">
					<p className="message-text">
						Dominik Rodriguez<br></br>
						Salt Lake City, UT 84150
					</p>
					<div className="my-email">
						<p className="at-sign">@</p><p className="message-text">: joeangdom@gmail.com</p>
					</div>
				</div>
				<GoogleMap
					zoom={10}
					center={center}
					mapContainerClassName='map'
				>
					<Marker position={center} />
				</GoogleMap>
			</div>
        </div>
    )
}

export default Contact;
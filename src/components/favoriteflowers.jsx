import '../App.css';
import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { set, ref, onValue } from 'firebase/database';
import { auth, db } from './config';
import { uid } from 'uid';

function FavoriteFlowers() {
	const curr_user = uid();
	const [flower, setFlower] = useState('');
	const [flowerList, setFlowerList] = useState([]);

	// Save data on the database
	const save = () => {
		// Write data to specific user
		set(ref(db, `/${auth.currentUser.uid}/${curr_user}`), {
			user: curr_user,
			flower: flower
		}).then(() => {
			// Data saved successfully!
			alert('Flower list updated!');
		}).catch((error) => {
			// The write failed...
			alert(error);
		});
		// Clear flower text and add it to flowerList
		setFlower('');
	}

	function update() {
		update(ref(db, `/${auth.currentUser.uid}/${curr_user}`), {
			user: curr_user,
			flowerList: flowerList
		}).then(() => {
			// Data saved successfully!
			alert('Flower list updated!');
		})
			.catch((error) => {
				// The write failed...
				alert(error);
			});
		// Clear flower text and add it to flowerList
		setFlower('');
	};

	function readData() {
		const flowersRef = ref(db, `/${auth.currentUser.uid}/${curr_user}`);
		onValue(flowersRef, (snapshot) => {
			const data = snapshot.val();
			setFlowerList(data.flower);
		});
	}
	
	useEffect(() => {

	}, []);

	return (
		<div>
			<h2>
				Your Bouquet
			</h2>
			<div>
				<div>
					{flowerList}
					<input className='FlowerName' type='text' placeholder='A flower on your mind...' value={flower} onChange={(e) => setFlower(e.target.value)}>
					</input>
				</div>

				<button onClick={save}>
					Save
				</button>
			</div>
		</div>
	)
}

export default FavoriteFlowers;
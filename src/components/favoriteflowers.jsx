import '../App.css';
import React, { useState, useEffect } from 'react'
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
		setFlowerList((oldArray) => [...oldArray, flower]);
		setFlower('');
	}
	
	// Load list on screen & load from database
	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
					setFlowerList([]);
					const data = snapshot.val();
					// Add a new flower
					if (data != null) {
						Object.values(data).forEach(flower => {
							setFlowerList((oldArray) => [...oldArray, flower]);
						})
					}
				})
			}
		})
	}, []);

	return (
		<div>
			<h2>
				Your Bouquet
			</h2>
			<div>
				<div>
					<div className='FlowerList'>
						{
						flowerList.map(flower => (
							<div>
								{
								flower.flower
								}
							</div>
						))
						}
					</div>
					<div>
						<input className='FlowerName' type='text' placeholder='A flower on your mind...' value={flower} onChange={(e) => setFlower(e.target.value)}>
						</input>
					</div>
				</div>

				<button onClick={save}>
					Save
				</button>
			</div>
		</div>
	)
}

export default FavoriteFlowers;
import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {set, ref, onValue} from 'firebase/database';
import { auth, db } from './config';
import { uid } from 'uid';

function FavoriteFlowers() {
    return (
        <div></div>
    )
}

export default FavoriteFlowers;
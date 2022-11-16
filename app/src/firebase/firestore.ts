import { getFirestore } from 'firebase/firestore';

import { firebase } from './init';

export const firestore = getFirestore(firebase);

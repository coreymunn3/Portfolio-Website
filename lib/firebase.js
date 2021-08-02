import admin from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://myportfolio-views-default-rtdb.firebaseio.com',
  });
}

export default admin.database();

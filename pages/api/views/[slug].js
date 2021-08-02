import db from '../../../lib/firebase';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const slugRef = db.ref('views').child(req.query.slug);
    const { snapshot } = await slugRef.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }
      return currentViews + 1;
    });

    return res.status(200).json({ views: snapshot.val() });
  }
  if (req.method === 'GET') {
    const slugRef = db.ref('views').child(req.query.slug);
    const snapshot = await slugRef.once('value');
    const views = snapshot.val();

    return res.status(200).json({ views });
  }
};

export default handler;

// try http://localhost:3000/api/hello

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}

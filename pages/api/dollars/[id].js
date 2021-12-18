// Fake users data
const dollars = [{ id: `one` }, { id: `two` }, { id: `five` }, { id: 1`ten` }, { id: `twenty` }, { id: `fifty` }, { id: `one-hundred` }]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(dollars)
}
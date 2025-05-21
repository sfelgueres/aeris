export default async function handler(req, res) {
  const base = "https://remaxmexico.metabaseapp.com/public/question/0e0d8b87-b50a-4cc0-aa47-3dac2a2b1dec.json";
  const params = new URLSearchParams(req.query).toString();
  const url = `${base}?${params}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Error al consultar Metabase", detalle: err.message });
  }
}
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://gnews.io/api/v4/top-headlines?category=cars&lang=en&country=us&max=10&apikey=e02fabace8c352d34b3393a529ce6b3a"
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
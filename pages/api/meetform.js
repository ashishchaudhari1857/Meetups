import { MongoClient } from "mongodb";
async function handler(req, res) {
  const username = "ashishchaudhari1857";
  const password = "pass@123"; 

  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.nuhh21u.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupscollections = db.collection("meetups");
    const result = await meetupscollections.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;

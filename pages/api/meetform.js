import { MongoClient } from "mongodb";

async function handler(req, res) {
  const username = "ashishchaudhari1857";
  const password = "pass@123";

  if (req.method === "POST") {
    const data = req.body;


    try {

      const client = await MongoClient.connect(
        `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.nuhh21u.mongodb.net/meetups?retryWrites=true&w=majority`
      );
      const db = client.db();
      const meetupscollections = db.collection("meetups");

      // Insert the new meetup data into the database

      const result = await meetupscollections.insertOne(data);
      console.log("Inserted document ID:", result.insertedId);

      // Check if the insertion was successful  this is  the inser massage  don go before insrting
      if (result.insertedId) {
        console.log("Meetup inserted:", result.insertedId);
        client.close();
        res.status(201).json({ message: "Meetup inserted successfully" });
      } else {
        // In case of unsuccessful insertion
        console.log("Meetup insertion failed");
        client.close();
        res.status(500).json({ message: "Failed to insert meetup" });
      }
    } catch (err) {
      console.log("Error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
}

export default handler;

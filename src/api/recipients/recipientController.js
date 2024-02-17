import Recipient from "./recipientSchema.js";

export async function getRecipient(req, res) {
  try {
    const recipient = await Recipient.find();

    res.status(200).json(recipient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createRecipient(req, res) {
  const { name, phone, city, country, company, address, zipcode, email } =
    req.body;
  try {
    const exists = await Recipient.find({ email: email });

    if (exists.length > 0) {
      return res.status(400).json({ error: "Recipient already exists" });
    }

    const recipient = new Recipient({
      recipientNo: "R" + Math.floor(Math.random() * 90000),
      name,
      address,
      phone,
      city,
      country,
      company,
      zipcode,
      email,
    });

    const isSaved = await recipient.save();

    res.status(200).json({ isSaved, msg: "Recipient created succesfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getSingleRecipient(req, res) {
  const { id } = req.params;
  try {
    const singleRecipient = await Recipient.find({ _id: id });

    res.status(200).json(singleRecipient);
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
}

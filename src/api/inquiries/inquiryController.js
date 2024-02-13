import Enquiry from "./inquirySchema.js";

export async function getEnquiry(req, res) {
  try {
    const inquiry = await Enquiry.find();
    res.status(200).json(inquiry);
  } catch (error) {
    res.status(400).json({ Err: error.message });
  }
}

export async function createInquiry(req, res) {
  const { name, email, phone, description } = req.body;

  if (!name || !email || !phone || !description) {
    throw Error("Provide all credentials required");
  }

  try {
    const newInq = new Enquiry({
      inqNo: "I" + 101 + Math.floor(Math.random() * 90000),
      date: new Date().toJSON().slice(0, 10),
      name,
      email,
      phone,
      description,
    });

    const result = await newInq.save();

    res.status(200).json({ result, msg: "Success" });
  } catch (error) {
    res.status(404).Error(error.message);
  }
}

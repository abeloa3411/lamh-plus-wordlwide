import Shipper from "./shipperSchema.js";

export async function getShippers(req, res) {
  try {
    const shippers = await Shipper.find();

    res.status(200).json(shippers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createShipper(req, res) {
  const { name, phone, city, country, company, address, zipcode, email } =
    req.body;
  try {
    const exists = await Shipper.find({ email: email });

    if (exists.length > 0) {
      return res.status(400).json({ error: "Shipper already exists" });
    }

    const shipper = new Shipper({
      shipperNo: "S" + Math.floor(Math.random() * 90000),
      name,
      address,
      phone,
      city,
      country,
      company,
      zipcode,
      email,
    });

    const isSaved = await shipper.save();

    res.status(200).json({ isSaved, msg: "Shipper created succesfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getSingleShipper(req, res) {
  const { id } = req.params;
  try {
    const singleShipper = await Shipper.find({ _id: id });

    res.status(200).json(singleShipper);
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
}

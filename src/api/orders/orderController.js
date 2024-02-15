import Order from "./orderSchema.js";

export async function getOrders(req, res) {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createOder(req, res) {
  const {
    name,
    email,
    contact,
    address,
    shipperName,
    shipperCompany,
    shipperPhone,
    shipperAddress,
    shipperCity,
    shipperZip,
    shipperCountry,
    shipperEmail,
    recipientName,
    recipientCompany,
    recipientPhone,
    recipientAddress,
    recipientCity,
    recipientZip,
    recipientCountry,
    trackingNo,
    recipientEmail,
    weight,
    merchant,
    chargeableWeight,
    cost,
    sale,
    value,
    description,
  } = req.body;

  if (
    !name ||
    !email ||
    !contact ||
    !address ||
    !shipperName ||
    !shipperCompany ||
    !shipperPhone ||
    !shipperAddress ||
    !shipperCity ||
    !shipperZip ||
    !shipperCountry ||
    !shipperEmail ||
    !recipientName ||
    !recipientCompany ||
    !recipientPhone ||
    !recipientAddress ||
    !recipientCity ||
    !recipientZip ||
    !recipientCountry ||
    !recipientEmail ||
    !weight ||
    !trackingNo ||
    !merchant ||
    !chargeableWeight ||
    !cost ||
    !sale ||
    !value ||
    !description
  ) {
    throw Error("Please input all fields");
  }

  try {
    const newOrder = new Order({
      name,
      email,
      orderNo: "ORD" + 100 + Math.floor(Math.random() * 90000),
      contact,
      address,
      shipperName,
      shipperCompany,
      shipperPhone,
      shipperAddress,
      shipperCity,
      shipperZip,
      shipperCountry,
      shipperEmail,
      recipientName,
      recipientCompany,
      recipientPhone,
      trackingNo,
      recipientAddress,
      recipientCity,
      recipientZip,
      recipientCountry,
      recipientEmail,
      weight,
      merchant,
      chargeableWeight,
      cost,
      sale,
      description,
      value,
      orderDate: new Date().toJSON().slice(0, 10),
    });

    const isSaved = await newOrder.save();

    res.status(200).json({ isSaved, res: "Order saved" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function deleteOrder(req, res) {
  const { id } = req.params;
  try {
    await Order.findOneAndDelete({ _id: id });

    res.status(200).json({ msg: "Deleted" });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

export async function updateOrder(req, res) {
  const { id } = req.params;

  const {
    name,
    email,
    origin,
    destination,
    cost,
    chargeableWeight,
    dimensions,
    merchant,
    orderDate,
    deliveryDate,
    description,
    shipper,
    recipient,
    sale,
  } = req.body;

  const data = {
    name,
    email,
    origin,
    destination,
    cost,
    chargeableWeight,
    dimensions,
    merchant,
    orderDate,
    deliveryDate,
    description,
    shipper,
    recipient,
    sale,
  };

  const updated = await Order.updateOne({ _id: id }, { $set: data });

  res.status(200).json(updated);

  try {
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

export async function getReport(req, res) {
  const { dateOne, dateTwo } = req.body;

  if (!dateOne || !dateTwo) {
  }

  try {
    const data = await Order.find({
      orderDate: {
        $gte: dateOne,
        $lte: dateTwo,
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

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
    shipper,
    shipperCompany,
    shipperPhone,
    shipperAddress,
    shipperCity,
    shipperZip,
    shipperCountry,
    shipperEmail,
    recipient,
    recipientCompany,
    recipientPhone,
    trackingNo,
    recipientAddress,
    recipientCity,
    recipientZip,
    recipientCountry,
    recipientEmail,
    weight,
    dimension,
    merchant,
    chargeableWeight,
    cost,
    sale,
    description,
  } = req.body;

  try {
    const newOrder = new Order({
      name,
      email,
      orderNo: "ORD" + Math.floor(Math.random() * 90000) + 100,
      contact,
      address,
      shipper,
      shipperCompany,
      shipperPhone,
      shipperAddress,
      shipperCity,
      shipperZip,
      shipperCountry,
      shipperEmail,
      recipient,
      recipientCompany,
      recipientPhone,
      trackingNo: "TRK" + Math.floor(Math.random() * 90000) + 101,
      recipientAddress,
      recipientCity,
      recipientZip,
      recipientCountry,
      recipientEmail,
      weight,
      dimension,
      merchant,
      chargeableWeight,
      cost,
      sale,
      description,
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
    await Order.findByIdAndDelete({ _id: id });

    req.status(200).json({ msg: "Deleted" });
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

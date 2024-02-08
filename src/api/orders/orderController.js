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

  try {
    const newOrder = new Order({
      name,
      email,
      cost,
      chargeableWeight,
      dimensions,
      merchant,
      origin,
      destination,
      shipper,
      recipient,
      orderDate,
      deliveryDate,
      description,
      sale,
    });

    const isSaved = await newOrder.save();

    res.status(200).json({ isSaved, res: "Orser saved" });
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

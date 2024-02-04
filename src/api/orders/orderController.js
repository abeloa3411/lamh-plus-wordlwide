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
    orderNo,
    orderDate,
    cost,
    chargeableWeight,
    dimensions,
    merchant,
    cargoType,
    origin,
    state,
    currentLocation,
    descriptoin,
    deliveryDate,
    destination,
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
      cargoType,
      orderDate,
      deliveryDate,
      descriptoin,
      currentLocation,
      state,
    });

    const isSaved = await newOrder.save();

    res.status(200).json({ isSaved, res: "Orser saved" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

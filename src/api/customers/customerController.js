import Customer from "./customerSchema.js";

export async function getCustomers(req, res) {
  try {
    const customer = await Customer.find();

    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

export async function createCustomer(req, res) {
  const { name, address, contact, email } = req.body;

  if (name && address && contact && email) {
    const exists = await Customer.find({ email: email });

    if (exists.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const customer = new Customer({
      customerNo: "C" + Math.floor(Math.random() * 90000),
      name,
      address,
      contact,
      email,
    });

    const isSaved = await customer.save();

    res.status(200).json({ isSaved, msg: "Customer created succesfully" });
  } else {
    res.status(400).json({ err: "Error creating customer" });
  }
}

export async function getSingleCustomer(req, res) {
  const { id } = req.params;
  try {
    const singleCustomer = await Customer.find({ _id: id });

    res.status(200).json(singleCustomer);
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
}

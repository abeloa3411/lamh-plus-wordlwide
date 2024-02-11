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
  try {
    const customer = new Customer({
      customerNo: "CUS" + Math.random().toString(16).slice(8),
      name,
      address,
      contact,
      email,
    });

    const isSaved = await customer.save();

    res.status(200).json({ isSaved, msg: "Success" });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

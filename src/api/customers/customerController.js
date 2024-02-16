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

  if (!name || !address || !contact || !email) {
    throw Error("Please fill in all fields");
  }

  const exists = await Customer.find({ email: email });

  if ((exists.length = 0)) {
    try {
      const customer = new Customer({
        customerNo: "C" + Math.floor(Math.random() * 90000),
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
}

import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

const handler = async (req, res) => {
    const { method } = req;
  
    await dbConnect();
  
    if(method==="GET"){}
    if (method === "POST") {
        try {
          const order = await Order.create(req.body);
          res.status(201).json(order);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    };
    
    export default handler;
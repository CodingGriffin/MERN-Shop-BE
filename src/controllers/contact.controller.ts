import { Request, Response } from "express";

const contactController = {
  snedMessage: async (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    let data: any = {};
    data["sucess"] = "תודה על פנייתך! נחזור אליך בהקדם.";
    try {
      res.json(data);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default contactController;

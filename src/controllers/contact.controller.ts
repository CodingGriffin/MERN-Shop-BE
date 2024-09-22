import { Request, Response } from "express";

const contactController = {
  snedMessage: async (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    let msg: any = {};
    msg["sucess"] = "תודה על פנייתך! נחזור אליך בהקדם.";
    try {
      res.json(msg);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default contactController;

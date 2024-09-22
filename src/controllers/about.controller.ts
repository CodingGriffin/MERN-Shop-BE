import { Request, Response } from "express";

const aboutController = {
  about: async (req: Request, res: Response) => {
    try {
      res.json("Success!");
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default aboutController;

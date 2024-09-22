import { Request, Response } from "express";

const blog_posts = [
  {"id": 1, "title": "טיפים לטיפוח שיער מתולתל", "image": "placeholder.svg", "excerpt": "גלו את הסודות לשמירה על תלתלים בריאים ויפים..."},
  {"id": 2, "title": "מדריך לבחירת פאה מושלמת", "image": "placeholder.svg", "excerpt": "כל מה שצריך לדעת לפני רכישת פאה חדשה..."},
  {"id": 3, "title": "טרנדים חמים בעיצוב שיער", "image": "placeholder.svg", "excerpt": "הכירו את הסגנונות החמים ביותר לעונה הקרובה..."}
]

const blogsController = {
  getAll: async (req: Request, res: Response) => {
    try {
      res.json(blog_posts);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default blogsController;

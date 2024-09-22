import { Request, Response } from "express";

const products = [
  {"id": 1, "name": "שמפו מרענן", "price": 49.99, "image": "placeholder.svg", "description": "שמפו מרענן לכל סוגי השיער"},
  {"id": 2, "name": "קרם לחות", "price": 79.99, "image": "placeholder.svg", "description": "קרם לחות עשיר לעור הפנים"},
  {"id": 3, "name": "מסכת שיער", "price": 59.99, "image": "placeholder.svg", "description": "מסכת שיער מזינה לשיער רך ובריא"},
  {"id": 4, "name": "סרום לפנים", "price": 89.99, "image": "placeholder.svg", "description": "סרום מרוכז להזנת העור"},
  {"id": 5, "name": "מברשת שיער", "price": 39.99, "image": "placeholder.svg", "description": "מברשת שיער איכותית לסירוק קל"},
  {"id": 6, "name": "לק ציפורניים", "price": 29.99, "image": "placeholder.svg", "description": "לק ציפורניים באיכות מקצועית"},
  {"id": 7, "name": "קרם ידיים", "price": 19.99, "image": "placeholder.svg", "description": "קרם ידיים מזין ומרכך"},
  {"id": 8, "name": "מסקרה", "price": 69.99, "image": "placeholder.svg", "description": "מסקרה לריסים ארוכים ומלאים"}
]

const blog_posts = [
  {"id": 1, "title": "טיפים לטיפוח שיער מתולתל", "image": "placeholder.svg", "excerpt": "גלו את הסודות לשמירה על תלתלים בריאים ויפים..."},
  {"id": 2, "title": "מדריך לבחירת פאה מושלמת", "image": "placeholder.svg", "excerpt": "כל מה שצריך לדעת לפני רכישת פאה חדשה..."},
  {"id": 3, "title": "טרנדים חמים בעיצוב שיער", "image": "placeholder.svg", "excerpt": "הכירו את הסגנונות החמים ביותר לעונה הקרובה..."}
]

const landingController = {
  index: async (req: Request, res: Response) => {
    let data: any = {};
    data['products'] = products.slice(0, 4);
    data['blogs'] = blog_posts.slice(0, 3);
    try {
      res.json(data);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default landingController;

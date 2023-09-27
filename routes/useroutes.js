import  express  from "express";
const router=express.Router();
import userRegistration from "../controllers/usercontroller.js";
router.use(express.json());

//public Routes
router.post('/register',userRegistration)
//protected routes


export default router;
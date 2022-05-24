import {Router} from 'express'
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "../controllers/ctrl.js";

const router = Router()

router.get("/getAll", getAll)
router.get("/getOne/:id", getOne)
router.post("/createOne", createOne)
router.put("/updateOne/:id", updateOne)
router.delete("/deleteOne/:id", deleteOne)



 export default router
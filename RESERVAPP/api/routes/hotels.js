import express from "express";
import { countByCity, countBytype, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE 
router.post("/", verifyAdmin, createHotel)

//UPDATE 
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/find/:id", getHotel)

//GET ALL
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countBytype", countBytype)
router.get("/room/:id", getHotelRooms)

export default router;
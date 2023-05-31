import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"

import postRoutes from "./routes/postsRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }));

//setting endpoints
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/dalle", dalleRoutes)

const port = process.env.PORT || 3000

const startServer = () => {

  connectDB()

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

startServer()
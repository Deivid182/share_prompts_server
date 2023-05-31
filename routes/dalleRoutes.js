import express from "express"
import dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai"

dotenv.config()

const router = express.Router()
const config = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY
})

const openai = new OpenAIApi(config)

router.post("/", async(req, res) => {
  try {
    const { prompt } = req.body
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json"
    })

    //console.log(aiResponse.data.data)


    const image = aiResponse.data.data[0].b64_json
    res.status(200).json({ photo: image })

  } catch (error) {
    console.log(error)
    res.status(500).send(error?.response.data.error.message)
  }
} )

export default router
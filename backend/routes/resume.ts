import { Router } from "express";
import { analyzeResume } from "../controllers/resumeController";

const router = Router();

// POST /api/resume/analyze
router.post("/analyze", async (req, res) => {
  try {
    const { text, kind } = req.body;
    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'text' in body" });
    }

    const result = await analyzeResume({ text, kind });
    return res.json(result);
  } catch (err: any) {
    console.error("Error in /api/resume/analyze", err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
});

export default router;

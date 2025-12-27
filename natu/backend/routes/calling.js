const express = require("express");
const router = express.Router();

// Simulasi database laporan korban
let laporanKorban = [
  { id: "1", korbanName: "Alice", location: "Jakarta", status: "Menunggu" },
  { id: "2", korbanName: "Bob", location: "Bandung", status: "Menunggu" },
];

// GET daftar laporan korban (tanpa auth dulu)
router.get("/", (req, res) => {
  res.json(laporanKorban);
});

// POST verifikasi laporan (tanpa auth)
router.post("/", (req, res) => {
  const { laporanId } = req.body;
  const laporan = laporanKorban.find((l) => l.id === laporanId);
  if (!laporan) return res.status(404).json({ error: "Laporan tidak ditemukan" });

  laporan.status = "Diverifikasi";
  res.json({ message: "Verifikasi sukses", laporan });
});

module.exports = router;

import express from "express";

const app = express();

app.get("/time", (req: any, res: any) => {
 const currentTime = new Date().toLocaleTimeString();
 res.send(
  `<!DOCTYPE html><html><head><title>Current Time</title></head><body><p>${currentTime}</p></body></html>`
 );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

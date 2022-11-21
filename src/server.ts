import http from "http";
import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();
const server = http.createServer(app);
server.listen(process.env.PORT || 8080, async () => {
  console.log("connected to Server", process.env.PORT);
});
process.on("unhandledRejection", (err: any) => {
  console.log(err);
  console.log("UNHANDLED REJECTION! Shutting down...");
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED.Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});

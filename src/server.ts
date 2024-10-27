import { Server } from "socket.io";
import { app } from "./app";
import { env } from "./env";

const io = new Server(app.server);

io.on("connection", (socket) => {
    console.log("Usuário conectado:", socket.id);
  
    // Desconexão
    socket.on("disconnect", () => {
      console.log("Usuário desconectado:", socket.id);
    });
});


app.listen({
    port: env.PORT,
    host: '0.0.0.0'
}).then(() => {
    console.log('servidor rodando na porta 4000')
})

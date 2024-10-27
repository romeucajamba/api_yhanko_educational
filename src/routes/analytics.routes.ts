import { Server, Socket } from "socket.io";
import { createUsageFactory } from "../controllers/analytics/factories/createUsageFactory";
import { getUsageFactory } from "../controllers/analytics/factories/getUsageFactory";
import { CreateUsageEventController } from "../controllers/analytics/createUsageController";
import { GetUsageEventController } from "../controllers/analytics/getUsageController";

export async function usageEventRoutes(io: Server) {

  const createUsageEventUseCase =  createUsageFactory();
  const getUserEventsUseCase = getUsageFactory();

  const createUsageController = new CreateUsageEventController(createUsageEventUseCase, io);
  const getUsageController = new GetUsageEventController(getUserEventsUseCase)

  io.on("connection", (socket: Socket) => {
    console.log("User connected:", socket.id);

    socket.on("trackEvent", async (data) => {
      await createUsageController.trackUserEvent(socket, data);
    });

    socket.on("getUserEvents", async (userId) => {
      await getUsageController.fetchUserEvents(socket, userId);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}

/*

// Exemplo de uso no frontend (React)
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Chart from "react-chartjs-2";

const socket = io("http://localhost:3000");

function UserPerformanceChart({ userId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.emit("getUserEvents", userId);

    socket.on("userUsageEvents", (data) => {
      setEvents(data);
    });

    socket.on("newUsageEvent", (event) => {
      setEvents((prevEvents) => [...prevEvents, event]);
    });

    return () => {
      socket.off("userUsageEvents");
      socket.off("newUsageEvent");
    };
  }, [userId]);

  const data = {
    labels: events.map((event) => new Date(event.timestamp).toLocaleString()),
    datasets: [
      {
        label: "User Actions",
        data: events.map((_, index) => index + 1),
        fill: false,
        borderColor: "#4CAF50",
      },
    ],
  };

  return <Chart type="line" data={data} />;
}

export default UserPerformanceChart;
*/
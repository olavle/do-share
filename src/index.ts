import dotenv from "dotenv";
import path from "node:path";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import express from "express";
import { gqlResolvers, gqlSchema } from "./graphql";
import { initApp } from "./serverUtils/initApp";
import { IContext } from "./context/models";
import { buildContext } from "./context";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const PORT = process.env.PORT;
const app = express();
const httpServer = http.createServer(app);

const apolloServer = new ApolloServer<IContext>({
  typeDefs: gqlSchema,
  resolvers: gqlResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

apolloServer.start().then(() => {
  console.log("Apollo server started");

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }) => buildContext(req),
    })
  );

  new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve))
    .then(() => initApp())
    .then(() => console.log(`🚀 Server ready at http://localhost:${PORT}/`));
});

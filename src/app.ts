import express, { Express } from "express";
import cors from "cors";

function setupCors(e: Express): Express {
  return e.use(cors());
}

function setupRoute(e: Express): Express {
  e.get("/", (_req, res, _next) => {
    res.json({ hello: "root" });
  });

  e.get("/error-400", (_req, res, _next) => {
    res.status(400).json({ hello: "error 400" });
  });

  e.get("/error-500", (_req, res, _next) => {
    res.status(500).json({ hello: "error 500" });
  });

  return e;
}

export const app: Express = [setupCors, setupRoute].reduce(
  (e, middleware) => middleware(e),
  express()
);

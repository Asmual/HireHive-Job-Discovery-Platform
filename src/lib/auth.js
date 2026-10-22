import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { memoryAdapter } from "better-auth/adapters/memory";
import dns from "node:dns";

try {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
} catch {
  // Ignore DNS override errors on restricted environments
}

const mongoUri = process.env.MONGODB_URI;
let databaseConfig;

if (mongoUri && mongoUri.trim() !== "") {
  const client = new MongoClient(mongoUri, { family: 4 });
  const dbName = process.env.DB_NAME || "hirehive";
  databaseConfig = mongodbAdapter(client.db(dbName), { client });
} else {
  // Resilient fallback to memory adapter if MongoDB is not configured locally
  databaseConfig = memoryAdapter({});
}

export const auth = betterAuth({
  database: databaseConfig,
  secret: process.env.BETTER_AUTH_SECRET || "2d8cd8c628eee592eedab297d5e7f5a007fffe04315b1caade59123c82f44f70",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "seeker",
      },
    },
  },

  // socialProviders: {
  //   google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //   },
  // },
});

export default auth;

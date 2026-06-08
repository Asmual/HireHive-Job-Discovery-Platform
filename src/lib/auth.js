import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const client = new MongoClient(process.env.MONGODB_URI, {
  family: 4,
});

export const auth = betterAuth({
  database: mongodbAdapter(client.db(process.env.DB_NAME), { client }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL || "https://hire-hive-project.vercel.app",
  
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
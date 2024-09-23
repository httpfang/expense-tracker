export default {
    dialect: "postgresql",
    schema: "./utils/schema.jsx",
    out: "./drizzle",
    dbCredentials: {
      url: 'postgresql://Costimize_owner:HShR0O3EzVmQ@ep-solitary-frog-a56k8lci.us-east-2.aws.neon.tech/Costimize?sslmode=require',
      connectionString:
      process.env.NEXT_PUBLIC_DATABASE_URL,
    },
  };
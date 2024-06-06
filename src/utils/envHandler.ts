// get the environment variable
const getEnvVariable = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

// Declare variables
let TMDB_ACCESS_TOKEN: string;

// Validate the environment variables

try {
  TMDB_ACCESS_TOKEN = getEnvVariable("NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN");
} catch (error: any) {
  console.error(error.message);
  process.exit(1);
}

export { TMDB_ACCESS_TOKEN };

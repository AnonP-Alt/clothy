import { faker } from "@faker-js/faker";
import { db } from ".";

async function main() {}

// Bootstrap
main()
  .then(() => {
    console.log("All Seeding is Done!");
  })
  .catch((err) => {
    if (err instanceof Error)
      console.error(`Error Seeding: ${err.message}`);
    else console.error("Error Seeding!");
  });

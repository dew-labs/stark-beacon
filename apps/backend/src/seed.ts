import { orm } from "./orm";
import { metadata } from "./schema/metadata";

async function seedMetadata() {
  const metadataSeedData = [
    { id: "blockTimeGap", value: "30" },
    { id: "latestBlock", value: "0" },
  ];

  await Promise.all(
    metadataSeedData.map((data) =>
      orm.insert(metadata).values(data).onConflictDoNothing()
    )
  );

  console.log("Seed data has been inserted!");
}

const seed = async () => {
  await seedMetadata();
};

seed()
  .then(() => {
    console.log("Seeding complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error during seeding:", error);
    process.exit(1);
  });

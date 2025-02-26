import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("testpassword", 10);
  await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      username: "testuser",
      password: hashedPassword,
      name: "Test User",
    },
  });
  console.log("User created");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
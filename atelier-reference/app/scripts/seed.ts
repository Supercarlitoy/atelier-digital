
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    // Create test user
    const hashedPassword = await bcrypt.hash('johndoe123', 12);
    
    const testUser = await prisma.user.upsert({
      where: { email: 'john@doe.com' },
      update: {},
      create: {
        email: 'john@doe.com',
        password: hashedPassword,
        firstName: 'John',
        lastName: 'Doe',
      },
    });

    console.log('Created test user:', testUser.email);

    // Create admin user from initialization
    const adminHashedPassword = await bcrypt.hash('admin123', 12);
    
    const adminUser = await prisma.user.upsert({
      where: { email: 'admin@atelierdigital.com' },
      update: {},
      create: {
        email: 'admin@atelierdigital.com',
        password: adminHashedPassword,
        firstName: 'Admin',
        lastName: 'User',
      },
    });

    console.log('Created admin user:', adminUser.email);
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

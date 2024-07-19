import prisma from ".";


async function main() {
  try {
    await prisma.$connect();    
    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
  }
}

main();
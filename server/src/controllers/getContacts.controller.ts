import prisma from "../db";
import { asyncHandler } from "../utils/asyncHandler";

const getContacts = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const contact = await prisma.contact.findMany({
    where: {
      userId: userId,
    },
  });
  res.send(contact);
});

export { getContacts };

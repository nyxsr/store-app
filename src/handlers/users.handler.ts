import { eq, isNull } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import passwordEncryptor from "@/utils/passwordEncryptor";
import { NewUser, User } from "@/db/schema/users";

export async function getUsers(): Promise<User[]> {
  return await db.select().from(users).where(isNull(users.deletedAt));
}

export async function getUser({ id }: { id: string }) {
  return await db.query.users.findFirst({where: eq(users.id, id)})
}

export async function updateUser(
  { id }: { id: string },
  body: NewUser
) {
  const { name, email, password } = body;
  let encrypted = null
  if (password) {
    encrypted = passwordEncryptor(password, 10);
  }
  return await db
    .update(users)
    .set({ name, email, password: encrypted || password })
    .where(eq(users.id, id))
    .returning();
}

export async function addUser(body: NewUser): Promise<User[]> {
  const { name, email, password } = body;
  const encrypted = passwordEncryptor(password, 10);
  return await db.insert(users).values({ name, email, password: encrypted }).returning();
}

export async function deleteUser({ id }: { id: string }) {
  return await db
    .update(users)
    .set({ deletedAt: new Date() })
    .where(eq(users.id, id));
}

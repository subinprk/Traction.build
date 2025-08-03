import { schema, OutputType } from "./early-access_POST.schema";
import { db } from "../helpers/db";
import superjson from 'superjson';
import { PostgresError } from 'postgres';

export async function handle(request: Request) {
  try {
    const json = superjson.parse(await request.text());
    const { email } = schema.parse(json);

    await db
      .insertInto('earlyAccessSignups')
      .values({ email })
      .execute();

    console.log(`New early access signup: ${email}`);

    const response: OutputType = { success: true, message: "Thank you for signing up for early access!" };
    return new Response(superjson.stringify(response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    if (error instanceof PostgresError && error.code === '23505') { // unique_violation
      console.warn(`Duplicate email signup attempt: ${(error as any).detail}`);
      return new Response(superjson.stringify({ error: "This email address has already been registered." }), {
        status: 409, // Conflict
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    if (error instanceof Error) {
        console.error("Error in early-access_POST:", error);
        // Zod errors will be caught here and result in a 400
        return new Response(superjson.stringify({ error: error.message }), {
            status: 400, // Bad Request
            headers: { 'Content-Type': 'application/json' },
        });
    }

    console.error("An unknown error occurred in early-access_POST:", error);
    return new Response(superjson.stringify({ error: "An unexpected error occurred." }), {
      status: 500, // Internal Server Error
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
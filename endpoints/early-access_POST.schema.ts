import { z } from "zod";
import superjson from 'superjson';

export const schema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Invalid email address"),
});

export type InputType = z.infer<typeof schema>;

export type OutputType = {
  success: boolean;
  message: string;
};

export const postEarlyAccess = async (body: InputType, init?: RequestInit): Promise<OutputType> => {
  const validatedInput = schema.parse(body);
  const result = await fetch(`/_api/early-access`, {
    method: "POST",
    body: superjson.stringify(validatedInput),
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const responseText = await result.text();
  const responseObject = superjson.parse(responseText);

  if (!result.ok) {
    const errorMessage = (responseObject as { error: string }).error || "An unknown error occurred";
    throw new Error(errorMessage);
  }
  
  return responseObject as OutputType;
};
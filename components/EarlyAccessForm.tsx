import React from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm, Form, FormItem, FormControl, FormMessage } from "./Form";
import { schema as earlyAccessSchema } from "../endpoints/early-access_POST.schema";
import { useEarlyAccessSignup } from "../helpers/useEarlyAccessSignup";
import { Input } from "./Input";
import { Button } from "./Button";
import styles from "./EarlyAccessForm.module.css";

export const EarlyAccessForm = () => {
  const form = useForm({
    schema: earlyAccessSchema,
    defaultValues: {
      email: "",
    },
  });

  const signupMutation = useEarlyAccessSignup();

  const onSubmit = (values: z.infer<typeof earlyAccessSchema>) => {
    signupMutation.mutate(values, {
      onSuccess: () => {
        toast.success("Welcome aboard!", {
          description: "You've been added to the early access list. We'll be in touch soon.",
        });
        form.setValues({ email: "" });
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast.error("Signup Failed", {
            description: error.message || "Please try again.",
          });
        } else {
          toast.error("An unknown error occurred.");
        }
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <FormItem name="email" className={styles.formItem}>
          <div className={styles.inputWrapper}>
            <FormControl>
              <Input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                value={form.values.email}
                onChange={(e) =>
                  form.setValues((prev) => ({ ...prev, email: e.target.value }))
                }
                disabled={signupMutation.isPending}
              />
            </FormControl>
            <Button
              type="submit"
              size="lg"
              className={styles.submitButton}
              disabled={signupMutation.isPending}
            >
              {signupMutation.isPending ? (
                <Loader2 className={styles.spinner} />
              ) : (
                <>
                  Join Early Access for Free
                  <ArrowRight size={16} />
                </>
              )}
            </Button>
          </div>
          <FormMessage className={styles.formMessage} />
        </FormItem>
      </form>
    </Form>
  );
};
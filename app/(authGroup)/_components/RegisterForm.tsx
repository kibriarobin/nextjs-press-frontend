"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { registerAction } from "../_actions/authActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

  const router = useRouter()

  const [state, action, pending] = useActionState(registerAction, false);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Registration successful");
      router.push("/login")
    }

    if (!state.success) {
      toast.error(state.message || "Registration failed");
    }
  }, [state, router]);

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-3">
        <Input name="name" type="text" placeholder="Enter your name" required />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <Input
          name="profilePhoto"
          type="url"
          placeholder="Enter your photo URL (optional)"
        />
        <Button type="submit">{pending ? "Submitting.." : "Register"}</Button>
      </Card>
    </form>
  );
};

export default RegisterForm;

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const RegisterForm = () => {
  return (
    <form action="">
      <Card className="p-5 space-y-3">
        <Input
          name="name"
          type="name"
          placeholder="Enter your name"
          required
        />
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
        <Button type="submit">Register</Button>
      </Card>
    </form>
  );
};

export default RegisterForm;

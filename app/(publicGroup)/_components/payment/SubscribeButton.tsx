"use client"

import React, { useActionState, useEffect } from "react";
import { subscribePremium } from "../../_actions/subscribePremium";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SubscribeButton = () => {
  const [state, action, pending] = useActionState(subscribePremium, null);

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error(state.message || "failed to checkout");
    }
  }, [state]);

  return (
    <form action={action}>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Redirecting..." : "Subscribed Now"}
      </Button>
    </form>
  );
};

export default SubscribeButton;

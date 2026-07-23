import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import React from "react";
import SubscribeButton from "./SubscribeButton";
import { getSubscriptionStatus } from "../../_actions/getSubscriptionStatus";

const PricingSection = async() => {
  const statusResult = await getSubscriptionStatus();

  const isActive = Boolean(
    statusResult?.success && statusResult?.data?.isSubscribed,
  );

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Premium Plan
          {isActive && <Badge>Active</Badge>}
        </CardTitle>
        <CardDescription>
          {isActive && statusResult.data.currentPeriodEnd
            ? `Renews on ${new Date(statusResult.data.currentPeriodEnd).toLocaleDateString()}`
            : "Unlock every premium story, cancel anytime"}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary"/>
                Unlimited premium articles
            </li>
            <li className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary"/>
                Early access to new stories
            </li>
            <li className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary"/>
                Support independent blogging
            </li>
        </ul>
        {
            !isActive && <SubscribeButton></SubscribeButton>
        }
      </CardContent>
    </Card>
  );
};

export default PricingSection;

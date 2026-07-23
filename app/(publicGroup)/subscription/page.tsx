import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, CreditCard } from "lucide-react";
import { getSubscriptionStatus } from "../_actions/getSubscriptionStatus";

const SubscriptionPage = async () => {
  const statusResult = await getSubscriptionStatus();

  const isActive = Boolean(
    statusResult?.success && statusResult?.data?.isSubscribed,
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">My Subscription</h1>
        <p className="text-sm text-muted-foreground">
          Manage your premium membership
        </p>
      </div>

      {isActive ? (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Premium Plan
              <Badge>Active</Badge>
            </CardTitle>
            <CardDescription>
              {statusResult.data.currentPeriodEnd &&
                `Renews on ${new Date(
                  statusResult.data.currentPeriodEnd,
                ).toLocaleDateString()}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary" />
                Unlimited premium articles
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary" />
                Early access to new stories
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary" />
                Support independent blogging
              </li>
            </ul>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-md mx-auto">
          <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
            <CreditCard className="size-10 text-muted-foreground" />
            <div className="space-y-1">
              <p className="font-medium">You don&apos;t have an active subscription</p>
              <p className="text-sm text-muted-foreground">
                Subscribe to unlock premium content and support the blog.
              </p>
            </div>
            <Button asChild>
              <Link href="/premium">Go to Subscription</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SubscriptionPage;
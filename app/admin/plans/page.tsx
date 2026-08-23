import { Check, Edit3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    subscribers: 812,
    credits: 50,
    features: ["50 credits / month", "AI Assistant (basic)", "5 image generations"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    subscribers: 398,
    credits: 1000,
    features: ["1,000 credits / month", "Unlimited AI Assistant", "100 image generations", "Voice + Music generation"],
  },
  {
    name: "Pro+",
    price: "$29/mo",
    subscribers: 74,
    credits: 5000,
    features: ["5,000 credits / month", "Unlimited everything", "Priority queue", "Team seats"],
  },
];

export default function ManagePlansPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Manage Plans</h1>
        <p className="mt-1 text-sm text-slate-400">Configure pricing tiers and their included features.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">{plan.name}</h2>
              <Badge variant="accent">{plan.subscribers} subscribers</Badge>
            </div>
            <p className="mt-2 text-2xl font-bold text-white">{plan.price}</p>
            <p className="text-sm text-slate-500">{plan.credits.toLocaleString()} credits included</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check size={14} className="text-accent-light" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="secondary" size="sm" className="mt-6 w-full">
              <Edit3 size={14} /> Edit plan
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

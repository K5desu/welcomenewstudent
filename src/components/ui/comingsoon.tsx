import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Coming() {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Coming soon
    </Button>
  );
}

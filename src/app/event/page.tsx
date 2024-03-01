import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="py-5 text-center">
        <div className="block text-xl font-bold text-gray-800 dark:text-white"></div>

        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
    </div>
  );
}

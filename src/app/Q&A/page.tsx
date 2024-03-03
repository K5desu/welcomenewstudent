import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import Coming from "@/components/ui/comingsoon";

export default function Home() {
  const question: string | never[] = [];
  return (
    <div>
      <div className="py-5 text-center">
        <div className="block text-xl font-bold text-gray-800 dark:text-white"></div>
        {question.length > 0 ? <div>{question}</div> : <Coming />}
      </div>
    </div>
  );
}

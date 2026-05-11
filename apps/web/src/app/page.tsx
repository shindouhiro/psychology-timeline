import { TimelineList } from "@/components/timeline-list";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-start min-h-screen pt-10 pb-24">
      <TimelineList />
    </main>
  );
}

import { StatusIndicator } from '@/components/status-indicator';
import { TypingName } from '@/components/title';

export default function Home() {
  return (
    <>
      <div className="space-y-6 pt-32 md:pt-40">
        <div>
          <TypingName />
          <h2 className="lowercase text-zinc-500">Front-End Engineer</h2>
        </div>
        <p className="lowercase text-neutral-200">
          I’m a passionate web developer, focused on building fast,
          aesthetically pleasing applications with seamless interactions and
          intuitive design for great user experiences.
        </p>
      </div>

      <StatusIndicator available />
    </>
  );
}

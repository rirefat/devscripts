'use client'
import { toast } from "sonner";

const Feedback = () => {
    const positiveFeedback = () => {
        toast(
            'Thanks for your feedback 👍',
            {
                duration: 2000,
                position: "top-right"
            }
        )
    }

    const negativeFeedback = () => {
        toast(
            'Sorry to hear that 👎',
            {
                description: "We'll work on improving.",
                duration: 2000,
                position: "top-right"
            }
        )
    }
    return (
        <div class="relative h-8">
            <div
                class="absolute inset-0 flex items-center justify-center gap-6 md:justify-start"
            >
                <p class="text-sm text-zinc-600 dark:text-zinc-400">
                    Was this content helpful?
                </p>
                <div
                    class="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10"
                >
                    <button
                        class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                        onClick={positiveFeedback}
                    >
                        Yes
                    </button>
                    <div class="bg-zinc-900/10 dark:bg-white/10"></div>
                    <button
                        class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                        onClick={negativeFeedback}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Feedback;
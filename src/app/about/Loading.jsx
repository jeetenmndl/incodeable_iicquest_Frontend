import { Progress } from "@/components/ui/progress"


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(
        <div className="h-dvh flex justify-center items-center">
            <Progress value={66} />
        </div>
    )
  }
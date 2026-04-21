import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function RoutineSkeleton() {
    return (
        <div className="space-y-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                    <Skeleton className="h-8 w-40 rounded-lg" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2].map((j) => (
                            <Card
                                key={j}
                                className="overflow-hidden border-none shadow-md bg-white/50 backdrop-blur-sm"
                            >
                                <CardContent className="p-5 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <Skeleton className="h-6 w-24 rounded-md" />
                                        <Skeleton className="h-5 w-16 rounded-full" />
                                    </div>
                                    <Skeleton className="h-4 w-full" />
                                    <div className="flex items-center gap-2 pt-2">
                                        <Skeleton className="h-8 w-8 rounded-full" />
                                        <div className="space-y-1">
                                            <Skeleton className="h-3 w-24" />
                                            <Skeleton className="h-3 w-16" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

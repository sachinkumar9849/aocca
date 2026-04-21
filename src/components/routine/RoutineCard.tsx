import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { User, BookOpen, Clock } from "lucide-react";
import type { Slot } from "@/types/routine";

interface RoutineCardProps {
    slot: Slot;
}

export default function RoutineCard({ slot }: RoutineCardProps) {
    return (
        <Card className="overflow-hidden border-none shadow-premium bg-white/70 backdrop-blur-md hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-theme1/10 text-theme1 group-hover:bg-theme1 group-hover:text-white transition-colors duration-300">
                            <BookOpen size={18} />
                        </div>
                        <div>
                            <h4 className="font-bold text-blackDark text-highlight-accent">{slot.subject_name}</h4>
                            <p className="text-grayDark text-xs font-semibold uppercase tracking-wider">
                                {slot.subject_code}
                            </p>
                        </div>
                    </div>
                    <Badge
                        variant="outline"
                        className="flex items-center gap-1 rounded-full border-theme2/20 bg-theme2/10 px-2 py-0.5 font-bold text-theme2"
                    >
                        <Clock size={12} />
                        P-{slot.period_index}
                    </Badge>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-theme1 to-lightBlue flex items-center justify-center text-white font-bold shadow-sm">
                            <User size={20} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-theme2 border-2 border-white"></div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-blackDark leading-tight">{slot.teacher_name}</p>
                        <p className="text-xs text-grayDark">{slot.teacher_title}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

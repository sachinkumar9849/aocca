import React from "react";
import { Calendar as CalendarIcon, Filter, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { ClassInfo } from "@/types/routine";

interface RoutineHeaderProps {
    fromDate: string;
    toDate: string;
    classes: ClassInfo[];
    selectedClassId: string;
    onFromDateChange: (date: string) => void;
    onToDateChange: (date: string) => void;
    onClassChange: (classId: string) => void;
    onRefresh: () => void;
    onPrint: () => void;
}

export default function RoutineHeader({
    fromDate,
    toDate,
    classes,
    selectedClassId,
    onFromDateChange,
    onToDateChange,
    onClassChange,
    onRefresh,
    onPrint,
}: RoutineHeaderProps) {
    return (
        <div className="mb-8 flex flex-col gap-6 rounded-2xl border border-white/20 bg-white/40 p-6 shadow-premium backdrop-blur-md md:flex-row md:items-center justify-between">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-blackDark">Class Routine</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="flex items-center gap-2 text-grayDark">
                        <CalendarIcon size={16} />
                        Schedule for{" "}
                        {new Date(fromDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                        })}
                        {" - "}
                        {new Date(toDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 bg-white/60 p-2 rounded-xl border border-gray-100 min-w-[220px]">
                    <div className="p-2 bg-theme1/10 text-theme1 rounded-lg">
                        <Layers size={18} />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <label className="text-[10px] font-bold text-theme1 uppercase mb-0.5">Section</label>
                        <Select value={selectedClassId} onValueChange={onClassChange}>
                            <SelectTrigger className="h-6 border-none bg-transparent p-0 text-sm font-bold text-blackDark shadow-none focus:ring-0">
                                <SelectValue placeholder="All Sections" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-none shadow-premium bg-white/95 backdrop-blur-md">
                                <SelectItem value="all" className="font-semibold text-blackDark">
                                    All Sections
                                </SelectItem>
                                {classes.map((cls) => (
                                    <SelectItem key={cls.id} value={cls.id} className="font-semibold text-blackDark">
                                        {cls.session}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-white/60 p-1.5 rounded-xl border border-gray-100">
                    <div className="flex flex-col px-3">
                        <label className="text-[10px] font-bold text-theme1 uppercase">From</label>
                        <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => onFromDateChange(e.target.value)}
                            className="bg-transparent text-sm font-semibold outline-none border-none text-blackDark cursor-pointer"
                        />
                    </div>
                    <div className="h-8 w-[1px] bg-gray-200"></div>
                    <div className="flex flex-col px-3">
                        <label className="text-[10px] font-bold text-theme1 uppercase">To</label>
                        <input
                            type="date"
                            value={toDate}
                            onChange={(e) => onToDateChange(e.target.value)}
                            className="bg-transparent text-sm font-semibold outline-none border-none text-blackDark cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        onClick={onRefresh}
                        className="bg-theme1 hover:bg-theme1/90 text-white rounded-xl px-4 font-bold shadow-lg shadow-theme1/20 transition-all active:scale-95"
                    >
                        <Filter size={18} className="mr-2" />
                        Update
                    </Button>

                    <Button
                        onClick={onPrint}
                        variant="outline"
                        className="border-gray-200 text-grayDark rounded-xl px-4 font-bold hover:bg-gray-50 transition-all active:scale-95"
                    >
                        Print
                    </Button>
                </div>
            </div>
        </div>
    );
}

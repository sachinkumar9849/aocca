"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoutineHeader from "@/components/routine/RoutineHeader";
import RoutineCard from "@/components/routine/RoutineCard";
import RoutineSkeleton from "@/components/routine/RoutineSkeleton";
import type { ApiResponse, CourseRoutine, ClassInfo, ClassesResponse, Slot } from "@/types/routine";
import { CalendarOff, Inbox, AlertCircle } from "lucide-react";

const API_URL = "https://api.aoc.edu.np/api/v1/routine/admin";
const CLASSES_API_URL = "https://api.aoc.edu.np/api/v1/classes";

export default function RoutinePage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ApiResponse | null>(null);
    const [classList, setClassList] = useState<ClassInfo[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [selectedClassId, setSelectedClassId] = useState<string>("all");
    const [fromDate, setFromDate] = useState("2026-04-01");
    const [toDate, setToDate] = useState("2026-04-30");
    const [error, setError] = useState<string | null>(null);

    const fetchClasses = async (courseType: string) => {
        if (!courseType) return;
        try {
            const response = await axios.get<ClassesResponse>(CLASSES_API_URL, {
                params: {
                    status: true,
                    type: courseType,
                },
            });
            setClassList(response.data.data);
            setSelectedClassId("all");
        } catch (err) {
            console.error("Error fetching classes:", err);
            toast.error("Failed to load classes for this program");
        }
    };

    const fetchRoutine = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<ApiResponse>(API_URL, {
                params: {
                    from: fromDate,
                    to: toDate,
                },
            });
            setData(response.data);

            const courses = Object.keys(response.data.data);
            if (courses.length > 0 && !selectedCourse) {
                setSelectedCourse(courses[0]);
            }
        } catch (err) {
            console.error("Error fetching routine:", err);
            setError("Failed to fetch routine. Please check your connection and try again.");
            toast.error("Failed to load routine");
        } finally {
            setLoading(false);
        }
    }, [fromDate, toDate, selectedCourse]);

    useEffect(() => {
        fetchRoutine();
    }, [fetchRoutine]);

    useEffect(() => {
        if (selectedCourse) {
            fetchClasses(selectedCourse);
        }
    }, [selectedCourse]);

    const courses = data ? Object.keys(data.data) : [];

    const renderRoutineContent = (courseRoutines: CourseRoutine[]) => {
        if (!courseRoutines || courseRoutines.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center py-20 text-grayDark bg-white/30 backdrop-blur-md rounded-3xl border border-dashed border-gray-300">
                    <Inbox size={48} className="mb-4 opacity-20" />
                    <p className="text-lg font-medium">No routine schedules found for this program.</p>
                </div>
            );
        }

        const filteredClasses =
            selectedClassId === "all"
                ? courseRoutines
                : courseRoutines.filter((c) => c.class_management_id === selectedClassId);

        if (filteredClasses.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center py-20 text-grayDark bg-white/30 backdrop-blur-md rounded-3xl border border-dashed border-gray-300">
                    <CalendarOff size={48} className="mb-4 opacity-20" />
                    <p className="text-lg font-medium">No routines found for the selected section.</p>
                </div>
            );
        }

        const allRoutinesByDate: Record<string, Slot[]> = {};
        filteredClasses.forEach((cls) => {
            cls.routines_by_date.forEach((day) => {
                if (!allRoutinesByDate[day.routine_date]) {
                    allRoutinesByDate[day.routine_date] = [];
                }
                allRoutinesByDate[day.routine_date].push(...day.slots);
            });
        });

        const sortedDates = Object.keys(allRoutinesByDate).sort(
            (a, b) => new Date(a).getTime() - new Date(b).getTime(),
        );

        const todayStr = new Date().toISOString().split("T")[0];

        return (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {sortedDates.map((dateStr) => {
                    const slots = allRoutinesByDate[dateStr];
                    const isToday = dateStr === todayStr;
                    return (
                        <div
                            key={dateStr}
                            className={`relative transition-all duration-500 ${isToday ? "ring-2 ring-theme1/20 rounded-3xl p-4 bg-theme1/5" : ""}`}
                        >
                            {isToday && (
                                <div className="absolute -top-3 left-6 z-20 rounded-full bg-theme1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                                    Today&apos;s Schedule
                                </div>
                            )}
                            <div className="sticky top-4 z-10 mb-6 flex items-center gap-4">
                                <div
                                    className={`${isToday ? "bg-theme2" : "bg-theme1"} min-w-[100px] rounded-xl px-4 py-2 text-center font-bold text-white shadow-lg transition-colors duration-500`}
                                >
                                    <span className="mb-1 block text-xs uppercase leading-none opacity-80">
                                        {new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" })}
                                    </span>
                                    <span className="text-xl">
                                        {new Date(dateStr).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "short",
                                        })}
                                    </span>
                                </div>
                                <div
                                    className={`h-[2px] flex-grow ${isToday ? "bg-gradient-to-r from-theme2/30 to-transparent" : "bg-gradient-to-r from-theme1/30 to-transparent"}`}
                                ></div>
                            </div>

                            <div className="ml-4 grid grid-cols-1 gap-6 md:ml-2 md:grid-cols-2 lg:grid-cols-3">
                                {slots
                                    .sort((a, b) => a.period_index - b.period_index)
                                    .map((slot) => (
                                        <RoutineCard key={slot.id} slot={slot} />
                                    ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20 print:bg-white print:pb-0">
            <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 print:px-0 print:pt-0">
                <div className="print:hidden">
                    <RoutineHeader
                        fromDate={fromDate}
                        toDate={toDate}
                        classes={classList}
                        selectedClassId={selectedClassId}
                        onFromDateChange={setFromDate}
                        onToDateChange={setToDate}
                        onClassChange={setSelectedClassId}
                        onRefresh={fetchRoutine}
                        onPrint={handlePrint}
                    />
                </div>

                <div className="mb-8 hidden border-b pb-4 print:block">
                    <h1 className="text-2xl font-bold">Academy of Commerce - Routine</h1>
                    <p className="text-sm text-gray-500">
                        {selectedCourse} | {fromDate} to {toDate}
                    </p>
                </div>

                {error && (
                    <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600">
                        <AlertCircle size={24} />
                        <div>
                            <p className="font-bold">Execution Error</p>
                            <p className="text-sm opacity-80">{error}</p>
                            <button
                                onClick={fetchRoutine}
                                className="mt-2 text-xs font-bold underline uppercase tracking-tight"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {loading ? (
                    <RoutineSkeleton />
                ) : data && courses.length > 0 ? (
                    <Tabs value={selectedCourse} onValueChange={setSelectedCourse} className="w-full">
                        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-4">
                            <TabsList className="bg-white/70 backdrop-blur-md p-1 rounded-2xl border border-gray-100 shadow-sm inline-flex h-auto">
                                {courses.map((course) => (
                                    <TabsTrigger
                                        key={course}
                                        value={course}
                                        className="px-6 py-3 rounded-xl font-bold text-grayDark data-[state=active]:bg-theme1 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                                    >
                                        {course}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {courses.map((course) => (
                            <TabsContent key={course} value={course} className="mt-0 outline-none">
                                {renderRoutineContent(data.data[course])}
                            </TabsContent>
                        ))}
                    </Tabs>
                ) : (
                    !loading && (
                        <div className="flex flex-col items-center justify-center py-32 text-grayDark">
                            <Inbox size={64} className="mb-6 opacity-10" />
                            <h3 className="text-2xl font-bold text-blackDark mb-2">No Routine Data</h3>
                            <p>We couldn&apos;t find any routine data for the selected range.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

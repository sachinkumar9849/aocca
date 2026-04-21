export interface Slot {
    id: string;
    period_index: number;
    subject_id: string;
    subject_code: string;
    subject_name: string;
    teacher_id: number;
    teacher_name: string;
    teacher_title: string;
}

export interface RoutineDate {
    routine_date: string;
    slots: Slot[];
}

export interface CourseRoutine {
    class_management_id: string;
    session: string;
    type: string;
    routines_by_date: RoutineDate[];
}

export interface ApiResponse {
    data: Record<string, CourseRoutine[]>;
    filter_from: string;
    filter_to: string;
}

export interface ClassInfo {
    id: string;
    session: string;
    type: string;
    status: boolean;
}

export interface ClassesResponse {
    data: ClassInfo[];
    meta: {
        page: number;
        page_size: number;
        total: number;
        total_pages: number;
    };
}

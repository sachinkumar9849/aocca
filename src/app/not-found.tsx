import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-[80vh] flex-col gap-2">
            <h2 className=" text-heading-4 text-error-200">Oops! This feature is on its way.</h2>
            <p className=" text-highlight-standard mb-2 text-error-200">
                The resource you’re looking for isn’t available yet or couldn’t be found.
            </p>
            <Link
                href="/"
                className=" text-primary-700 text-feature-standard border p-2 rounded-md bg-primary-500 text-white"
            >
                Return Home
            </Link>
        </div>
    );
}

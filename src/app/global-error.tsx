"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <html>
            <body>
                <div className=" flex justify-center items-center flex-col h-[80vh] gap-2">
                    <h2 className=" text-heading-4 text-error-100">Something went wrong!</h2>
                    <p className=" text-error-100">{error.message}</p>
                    <button
                        onClick={() => reset()}
                        className=" bg-primary-600 text-base-white rounded-full p-2 text-content-standard"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}

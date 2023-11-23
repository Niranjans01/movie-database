export function handleError(error: any, setError: (value: string) => void) {
    let errorMessage = 'An unexpected error occurred';

    if (error instanceof Error) {
        // If it's a standard Error object, use its message
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        // Direct string errors can be used as is
        errorMessage = error;
    } else if (error && typeof error === 'object') {
        // If it's an object, you can add more specific handling
        // For example, handling API response errors:
        errorMessage = error.message || JSON.stringify(error);
    }

    setError(errorMessage);
}
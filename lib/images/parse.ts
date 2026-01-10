const parseTake = (value: string | null, fallback: number) => {
    const n = Number(value ?? fallback);
    if (!Number.isFinite(n)) return fallback;
    return Math.min(Math.max(Math.floor(n), 1), 100);
}

const parseCursor = (value: string | null, fallback: number) => {
    if(!value) return 0;
    if (!/^\d+$/.test(value)) return 0;
    return Number(value);
}

export { parseTake, parseCursor }
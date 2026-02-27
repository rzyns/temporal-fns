import { addWorkingDays } from "./index.js";

describe("addWorkingDays", () => {
    it("adds working days skipping weekends", () => {
        const friday = Temporal.PlainDate.from("2024-01-12"); // Friday
        const result = addWorkingDays(friday, 1);
        expect(result.toString()).toBe("2024-01-15"); // Monday
    });

    it("adds multiple working days", () => {
        const monday = Temporal.PlainDate.from("2024-01-15"); // Monday
        const result = addWorkingDays(monday, 5);
        expect(result.toString()).toBe("2024-01-22"); // Next Monday
    });

    it("handles negative amounts", () => {
        const monday = Temporal.PlainDate.from("2024-01-15"); // Monday
        const result = addWorkingDays(monday, -1);
        expect(result.toString()).toBe("2024-01-12"); // Previous Friday
    });

    it("respects custom working days", () => {
        const friday = Temporal.PlainDate.from("2024-01-12"); // Friday
        // Working days: Mon-Thu + Sat (no Friday, no Sunday)
        const result = addWorkingDays(friday, 1, {
            workingDays: [1, 2, 3, 4, 6],
        });
        expect(result.toString()).toBe("2024-01-13"); // Saturday
    });

    it("handles zero amount", () => {
        const monday = Temporal.PlainDate.from("2024-01-15");
        const result = addWorkingDays(monday, 0);
        expect(result.toString()).toBe("2024-01-15");
    });
});

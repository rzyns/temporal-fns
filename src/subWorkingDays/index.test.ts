import { subWorkingDays } from "./index.js";

describe("subWorkingDays", () => {
    it("subtracts working days skipping weekends", () => {
        const monday = Temporal.PlainDate.from("2024-01-15"); // Monday
        const result = subWorkingDays(monday, 1);
        expect(result.toString()).toBe("2024-01-12"); // Friday
    });

    it("subtracts multiple working days", () => {
        const friday = Temporal.PlainDate.from("2024-01-19"); // Friday
        const result = subWorkingDays(friday, 5);
        expect(result.toString()).toBe("2024-01-12"); // Previous Friday
    });

    it("works with ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from("2024-01-15T10:00:00[UTC]"); // Monday
        const result = subWorkingDays(zdt, 1);
        expect(result.dayOfWeek).toBe(5); // Friday
    });
});

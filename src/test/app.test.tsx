import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App", () => {
  it("affiche la pratique Kryptos pour le Koweït", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /We test the system. You receive the flaws/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Kuwait/).length).toBeGreaterThan(0);
  });
});

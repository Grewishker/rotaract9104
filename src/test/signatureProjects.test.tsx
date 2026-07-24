import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SignatureProjectsPage from "../pages/SignatureProjectsPage";

describe("SignatureProjectsPage", () => {
  it("links each project card to a valid in-page section on the signature projects page", () => {
    render(
      <MemoryRouter>
        <SignatureProjectsPage />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));

    expect(hrefs).toContain("/projects/signature#free-health-outreach");
    expect(hrefs).toContain("/projects/signature#rotaract-reads");
  });
});

import { render, screen } from "@testing-library/react";
import { AboutQuoteCard } from "./components/About/AboutCard";

test("renders top quote card text", () => {
  render(<AboutQuoteCard />);
  expect(
    screen.getByText(/If you are learning something new every day/i)
  ).toBeInTheDocument();
});
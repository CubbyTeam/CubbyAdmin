import { render } from "@testing-library/react";
import Layout from "../components/layout";

describe("Components", () => {
  it("renders Layout", () => {
    render(<Layout>Hello</Layout>);
  });
});

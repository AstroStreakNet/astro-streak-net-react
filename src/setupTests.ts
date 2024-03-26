// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { scenarios } from "./__test__/mocks/handlers";
import { server } from "src/__test__/mocks/server";

beforeAll(() => server.listen());

// Default to success of all requests in tests.
// Failures can be forced by using server.use(...)
beforeEach(() => server.use(...scenarios.success));
afterEach(() => server.resetHandlers());

afterAll(() => server.close());

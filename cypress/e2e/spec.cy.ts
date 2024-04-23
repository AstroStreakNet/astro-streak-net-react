import * as images from "../../src/__test__/mocks/image-lists/images.json";
import { violationLogger } from "../axe/violationLogger";

const BASE_URL = Cypress.env().baseUrl;
const NODE_API_URL = `${Cypress.env().apiEndPointUrl}/images/`;

const CONFIG = Cypress.env().config;
const isLocal = CONFIG === "LOCAL";

describe("home page", () => {
  it("loads the home page", () => {
    mockListSuccessOnLocal();
    mockInfoSuccessOnLocal();
    visit();
    getBlurb().should("exist");
  });

  it("has no detectable a11y violations on image list", () => {
    cy.checkA11y(null, null, violationLogger);
  });

  it("routes to image info page when poster is clicked", () => {
    const movieTile = cy.get('[data-testid="image1"]');
    movieTile.click();

    cy.url().should("equal", `${BASE_URL}/image/1`);
    getBlurb().should("not.exist");
  });

  it("has no detectable a11y violations on image info page", () => {
    cy.checkA11y(null, null, violationLogger);
  });

  it("routes back to home page when title is clicked", () => {
    clickHome();
    getBlurb().should("exist");

    cy.url().should("equal", `${BASE_URL}/`);
  });

  if (isLocal) {
    it("fails on homepage, works when click home and network success", () => {
      mockListFailOnLocal();
      visit();
      cy.get('[data-testid="error-message"]').should("exist");
      cy.checkA11y('[data-testid="error-message"]', null, violationLogger);
      clickHome();
      mockListSuccessOnLocal();
      getBlurb().should("exist");
    });
  }

  it("renders the list, shows the image info, then back to list - even with retry", () => {
    mockListFailOncePassOnceOnLocal();
    mockInfoFailOncePassOnceOnLocal();
    visit();

    getBlurb().should("exist");

    const movieTile = cy.get('[data-testid="image1"]');
    movieTile.click();

    cy.url().should("equal", `${BASE_URL}/image/1`);
    getBlurb().should("not.exist");

    clickHome();
    mockListSuccessOnLocal();
    getBlurb().should("exist");

    cy.url().should("equal", `${BASE_URL}/`);
  });
});

describe("not found page", () => {
  it("shows not found when an unknown route", async () => {
    mockListSuccessOnLocal();
    visit("unknownroute");

    cy.get('[data-testid="not-found"]').should("exist");

    clickHome();
    getBlurb().should("exist");
  });
  it("has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, violationLogger);
  });
});

describe("image info page", () => {
  it("should render a image if we go direct to the url", () => {
    mockInfoSuccessOnLocal();
    visit("image/1");
    clickHome();
    getBlurb().should("exist");
  });
  it("has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, violationLogger);
  });
});

const visit = (path = "") => {
  cy.visit(`${BASE_URL}/${path}`);
  cy.injectAxe();
};

function mockListSuccessOnLocal() {
  if (isLocal) {
    cy.intercept("GET", NODE_API_URL, images);
  }
}

function mockListFailOnLocal() {
  if (isLocal) {
    cy.intercept("GET", NODE_API_URL, errorStaticResponse);
  }
}

function mockListFailOncePassOnceOnLocal() {
  if (isLocal) {
    cy.intercept(
      NODE_API_URL,
      {
        method: "GET",
        times: 1,
      },
      images
    );
    cy.intercept(
      NODE_API_URL,
      {
        method: "GET",
        times: 1,
      },
      errorStaticResponse
    );
  }
}

function mockInfoFailOncePassOnceOnLocal() {
  if (isLocal) {
    cy.intercept(
      NODE_API_URL,
      {
        method: "GET",
        times: 1,
      },
      images
    );
    cy.intercept(
      NODE_API_URL,
      {
        method: "GET",
        times: 1,
      },
      errorStaticResponse
    );
    cy.intercept("GET", NODE_API_URL, images);
  }
}

function mockInfoSuccessOnLocal() {
  if (isLocal) {
    cy.intercept("GET", NODE_API_URL, images);
  }
}

const errorStaticResponse = {
  statusCode: 502,
  body: { message: "Bad Request" },
};

function clickHome() {
  const homeLink = cy.get('[data-testid="home-link"]');
  homeLink.click();
}
const getBlurb = () => cy.get("p").contains(/Placeholder Read Me/i);

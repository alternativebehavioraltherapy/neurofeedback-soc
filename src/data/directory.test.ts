import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  BASE_SPECIALTIES,
  FORM_RESPONSES_GID,
  SHEET_CSV_URL,
  parseProviders,
  rankByZip,
  specialtyOptions,
} from "./directory.ts";

const CSV = [
  "id,status,display_name,credentials,business,city,state,zip,address,phone,email,website,specialties,short_bio,updated,lat,lng",
  'a,published,Zoe Alpha,BCN,Alpha Studio,Portland,OR,97201,1 Main,503-555-0100,zoe@example.com,https://alpha.example,"Infra Low, Remote",Works with adults.,2026-01-01,45.5,-122.6',
  "b,draft,Hidden Person,BCN,Hidden,Seattle,WA,98101,2 Pine,206-555-0101,h@example.com,https://hidden.example,LENS,Should not appear.,2026-01-02,47,-122",
  "c,Published,Amy Beta,,Beta Lab,Vancouver,WA,98683,3 Oak,360-555-0102,amy@example.com,beta.example,Custom Method,Short note.,2026-01-03,,",
  "d,published,,BCN,No Name,Boise,ID,83702,4 Elm,208-555-0103,noname@example.com,https://no.example,LENS,Skipped.,2026-01-04,,",
  "e,published,No Zip,BCN,Far,Boise,ID,,5 Elm,208-555-0104,far@example.com,,LENS,No postal code.,2026-01-05,,",
].join("\n");

describe("directory sheet", () => {
  it("keeps published rows with a name and ignores coordinates", () => {
    const providers = parseProviders(CSV);
    assert.deepEqual(
      providers.map((provider) => provider.displayName),
      ["Amy Beta", "No Zip", "Zoe Alpha"],
    );
    assert.equal("lat" in providers[0], false);
    assert.equal(providers[0]?.zip, "98683");
    assert.equal(providers[2]?.specialties.includes("Infra-Low"), true);
    assert.equal(providers[2]?.specialties.includes("Remote"), true);
    assert.equal(providers[1]?.zip, "");
  });

  it("appends specialties that are not in the controlled list", () => {
    const options = specialtyOptions(parseProviders(CSV));
    assert.equal(options[0], BASE_SPECIALTIES[0]);
    assert.equal(options.includes("Custom Method"), true);
    assert.equal(options.filter((item) => item === "Infra-Low").length, 1);
  });

  it("sorts by ZIP center and leaves an unknown ZIP alphabetical", () => {
    const providers = parseProviders(CSV);
    const nearPortland = rankByZip(providers, "97201");
    assert.equal(nearPortland.outsideTable, false);
    assert.equal(nearPortland.ranked[0]?.provider.displayName, "Zoe Alpha");
    assert.ok((nearPortland.ranked[0]?.miles ?? 99) < 1);
    assert.equal(nearPortland.ranked.at(-1)?.provider.displayName, "No Zip");
    assert.equal(nearPortland.ranked.at(-1)?.miles, null);

    const outside = rankByZip(providers, "10001");
    assert.equal(outside.outsideTable, true);
    assert.deepEqual(
      outside.ranked.map((row) => row.provider.displayName),
      ["Amy Beta", "No Zip", "Zoe Alpha"],
    );
    assert.ok(outside.ranked.every((row) => row.miles == null));
  });

  it("lists every named Form Responses row and ignores the account email", () => {
    const csv = [
      "Timestamp,Email Address,Have you completed the Neurofeedback Standards of Practice Agreement form?,Display Name,Credentials,Business Name,City,State,ZIP,Street address,Phone,Email,Website,Specialties,Short bio",
      '11/21/2026 22:15:43,account@gmail.com,I have completed the Neurofeedback Standards of Practice Agreement form.,Neurofeedback for All,MA,Neurofeedback for All,Vancouver,Washington,98683,3000 SE 164TH AVE,360-553-1350,joshua.moore@altbehtherapy.com,www.neurofeedbackforall.com,Remote,Test bio',
      ",,I agree.,,BCN,No Name Clinic,Portland,OR,97201,1 Main,503-555-0100,skip@example.com,https://skip.example,LENS,No display name",
    ].join("\n");
    const providers = parseProviders(csv);
    assert.equal(providers.length, 1);
    const row = providers[0];
    assert.equal(row?.id, "neurofeedback-for-all-98683");
    assert.equal(row?.displayName, "Neurofeedback for All");
    assert.equal(row?.business, "Neurofeedback for All");
    assert.equal(row?.address, "3000 SE 164TH AVE");
    assert.equal(row?.email, "joshua.moore@altbehtherapy.com");
    assert.equal(row?.updated, "11/21/2026 22:15:43");
    assert.deepEqual(row?.specialties, ["Remote"]);
    assert.equal(SHEET_CSV_URL.includes(`gid=${FORM_RESPONSES_GID}`), true);
  });
});

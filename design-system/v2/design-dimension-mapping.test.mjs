import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("./", import.meta.url);
const readJson = async (path) => JSON.parse(await readFile(new URL(path, root), "utf8"));
const mapping = await readJson("./design-dimension-mapping.json");
const schema = await readJson("./design-dimension-mapping.schema.json");
const catalog = await readJson("./catalog.json");
const domains = await readJson("./domains.json");

const canonicalIds = [
  "style", "theme", "color", "typography", "spacing", "radius", "border",
  "background", "surface", "shadow", "effects", "imagery", "icons", "layout",
  "navigation", "density", "components", "visualization", "interaction", "motion"
];

test("mapping covers exactly the stable 20 canonical dimension IDs", () => {
  assert.deepEqual(Object.keys(mapping.dimensions).sort(), [...canonicalIds].sort());
  assert.deepEqual(mapping.compatibility.canonicalDimensionIds, canonicalIds);
  assert.deepEqual(catalog.dimensions.map((item) => item.id).sort(), [...canonicalIds].sort());
});

test("every dimension has one primary chapter included in its chapter references", () => {
  for (const [dimensionId, entry] of Object.entries(mapping.dimensions)) {
    assert.match(entry.primaryChapter, /^(0[1-9]|1[0-6])$/);
    assert.ok(entry.chapters.includes(entry.primaryChapter), dimensionId + " primary chapter must be referenced");
    for (const chapter of entry.chapters) assert.match(chapter, /^(0[1-9]|1[0-6])$/);
  }
});

test("Extended mapping defines the 16 ordered canonical chapters", () => {
  assert.equal(mapping.extendedChapters.length, 16);
  assert.deepEqual(mapping.extendedChapters.map((chapter) => chapter.id),
    Array.from({ length: 16 }, (_, index) => String(index + 1).padStart(2, "0")));
  for (const chapter of mapping.extendedChapters) {
    for (const dimension of chapter.dimensions) assert.ok(canonicalIds.includes(dimension), chapter.id + " references unknown dimension " + dimension);
  }
});

test("Core mapping defines exactly nine semantic domains", () => {
  assert.equal(mapping.coreDomains.length, 9);
  for (const domain of mapping.coreDomains) {
    for (const dimension of [...domain.dimensions, ...domain.primaryDimensions]) {
      assert.ok(canonicalIds.includes(dimension), domain.id + " references unknown dimension " + dimension);
    }
    for (const chapter of domain.chapters) assert.ok(mapping.extendedChapters.some((item) => item.id === chapter));
  }
});

test("12 navigation domains cover every canonical dimension exactly once", () => {
  const flattened = domains.domains.flatMap((domain) => domain.dimensions);
  assert.equal(domains.domains.length, 12);
  assert.equal(flattened.length, 20);
  assert.deepEqual([...flattened].sort(), [...canonicalIds].sort());
  for (const [dimensionId, entry] of Object.entries(mapping.dimensions)) {
    assert.deepEqual(entry.domains, domains.domains.filter((domain) => domain.dimensions.includes(dimensionId)).map((domain) => domain.id));
  }
});

test("extensions and cross-cutting rules do not create new dimensions", () => {
  for (const extension of mapping.extensions) {
    for (const dimension of extension.dimensions) assert.ok(canonicalIds.includes(dimension));
    for (const chapter of extension.chapters) assert.ok(mapping.extendedChapters.some((item) => item.id === chapter));
  }
  for (const rule of mapping.crossCuttingRules) {
    assert.equal(rule.ownsTokens, false);
    for (const dimension of rule.appliesTo) assert.ok(canonicalIds.includes(dimension));
  }
});

test("mapping metadata is compatible with the declared JSON Schema", () => {
  assert.equal(schema.properties.schemaVersion.const, mapping.schemaVersion);
  assert.equal(schema.properties.dimensions.minProperties, 20);
  assert.equal(schema.properties.dimensions.maxProperties, 20);
  assert.equal(schema.properties.extendedChapters.minItems, 16);
  assert.equal(schema.properties.coreDomains.minItems, 9);
});

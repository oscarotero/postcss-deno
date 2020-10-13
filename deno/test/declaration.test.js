import { expect, it, mock } from "./deps.js";
import { Declaration, parse, Rule } from "../mod.js";
it("initializes with properties", () => {
  let decl = new Declaration({ prop: "color", value: "black" });
  expect(decl.prop).toEqual("color");
  expect(decl.value).toEqual("black");
});
it("returns boolean important", () => {
  let decl = new Declaration({ prop: "color", value: "black" });
  decl.important = true;
  expect(decl.toString()).toEqual("color: black !important");
});
it("inserts default spaces", () => {
  let decl = new Declaration({ prop: "color", value: "black" });
  let rule = new Rule({ selector: "a" });
  rule.append(decl);
  expect(rule.toString()).toEqual("a {\n    color: black\n}");
});
it("clones spaces from another declaration", () => {
  let root = parse("a{color:black}");
  let rule = root.first;
  let decl = new Declaration({ prop: "margin", value: "0" });
  rule.append(decl);
  expect(root.toString()).toEqual("a{color:black;margin:0}");
});
it("converts value to string", () => {
  let decl = new Declaration({ prop: "color", value: 1 });
  expect(decl.value).toEqual("1");
});
it("detects variable declarations", () => {
  let prop = new Declaration({ prop: "--color", value: "black" });
  expect(prop.variable).toBe(true);
  let sass = new Declaration({ prop: "$color", value: "black" });
  expect(sass.variable).toBe(true);
  let decl = new Declaration({ prop: "color", value: "black" });
  expect(decl.variable).toBe(false);
});

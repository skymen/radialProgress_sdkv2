import { action, condition, expression } from "../template/aceDefine.js";
import camelCasify from "../build/camelCasify.js";

const general = "general";

[
  "resolution",
  "circular",
  "inner-radius-x",
  "inner-radius-y",
  "outer-radius-x",
  "outer-radius-y",
  "value",
  "maximum",
  "inverted",
].forEach((id) => {
  let camelCasedId = camelCasify(id);
  let pascalCasedId = camelCasedId[0].toUpperCase() + camelCasedId.slice(1);
  let id2 = id.replace("-", "");
  let camelCasedId2 = camelCasify(id.replace("-", ""));
  let pascalCasedId2 = camelCasedId2[0].toUpperCase() + camelCasedId2.slice(1);
  let textId = id.replace(/-/g, " ");
  let isBoolean = id === "inverted" || id === "circular";
  action(
    general,
    `Set${pascalCasedId2}`,
    {
      highlight: false,
      deprecated: false,
      id: `set-${id2}`,
      isAsync: false,
      listName: `Set ${textId}`,
      displayText: `{my}: Set ${textId} to {0}`,
      description: `Set the ${textId}`,
      params: [
        {
          id: ["resolution", "inverted", "circular"].includes(id)
            ? id
            : id.includes("-")
            ? "radius"
            : "value",
          name: pascalCasedId,
          desc: textId,
          type: isBoolean ? "boolean" : "number",
          initialValue: isBoolean ? "false" : "0",
        },
      ],
    },
    new Function("param", `this.setValue("${camelCasedId}", param);`),
    false
  );

  expression(
    general,
    isBoolean ? `Is${pascalCasedId}` : pascalCasedId,
    {
      highlight: false,
      id: id === "resolution" || id === "circular" ? `get-${id}` : id,
      deprecated: false,
      returnType: "number",
      description: `Get the ${textId}`,
      params: [],
    },
    isBoolean
      ? new Function(`return this["${camelCasedId}"]? 1 : 0;`)
      : new Function(`return this["${camelCasedId}"];`),
    false
  );
});

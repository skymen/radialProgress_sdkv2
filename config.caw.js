import {
  ADDON_CATEGORY,
  ADDON_TYPE,
  PLUGIN_TYPE,
  PROPERTY_TYPE,
} from "./template/enums.js";
import _version from "./version.js";
export const addonType = ADDON_TYPE.BEHAVIOR;
export const type = PLUGIN_TYPE.OBJECT;
export const id = "skymen_RadialProgress";
export const name = "Radial Progress";
export const version = _version;
export const author = "skymen";
export const website = "https://www.construct.net";
export const documentation = "https://www.construct.net";
export const description =
  "Makes a sprite or tiled background behave as a radial progress bar";
export const category = ADDON_CATEGORY.GENERAL;

export const hasDomside = false;
export const files = {
  extensionScript: {},
  fileDependencies: [],
};

// categories that are not filled will use the folder name
export const aceCategories = {};

export const info = {
  // icon: "icon.svg",
  // PLUGIN world only
  // defaultImageUrl: "default-image.png",
  Set: {
    // COMMON to all
    CanBeBundled: true,
    IsDeprecated: false,
    GooglePlayServicesEnabled: false,

    // BEHAVIOR only
    IsOnlyOneAllowed: true,

    // PLUGIN world only
    IsResizable: false,
    IsRotatable: false,
    Is3D: false,
    HasImage: false,
    IsTiled: false,
    SupportsZElevation: false,
    SupportsColor: false,
    SupportsEffects: false,
    MustPreDraw: false,

    // PLUGIN object only
    IsSingleGlobal: true,
  },
  // PLUGIN only
  AddCommonACEs: {
    Position: false,
    SceneGraph: false,
    Size: false,
    Angle: false,
    Appearance: false,
    ZOrder: false,
  },
};

export const properties = [
  /*
  {
    type: PROPERTY_TYPE.INTEGER,
    id: "property_id",
    options: {
      initialValue: 0,
      interpolatable: false,

      // minValue: 0, // omit to disable
      // maxValue: 100, // omit to disable

      // for type combo only
      // items: [
      //   {itemId1: "item name1" },
      //   {itemId2: "item name2" },
      // ],

      // dragSpeedMultiplier: 1, // omit to disable

      // for type object only
      // allowedPluginIds: ["Sprite", "<world>"],

      // for type link only
      // linkCallback: function(instOrObj) {},
      // linkText: "Link Text",
      // callbackType:
      //   "for-each-instance"
      //   "once-for-type"

      // for type info only
      // infoCallback: function(inst) {},
    },
    name: "Property Name",
    desc: "Property Description",
  }
  */
  {
    type: PROPERTY_TYPE.INTEGER,
    id: "resolution",
    options: {
      initialValue: 50,
      interpolatable: false,
    },
    name: "Resolution",
    desc: "The number of segments to use to draw the radial progress",
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "circular",
    options: {
      initialValue: true,
      interpolatable: false,
    },
    name: "Circular",
    desc: "If set, the progress will be drawn as a circle",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "innerRadiusX",
    options: {
      initialValue: 50,
      interpolatable: false,
    },
    name: "Inner Radius X",
    desc: "The X radius of the inner circle",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "innerRadiusY",
    options: {
      initialValue: 50,
      interpolatable: false,
    },
    name: "Inner Radius Y",
    desc: "The Y radius of the inner circle",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "outerRadiusX",
    options: {
      initialValue: 70,
      interpolatable: false,
    },
    name: "Outer Radius X",
    desc: "The X radius of the outer circle",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "outerRadiusY",
    options: {
      initialValue: 70,
      interpolatable: false,
    },
    name: "Outer Radius Y",
    desc: "The Y radius of the outer circle",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "value",
    options: {
      initialValue: 50,
      interpolatable: false,
    },
    name: "Value",
    desc: "The current progress value",
  },
  {
    type: PROPERTY_TYPE.FLOAT,
    id: "maximum",
    options: {
      initialValue: 100,
      interpolatable: false,
    },
    name: "Maximum",
    desc: "The maximum progress value",
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "inverted",
    options: {
      initialValue: false,
      interpolatable: false,
    },
    name: "Inverted",
    desc: "If set, the progress will be inverted",
  },
];

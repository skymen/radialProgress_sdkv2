import { id } from "../../config.caw.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      this.needsRedraw = true;

      if (properties) {
        [
          this["resolution"], //int
          this["circular"], //bool
          this["innerRadiusX"], //float
          this["innerRadiusY"], //float
          this["outerRadiusX"], //float
          this["outerRadiusY"], //float
          this["value"], //float
          this["maximum"], //float
          this["inverted"], //bool
        ] = properties;
      }

      this._setTicking(true);
    }

    _trigger(method) {
      super._trigger(self.C3.Plugins[id].Cnds[method]);
    }

    _release() {
      super._release();
    }

    _tick() {
      const dt = this.instance.dt;
      const inst = this.instance;

      let maximum = this["maximum"];
      let progress = this["value"];
      let inverted = this["inverted"];
      let resolution = this["resolution"];
      let innerRadiusX = this["innerRadiusX"];
      let innerRadiusY = this["circular"] ? innerRadiusX : this["innerRadiusY"];
      let outerRadiusX = this["outerRadiusX"];
      let outerRadiusY = this["circular"] ? outerRadiusX : this["outerRadiusY"];

      //indeterminate
      if (maximum <= 0) {
        if (!this.lastAngle) this.lastAngle = inst.angle;
        this.needsRedraw = true;
        inst.angle += C3.toRadians(180 * dt);
        progress = 0.1;
        maximum = 1;
      } else if (this.lastAngle) {
        inst.angle = this.lastAngle;
        this.lastAngle = null;
      }

      if (!this.needsRedraw) return;

      let meshSize = inst.getMeshSize();
      const needsMeshUpdate =
        meshSize[0] === 0 || (meshSize[0] !== resolution && resolution > 2);
      if (needsMeshUpdate) {
        inst.createMesh(resolution, 2);
      }

      innerRadiusX = Math.min(innerRadiusX, outerRadiusX);
      innerRadiusY = Math.min(innerRadiusY, outerRadiusY);
      progress = Math.min(Math.max(0, progress), maximum);

      const spriteAngle = inst.angle;
      const startAngle = C3.toDegrees(spriteAngle);
      const endAngle =
        (360 * progress * (inverted ? -1 : 1)) / maximum + startAngle;
      const step = (endAngle - startAngle) / (resolution - 1);

      const width = inst.width;
      const height = inst.height;

      for (let i = 0; i < resolution; i++) {
        let curAngle = C3.toRadians(startAngle + step * i);
        inst.setMeshPoint(i, 0, {
          x: 0.5 + (outerRadiusX * Math.cos(-curAngle + spriteAngle)) / width,
          y: 0.5 + (outerRadiusY * Math.sin(-curAngle + spriteAngle)) / height,
        });
        inst.setMeshPoint(i, 1, {
          x: 0.5 + (innerRadiusX * Math.cos(-curAngle + spriteAngle)) / width,
          y: 0.5 + (innerRadiusY * Math.sin(-curAngle + spriteAngle)) / height,
        });
      }

      this.needsRedraw = false;
    }

    _saveToJson() {
      let keys = [
        "resolution", //int
        "circular", //bool
        "innerRadiusX", //float
        "innerRadiusY", //float
        "outerRadiusX", //float
        "outerRadiusY", //float
        "value", //float
        "maximum", //float
        "inverted", //bool
      ];

      let ret = {};
      keys.forEach((key) => {
        ret[key] = this[key];
      });
      return ret;
    }

    _loadFromJson(o) {
      Object.keys(o).forEach((key) => {
        this[key] = o[key];
      });
    }

    _getDebuggerProperties() {
      let props = this._saveToJson();
      let propertiesArr = [];
      Object.keys(props).forEach((prop) => {
        propertiesArr.push({
          name: prop[0].toUpperCase() + prop.slice(1),
          value: this[prop],
          onedit: (v) => this.setValue(prop, v),
        });
      });
      return [
        {
          title: "RadialProgress",
          properties: propertiesArr,
        },
      ];
    }

    setValue(name, val) {
      if (this[name] === val) return;
      this.needsRedraw = true;
      this[name] = val;
    }
  };
}

<img src="./examples/cover.png" width="150" /><br>
# Radial Progress
<i>Makes a sprite or tiled background behave as a radial progress bar</i> <br>
### Version 2.0.0.0

[<img src="https://placehold.co/200x50/4493f8/FFF?text=Download&font=montserrat" width="200"/>](https://github.com/skymen/radialProgress_sdkv2/releases/download/skymen_RadialProgress-2.0.0.0.c3addon/skymen_RadialProgress-2.0.0.0.c3addon)
<br>
<sub> [See all releases](https://github.com/skymen/radialProgress_sdkv2/releases) </sub> <br>

---
<b><u>Author:</u></b> skymen <br>
<b>[Construct Addon Page](https://www.construct.net/en/make-games/addons/559/radial-progress)</b>  <br>
<b>[Documentation](https://www.construct.net/en/make-games/addons/559/radial-progress/documentation)</b>  <br>
<sub>Made using [CAW](https://marketplace.visualstudio.com/items?itemName=skymen.caw) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
npm run build
```

To run the dev server, run

```
npm i
npm run dev
```

## Examples Files
| Description | Download |
| --- | --- |
| Full Control | [<img src="https://placehold.co/150x30/4493f8/FFF?text=Download&font=montserrat" width="150"/>](https://github.com/skymen/radialProgress_sdkv2/raw/refs/heads/main/examples/Full%20Control.c3p) |
| Simple Progress Bar | [<img src="https://placehold.co/150x30/4493f8/FFF?text=Download&font=montserrat" width="150"/>](https://github.com/skymen/radialProgress_sdkv2/raw/refs/heads/main/examples/Simple%20Progress%20Bar.c3p) |

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |
| Resolution | The number of segments to use to draw the radial progress | integer |
| Circular | If set, the progress will be drawn as a circle | check |
| Inner Radius X | The X radius of the inner circle | float |
| Inner Radius Y | The Y radius of the inner circle | float |
| Outer Radius X | The X radius of the outer circle | float |
| Outer Radius Y | The Y radius of the outer circle | float |
| Value | The current progress value | float |
| Maximum | The maximum progress value | float |
| Inverted | If set, the progress will be inverted | check |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Set circular | Set the circular | Circular             *(boolean)* <br> |
| Set inner radius x | Set the inner radius x | InnerRadiusX             *(number)* <br> |
| Set inner radius y | Set the inner radius y | InnerRadiusY             *(number)* <br> |
| Set inverted | Set the inverted | Inverted             *(boolean)* <br> |
| Set maximum | Set the maximum | Maximum             *(number)* <br> |
| Set outer radius x | Set the outer radius x | OuterRadiusX             *(number)* <br> |
| Set outer radius y | Set the outer radius y | OuterRadiusY             *(number)* <br> |
| Set resolution | Set the resolution | Resolution             *(number)* <br> |
| Set value | Set the value | Value             *(number)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| InnerRadiusX | Get the inner radius x | number |  | 
| InnerRadiusY | Get the inner radius y | number |  | 
| IsCircular | Get the circular | number |  | 
| IsInverted | Get the inverted | number |  | 
| Maximum | Get the maximum | number |  | 
| OuterRadiusX | Get the outer radius x | number |  | 
| OuterRadiusY | Get the outer radius y | number |  | 
| Resolution | Get the resolution | number |  | 
| Value | Get the value | number |  | 

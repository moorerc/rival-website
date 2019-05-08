import * as React from "react";
import "../styles/App.css";
import "../styles/CoreValues.css";

import { isMobile } from "react-device-detect";
import * as classNames from "classnames";

export default class CoreValues extends React.Component {
  render() {
    return (
      <div
        className={classNames("rival-website-page rival-home-page", {
          "-mobile": isMobile
        })}
      >
        some stuff
      </div>
    );
  }
}

/*
var canvas = null;
var context = null;

var canvasWidth = 500;
var canvasHeight = 500;
var canvasX = 0;
var canvasY = 0;

var triangleSize = 115;

var canvasCenter = {
  x: (canvasX + canvasWidth) / 2,
  y: (canvasY + canvasHeight) / 2
};

console.log(canvasCenter);

var pointACenter = {
  x: canvasCenter.x,
  y:
    canvasCenter.y -
    Math.sqrt(
      triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
    ) /
      2
};

var pointBCenter = {
  x: canvasCenter.x - triangleSize / 2,
  y:
    canvasCenter.y +
    Math.sqrt(
      triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
    ) /
      2
};

var pointCCenter = {
  x: canvasCenter.x + triangleSize / 2,
  y:
    canvasCenter.y +
    Math.sqrt(
      triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
    ) /
      2
};

var brainVal = 10;
var effortVal = 10;
var skillVal = 10;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  drawTriangle();
  drawBrainCircle();
  updateTriangleSize(50);
};

function drawTriangle() {
  var triangle = new Path2D();
  triangle.moveTo(pointACenter.x, pointACenter.y);
  triangle.lineTo(pointCCenter.x, pointCCenter.y);
  triangle.lineTo(pointBCenter.x, pointBCenter.y);
  triangle.lineTo(pointACenter.x, pointACenter.y);
  context.strokeStyle = "rgba(34, 93, 57, 1.0)";
  context.stroke(triangle);
}

function updateBrainVal(newBrainVal) {
  brainVal = newBrainVal;
  drawBrainCircle();
}

function updateEffortVal(newEffortVal) {
  effortVal = newEffortVal;
  drawBrainCircle();
}

function updateSkillVal(newSkillVal) {
  skillVal = newSkillVal;
  drawBrainCircle();
}

function updateTriangleSize(newTriangleSize) {
  console.log(newTriangleSize);

  triangleSize = -1 * (newTriangleSize - 100) + 100;

  pointACenter = {
    x: canvasCenter.x,
    y:
      canvasCenter.y -
      Math.sqrt(
        triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
      ) /
        2
  };

  pointBCenter = {
    x: canvasCenter.x - triangleSize / 2,
    y:
      canvasCenter.y +
      Math.sqrt(
        triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
      ) /
        2
  };

  pointCCenter = {
    x: canvasCenter.x + triangleSize / 2,
    y:
      canvasCenter.y +
      Math.sqrt(
        triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
      ) /
        2
  };

  drawBrainCircle();
}

function drawBrainCircle() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.lineWidth = 2;
  drawTriangle();
  context.lineWidth = 1;
  document.getElementById("triangleVal").innerHTML =
    -1 * (triangleSize - 100) + 100;

  var brainCircle = new Path2D();
  context.fillStyle = "rgba(0, 61, 167, 0.3)";
  context.strokeStyle = "rgba(0, 61, 167, 1.0)";
  brainCircle.arc(
    pointBCenter.x,
    pointBCenter.y,
    brainVal,
    0,
    Math.PI * 2,
    true
  );
  context.fill(brainCircle);
  context.stroke(brainCircle);
  document.getElementById("brainVal").innerHTML = brainVal;

  var effortCircle = new Path2D();
  context.fillStyle = "rgba(181, 127, 0, 0.3)";
  context.strokeStyle = "rgba(181, 127, 0, 1.0)";
  effortCircle.arc(
    pointACenter.x,
    pointACenter.y,
    effortVal,
    0,
    Math.PI * 2,
    true
  );
  context.fill(effortCircle);
  context.stroke(effortCircle);
  document.getElementById("effortVal").innerHTML = effortVal;

  var skillCircle = new Path2D();
  context.fillStyle = "rgba(121, 36, 47, 0.3)";
  context.strokeStyle = "rgba(121, 36, 47, 1.0)";
  skillCircle.arc(
    pointCCenter.x,
    pointCCenter.y,
    skillVal,
    0,
    Math.PI * 2,
    true
  );
  context.fill(skillCircle);
  context.stroke(skillCircle);
  document.getElementById("skillVal").innerHTML = skillVal;
}

function saveImage() {
  var img = canvas.toDataURL("image/png");
  document.write('<img src="' + img + '"/>');
}



*/

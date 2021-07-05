import * as React from "react";
import "../styles/App.css";
import "../styles/CoreValues.css";

import { isMobileOnly } from "react-device-detect";
import classNames from "classnames";
import { Slider } from "@blueprintjs/core";

export namespace CoreValues {
  export interface State {
    brainValue: number;
    effortValue: number;
    skillValue: number;
    characterValue: number;
    triangleSize: number;
  }
}

const CANVAS_WIDTH = isMobileOnly ? 350 : 500;
const CANVAS_HEIGHT = isMobileOnly ? 350 : 500;
const CANVAS_X = 0;
const CANVAS_Y = 0;

const CANVAS_CENETR = {
  x: (CANVAS_X + CANVAS_WIDTH) / 2,
  y: (CANVAS_Y + CANVAS_HEIGHT) / 2
};

const INITIAL_CIRCLE_VAL = 50;
const INITIAL_TRIANGLE_VAL = 50;

export default class CoreValues extends React.Component<CoreValues.State> {
  state: CoreValues.State = {
    brainValue: INITIAL_CIRCLE_VAL,
    effortValue: INITIAL_CIRCLE_VAL,
    skillValue: INITIAL_CIRCLE_VAL,
    characterValue: INITIAL_TRIANGLE_VAL,
    triangleSize: -1 * (INITIAL_TRIANGLE_VAL - 100) + 100
  };

  private canvasRef = React.createRef<HTMLCanvasElement>();

  public componentDidMount() {
    this.updateTriangle();
  }

  render() {
    const { brainValue, characterValue, skillValue, effortValue } = this.state;
    return (
      <div
        className={classNames("rival-website-page rival-core-values-page", {
          "-mobile": isMobileOnly
        })}
      >
        <img className="page-title" src="img/core-values/CoreValuesTitle.png" />
        <canvas
          ref={this.canvasRef}
          id="values-canvas"
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
        />
        <div className="values-controls" id="inputSet">
          {this.renderInputControl(
            "Brain",
            "img/core-values/icon_brain.png",
            brainValue,
            this.handleBrainValueChange
          )}
          {this.renderInputControl(
            "Effort",
            "img/core-values/icon_effort.png",
            effortValue,
            this.handleEffortValueChange
          )}
          {this.renderInputControl(
            "Skill",
            "img/core-values/icon_skill.png",
            skillValue,
            this.handleSkillValueChange
          )}
          {this.renderInputControl(
            "Character",
            "img/core-values/icon_character.png",
            characterValue,
            this.handleCharacterValueChange
          )}
        </div>
      </div>
    );
  }

  private renderInputControl = (
    name: string,
    icon: string,
    value: number,
    onChange: (num: number) => void
  ) => {
    return (
      <div className="input-control">
        <div className="input-icon">
          <img src={icon} />
        </div>
        <div className="input-name" id="nameBrain">
          {name}
        </div>
        <Slider
          className={classNames("input-slider", name.toLowerCase())}
          min={0}
          max={100}
          stepSize={1}
          value={value}
          labelRenderer={false}
          onChange={onChange}
        />
        <div className="input-value">{value}</div>
      </div>
    );
  };

  private handleBrainValueChange = (brainValue: number) => {
    this.setState({ brainValue });
    this.updateCircles();
  };

  private handleEffortValueChange = (effortValue: number) => {
    this.setState({ effortValue });
    this.updateCircles();
  };

  private handleSkillValueChange = (skillValue: number) => {
    this.setState({ skillValue });
    this.updateCircles();
  };

  private handleCharacterValueChange = (characterValue: number) => {
    this.setState({ characterValue });
    this.updateTriangle();
  };

  private updateCircles = () => {
    const canvas = this.canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        this.drawCircles(context);
      }
    }
  };

  private updateTriangle = () => {
    const canvas = this.canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        this.updateTriangleSize(context);
      }
    }
  };

  private getPointACenter() {
    const { triangleSize } = this.state;
    return {
      x: CANVAS_CENETR.x,
      y:
        CANVAS_CENETR.y -
        Math.sqrt(
          triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
        ) /
          2
    };
  }

  private getPointBCenter() {
    const { triangleSize } = this.state;
    return {
      x: CANVAS_CENETR.x - triangleSize / 2,
      y:
        CANVAS_CENETR.y +
        Math.sqrt(
          triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
        ) /
          2
    };
  }

  private getPointCCenter() {
    const { triangleSize } = this.state;
    return {
      x: CANVAS_CENETR.x + triangleSize / 2,
      y:
        CANVAS_CENETR.y +
        Math.sqrt(
          triangleSize * triangleSize - (triangleSize / 2) * (triangleSize / 2)
        ) /
          2
    };
  }

  private drawTriangle(context: CanvasRenderingContext2D) {
    let triangle = new Path2D();
    const pointACenter = this.getPointACenter();
    const pointBCenter = this.getPointBCenter();
    const pointCCenter = this.getPointCCenter();
    triangle.moveTo(pointACenter.x, pointACenter.y);
    triangle.lineTo(pointCCenter.x, pointCCenter.y);
    triangle.lineTo(pointBCenter.x, pointBCenter.y);
    triangle.lineTo(pointACenter.x, pointACenter.y);
    context.strokeStyle = "rgba(34, 93, 57, 1.0)";
    context.stroke(triangle);
  }

  private updateTriangleSize(context: CanvasRenderingContext2D) {
    const { characterValue } = this.state;
    this.setState({ triangleSize: -1 * (characterValue - 100) + 100 });
    this.drawCircles(context);
  }

  private drawCircles(context: CanvasRenderingContext2D) {
    const { triangleSize, brainValue, effortValue, skillValue } = this.state;
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    context.lineWidth = 2;
    this.drawTriangle(context);
    context.lineWidth = 1;
    this.setState({ triangleVal: -1 * (triangleSize - 100) + 100 });

    const pointACenter = this.getPointACenter();
    const pointBCenter = this.getPointBCenter();
    const pointCCenter = this.getPointCCenter();

    let brainCircle = new Path2D();
    context.fillStyle = "rgba(0, 61, 167, 0.3)";
    context.strokeStyle = "rgba(0, 61, 167, 1.0)";
    brainCircle.arc(
      pointBCenter.x,
      pointBCenter.y,
      brainValue,
      0,
      Math.PI * 2,
      true
    );
    context.fill(brainCircle);
    context.stroke(brainCircle);

    let effortCircle = new Path2D();
    context.fillStyle = "rgba(181, 127, 0, 0.3)";
    context.strokeStyle = "rgba(181, 127, 0, 1.0)";
    effortCircle.arc(
      pointACenter.x,
      pointACenter.y,
      effortValue,
      0,
      Math.PI * 2,
      true
    );
    context.fill(effortCircle);
    context.stroke(effortCircle);

    let skillCircle = new Path2D();
    context.fillStyle = "rgba(121, 36, 47, 0.3)";
    context.strokeStyle = "rgba(121, 36, 47, 1.0)";
    skillCircle.arc(
      pointCCenter.x,
      pointCCenter.y,
      skillValue,
      0,
      Math.PI * 2,
      true
    );
    context.fill(skillCircle);
    context.stroke(skillCircle);
  }
}

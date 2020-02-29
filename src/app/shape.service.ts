import { Injectable } from '@angular/core';
import Konva from 'konva';
import { ILine } from './interfaces/i-line';
import { ShapeConfig } from 'konva/types/Shape';
@Injectable({
  providedIn: 'root',
})
export class ShapeService {
  constructor() {}
  circle(props: ShapeConfig) {
    return new Konva.Circle({
      draggable: props.draggable,
      fill: props.fill,
      radius: props.radius,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      x: props.x,
      y: props.y,
      den: props.den,
    });
  }
  line(props: ILine) {
    return new Konva.Line({
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      globalCompositeOperation: props.globalCompositeOperation,
      points: props.points,
      draggable: props.draggable,
    });
  }
  rectangle() {
    return new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
    });
  }
}

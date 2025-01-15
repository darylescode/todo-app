import {
  useSensors,
  useSensor,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";

interface UseDndSensors {
  delay: number;
  tolerance: number;
}

const useDndSensors = ({ delay, tolerance }: UseDndSensors) => {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      delay: delay,
      tolerance: tolerance,
    },
  });

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
    pointerSensor
  );

  return sensors;
};

export default useDndSensors;

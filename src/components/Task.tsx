import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { InitialData } from "models/model";

type Props = {
  task: InitialData["tasks"]["task"];
  index: number;
};

export const Task: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

const Container = styled.div<{ isDragging: boolean }>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(isDragging) => (isDragging ? "lightgreen" : "white")};
`;

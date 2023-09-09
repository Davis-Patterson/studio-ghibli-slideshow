import { range } from 'components/utils';

const generate = (
  curPage,
  numPages,
  numPagesAtEdges = 2,
  numPagesAroundCurrent = 2,
  glue = '…'
) => {
  const numItemsInSequence =
    1 + numPagesAroundCurrent * 2 + numPagesAtEdges * 2 + 2;
  const reworkedCurPage = Math.min(curPage, numPages);
  let finalSequence = [];

  if (numPages <= numItemsInSequence) {
    finalSequence = range(1, numPages);
  } else {
    const start = numPagesAtEdges > 0 ? 1 : reworkedCurPage;

    const sequence = {
      leftEdge: null,
      glueLeftCenter: null,
      centerPiece: null,
      glueCenterRight: null,
      rightEdge: null,
    };

    if (reworkedCurPage < numItemsInSequence / 2) {
      sequence.leftEdge = range(
        1,
        Math.ceil(numItemsInSequence / 2) + numPagesAroundCurrent
      );
      sequence.centerPiece = [glue];
      if (numPagesAtEdges > 0)
        sequence.rightEdge = range(numPages - (numPagesAtEdges - 1), numPages);
    } else if (reworkedCurPage > numPages - numItemsInSequence / 2) {
      if (numPagesAtEdges > 0)
        sequence.leftEdge = range(start, numPagesAtEdges);
      sequence.centerPiece = [glue];
      sequence.rightEdge = range(
        Math.min(
          numPages - Math.floor(numItemsInSequence / 2) - numPagesAroundCurrent,
          reworkedCurPage - numPagesAroundCurrent
        ),
        numPages
      );
    } else {
      sequence.centerPiece = range(
        reworkedCurPage - numPagesAroundCurrent,
        reworkedCurPage + numPagesAroundCurrent
      );

      if (numPagesAtEdges > 0)
        sequence.leftEdge = range(start, numPagesAtEdges);
      if (numPagesAtEdges > 0)
        sequence.rightEdge = range(numPages - (numPagesAtEdges - 1), numPages);

      sequence.glueLeftCenter =
        sequence.centerPiece[0] == numPagesAtEdges + 2
          ? [numPagesAtEdges + 1]
          : [glue];
      sequence.glueCenterRight = [glue];
    }

    finalSequence = Object.values(sequence)
      .filter((v) => v !== null)
      .flat();
  }

  return finalSequence;
};

const generateFromObj = (opts = {}) => {
  const {
    curPage = 1,
    numPages = 1,
    numPagesAtEdges = 2,
    numPagesAroundCurrent = 2,
    glue = '…',
  } = opts;

  return generate(curPage, numPages, numPagesAtEdges, numPagesAroundCurrent);
};

export { generate, generateFromObj };

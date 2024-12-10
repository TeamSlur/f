import { useState } from "react";
import styled from "styled-components";
import Block from "../../components/Common/Block";
import { YjsProvider } from "../../core/yjsConfig";
import DocContent from "../../containers/Document/DocContent";

const Document = () => {
  // const [blocks, setBlocks] = useState([
  //     {
  //         id: "1",
  //         content: "Root Block! Can't delete this block",
  //         parentId: null,
  //         children: ["2", "3"],
  //     },
  //     {
  //         id: "2",
  //         content: "Child Block 2",
  //         parentId: "1",
  //         children: ["5", "4"],
  //     },
  //     { id: "3", content: "Child Block 3", parentId: "1", children: [] },
  //     { id: "4", content: "Child Block 4", parentId: "2", children: [] },
  //     { id: "5", content: "Child Block 5", parentId: "2", children: [] },
  // ]);

  // const updateBlock = (updatedBlock) => {
  //     setBlocks(
  //         blocks.map((block) =>
  //             block.id === updatedBlock.id ? updatedBlock : block
  //         )
  //     );
  // };

  // const addBlock = (parentId) => {
  //     const newBlockId = Date.now().toString();
  //     const newBlock = {
  //         id: newBlockId,
  //         content: `${parentId}'s child`,
  //         parentId,
  //         children: [],
  //     };

  //     const updatedBlocks = [...blocks, newBlock];

  //     if (parentId) {
  //         const parentIndex = updatedBlocks.findIndex(
  //             (block) => block.id === parentId
  //         );
  //         if (parentIndex !== -1) {
  //             const parentBlock = updatedBlocks[parentIndex];
  //             const insertIndex =
  //                 parentBlock.children.length > 0
  //                     ? updatedBlocks.findIndex(
  //                           (block) =>
  //                               block.id ===
  //                               parentBlock.children[
  //                                   parentBlock.children.length - 1
  //                               ]
  //                       ) + 1
  //                     : parentIndex + 1;

  //             updatedBlocks.splice(insertIndex, 0, newBlock);
  //             updatedBlocks.pop(); // Remove the duplicate block added at the end

  //             parentBlock.children = [...parentBlock.children, newBlockId];
  //             updatedBlocks[parentIndex] = parentBlock;
  //         }
  //     } else {
  //         // If no parentId, add to the root level
  //         updatedBlocks.pop(); // Remove the duplicate block added at the end
  //     }

  //     setBlocks(updatedBlocks);
  // };

  // const deleteBlock = (id) => {
  //     const blockToDelete = blocks.find((block) => block.id === id);
  //     if (id === "1") return;
  //     if (blockToDelete.parentId) {
  //         const parentBlock = blocks.find(
  //             (block) => block.id === blockToDelete.parentId
  //         );
  //         updateBlock({
  //             ...parentBlock,
  //             children: parentBlock.children.filter(
  //                 (childId) => childId !== id
  //             ),
  //         });
  //     }
  //     setBlocks(blocks.filter((block) => block.id !== id));
  // };

  // const preorderTraverse = (blockId, renderedBlocks = new Set()) => {
  //     const block = blocks.find((b) => b.id === blockId);
  //     if (!block || renderedBlocks.has(blockId)) return null;

  //     renderedBlocks.add(blockId); // 중복 렌더링 방지

  //     return (
  //         <div key={block.id}>
  //             <Block
  //                 block={block}
  //                 allBlocks={blocks}
  //                 updateBlock={updateBlock}
  //                 addBlock={addBlock}
  //                 deleteBlock={deleteBlock}
  //             />
  //             {/* {block.children.map((childId) =>
  //                 preorderTraverse(childId, renderedBlocks)
  //             )} */}
  //         </div>
  //     );
  // };

  // const rootBlocks = blocks.filter((block) => block.parentId === null);
  // return (
  //     <DocumentPageBlock>
  //         <h1>Document Page</h1>
  //         <div className="notion-like-editor">
  //             {rootBlocks.map((rootBlock) => preorderTraverse(rootBlock.id))}
  //         </div>
  //     </DocumentPageBlock>
  // );
  return (
    <div>
      <h1>실시간 문서 페이지</h1>
      <DocContent />
    </div>

    // <YjsProvider>

    // </YjsProvider>
  );
};

// const DocumentPageBlock = styled.div``;
export default Document;

// {rootBlocks.map((block) => (
//     <Block
//         key={block.id}
//         block={block}
//         allBlocks={blocks}
//         updateBlock={updateBlock}
//         addBlock={addBlock}
//         deleteBlock={deleteBlock}
//     />
// ))}

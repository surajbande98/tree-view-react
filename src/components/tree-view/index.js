import React, { useState } from "react";

const TreeView = ({ items = [] }) => {
  console.log(items);
  return (
    <div>
      <ul className="">
        {items.map((tree, i) => (
          <TreeNode node={tree} key={i}></TreeNode>
        ))}
      </ul>
    </div>
  );
};

// Create seperate component if required
const TreeNode = ({ node }) => {
  const [childVisiblilty, setChildVisiblilty] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li>
      <div onClick={(e) => setChildVisiblilty((v) => !v)}>{node.name}</div>
      {hasChild && childVisiblilty && (
        <ul className="">
          <TreeView items={node.children}></TreeView>
        </ul>
      )}
    </li>
  );
};

export default TreeView;

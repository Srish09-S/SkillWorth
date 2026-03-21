import React, { useMemo } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const Roadmap = ({ foundSkills = [], missingSkills = [], role = "AWAITING_SCAN" }) => {
  const nodes = useMemo(() => {
    // 1. The Main Career Goal (Gold)
    const baseNodes = [
  { 
    id: 'role', 
    position: { x: 250, y: 0 }, 
    data: { label: `🎯 GOAL: ${role.toUpperCase()}` },
    style: { 
      background: '#fbbf24', 
      border: '4px solid black', 
      fontWeight: '900', 
      width: 250, 
      textAlign: 'center',
      boxShadow: '8px 8px 0px black',
      fontSize: '14px',
      padding: '10px'
    }
  }
];

    // 2. Generate GREEN nodes for Mastered Skills
    foundSkills.forEach((skill, index) => {
      baseNodes.push({
        id: `found-${index}`,
        position: { x: (index * 180) - ((foundSkills.length - 1) * 90) + 250, y: 150 },
        data: { label: skill.toUpperCase() },
        style: { 
          background: '#00ff41', 
          border: '4px solid black', 
          fontWeight: 'bold', 
          width: 140, 
          textAlign: 'center' 
        }
      });
    });

    // 3. Generate RED nodes for Missing Gaps
    missingSkills.forEach((skill, index) => {
      baseNodes.push({
        id: `missing-${index}`,
        position: { x: (index * 180) - ((missingSkills.length - 1) * 90) + 250, y: 300 },
        data: { label: `⚠️ ${skill.toUpperCase()}` },
        style: { 
          background: '#ef4444', 
          color: 'white', 
          border: '4px solid black', 
          fontWeight: 'bold', 
          width: 140, 
          textAlign: 'center',
          boxShadow: '4px 4px 0px black'
        }
      });
    });

    return baseNodes;
  }, [foundSkills, missingSkills, role]);

  const edges = useMemo(() => {
    const allEdges = [];
    
    // Connect Goal to Found Skills
    foundSkills.forEach((_, index) => {
      allEdges.push({
        id: `e-f-${index}`, source: 'role', target: `found-${index}`, animated: true,
        style: { stroke: '#00ff41', strokeWidth: 3 }
      });
    });

    // Connect Found Skills to Missing Skills (The Path Forward)
    missingSkills.forEach((_, index) => {
      allEdges.push({
        id: `e-m-${index}`, source: 'role', target: `missing-${index}`,
        style: { stroke: '#ef4444', strokeWidth: 2, strokeDasharray: '5,5' }
      });
    });

    return allEdges;
  }, [foundSkills, missingSkills]);

  return (
    <div className="h-[500px] w-full border-4 border-black bg-zinc-900 shadow-neo relative">
     <ReactFlow nodes={nodes} edges={edges} fitView>
  <Background color="#333" gap={20} variant="dots" />
  <Controls position="bottom-right" /> {/* You can set position here */}
</ReactFlow>
      {role === "AWAITING_SCAN" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
          <p className="bg-black text-hack-green px-6 py-3 border-2 border-hack-green font-mono text-lg animate-pulse">
            INITIATE_SYSTEM_SCAN_TO_VIEW_MAP...
          </p>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
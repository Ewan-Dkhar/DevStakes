import { ReactFlowProvider, useReactFlow } from 'reactflow'
import Canvas from './components/Canvas.jsx'
import Toolbar from './components/Toolbar.jsx'
import NodeDetailPanel from './components/NodeDetailPanel.jsx'
import { useStore } from './store/useStore.js'

const AppContent = () => {
  const { fitView } = useReactFlow();
  const selectedNodeId = useStore((state) => state.selectedNodeId);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-surface-900">
      {/* Canvas */}
      <div className="h-full w-full">
        <Canvas showMinimap={true} />
      </div>

      {/* Toolbar */}
      <Toolbar onFitView={() => fitView({ padding: 0.2 })} />

      {/* Detail Panel */}
      {selectedNodeId && <NodeDetailPanel />}

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-surface-800/80 to-transparent backdrop-blur-sm pointer-events-none flex items-center px-6 z-20">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
          Learning Roadmap
        </h1>
      </div>
    </div>
  );
};

function App() {
  return (
    <ReactFlowProvider>
      <AppContent />
    </ReactFlowProvider>
  );
}

export default App

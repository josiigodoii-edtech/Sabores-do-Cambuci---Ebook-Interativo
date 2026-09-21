import React, { useState } from 'react';
import { ConceptNode } from '../types';
import { CONCEPT_NODES, CONCEPT_EDGES } from '../data/conceptMapData';
import { Sparkles, BookOpen, Compass, X, ZoomIn, ZoomOut, RotateCcw, Filter } from 'lucide-react';
import { playOptionSelectSound } from '../utils/soundEffects';

interface ConceptMapProps {
  onNavigateToChapter: (chapterId: string) => void;
  onClose?: () => void;
}

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; label: string }> = {
  botanica: { bg: 'bg-emerald-50', border: 'border-emerald-500', text: 'text-emerald-800', label: 'Botânica & Ecologia' },
  historia: { bg: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-800', label: 'História & Ancestralidade' },
  ciencia: { bg: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-800', label: 'Química & Nutrição' },
  culinaria: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-800', label: 'Culinária & Técnicas' },
  socioambiental: { bg: 'bg-teal-50', border: 'border-teal-500', text: 'text-teal-800', label: 'Território & Produtores' },
};

export const ConceptMap: React.FC<ConceptMapProps> = ({ onNavigateToChapter, onClose }) => {
  const [selectedNode, setSelectedNode] = useState<ConceptNode | null>(CONCEPT_NODES[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [zoom, setZoom] = useState<number>(1);

  const filteredNodes = activeCategory === 'all'
    ? CONCEPT_NODES
    : CONCEPT_NODES.filter(n => n.category === activeCategory || n.id === 'cambuci-core');

  const handleNodeClick = (node: ConceptNode) => {
    playOptionSelectSound();
    setSelectedNode(node);
  };

  const handleZoom = (delta: number) => {
    setZoom(prev => Math.min(1.4, Math.max(0.7, prev + delta)));
  };

  const resetZoom = () => setZoom(1);

  return (
    <div id="concept-map-container" className="bg-[#fcfbf9] border border-stone-200 rounded-2xl p-4 md:p-6 shadow-sm overflow-hidden flex flex-col gap-4">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg">
              <Compass className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-serif font-bold text-stone-900">
              Mapa Conceitual Dinâmico do Cambuci
            </h2>
          </div>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            Navegação relacional LXD: conecte os aspectos botânicos, históricos, nutricionais e culinários da fruta nativa.
          </p>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200">
          <button
            onClick={() => handleZoom(0.1)}
            title="Aumentar zoom"
            aria-label="Aumentar zoom"
            className="p-1.5 hover:bg-white text-stone-700 rounded-lg transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom(-0.1)}
            title="Diminuir zoom"
            aria-label="Diminuir zoom"
            className="p-1.5 hover:bg-white text-stone-700 rounded-lg transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={resetZoom}
            title="Redefinir visualização"
            aria-label="Redefinir visualização"
            className="p-1.5 hover:bg-white text-stone-700 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              title="Fechar mapa"
              aria-label="Fechar mapa"
              className="p-1.5 hover:bg-rose-50 text-stone-500 hover:text-rose-600 rounded-lg transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="flex items-center gap-1 text-stone-500 font-medium whitespace-nowrap">
          <Filter className="w-3.5 h-3.5" /> Filtrar:
        </span>
        <button
          onClick={() => { setActiveCategory('all'); playOptionSelectSound(); }}
          className={`px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap ${
            activeCategory === 'all'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Todos os Conceitos ({CONCEPT_NODES.length})
        </button>
        {Object.entries(CATEGORY_COLORS).map(([catKey, val]) => (
          <button
            key={catKey}
            onClick={() => { setActiveCategory(catKey); playOptionSelectSound(); }}
            className={`px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap border ${
              activeCategory === catKey
                ? `${val.bg} ${val.border} ${val.text} font-semibold ring-2 ring-emerald-400/40`
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* Concept Graph Stage */}
      <div className="relative w-full h-[380px] md:h-[440px] bg-gradient-to-b from-[#f8f6f0] to-[#f2ede2] rounded-xl border border-stone-200/90 overflow-hidden select-none">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#4a5568 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Scalable Container */}
        <div
          className="relative w-full h-full transition-transform duration-300 origin-center"
          style={{ transform: `scale(${zoom})` }}
        >
          {/* SVG Connecting Edges */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {CONCEPT_EDGES.map((edge, idx) => {
              const sourceNode = CONCEPT_NODES.find(n => n.id === edge.source);
              const targetNode = CONCEPT_NODES.find(n => n.id === edge.target);
              if (!sourceNode || !targetNode) return null;

              const isSourceVisible = activeCategory === 'all' || sourceNode.category === activeCategory || sourceNode.id === 'cambuci-core';
              const isTargetVisible = activeCategory === 'all' || targetNode.category === activeCategory || targetNode.id === 'cambuci-core';
              if (!isSourceVisible || !isTargetVisible) return null;

              const isHighlighted = selectedNode && (selectedNode.id === sourceNode.id || selectedNode.id === targetNode.id);

              return (
                <g key={`edge-${idx}`}>
                  <line
                    x1={`${sourceNode.x}%`}
                    y1={`${sourceNode.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={isHighlighted ? '#059669' : '#94a3b8'}
                    strokeWidth={isHighlighted ? 2.5 : 1.2}
                    strokeDasharray={isHighlighted ? undefined : '4 3'}
                    strokeOpacity={isHighlighted ? 0.85 : 0.35}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* Render Interactive Nodes */}
          {filteredNodes.map(node => {
            const isCore = node.id === 'cambuci-core';
            const isSelected = selectedNode?.id === node.id;
            const style = CATEGORY_COLORS[node.category] || CATEGORY_COLORS.botanica;

            return (
              <button
                key={node.id}
                onClick={() => handleNodeClick(node)}
                id={`node-${node.id}`}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 cursor-pointer focus:outline-none ${
                  isSelected ? 'z-30 scale-110' : 'z-10 hover:scale-105'
                }`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`
                }}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-left border shadow-sm transition-all ${
                    isCore
                      ? 'bg-gradient-to-br from-emerald-700 to-teal-900 text-white border-emerald-400 ring-4 ring-emerald-500/20 shadow-lg'
                      : isSelected
                      ? `${style.bg} ${style.border} ${style.text} ring-4 ring-emerald-500/30 font-semibold shadow-md`
                      : 'bg-white/95 border-stone-300/80 text-stone-800 hover:border-emerald-400 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {isCore ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
                    ) : (
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-600' : 'bg-stone-400'}`} />
                    )}
                    <span className={`text-xs md:text-sm whitespace-nowrap ${isCore ? 'font-serif font-bold text-white' : 'font-medium'}`}>
                      {node.label}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Card (LXD Retention Anchor) */}
      {selectedNode && (
        <div className="bg-white border border-stone-200/90 rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${CATEGORY_COLORS[selectedNode.category]?.bg} ${CATEGORY_COLORS[selectedNode.category]?.text}`}>
                {CATEGORY_COLORS[selectedNode.category]?.label || 'Conceito'}
              </span>
              <h3 className="font-serif font-bold text-stone-900 text-base md:text-lg">
                {selectedNode.label}
              </h3>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {selectedNode.description}
            </p>
            <div className="flex items-start gap-1.5 text-xs text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
              <Sparkles className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
              <span><strong>Fato Essencial:</strong> {selectedNode.keyFact}</span>
            </div>
          </div>

          <button
            onClick={() => {
              playOptionSelectSound();
              onNavigateToChapter(selectedNode.relatedChapterId);
            }}
            id={`btn-read-chapter-${selectedNode.id}`}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-all hover:translate-x-0.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Acessar no Livro</span>
          </button>
        </div>
      )}
    </div>
  );
};

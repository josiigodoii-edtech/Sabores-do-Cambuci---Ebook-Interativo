import React, { useState } from 'react';
import { FlaskConical, Sparkles, Layers, Sliders, Info, ShieldAlert } from 'lucide-react';
import { playOptionSelectSound } from '../utils/soundEffects';

export const FlavorSimulator: React.FC = () => {
  const [dairyLevel, setDairyLevel] = useState<number>(0); // 0 to 100%
  const [saltingTime, setSaltingTime] = useState<number>(0); // 0 to 15 minutes
  const [activeComparison, setActiveComparison] = useState<string>('cambuci');

  // Dynamic calculated perceived acidity based on dairy fat/casein buffer and salting osmosis
  const rawAcidity = 9.2; // 0 to 10 scale
  const bufferedAcidity = Math.max(2.5, rawAcidity - (dairyLevel * 0.05) - (saltingTime * 0.18));
  const perceivedCreaminess = Math.min(10, 1.5 + (dairyLevel * 0.085));

  const COMPARISONS = [
    { id: 'cambuci', name: 'Cambuci Nativo', ph: 2.7, note: 'Rico em ácido cítrico & málico; finish longo floral' },
    { id: 'limao', name: 'Limão Taiti', ph: 2.3, note: 'Ácido acentuado, alta volatilidade' },
    { id: 'vinagre', name: 'Vinagre Comum', ph: 2.9, note: 'Ácido acético penetrante, sem notas florais' },
    { id: 'tomate', name: 'Tomate Maduro', ph: 4.3, note: 'Acidez moderada com glutamato natural' },
    { id: 'leite', name: 'Leite Integral', ph: 6.6, note: 'Caseínas e lipídios com efeito tampão biológico' }
  ];

  return (
    <div id="flavor-simulator-card" className="bg-white border border-stone-200 rounded-2xl p-5 md:p-7 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-cyan-100 text-cyan-800 rounded-lg">
              <FlaskConical className="w-5 h-5" />
            </span>
            <h3 className="font-serif font-bold text-stone-900 text-lg md:text-xl">
              Laboratório Sensorial & Bioquímica Culinária
            </h3>
          </div>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            Simulador interativo LXD: compreenda a ciência do pH 2,5-3,0 e o efeito tampão dos laticínios.
          </p>
        </div>
      </div>

      {/* pH Scale Comparator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs md:text-sm">
          <span className="font-serif font-bold text-stone-900 flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-emerald-700" />
            Escala Comparativa de Acidez (pH Potenciométrico)
          </span>
          <span className="text-xs text-stone-500 font-mono">Menor pH = Mais Ácido</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {COMPARISONS.map(item => {
            const isSelected = activeComparison === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playOptionSelectSound();
                  setActiveComparison(item.id);
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-400/30'
                    : 'bg-[#faf9f6] border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs font-semibold text-stone-800">{item.name}</span>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                    pH {item.ph.toFixed(1)}
                  </span>
                </div>
                <p className="text-[11px] text-stone-600 leading-tight line-clamp-2">
                  {item.note}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Sliders: Buffer Effect Simulator */}
      <div className="bg-[#fbfaf6] border border-stone-200/90 rounded-xl p-4 md:p-5 space-y-5">
        <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-700" />
          Simulador do Efeito Tampão (Química de Panela)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Slider 1: Dairy Fat / Casein Ratio */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-stone-700">
              <span>Adição de Laticínios (Gordura & Caseína):</span>
              <span className="font-bold text-emerald-800 font-mono">{dairyLevel}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={dairyLevel}
              onChange={(e) => setDairyLevel(Number(e.target.value))}
              className="w-full accent-emerald-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 italic">
              Ex: Leite em pó na vitamina, creme de leite no macarrão ou leite condensado no brigadeiro/mousse.
            </p>
          </div>

          {/* Slider 2: Salt Water Rest (Água e Sal) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-stone-700">
              <span>Descanso em Água com Sal (Técnica do Chef):</span>
              <span className="font-bold text-emerald-800 font-mono">{saltingTime} min</span>
            </div>
            <input
              type="range"
              min="0"
              max="15"
              step="1"
              value={saltingTime}
              onChange={(e) => setSaltingTime(Number(e.target.value))}
              className="w-full accent-amber-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 italic">
              Técnica documentada na página 8 do livro para pratos crus como vinagrete ou carpaccio.
            </p>
          </div>
        </div>

        {/* Dynamic Result Gauge */}
        <div className="pt-3 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
            <div className="flex justify-between text-xs font-semibold text-stone-800">
              <span>Percepção de Acidez na Língua:</span>
              <span className="font-mono text-emerald-700">{bufferedAcidity.toFixed(1)} / 10</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 transition-all duration-200"
                style={{ width: `${(bufferedAcidity / 10) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-stone-500">
              {bufferedAcidity > 7.5 ? 'Intensa, vibrante, abre o paladar instantaneamente.' : bufferedAcidity > 4.5 ? 'Equilibrada, redonda, aveludada e sofisticada.' : 'Suave, delicada, aroma floral prevalece.'}
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
            <div className="flex justify-between text-xs font-semibold text-stone-800">
              <span>Cremosidade & Textura Emulsionada:</span>
              <span className="font-mono text-cyan-700">{perceivedCreaminess.toFixed(1)} / 10</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-teal-600 transition-all duration-200"
                style={{ width: `${(perceivedCreaminess / 10) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-stone-500">
              {dairyLevel > 50 ? 'Gorduras aprisionam os ácidos gerando cremes densos e brilhantes.' : 'Frescor puro da fruta com textura límpida e fibrosa.'}
            </p>
          </div>
        </div>
      </div>

      {/* Flavor Matrix Radar / Bars */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { attribute: 'Acidez Cítrica', score: '9.5 / 10', desc: 'Ácido cítrico e málico puro' },
          { attribute: 'Adstringência', score: '7.8 / 10', desc: 'Taninos suaves típicos' },
          { attribute: 'Aroma Floral', score: '9.0 / 10', desc: 'Óleos voláteis na casca' },
          { attribute: 'Persistência (Finish)', score: '9.8 / 10', desc: 'Permanece minutos no palato' },
          { attribute: 'Pectina Natural', score: '8.5 / 10', desc: 'Geleia sem espessantes' },
          { attribute: 'Doçura Nativa', score: '2.0 / 10', desc: 'Pede intenção na cozinha' },
        ].map((feat, i) => (
          <div key={i} className="p-3 bg-[#faf9f6] rounded-xl border border-stone-200/80 text-center">
            <span className="block text-xs font-semibold text-stone-800">{feat.attribute}</span>
            <span className="block text-sm font-mono font-bold text-emerald-800 my-0.5">{feat.score}</span>
            <span className="block text-[10px] text-stone-500 leading-tight">{feat.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

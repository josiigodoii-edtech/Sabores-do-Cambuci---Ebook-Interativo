import React, { useState } from 'react';
import { Calendar, Sun, Snowflake, Package, Leaf, CheckCircle2 } from 'lucide-react';
import { playOptionSelectSound } from '../utils/soundEffects';

export const HarvestCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(1); // 0 = Jan, 1 = Fev, etc.

  const MONTHS = [
    { name: 'Jan', full: 'Janeiro', status: 'pico', label: 'Pico da Safra', desc: 'Ápice da colheita no Alto Tietê. Frutos com perfume floral máximo e firmeza ideal.' },
    { name: 'Fev', full: 'Fevereiro', status: 'pico', label: 'Pico da Safra', desc: 'Frutificação abundante. Momento ideal para produzir polpas congeladas e desidratar cascas.' },
    { name: 'Mar', full: 'Março', status: 'final', label: 'Fim da Safra', desc: 'Últimas colheitas nos sítios mais altos da Serra do Mar. Encerramento do ciclo in natura.' },
    { name: 'Abr', full: 'Abril', status: 'entressafra', label: 'Entressafra', desc: 'Consumo por polpa congelada, geleias e farinha da casca integral.' },
    { name: 'Mai', full: 'Maio', status: 'entressafra', label: 'Entressafra', desc: 'Árvore em repouso vegetativo nos planaltos paulistas.' },
    { name: 'Jun', full: 'Junho', status: 'entressafra', label: 'Entressafra', desc: 'Inverno serrano; cambucizeiro tolera geadas leves de altitude.' },
    { name: 'Jul', full: 'Julho', status: 'entressafra', label: 'Entressafra', desc: 'Período seco e frio; momento de manejo agroecológico do solo.' },
    { name: 'Ago', full: 'Agosto', status: 'entressafra', label: 'Entressafra', desc: 'Preparação para brotação da primavera.' },
    { name: 'Set', full: 'Setembro', status: 'floracao', label: 'Início da Floração', desc: 'Flores brancas, miúdas e intensamente perfumadas atraem polinizadores silvestres.' },
    { name: 'Out', full: 'Outubro', status: 'floracao', label: 'Plena Floração', desc: 'Aves e insetos visitam os cambucizais. Formação dos pequenos frutos verdes.' },
    { name: 'Nov', full: 'Novembro', status: 'crescimento', label: 'Crescimento', desc: 'Frutos atingem 3 a 4 cm, acumulando ácidos orgânicos e pectina.' },
    { name: 'Dez', full: 'Dezembro', status: 'inicio', label: 'Abertura da Safra', desc: 'Primeiros frutos maduros começam a perfumar as feiras do Alto Tietê.' }
  ];

  const current = MONTHS[selectedMonth];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
            <Calendar className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-serif font-bold text-stone-900 text-base md:text-lg">
              Ciclo Fenológico & Calendário da Safra
            </h3>
            <p className="text-xs text-stone-600">
              O cambuci não tem pressa: ensina a valorizar o tempo certo de cada estação.
            </p>
          </div>
        </div>
      </div>

      {/* Month Pills Selector */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-1.5">
        {MONTHS.map((m, idx) => {
          const isSelected = selectedMonth === idx;
          const isPeak = m.status === 'pico';
          const isHarvest = m.status === 'inicio' || m.status === 'final' || isPeak;

          return (
            <button
              key={m.name}
              onClick={() => {
                playOptionSelectSound();
                setSelectedMonth(idx);
              }}
              className={`p-2 rounded-xl text-center border transition-all flex flex-col items-center justify-between min-h-[64px] ${
                isSelected
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-sm ring-2 ring-emerald-500/30'
                  : isPeak
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 hover:bg-emerald-100/60'
                  : isHarvest
                  ? 'bg-emerald-50/40 border-emerald-200 text-emerald-900'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              <span className="text-xs font-bold">{m.name}</span>
              <span className={`text-[9px] px-1 py-0.5 rounded font-medium ${
                isSelected ? 'bg-emerald-800 text-emerald-100' : isPeak ? 'bg-emerald-200 text-emerald-900' : 'text-stone-400'
              }`}>
                {isPeak ? 'Pico' : isHarvest ? 'Safra' : 'Espera'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Month Detail Card */}
      <div className="p-4 bg-[#fbfaf6] border border-stone-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
              {current.full} · {current.label}
            </span>
          </div>
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed max-w-2xl">
            {current.desc}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3 text-xs text-stone-600 bg-white p-3 rounded-lg border border-stone-200/80">
          <div className="flex items-center gap-1.5">
            <Sun className="w-4 h-4 text-amber-600" />
            <span>Colheita: <strong>Dez a Mar</strong></span>
          </div>
        </div>
      </div>

      {/* Storage & Preservation Guides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1 text-xs">
        <div className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1">
          <div className="flex items-center gap-2 font-bold text-stone-900">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>In Natura (Fruta Fresca)</span>
          </div>
          <p className="text-stone-600">
            Dura <strong>3 a 5 dias</strong> em temperatura ambiente ou até <strong>10 dias</strong> na geladeira. Guarde sem lavar para evitar umidade.
          </p>
        </div>

        <div className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1">
          <div className="flex items-center gap-2 font-bold text-stone-900">
            <Snowflake className="w-4 h-4 text-cyan-600" />
            <span>Polpa Congelada</span>
          </div>
          <p className="text-stone-600">
            Bata a polpa descaroçada com mínimo de água e congele em porções. Preserva acidez e buquê por até <strong>12 meses</strong>.
          </p>
        </div>

        <div className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1">
          <div className="flex items-center gap-2 font-bold text-stone-900">
            <Package className="w-4 h-4 text-amber-600" />
            <span>Farinha da Casca Integral</span>
          </div>
          <p className="text-stone-600">
            Desidrate as cascas a 60 °C por 4 horas e bata em pó. Armazenada em pote hermético escuro, dura até <strong>6 meses</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

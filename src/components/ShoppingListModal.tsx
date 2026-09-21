import React, { useState } from 'react';
import { Recipe } from '../types';
import { X, ShoppingBag, Check, Copy, Trash2, CheckSquare, Square, Share2 } from 'lucide-react';
import { playOptionSelectSound, playSuccessChime } from '../utils/soundEffects';

interface ShoppingListModalProps {
  recipes: Recipe[];
  cookedRecipeIds: string[];
  onClose: () => void;
}

export const ShoppingListModal: React.FC<ShoppingListModalProps> = ({
  recipes,
  cookedRecipeIds,
  onClose
}) => {
  const selectedRecipes = recipes.filter(r => cookedRecipeIds.includes(r.id));
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const toggleItem = (key: string) => {
    playOptionSelectSound();
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const copyToClipboard = () => {
    playSuccessChime();
    let text = '🛒 *Minha Lista de Ingredientes - Sabores do Cambuci*\n\n';
    selectedRecipes.forEach(recipe => {
      text += `📍 *${recipe.title}*\n`;
      recipe.ingredients.forEach(ing => {
        const itemStr = ing.amount ? `${ing.amount} ${ing.unit || ''} ${ing.item}` : ing.item;
        text += ` • ${itemStr}\n`;
      });
      text += '\n';
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="p-5 bg-[#faf8f4] border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-orange-100 text-orange-700">
              <ShoppingBag className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Lista de Compras da Feira
              </h3>
              <p className="text-xs text-stone-500">
                {selectedRecipes.length} receitas selecionadas para preparar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {selectedRecipes.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
              <p className="font-serif text-stone-700 font-bold text-base">
                Sua lista de compras está vazia
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                No livro de receitas, clique em <strong>"Quero Preparar"</strong> ou <strong>"Salvar"</strong> para reunir todos os ingredientes frescos aqui automaticamente!
              </p>
            </div>
          ) : (
            selectedRecipes.map(recipe => (
              <div key={recipe.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    {recipe.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-stone-500 bg-white px-2 py-0.5 rounded-md border border-stone-200">
                    {recipe.yield}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {recipe.ingredients.map((ing, idx) => {
                    const key = `${recipe.id}-${idx}`;
                    const isChecked = !!checkedItems[key];

                    return (
                      <div
                        key={key}
                        onClick={() => toggleItem(key)}
                        className={`p-2 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-emerald-50/60 border-emerald-200 text-stone-400 line-through'
                            : 'bg-white border-stone-200 text-stone-800 hover:bg-stone-50'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-300 shrink-0" />
                        )}
                        <span className="truncate">
                          {ing.amount !== undefined && (
                            <strong className="text-emerald-950 mr-1">
                              {ing.amount} {ing.unit}
                            </strong>
                          )}
                          {ing.item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {selectedRecipes.length > 0 && (
          <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
            <span className="text-xs text-stone-500 hidden sm:inline">
              Copie para levar ao supermercado ou feira do produtor.
            </span>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-transform hover:scale-102"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Lista (WhatsApp)</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

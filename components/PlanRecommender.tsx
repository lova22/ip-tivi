
import React, { useState } from 'react';
import { getPlanRecommendation } from '../services/geminiService';
import { Sparkles, Loader2, MessageSquare } from 'lucide-react';

export const PlanRecommender: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const result = await getPlanRecommendation(query);
      setRecommendation(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 p-8 glass rounded-3xl border-purple-500/30">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-6 h-6 text-yellow-400" />
        <h2 className="text-2xl font-bold">KI Plan-Berater</h2>
      </div>
      
      <p className="text-slate-400 mb-6">
        Sagen Sie uns, was Ihnen wichtig ist (z.B. Sport, 4K Qualität, Anzahl der Geräte), und unsere KI findet das perfekte Paket für Sie.
      </p>

      <form onSubmit={handleRecommend} className="relative mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="z.B. Ich möchte Fußball in bester Qualität auf 2 Geräten schauen..."
          className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-4 px-6 pr-16 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 px-4 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <MessageSquare className="w-5 h-5" />}
        </button>
      </form>

      {recommendation && (
        <div className="p-6 bg-purple-900/20 border border-purple-500/20 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-yellow-400 text-black px-2 py-0.5 rounded">
              Empfehlung: {recommendation.recommendedPlan.toUpperCase()}
            </span>
          </div>
          <p className="text-slate-200 mb-4">{recommendation.reasoning}</p>
          <p className="text-purple-400 font-medium italic">{recommendation.followUp}</p>
        </div>
      )}
    </div>
  );
};

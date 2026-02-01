
import React from 'react';
import { Check, X } from 'lucide-react';
import { PLANS } from '../constants';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="mt-24 overflow-hidden rounded-[2.5rem] border border-white/5 glass">
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="bg-white/[0.02]">
              <th className="p-8 text-slate-400 font-black uppercase tracking-widest text-[11px] border-b border-white/5">Funktionen</th>
              {PLANS.map(plan => (
                <th key={plan.id} className="p-8 text-lg font-black border-b border-white/5">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="p-8 text-slate-300 font-bold">Live TV Kanäle</td>
              {PLANS.map(p => <td key={p.id} className="p-8 font-black text-red-500">{p.features.channels}</td>)}
            </tr>
            <tr>
              <td className="p-8 text-slate-300 font-bold">Filme & Serien (VOD)</td>
              {PLANS.map(p => <td key={p.id} className="p-8 font-medium">{p.features.vod}</td>)}
            </tr>
            <tr>
              <td className="p-8 text-slate-300 font-bold">Catch-up TV (7 Tage)</td>
              {PLANS.map(p => <td key={p.id} className="p-8"><Check className="text-green-500 w-6 h-6" /></td>)}
            </tr>
            <tr>
              <td className="p-8 text-slate-300 font-bold">EPG v2.0 Support</td>
              {PLANS.map(p => <td key={p.id} className="p-8"><Check className="text-green-500 w-6 h-6" /></td>)}
            </tr>
            <tr>
              <td className="p-8 text-slate-300 font-bold">Bildqualität</td>
              {PLANS.map(p => <td key={p.id} className="p-8 font-black text-purple-500">{p.features.quality}</td>)}
            </tr>
            <tr>
              <td className="p-8 text-slate-300 font-bold">Anti-Freeze 5.0</td>
              {PLANS.map(p => <td key={p.id} className="p-8"><Check className="text-green-500 w-6 h-6" /></td>)}
            </tr>
            <tr>
              <td className="p-8 text-slate-300 font-bold">VPN Schutz</td>
              {PLANS.map(p => (
                <td key={p.id} className="p-8">
                  {typeof p.features.vpn === 'string' ? (
                    <span className="text-red-500 font-black uppercase text-xs tracking-widest">{p.features.vpn}</span>
                  ) : <Check className="text-green-500 w-6 h-6" />}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-8 text-slate-300 font-bold">Support Level</td>
              {PLANS.map(p => <td key={p.id} className="p-8 font-bold">{p.features.support}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

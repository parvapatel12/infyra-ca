import React, { useState, useEffect } from 'react';
import { FirebaseService } from '../services/firebase';
import { AnalyticsSummary, AnalyticsEvent, LeadSubscriber } from '../types';
import { X, Download, Users, ShoppingBag, Instagram, Mail, RefreshCw, BarChart2, MousePointerClick } from 'lucide-react';

interface AnalyticsDashboardProps {
  onClose: () => void;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onClose }) => {
  // 1. Initialize states with empty/default structures
  const [summary, setSummary] = useState<AnalyticsSummary>({
    totalPageViews: 0,
    uniqueSessions: 0,
    totalAmazonClicks: 0,
    ctrAmazon: 0,
    totalInstagramClicks: 0,
    totalLeads: 0,
    productClicks: {}
  });
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [leads, setLeads] = useState<LeadSubscriber[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'leads'>('overview');

  // 2. Fetch data asynchronously inside a standard function
  const refreshData = async () => {
    try {
      setLoading(true);
      const [fetchedSummary, fetchedEvents, fetchedLeads] = await Promise.all([
        FirebaseService.getSummary(),
        FirebaseService.getEvents(),
        FirebaseService.getLeads()
      ]);
      
      setSummary(fetchedSummary);
      setEvents(fetchedEvents);
      setLeads(fetchedLeads);
    } catch (error) {
      console.error("Failed to load analytics data:", error);
    } finally {
      setLoading(false);
    }
  };

  // 3. Trigger data fetch on mount and listen for updates
  useEffect(() => {
    refreshData();
    const handleUpdate = () => refreshData();
    window.addEventListener('infyra-analytics-update', handleUpdate);
    return () => window.removeEventListener('infyra-analytics-update', handleUpdate);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 text-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-700 overflow-hidden relative my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold font-serif text-white">Infyra Store Owner Analytics</h2>
                {/* <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Live Traffic
                </span> */}
              </div>
              <p className="text-xs text-slate-400">Capturing visitor behavior & Amazon CA redirects for infyra.ca</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refreshData}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            {/* <button
              onClick={() => FirebaseService.exportAnalyticsCSV()}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV Data</span>
            </button> */}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 border-b-2 px-3 transition-colors ${
              activeTab === 'overview' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Metrics Overview
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-3 border-b-2 px-3 transition-colors ${
              activeTab === 'events' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Activity Stream ({events.length})
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`pb-3 border-b-2 px-3 transition-colors ${
              activeTab === 'leads' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Subscriber Leads ({leads.length})
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {loading && events.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">Loading dashboard analytics...</div>
          ) : (
            <>
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  
                  {/* Stat Cards Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-semibold">Total Page Views</span>
                        <Users className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-2xl font-black text-white">{summary.totalPageViews}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{summary.uniqueSessions} Unique Session(s)</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-semibold">Amazon CA Redirects</span>
                        <ShoppingBag className="w-4 h-4 text-amber-400" />
                      </div>
                      <p className="text-2xl font-black text-white">{summary.totalAmazonClicks}</p>
                      <p className="text-[11px] text-amber-400 mt-1">{summary.ctrAmazon}% Click-Through Rate</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-semibold">Instagram Clicks</span>
                        <Instagram className="w-4 h-4 text-pink-400" />
                      </div>
                      <p className="text-2xl font-black text-white">{summary.totalInstagramClicks}</p>
                      <p className="text-[11px] text-pink-400 mt-1">@infyra Traffic</p>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-semibold">Email Leads</span>
                        <Mail className="w-4 h-4 text-rose-400" />
                      </div>
                      <p className="text-2xl font-black text-white">{summary.totalLeads}</p>
                      <p className="text-[11px] text-rose-400 mt-1">Future DTC Audience</p>
                    </div>

                  </div>

                  {/* Product Interest Breakdown */}
                  <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MousePointerClick className="w-4 h-4 text-emerald-400" />
                        <span>Product Interest & Amazon Redirect Popularity</span>
                      </h3>
                      <span className="text-xs text-slate-400">Total Clicks Recorded</span>
                    </div>

                    <div className="space-y-3">
                      {!summary.productClicks || Object.keys(summary.productClicks).length === 0 ? (
                        <p className="text-xs text-slate-400 italic">No specific product click events recorded yet. Try clicking a product modal or Amazon CA button to test tracking!</p>
                      ) : (
                        Object.entries(summary.productClicks).map(([prodName, count], idx) => {
                          const numericValues = Object.values(summary.productClicks) as number[];
                          const maxCount = Math.max(...numericValues, 1);
                          const numCount = Number(count);
                          const pct = Math.round((numCount / maxCount) * 100);
                          return (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-xs font-medium">
                                <span className="text-slate-200">{prodName}</span>
                                <span className="text-emerald-400 font-bold">{count} click(s)</span>
                              </div>
                              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                </div>
              )}

              {activeTab === 'events' && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-400">Real-time log of visitor actions on infyra.ca:</p>
                  <div className="overflow-x-auto border border-slate-800 rounded-2xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold">
                        <tr>
                          <th className="p-3">Timestamp</th>
                          <th className="p-3">Event Type</th>
                          <th className="p-3">Product / Detail</th>
                          <th className="p-3">Device</th>
                          <th className="p-3">Referrer</th>
                          <th className="p-3">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        {events.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="p-4 text-center text-slate-500 italic">No events logged yet.</td>
                          </tr>
                        ) : (
                          events.map(e => (
                            <tr key={e.id} className="hover:bg-slate-800/50">
                              <td className="p-3 font-mono text-slate-400">
                                {e.timestamp ? new Date(e.timestamp).toLocaleTimeString() : 'Just now'}
                              </td>
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                                  e.type === 'amazon_click' ? 'bg-amber-500/20 text-amber-300' :
                                  e.type === 'product_view' ? 'bg-blue-500/20 text-blue-300' :
                                  e.type === 'lead_capture' ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-700 text-slate-300'
                                }`}>
                                  {e.type}
                                </span>
                              </td>
                              <td className="p-3 font-medium text-white">{e.productName || '-'}</td>
                              <td className="p-3 uppercase text-[10px]">{e.deviceType || 'desktop'}</td>
                              <td className="p-3 text-slate-400 truncate max-w-xs">{e.referrer || 'direct'}</td>
                              <td className="p-3 text-slate-400">{[e.location?.city, e.location?.state, e.location?.country].filter(Boolean).join(', ') || 'Unknown'}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'leads' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-400">Emails captured from the VIP Parent Club form:</p>
                    <button
                      onClick={() => FirebaseService.exportAnalyticsCSV()}
                      className="text-xs text-emerald-400 font-bold hover:underline"
                    >
                      Download Leads CSV
                    </button>
                  </div>

                  <div className="overflow-x-auto border border-slate-800 rounded-2xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold">
                        <tr>
                          <th className="p-3">Email Address</th>
                          <th className="p-3">Subscribed At</th>
                          <th className="p-3">Source</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        {leads.length === 0 ? (
                          <tr>
                            <td colSpan={3} className="p-4 text-center text-slate-500 italic">No email subscribers captured yet. Use the newsletter form below to test!</td>
                          </tr>
                        ) : (
                          leads.map(l => (
                            <tr key={l.id} className="hover:bg-slate-800/50">
                              <td className="p-3 font-medium text-emerald-300">{l.email}</td>
                              <td className="p-3 font-mono text-slate-400">
                                {l.subscribedAt ? new Date(l.subscribedAt).toLocaleString() : 'Just now'}
                              </td>
                              <td className="p-3 text-slate-400">{l.source}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 text-center text-xs text-slate-400 flex items-center justify-between">
          <span>Infyra Analytics Engine • Domain: <strong>infyra.ca</strong></span>
          <button
            onClick={() => FirebaseService.exportAnalyticsCSV()}
            className="text-emerald-400 font-bold hover:underline"
          >
            Export All Data as CSV
          </button>
        </div>

      </div>
    </div>
  );
};
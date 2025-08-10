import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";

/*
  Dashboard.jsx
  - Uses Tailwind for layout & spacing
  - Uses Recharts for charts
  - Sample / dummy data included so you can preview exactly
*/

const lineData = [
  { time: "06:00", clients: 110 },
  { time: "08:00", clients: 120 },
  { time: "10:00", clients: 140 },
  { time: "12:00", clients: 160 },
  { time: "14:00", clients: 180 },
  { time: "16:00", clients: 170 },
  { time: "18:00", clients: 175 },
];

const topApps = [
  { app: "UDP", data: "3GB", pct: "13%", clients: 133, users: 111 },
  { app: "EXCHANGE ONLINE", data: "3GB", pct: "11%", clients: 104, users: 94 },
  { app: "APPLE", data: "2GB", pct: "10%", clients: 50, users: 43 },
  { app: "SSL", data: "2GB", pct: "8%", clients: 126, users: 106 },
  { app: "CIFS", data: "2GB", pct: "7%", clients: 24, users: 24 },
  { app: "HTTP", data: "1GB", pct: "5%", clients: 82, users: 71 },
];

const donutData = [
  { name: "Networking", value: 40 },
  { name: "Video", value: 25 },
  { name: "Web", value: 15 },
  { name: "Cloud", value: 12 },
  { name: "Other", value: 8 },
];
const donutColors = ["#2563EB", "#10B981", "#60A5FA", "#F59E0B", "#7C3AED"];

const wifiByOS = [
  { name: "Mac OS X", value: 47 },
  { name: "Android", value: 17 },
  { name: "Windows", value: 13 },
  { name: "iOS", value: 23 },
];

const topWired = [
  { port: "1/0/24", usage: "3m PKTs", pct: "22%", host: "US-MIL-AP-swt1" },
  { port: "1/0/1", usage: "1.6m PKTs", pct: "12%", host: "US-MIL-AP-swt1" },
  { port: "1/0/5", usage: "1.1m PKTs", pct: "8%", host: "US-MIL-VoIP-2-01" },
  { port: "1/0/12", usage: "748k PKTs", pct: "6%", host: "US-MIL-VoIP-1-01" },
];

const topUsage = [
  { client: "SWAL-s-iPhone", usage: 2.2, topApp: "APPLE", apps: 29 },
  { client: "Dbrooks-X1", usage: 1.93, topApp: "UDP", apps: 14 },
  { client: "Mahadev-MBP", usage: 1.44, topApp: "EXCHANGE ONLINE", apps: 10 },
  { client: "joxenidev-x1", usage: 1.36, topApp: "CIFS", apps: 9 },
];

function SmallStat({ label, value, color }) {
  return (
    <div className="bg-white p-3 rounded shadow-sm flex flex-col">
      <div className="text-xs text-gray-500">{label}</div>
      <div className={`text-lg font-semibold ${color ?? ""}`}>{value}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top purple navbar */}
      <header className="bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* left compact logo */}
            <div className="flex items-center gap-3">
              <div className="bg-white/10 px-3 py-1 rounded text-sm font-bold">Extreme</div>
              <nav className="hidden sm:flex gap-4 text-sm">
                <button className="bg-white text-purple-800 px-3 py-1 rounded text-sm font-semibold">DASHBOARD</button>
                <button className="px-3 py-1 rounded hover:bg-white/10">MONITOR</button>
                <button className="px-3 py-1 rounded hover:bg-white/10">CONFIGURE</button>
                <button className="px-3 py-1 rounded hover:bg-white/10">TOOLS</button>
              <Link to='/InsightsPage'> <button className="px-3 py-1 rounded hover:bg-white/10">INSIGHTS</button></Link> 
                <button className="px-3 py-1 rounded hover:bg-white/10">YOUR CLOUD</button>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input className="hidden md:block px-2 py-1 rounded text-sm text-black" placeholder="Search" />
            <button className="p-1 rounded-full bg-white/20">
              <span className="sr-only">notifications</span>🔔
            </button>
            <div className="w-8 h-8 bg-white rounded-full" />
          </div>
        </div>
      </header>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
        {/* Secondary top: tabs summary and time-range */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          {/* left small sidebar icon + horizontal area chart (small) */}
          <div className="flex items-center gap-3 w-full lg:w-2/3">
            <div className="w-10 h-10 bg-indigo-700 text-white rounded flex items-center justify-center">≡</div>
            <div className="flex-1 bg-white p-3 rounded shadow">
              {/* small single-line placeholder for top trend (thin line) */}
              <div className="text-xs text-gray-500">Clients trend (24h)</div>
              <div className="mt-2 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <Line dataKey="clients" stroke="#60A5FA" strokeWidth={2} dot={false} />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* right summary stat bar */}
          <div className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-5 gap-3">
            <SmallStat label="Connection Status" value="56" />
            <SmallStat label="Total Apps" value="194" />
            <SmallStat label="Clients / Users" value="233 / 89" />
            <SmallStat label="Alarms" value="44" color="text-yellow-600" />
            <SmallStat label="Security" value="62" color="text-red-500" />
          </div>
        </div>

        {/* Time range + date text */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Time Range:</span>
            <div className="flex gap-2">
              <button className="text-sm px-2 py-1 rounded bg-white">Day</button>
              <button className="text-sm px-2 py-1 rounded hover:bg-gray-100">1 Hour</button>
              <button className="text-sm px-2 py-1 rounded hover:bg-gray-100">4 Hours</button>
              <button className="text-sm px-2 py-1 rounded hover:bg-gray-100">8 Hours</button>
              <button className="text-sm px-2 py-1 rounded hover:bg-gray-100">24 Hours</button>
            </div>
          </div>

          <div className="text-sm text-gray-500">From Friday (Oct 04, 2019) 08:49:10 to Friday (Oct 04, 2019) 13:57:58</div>
        </div>

        {/* Main grid: 3 columns row-wise */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left column: Hive summary (big card) + Top Usage list (below) */}
          <div className="space-y-4">
            <div className="bg-white p-5 rounded shadow">
              <div className="text-xs text-gray-500">HIVE SUMMARY - OVERALL</div>
              <div className="mt-3 flex gap-6">
                <div>
                  <div className="text-4xl font-bold">24.19 GB</div>
                  <div className="text-xs text-gray-500 mt-1">Total Application Usage (AP Only)</div>
                </div>

                <div className="ml-auto grid grid-cols-2 gap-3 w-48 text-center">
                  <div>
                    <div className="text-xl font-semibold">40</div>
                    <div className="text-xs text-gray-500">Access Points</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">9</div>
                    <div className="text-xs text-gray-500">Routers</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">9</div>
                    <div className="text-xs text-gray-500">Switches</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">303</div>
                    <div className="text-xs text-gray-500">Unique WiFi/Wired Client Devices</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">126</div>
                    <div className="text-xs text-gray-500">Unique Users</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold">TOP USAGE</div>
                <div className="text-xs text-gray-400">Top 20</div>
              </div>

              <div className="space-y-3 max-h-48 overflow-auto">
                {topUsage.map((u) => (
                  <div key={u.client} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-indigo-700">{u.client}</div>
                      <div className="text-xs text-gray-500">Top App: {u.topApp}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">{u.usage} GB</div>
                      <div className="text-xs text-gray-400">{u.apps} apps</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle column: Donut + Wi-Fi by OS (below) */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold">TOP APPLICATION GROUPS</div>
                  <div className="text-xs text-gray-500 mt-1">Networking — Usage 30.24%  |  Users 100%</div>
                </div>
                <div className="text-xs text-gray-400">21 Applications</div>
              </div>

              <div className="mt-3 flex gap-4 items-center">
                <div className="w-40 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={donutData}
                        dataKey="value"
                        innerRadius={40}
                        outerRadius={70}
                        paddingAngle={3}
                      >
                        {donutData.map((entry, idx) => (
                          <Cell key={`c-${idx}`} fill={donutColors[idx % donutColors.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex-1">
                  {/* manual legend with small bars showing usage % */}
                  {donutData.map((d, i) => (
                    <div key={d.name} className="flex items-center justify-between text-sm py-1">
                      <div className="flex items-center gap-2">
                        <div style={{ width: 12, height: 12, background: donutColors[i], borderRadius: 3 }} />
                        <div>{d.name}</div>
                      </div>
                      <div className="text-xs text-gray-600">{d.value}%</div>
                    </div>
                  ))}

                  <div className="mt-4 text-xs text-gray-500">
                    Top App: <span className="text-indigo-700">UDP</span>
                    <div className="mt-2">Top User: user@example.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold">WI-FI CLIENTS BY OS</div>
                <div className="text-xs text-gray-400">2.4 Ghz | 5 Ghz | Both</div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-48 h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={wifiByOS} dataKey="value" innerRadius={28} outerRadius={60} paddingAngle={2}>
                        {wifiByOS.map((entry, idx) => (
                          <Cell key={`w-${idx}`} fill={donutColors[idx % donutColors.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex-1 text-sm">
                  {wifiByOS.map((w, idx) => (
                    <div key={w.name} className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2">
                        <div style={{ width: 10, height: 10, background: donutColors[idx % donutColors.length], borderRadius: 99 }} />
                        <div>{w.name}</div>
                      </div>
                      <div className="text-xs text-gray-600">{w.value}%</div>
                    </div>
                  ))}
                  <div className="mt-2 text-xs text-gray-500">Total Clients: <strong>292</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: line chart + Top Applications table */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow h-64">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold">Clients Over Time</div>
                <div className="text-xs text-gray-400">Last 24 hours</div>
              </div>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="clients" stroke="#2563EB" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-3 rounded shadow h-64 overflow-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold">TOP APPLICATIONS</div>
                <div className="text-xs text-gray-400">Top 20</div>
              </div>

              <table className="w-full text-sm">
                <thead className="text-xs text-gray-500 border-b">
                  <tr>
                    <th className="py-2 text-left">Application</th>
                    <th className="py-2 text-left">Data Usage</th>
                    <th className="py-2 text-left">% Used</th>
                    <th className="py-2 text-left"># Clients</th>
                    <th className="py-2 text-left"># Users</th>
                  </tr>
                </thead>
                <tbody>
                  {topApps.map((t) => (
                    <tr key={t.app} className="border-b even:bg-gray-50">
                      <td className="py-2">{t.app}</td>
                      <td className="py-2">{t.data}</td>
                      <td className="py-2">{t.pct}</td>
                      <td className="py-2">{t.clients}</td>
                      <td className="py-2">{t.users}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom: Top Wired (full width split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="text-sm font-semibold mb-3">TOP WIRED</div>
            <div className="space-y-3">
              {topWired.map((w) => (
                <div key={w.port} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-indigo-700">{w.port}</div>
                    <div className="text-xs text-gray-500">{w.host}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">{w.usage}</div>
                    <div className="text-xs text-gray-500">{w.pct}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <div className="text-sm font-semibold mb-3">ADDITIONAL SUMMARY</div>
            <div className="text-xs text-gray-500">Reserved space for smaller tiles or controls (like Create Report button, view selection, etc.)</div>
          </div>
        </div>

        <div className="text-xs text-gray-400">Demo dashboard • Data is sample/dummy</div>
      </div>
    </div>
  );
}

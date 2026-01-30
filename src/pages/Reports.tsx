import { useState, useEffect } from "react";
import { getReports } from "@/services/mockData";
import { DataTable, type Column } from "@/components/tables/DataTable";
import { Pagination } from "@/components/tables/Pagination";
import { TableFilters } from "@/components/tables/TableFilters";
import { Badge } from "@/components/ui/Badge";
import type { Report } from "@/types";
import { formatCurrency, formatDate } from "@/utils/formatters";
import { REPORT_STATUS_COLORS, REPORT_TYPE_COLORS } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

export const Reports = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const { reports: data, total } = getReports(currentPage, 10);
    setReports(data);
    setTotalItems(total);
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / 10);

  const formatDateRange = (from: Date, to: Date) => {
    return `${formatDate(from)} - ${formatDate(to)}`;
  };

  const reportColumns: Column<Report>[] = [
    {
      key: "reportId",
      header: "REPORT ID",
      render: (id: string) => (
        <span className="font-mono text-sm font-medium text-slate-900 dark:text-white">
          {id}
        </span>
      ),
    },
    {
      key: "title",
      header: "TITLE",
      render: (title: string, report: Report) => (
        <div>
          <div className="text-sm font-medium text-slate-900 dark:text-white">
            {title}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            By {report.generatedBy}
          </div>
        </div>
      ),
    },
    {
      key: "type",
      header: "TYPE",
      render: (type: string) => (
        <Badge
          className={`${REPORT_TYPE_COLORS[type as keyof typeof REPORT_TYPE_COLORS]?.bg} ${REPORT_TYPE_COLORS[type as keyof typeof REPORT_TYPE_COLORS]?.text} uppercase`}
        >
          {type}
        </Badge>
      ),
    },
    {
      key: "dateRange",
      header: "DATE RANGE",
      render: (dateRange: { from: Date; to: Date }) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {formatDateRange(dateRange.from, dateRange.to)}
        </span>
      ),
    },
    {
      key: "metrics",
      header: "KEY METRICS",
      render: (metrics: Report["metrics"]) => (
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {metrics.totalRevenue && (
            <div className="font-semibold text-primary">
              {formatCurrency(metrics.totalRevenue)}
            </div>
          )}
          {metrics.totalUsers && (
            <div className="font-semibold text-blue-600 dark:text-blue-400">
              {metrics.totalUsers.toLocaleString()} users
            </div>
          )}
          {metrics.growth !== undefined && (
            <div className="text-xs text-green-600 dark:text-green-400">
              +{metrics.growth}% growth
            </div>
          )}
          {metrics.engagement !== undefined && (
            <div className="font-semibold text-orange-600 dark:text-orange-400">
              {metrics.engagement}% engagement
            </div>
          )}
        </div>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      render: (status: string) => (
        <Badge
          className={`${REPORT_STATUS_COLORS[status as keyof typeof REPORT_STATUS_COLORS]?.bg} ${REPORT_STATUS_COLORS[status as keyof typeof REPORT_STATUS_COLORS]?.text} uppercase`}
        >
          {status}
        </Badge>
      ),
    },
    {
      key: "generatedAt",
      header: "GENERATED",
      render: (date: Date) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {formatDate(date)}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}
          >
            Reports
          </h1>
          <p
            className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            View and manage your analytics reports
          </p>
        </div>
        <TableFilters />
      </div>

      {/* Reports Table */}
      <DataTable data={reports} columns={reportColumns} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={totalItems}
        itemsPerPage={10}
      />
    </div>
  );
};

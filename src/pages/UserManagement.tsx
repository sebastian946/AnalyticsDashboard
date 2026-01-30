import { useEffect } from "react";
import { useUserStore } from "@/store";
import { getUsers } from "@/services/mockData";
import { DataTable, type Column } from "@/components/tables/DataTable";
import { Pagination } from "@/components/tables/Pagination";
import { TableFilters } from "@/components/tables/TableFilters";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import type { User } from "@/types";
import { formatRelativeTime } from "@/utils/formatters";
import { PLAN_COLORS, STATUS_COLORS } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

export const UserManagement = () => {
  const {
    setUsers,
    currentPage,
    setPage,
    searchTerm,
    setSearchTerm,
    getFilteredUsers,
  } = useUserStore();

  useEffect(() => {
    const { users: allUsers } = getUsers(1, 100);
    setUsers(allUsers);
  }, []);

  const filteredUsers = getFilteredUsers();
  const totalPages = Math.ceil(filteredUsers.length / 10);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * 10,
    currentPage * 10,
  );

  const userColumns: Column<User>[] = [
    {
      key: "name",
      header: "USER",
      render: (_, user) => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-semibold text-sm">
            {user.initials}
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-white">
              {user.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {user.email}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "plan",
      header: "PLAN",
      render: (plan: string) => (
        <Badge
          className={`${PLAN_COLORS[plan as keyof typeof PLAN_COLORS]?.bg} ${PLAN_COLORS[plan as keyof typeof PLAN_COLORS]?.text} uppercase`}
        >
          {plan}
        </Badge>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      render: (status: string) => (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${STATUS_COLORS[status as keyof typeof STATUS_COLORS]?.dot}`}
          ></div>
          <span
            className={`text-sm capitalize ${STATUS_COLORS[status as keyof typeof STATUS_COLORS]?.text}`}
          >
            {status}
          </span>
        </div>
      ),
    },
    {
      key: "lastActive",
      header: "LAST ACTIVE",
      render: (date: Date) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {formatRelativeTime(date)}
        </span>
      ),
    },
    {
      key: "id",
      header: "ACTIONS",
      render: () => (
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="4" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      ),
    },
  ];
  const { isDark } = useTheme();
  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex items-center justify-between">
        <h1
          className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}
        >
          User Management
        </h1>
        <TableFilters />
      </div>

      {/* Search Bar */}
      <Input
        type="search"
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md"
      />

      {/* Users Table */}
      <DataTable data={paginatedUsers} columns={userColumns} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
        totalItems={filteredUsers.length}
        itemsPerPage={10}
      />
    </div>
  );
};

export type ReportType = 'revenue' | 'users' | 'performance' | 'engagement';

export type ReportStatus = 'generated' | 'processing' | 'scheduled';

export interface Report {
  id: string;
  reportId: string;
  title: string;
  type: ReportType;
  status: ReportStatus;
  generatedBy: string;
  dateRange: {
    from: Date;
    to: Date;
  };
  metrics: {
    totalRevenue?: number;
    totalUsers?: number;
    growth?: number;
    engagement?: number;
  };
  generatedAt: Date;
}

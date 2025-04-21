interface SubscriptionPackage {
    id: string;
    name: string;
    description: string;
    price: number;
    base_cost_per_case: string;
    base_cost_per_lawyer: string;
    duration_unit: 'Day' | 'Week' | 'Month' | 'Year' | string; // adjust as needed
    duration_value: number;
    no_of_case_per_lawyer: number;
    no_of_lawyers: number;
  }
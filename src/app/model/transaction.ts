export interface Transaction {
    id: number;
    date: Date;
    description: string;
    type: string;
    status:string;
    amount: number;
    postBalance: number;
  }